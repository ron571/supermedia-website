#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "fix: make ARC PDF body text white on navy backgrounds"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
