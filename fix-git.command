#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "seo: fix www canonical URL, strengthen entity schema for Google and AI search"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
