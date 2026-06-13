#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "feat: add Facebook link to footer, update schema sameAs"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
