#!/bin/sh

# Find all node_modules directories and print their size
find . -name 'node_modules' -type d -prune -print | xargs du -chs

# Remove all node_modules directories
find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;

# Remove all dist directories
find . -name 'dist' -type d -prune -print -exec rm -rf '{}' \;

# Remove all out directories
find . -name 'out' -type d -prune -print -exec rm -rf '{}' \;

# Remove all .next directories
find . -name '.next' -type d -prune -print -exec rm -rf '{}' \;
