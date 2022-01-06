#!/usr/bin/env sh
###
 # @Author: BertKing
 # @version: 
 # @Date: 2021-12-20 22:46:51
 # @LastEditors: BertKing
 # @LastEditTime: 2022-01-06 22:30:54
 # @FilePath: /BertKingBlog/my-blog/deploy.sh
 # @Description: 
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd blog/.vuepress/dist

# 如果是发布到自定义域名
echo 'bertking.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# https://bert-king.github.io/BertKingBlog/
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:bert-king/BertKingBlog.git master:gh-pages

cd -