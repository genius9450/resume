//deploy.sh
#!/usr/bin/env sh
# ��o�Ϳ��~�ɲפ�}���B��
set -e
# ���]
npm run build
# ���ʦܨ쥴�]�᪺dist�ؿ� 
cd dist
git init //�]��dist��Ƨ��w�]�O�Qignore���A�]���b�i�Jdist��Ƨ����l��git
git add -A
git commit -m 'deploy'

# ���p�� git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages ���䬰 gh-pages
git push -f https://github.com/genius9450/resume.git master:gh-pages

//�Ndist��Ƨ��������e���e�ܻ���eric-project��gh-pages���䤤�A�ñj��L����N�¦������e���N���ثe�����e�]���O git push -f)
cd -