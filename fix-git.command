#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "seo: add Bing Webmaster Tools verification meta tag"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
