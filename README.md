# BioMaster 生き物クイズ

아들이 태블릿에서 풀 수 있도록 만든 생물분류 실사 사진 퀴즈입니다.

## 실행 방법

`index.html`을 브라우저로 열면 바로 실행됩니다.

## GitHub Pages 배포

이 저장소를 GitHub에 올린 뒤 `Settings > Pages`에서 `Deploy from a branch`를 고르고 `main` 브랜치의 `/root`를 선택하면 됩니다.

GitHub Actions 없이 정적 파일을 그대로 배포하는 구조입니다.

## 새 문제 추가

문제는 [app.js](./app.js)의 `photoQuestions` 배열에 추가합니다.

필수 항목:

- `id`: 고유 ID
- `grade`: 4 또는 3
- `category`: `fish`, `insect`, `plant`, `bird`, `mammal`, `amphibian`, `reptile`, `all`
- `num`: 예: `問 53`
- `ja`: 일본어 문제
- `kr`: 한국어 보조문
- `answer`: 정답 선택지 번호, A=0, B=1, C=2, D=3. 정답 미확인 상태면 비워두거나 `null`로 둡니다.
- `addedAt`: 추가 날짜, 예: `2026-04-29`. 최근 14일 안에 추가된 문제가 있으면 카테고리에 `NEW`가 표시됩니다.
- `options`: 선택지 4개, 각각 `ja`, `kr`, `img` 필요
- `hint`: 힌트
- `explanation`: 해설

사진으로 문제를 주면 이 배열에 계속 추가하면 됩니다. 선택지 사진은 앱이 일본어 선택지 이름으로 자동 검색하고, 필요할 때만 명시 이미지 URL을 넣습니다.
