#!/bin/bash
fontcustom compile \
  src/assets/image/font-svg \
  -n "icons" \
  -h \
  -o src/styles/icons
mv src/styles/icons/icons.css src/styles/icons/index.less
# node utils/fix-icon.ts