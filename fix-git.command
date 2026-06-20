#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "fix: repair ARC checkbox double-toggle bug"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
