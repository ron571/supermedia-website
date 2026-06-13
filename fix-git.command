#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "copy: update hero paragraph to results-focused opening"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
