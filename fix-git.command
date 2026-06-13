#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "content: add outdoor media NZ article to Thinking section"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
