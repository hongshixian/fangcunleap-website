#!/usr/bin/env python3

import csv
import os
import re
import subprocess
import sys
from urllib.parse import urlparse

CSV_FILE = "/home/lihao/git/fangcunleap-v0/public/research/papers_with_primary_visual_urls.csv"
OUTPUT_DIR = "/home/lihao/git/fangcunleap-v0/public/research/images"

# Counters
total_urls = 0
image_urls = 0
downloaded = 0
skipped_pdf = 0
failed = 0
failed_list = []

# Image extensions to look for
IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp']

def is_image_url(url):
    """Check if URL points to an image file"""
    url_lower = url.lower()
    # Check if URL ends with image extension (before query params)
    parsed = urlparse(url)
    path = parsed.path.lower()
    return any(path.endswith(ext) for ext in IMAGE_EXTENSIONS)

def is_pdf_url(url):
    """Check if URL points to a PDF file"""
    return '.pdf' in url.lower()

def get_extension_from_url(url):
    """Extract file extension from URL"""
    parsed = urlparse(url)
    path = parsed.path.lower()
    for ext in IMAGE_EXTENSIONS:
        if ext in path:
            return ext.lstrip('.')
    return 'png'  # default

def make_safe_filename(title, year, url):
    """Create a safe filename from paper title and year"""
    # Remove special characters and replace with underscores
    safe_title = re.sub(r'[^a-zA-Z0-9\s]', '_', title)
    # Replace multiple spaces/underscores with single underscore
    safe_title = re.sub(r'[\s_]+', '_', safe_title)
    # Remove leading/trailing underscores
    safe_title = safe_title.strip('_')
    # Truncate to 50 characters
    safe_title = safe_title[:50]

    # Get extension
    ext = get_extension_from_url(url)

    return f"{year}_{safe_title}.{ext}"

def download_file(url, output_path):
    """Download file using curl"""
    try:
        result = subprocess.run(
            ['curl', '-L', '-f', '-s', '-o', output_path, url],
            capture_output=True,
            timeout=30
        )

        if result.returncode == 0 and os.path.exists(output_path) and os.path.getsize(output_path) > 0:
            return True, "Success"
        else:
            if os.path.exists(output_path):
                os.remove(output_path)
            return False, "Download failed or empty file"
    except subprocess.TimeoutExpired:
        if os.path.exists(output_path):
            os.remove(output_path)
        return False, "Timeout"
    except Exception as e:
        if os.path.exists(output_path):
            os.remove(output_path)
        return False, str(e)

# Create output directory
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Read CSV and process
print("Reading CSV file...")
with open(CSV_FILE, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)

    for row in reader:
        year = row.get('publication_year', '')
        title = row.get('paper_title', '')
        url = row.get('主视觉图URL（图1优先）', '').strip()

        if not url:
            continue

        total_urls += 1

        # Skip PDF URLs
        if is_pdf_url(url):
            print(f"SKIP (PDF): {url[:80]}...")
            skipped_pdf += 1
            continue

        # Check if it's an image URL
        if is_image_url(url):
            image_urls += 1

            filename = make_safe_filename(title, year, url)
            output_path = os.path.join(OUTPUT_DIR, filename)

            print(f"\nDownloading: {filename}")
            print(f"  URL: {url}")

            success, message = download_file(url, output_path)

            if success:
                downloaded += 1
                file_size = os.path.getsize(output_path)
                print(f"  ✓ Success ({file_size:,} bytes)")
            else:
                failed += 1
                failed_list.append((url, message))
                print(f"  ✗ Failed: {message}")
        else:
            print(f"SKIP (not image): {url[:80]}...")

# Print summary
print("\n" + "="*50)
print("DOWNLOAD SUMMARY")
print("="*50)
print(f"Total URLs found: {total_urls}")
print(f"Image URLs identified: {image_urls}")
print(f"Successfully downloaded: {downloaded}")
print(f"Skipped (PDFs): {skipped_pdf}")
print(f"Failed downloads: {failed}")
print()

if failed > 0:
    print("Failed URLs:")
    for i, (url, reason) in enumerate(failed_list, 1):
        print(f"  {i}. {url[:60]}... - {reason}")
