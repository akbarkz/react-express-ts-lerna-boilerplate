#!/bin/bash

# 패키지 목록 파일에서 모든 패키지명을 추출
PACKAGE_NAMES=$(jq -r '.packages[].location' lerna.json)

# 각 패키지마다 종속성 업데이트
for PACKAGE_NAME in $PACKAGE_NAMES; do
  echo "Updating dependencies for ${PACKAGE_NAME}"
  cd "$PACKAGE_NAME"
  yarn update
  cd ../..
done