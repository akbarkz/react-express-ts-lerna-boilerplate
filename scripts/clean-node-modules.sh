#!/bin/bash

# packages 디렉토리로 이동
cd packages

# 현재 위치에서 각 패키지 디렉토리를 찾아서 node_modules 삭제
for dir in */; do
  if [ -d "$dir" ]; then
    echo -e "\033[33m" $dir node_modules 삭제 "\033[m"
    cd $dir
    rm -rf node_modules
    cd ..
  fi
done

# 루트 디렉토리로 이동
cd ..

# 루트 디렉토리에서 node_modules 삭제
echo -e "\033[33m" root node_modules 삭제 "\033[m"
rm -rf node_modules

echo -e "\033[32m" node_modules 정리 완료 🗑️  "\033[m"