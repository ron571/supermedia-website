#!/bin/bash
cd ~/supermedia-website

# Clear any immutable flags and stale lock files
chflags -R nouchg .git/ 2>/dev/null
rm -f .git/index.lock .git/HEAD.lock 2>/dev/null

git add -A
git commit -m "feat: update clients logo grid"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
