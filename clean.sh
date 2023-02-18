#!/bin/sh

# Find all node_modules directories and print their size
find . -name 'node_modules' -type d -prune -print | xargs du -chs

# Remove all node_modules directories
find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
