#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "content: restore outdoor media and IAB data articles to Thinking section"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
