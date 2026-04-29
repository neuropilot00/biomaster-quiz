# BioMaster Audit

## 2026-04-29 Initial Build

Purpose: 개인 학습용 생물분류 검정시험 퀴즈 앱.

## Source Intake

User-provided photos were used to transcribe visible question text into app data. The original page photos are not committed to the repository. The app stores structured text and option labels only.

## Data Status

- Visible questions entered: 問 1-45, 問 47-86
- Missing from provided photos: 問 46
- Duplicate/reference page: 問 53-58 was also provided separately and merged into the ordered question bank
- Question order: preserved by numeric `問` order
- Answer status:
  - Confirmed/entered answers: 問 53, 問 55, 問 56, 問 58
  - Needs answer verification: all other entered questions

## Image Strategy

- App does not store book scan images.
- Each option card attempts to load a real image from Japanese Wikipedia page summaries by option name.
- If a specific option image is not found, the app falls back to a category-level real image.
- This keeps future updates easy: add text and options first, then add explicit image URLs only when an automatic image is poor.

## Update Workflow

1. Add new questions to `photoQuestions` in `app.js` using `makePhotoQuestion(...)`.
2. Enter `answer` as zero-based index when confirmed: A=0, B=1, C=2, D=3.
3. Leave `answer` as `null` when the answer key is not confirmed.
4. Add explicit `img` URLs to options only when automatic Wikipedia images are not good enough.
5. Commit with a short message, for example `Add questions 87-92`.

## Known Limitations

- Some options are abstract choices such as `A-B`, `図1`, or classification ranks. These use fallback real images until a custom question image strategy is added.
- Korean translations are blank for newly transcribed book questions. The app already supports Korean display, so translations can be added later without UI changes.
- The current app is static and online image loading depends on Wikipedia/Wikimedia availability.
- GitHub Pages deployment is intended to use `Deploy from a branch` with `main` and `/root`.
