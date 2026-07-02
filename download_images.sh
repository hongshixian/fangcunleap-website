#!/bin/bash

CSV_FILE="/home/lihao/git/fangcunleap-v0/public/research/papers_with_primary_visual_urls.csv"
OUTPUT_DIR="/home/lihao/git/fangcunleap-v0/public/research/images"

# Counters
total_urls=0
image_urls=0
downloaded=0
skipped_pdf=0
failed=0

# Arrays to track failures
declare -a failed_urls
declare -a failed_reasons

# Skip header and process each line
tail -n +2 "$CSV_FILE" | while IFS=',' read -r year title rest; do
    # Extract the URL from the last column
    # The URL is the last field after the last comma
    url=$(echo "$rest" | rev | cut -d',' -f1 | rev)

    # Skip empty URLs
    if [ -z "$url" ]; then
        continue
    fi

    ((total_urls++))

    # Check if URL contains .pdf (skip PDF files)
    if [[ "$url" == *".pdf"* ]]; then
        echo "SKIP (PDF): $url"
        ((skipped_pdf++))
        continue
    fi

    # Check if it's an image URL (ends with image extension)
    if [[ "$url" =~ \.(png|jpg|jpeg|gif|svg|webp|bmp)$ ]] || [[ "$url" =~ \.(png|jpg|jpeg|gif|svg|webp|bmp)\? ]]; then
        ((image_urls++))

        # Extract extension from URL
        ext=$(echo "$url" | grep -oP '\.(png|jpg|jpeg|gif|svg|webp|bmp)' | head -1 | tr -d '.')
        if [ -z "$ext" ]; then
            ext="png"  # default
        fi

        # Create safe filename from title
        # Remove special characters, replace spaces with underscores, truncate to 50 chars
        safe_title=$(echo "$title" | sed 's/[^a-zA-Z0-9 ]/_/g' | sed 's/ /_/g' | cut -c1-50)

        # Create filename
        filename="${year}_${safe_title}.${ext}"
        output_path="${OUTPUT_DIR}/${filename}"

        echo "Downloading: $filename"
        echo "  URL: $url"

        # Download with curl
        if curl -L -f -s -o "$output_path" "$url" 2>/dev/null; then
            # Check if file was actually created and has content
            if [ -s "$output_path" ]; then
                ((downloaded++))
                echo "  ✓ Success"
            else
                rm -f "$output_path"
                ((failed++))
                failed_urls+=("$url")
                failed_reasons+=("Empty file")
                echo "  ✗ Failed (empty file)"
            fi
        else
            ((failed++))
            failed_urls+=("$url")
            failed_reasons+=("Download error")
            echo "  ✗ Failed (download error)"
        fi
    else
        echo "SKIP (not image): $url"
    fi

done

# Print summary
echo ""
echo "========================================="
echo "DOWNLOAD SUMMARY"
echo "========================================="
echo "Total URLs found: $total_urls"
echo "Image URLs identified: $image_urls"
echo "Successfully downloaded: $downloaded"
echo "Skipped (PDFs): $skipped_pdf"
echo "Failed downloads: $failed"
echo ""

if [ $failed -gt 0 ]; then
    echo "Failed URLs:"
    for i in "${!failed_urls[@]}"; do
        echo "  $((i+1)). ${failed_urls[$i]} - ${failed_reasons[$i]}"
    done
fi
