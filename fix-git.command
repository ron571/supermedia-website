#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "seo: allow Google indexing of Superscan page"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
