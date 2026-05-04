# BioMaster 生き物クイズ

아들이 태블릿에서 풀 수 있도록 만든 생물분류 실사 사진 퀴즈입니다.

## 실행 방법

`index.html`을 브라우저로 열면 바로 실행됩니다.

## 문제 출제 방식

홈에서 `전체`, `2023`, `2024`, `2025` 탭으로 연도별 문제를 고를 수 있습니다. `전체`는 등록된 모든 연도 문제를 한꺼번에 섞어서 냅니다.

퀴즈를 시작할 때마다 선택한 연도, 급수, 카테고리 안에서 문제 순서를 랜덤으로 섞습니다.

이전에 틀린 문제는 앞쪽에 조금 더 나오기 쉽고, 3회 연속 정답 처리된 문제는 뒤쪽에 밀리기 쉽습니다.

## GitHub Pages 배포

이 저장소를 GitHub에 올린 뒤 `Settings > Pages`에서 `Deploy from a branch`를 고르고 `main` 브랜치의 `/root`를 선택하면 됩니다.

GitHub Actions 없이 정적 파일을 그대로 배포하는 구조입니다.

## 새 문제 추가

문제는 [app.js](./app.js)의 연도별 문제 배열에 추가합니다. 현재 `photoQuestions2023`, `photoQuestions2024`, `photoQuestions2025`로 연도별 문제은행이 분리되어 있습니다.

필수 항목:

- `category`: `fish`, `insect`, `plant`, `bird`, `mammal`, `amphibian`, `reptile`, `all`
- `num`: 예: `53`, `46-1`, `87-5`
- `ja`: 일본어 문제
- `options`: 선택지 2-4개
- `answerDataByYear`: 정답 선택지 번호와 해설. A=0, B=1, C=2, D=3

사진으로 문제를 주면 해당 연도 배열에 추가하면 됩니다. 보기 사진은 앱이 일본어 선택지 이름으로 자동 검색하고, 원문 그림이나 사진이 꼭 필요한 문제는 `assets/stems/`에 클립 이미지를 저장해 `stemVisuals2024` 같은 연도별 맵에 연결합니다.
