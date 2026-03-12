#!/usr/bin/env bash

# Simple deployment script for GitHub Pages
set -e

# Ensure we are in project root
ROOT=$(dirname "$0")
cd "$ROOT"

# commit any changes
if [[ -n "$(git status --porcelain)" ]]; then
  git add .
  git commit -m "chore: prepare deploy" || true
fi

npm install
npm run build

# create or recreate gh-pages branch
git branch -D gh-pages 2>/dev/null || true

git checkout --orphan gh-pages

git --work-tree dist add --all

git --work-tree dist commit -m "chore: deploy to gh-pages"

git push origin gh-pages --force

# return to previous branch
PREV_BRANCH=$(git rev-parse --abbrev-ref @{u} 2>/dev/null || git rev-parse --abbrev-ref HEAD)
git checkout "$PREV_BRANCH"

echo "Deployment complete. Site should be available shortly on GitHub Pages."