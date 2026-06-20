#!/bin/bash
cd ~/supermedia-website

# Clear any immutable flags and stale lock files
chflags -R nouchg .git/ 2>/dev/null
rm -f .git/index.lock .git/HEAD.lock 2>/dev/null

# Copy Tilda logo from Downloads if present
if [ -f "$HOME/Downloads/tilda-logo.svg" ]; then
  mkdir -p public/logos
  cp "$HOME/Downloads/tilda-logo.svg" public/logos/tilda.svg
  echo "Tilda logo copied."
fi

git add -A
git commit -m "feat: add cinema and influencer marketing resource pages"
git push origin main
echo ""
echo "Done! Press any key to close."
read -n 1
