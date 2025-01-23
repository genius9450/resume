#!/usr/bin/env sh
# 偵錯模式：當發生錯誤時終止腳本執行
set -e

# 打包專案
echo "Building project..."
npm run build

# 移動到打包後的 dist 目錄
cd dist

# 初始化 Git 並提交變更
echo "Initializing Git in dist directory..."
git init
git add -A
git commit -m 'deploy'

# 部署到 GitHub Pages
REPO_URL="https://github.com/genius9450/resume.git"
BRANCH="gh-pages"

echo "Deploying to GitHub Pages..."
git push -f "$REPO_URL" master:"$BRANCH"

# 返回原始目錄
cd -

echo "Deployment successful!"
