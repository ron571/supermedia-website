#!/bin/bash
cd ~/supermedia-website

echo "Attempting to restore .git from Trash..."

# Remove immutable flags first (macOS sometimes sets these on trashed items)
chflags -R nouchg "$HOME/.Trash/.git" 2>/dev/null

# Try cp -a (copy, not move — reads from Trash without needing to modify it)
if cp -a "$HOME/.Trash/.git" .git 2>/tmp/git_restore_err; then
  echo "SUCCESS: .git restored via copy!"
  echo "Running git now..."
  git status
else
  echo "cp failed: $(cat /tmp/git_restore_err)"
  echo ""
  echo "Trying rsync..."
  if rsync -a "$HOME/.Trash/.git/" .git/ 2>/tmp/git_restore_err2; then
    echo "SUCCESS: .git restored via rsync!"
    git status
  else
    echo "rsync failed: $(cat /tmp/git_restore_err2)"
    echo ""
    echo "Manual fix needed. Please:"
    echo "1. Open Trash in Finder"
    echo "2. Press Cmd+Shift+. to show hidden files"
    echo "3. Right-click .git and choose Put Back"
  fi
fi

echo ""
echo "Done. Press any key to close."
read -n 1
