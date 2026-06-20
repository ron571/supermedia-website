#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "fix: improve ARC PDF print legibility with print CSS"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
