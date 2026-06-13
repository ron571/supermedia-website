#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "feat: NZ media rates page, IAB article, LinkedIn share, FAQ schema"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
