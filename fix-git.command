#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "fix: update ARC age brackets to Under 18 / 18-29 / 30-54 / 55+"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
