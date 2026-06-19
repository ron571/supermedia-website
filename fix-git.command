#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "seo: fix robots www, title deduplication, schema fixes, admin nofollow"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
