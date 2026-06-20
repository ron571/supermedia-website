#!/bin/bash
cd ~/supermedia-website
git add -A
git commit -m "copy: remove all commission mentions from site copy and schema"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
