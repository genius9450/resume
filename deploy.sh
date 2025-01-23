#!/usr/bin/env sh
# �����Ҧ��G��o�Ϳ��~�ɲפ�}������
set -e

# ���]�M��
echo "Building project..."
npm run build

# ���ʨ쥴�]�᪺ dist �ؿ�
cd dist

# ��l�� Git �ô����ܧ�
echo "Initializing Git in dist directory..."
git init
git add -A
git commit -m 'deploy'

# ���p�� GitHub Pages
REPO_URL="https://github.com/genius9450/resume.git"
BRANCH="gh-pages"

echo "Deploying to GitHub Pages..."
git push -f "$REPO_URL" master:"$BRANCH"

# ��^��l�ؿ�
cd -

echo "Deployment successful!"
