#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "feat: add cinema + influencer channels and PDF download to NZ media rates page"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
