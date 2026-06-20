#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "feat: add clients page with logo grid and nav link"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
