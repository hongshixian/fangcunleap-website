#!/usr/bin/env python3
"""
处理论文数据：
1. 下载 CSV 中的图片资源
2. 生成新的 TypeScript 论文数据
3. 预处理会议徽章名称
"""

import csv
import os
import re
import hashlib
from urllib.request import urlretrieve, Request, urlopen
from urllib.error import URLError, HTTPError
import time

CSV_PATH = "public/research/google_scholar_2024_present_papers_enriched_v2.csv"
IMAGE_DIR = "public/research/images"
OUTPUT_TS = "app/(legacy)/research/papers_data.ts"

# 会议名称标准化映射（去掉年份，因为页面已有独立的年份徽章）
CONFERENCE_MAPPING = {
    # 2024
    "EMNLP 2024 Industry Track": "EMNLP",
    "ECCV 2024": "ECCV",
    "NeurIPS 2024": "NeurIPS",
    "ICML 2024": "ICML",
    "ICLR 2024": "ICLR",
    "CVPR 2024": "CVPR",
    "Findings of EMNLP 2024": "EMNLP Findings",
    "EMNLP 2024": "EMNLP",
    "Findings of ACL 2024": "ACL Findings",
    "ACL 2024": "ACL",
    "ACM MM 2024": "ACM MM",
    "USENIX Security 2024": "USENIX Security",
    "NeurIPS 2024 Datasets and Benchmarks": "NeurIPS",

    # 2025
    "International Journal of Computer Vision (IJCV) 2025": "IJCV",
    "ICCV 2025": "ICCV",
    "ACL 2025": "ACL",
    "NeurIPS 2025": "NeurIPS",
    "Findings of ACL 2025": "ACL Findings",
    "EMNLP 2025": "EMNLP",
    "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI) 2025": "TPAMI",
    "ICML 2025": "ICML",

    # 2026
    "The Web Conference (WWW) 2026": "WWW",
    "ICML 2026": "ICML",
    "ACL 2026": "ACL",
    "ICLR 2026": "ICLR",
    "Findings of EACL 2026": "EACL Findings",

    # Preprints
    "arXiv preprint": "arXiv",
    "preprint": "Preprint",
}


def sanitize_filename(title):
    """将标题转为安全的文件名（保留下划线和连字符）"""
    # 移除或替换不安全字符
    safe = re.sub(r'[<>:"/\\|?*]', '', title)
    safe = re.sub(r'\s+', '_', safe.strip())
    # 限制长度
    if len(safe) > 100:
        safe = safe[:100]
    return safe + ".png"


def download_image(url, dest_path):
    """下载图片，带重试和 User-Agent"""
    if not url or url.strip() == "":
        return False

    os.makedirs(os.path.dirname(dest_path), exist_ok=True)

    # 如果已存在且非空，跳过
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
        print(f"  ✓ Already exists: {os.path.basename(dest_path)}")
        return True

    try:
        req = Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        with urlopen(req, timeout=15) as response:
            data = response.read()
            if len(data) > 0:
                with open(dest_path, 'wb') as f:
                    f.write(data)
                print(f"  ✓ Downloaded: {os.path.basename(dest_path)} ({len(data)} bytes)")
                return True
            else:
                print(f"  ✗ Empty response: {url}")
                return False
    except (URLError, HTTPError, TimeoutError) as e:
        print(f"  ✗ Failed to download {url}: {e}")
        return False


def normalize_conference(raw_conf):
    """标准化会议名称"""
    return CONFERENCE_MAPPING.get(raw_conf, raw_conf)


def main():
    print("=== 开始处理论文数据 ===\n")

    # 1. 读取 CSV
    papers = []
    image_map = {}  # title -> image filename

    with open(CSV_PATH, 'r', encoding='utf-8-sig') as f:  # utf-8-sig 自动跳过 BOM
        reader = csv.DictReader(f)
        for row in reader:
            title = row['title'].strip()
            authors = row['authors'].strip()
            conference = row['conference'].strip()
            year = int(row['year'])
            image_url = row['mainFigureImageURL'].strip()
            paper_url = row['paperURL'].strip()
            ai_safety = row['aiSafetyRelated'].strip().lower() == 'true'

            # 标准化会议名称
            normalized_conf = normalize_conference(conference)

            papers.append({
                'title': title,
                'authors': authors,
                'conference': normalized_conf,
                'year': year,
                'image_url': image_url,
                'paper_url': paper_url,
                'aiSafetyRelated': ai_safety,
            })

            # 下载图片（如果有 URL）
            if image_url:
                filename = sanitize_filename(title)
                dest = os.path.join(IMAGE_DIR, filename)
                print(f"[{len(papers)}/{52}] {title[:60]}...")
                success = download_image(image_url, dest)
                if success:
                    image_map[title] = filename
                time.sleep(0.3)  # 礼貌延迟

    print(f"\n✓ 共处理 {len(papers)} 篇论文，成功下载 {len(image_map)} 张图片\n")

    # 2. 生成 TypeScript 数据文件
    print("=== 生成 TypeScript 数据 ===\n")

    ts_content = """// 自动生成 - 请勿手动编辑
// 生成自: public/research/google_scholar_2024_present_papers_enriched_v2.csv

export type Paper = {
  year: number;
  title: string;
  authors: string;
  conference: string;
  aiSafetyRelated: boolean;
  paperURL?: string;
};

export const PAPERS: Paper[] = [
"""

    for paper in papers:
        # 转义 TypeScript 字符串中的引号和反斜杠
        title_esc = paper['title'].replace('\\', '\\\\').replace('"', '\\"')
        authors_esc = paper['authors'].replace('\\', '\\\\').replace('"', '\\"')
        conf_esc = paper['conference'].replace('\\', '\\\\').replace('"', '\\"')
        url_esc = paper['paper_url'].replace('\\', '\\\\').replace('"', '\\"')

        ts_content += f'  {{ year: {paper["year"]}, title: "{title_esc}", authors: "{authors_esc}", conference: "{conf_esc}", aiSafetyRelated: {str(paper["aiSafetyRelated"]).lower()}, paperURL: "{url_esc}" }},\n'

    ts_content += """];

// 论文标题 -> 图片文件名映射
export const PAPER_IMAGES: Record<string, string> = {
"""

    for title, filename in sorted(image_map.items()):
        title_esc = title.replace('\\', '\\\\').replace('"', '\\"')
        ts_content += f'  "{title_esc}": "{filename}",\n'

    ts_content += "};\n"

    with open(OUTPUT_TS, 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print(f"✓ TypeScript 数据已写入: {OUTPUT_TS}\n")

    # 3. 输出统计
    print("=== 统计信息 ===")
    print(f"总论文数: {len(papers)}")
    print(f"有图论文: {len(image_map)}")
    print(f"无图论文: {len(papers) - len(image_map)}")

    year_count = {}
    for p in papers:
        year_count[p['year']] = year_count.get(p['year'], 0) + 1

    print("\n按年份分布:")
    for year in sorted(year_count.keys(), reverse=True):
        print(f"  {year}: {year_count[year]} 篇")

    print("\n✓ 完成！")


if __name__ == "__main__":
    main()
