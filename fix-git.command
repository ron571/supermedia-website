#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "feat: on-site backlink strategy — related reading, contextual links, NZ media rates in nav, share/cite section"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
