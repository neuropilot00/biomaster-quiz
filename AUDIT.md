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
  - Inferred and entered from biology knowledge / visible question context: most visible questions
  - Still needs visual/key verification: diagram-only or ambiguous image questions such as 問 36, plus missing 問 46
  - Explanations are study-oriented and should be refined whenever an official answer key page is provided

## 2026-04-29 Official Answer Key Update

- Official 2023 4級 answer-key photo received and checked against app data.
- Corrected 問33 from option 1 to option 2.
- Added confirmed answer for 問36 as option 4.
- Official answers for 問46-1 through 問46-10 and 問87-1 through 問87-5 are available, but those question texts are not yet entered in the app.

## 2026-04-29 Prompt Diagram Update

- Added app-drawn SVG diagrams for questions where the book image is part of the prompt or answer choices.
- Current diagram-backed questions: 問6, 問7, 問10, 問13, 問14, 問22, 問31, 問32, 問33, 問36.
- For prompt-image questions, option cards use text-only answers so the drawing belongs to the question, not to the answer feedback.

## 2026-04-29 Furigana Review

- Rechecked all entered question text, choices, hints, explanations, and main UI strings through the ruby renderer.
- Added missing compound readings such as 生き物, 選択肢, 採点準備中, 生育, 分類上, 水中, 地上, 棘皮動物, and related biology terms.
- Verified that the renderer now produces no unknown `?` readings for the current app text.

## 2026-04-29 Prompt Diagram Layout Fix

- For questions where the prompt drawing is the main evidence, the drawing now uses the main screen space.
- Text-only answer choices for those questions are compact buttons below the drawing.
- Improved the 問13 fish diagram so it better shows the body shape, fins, tail, and side stripes needed for identification.

## 2026-04-29 Prompt Photo Replacement

- Replaced app-drawn prompt diagrams with large real photos of the target answer for all current prompt-image questions.
- Current prompt-photo questions: 問6, 問7, 問10, 問13, 問14, 問22, 問31, 問32, 問33, 問36.
- Answer choices remain compact below the main photo.

## 2026-04-29 Frog Diagram Exception

- 問10 is a diagram-comparison question, so it cannot be replaced by a real photo.
- Restored four answer-choice diagrams for the frog calling posture and redrew them to clearly show throat sac, side sacs, no sac, and paired sacs.

## 2026-04-29 Category Correction

- Corrected 問3 from 爬虫類 to 哺乳類. センザンコウ is a mammal with hard scales, not a reptile.

## 2026-04-29 Full Category Audit

- Rechecked all entered questions against broad app categories.
- Corrected 問23 from 昆虫類 to 全カテゴリ because クモ is not an insect and the app has no arachnid category.
- Corrected 問76 from 全カテゴリ to 爬虫類, 問82 from 全カテゴリ to 植物, and 問85 from 全カテゴリ to 昆虫類.

## 2026-04-29 Home Single-Screen Layout

- Compressed the home screen so the header, intro, hero image, and category grid fit into one viewport more reliably.
- Widened the intro text column and reduced the hero image width/height so the headline wraps less.
- Reduced category-card height and mobile hero copy to keep the 2-column category grid visible sooner.

## 2026-04-29 Tablet Home Compact Mode

- Added a landscape low-height home layout for tablet browsers.
- The home shell now fits header, hero, and all category cards into `100dvh` when viewport height is limited.
- In this compact mode, supporting copy, progress bars, and secondary card text are hidden to preserve the one-screen layout.

## 2026-04-29 Tablet Quiz Compact Mode

- Added a matching landscape low-height quiz layout for tablet browsers.
- Reduced quiz controls, question text, option buttons, hint, and explanation heights so answered screens fit in one viewport.
- Pinned explicit prompt photos for visually sensitive questions such as 問13, 問22, and 問36 to avoid cropped automatic thumbnails.

## 2026-04-29 Tablet Touch Target Rebalance

- Restored larger category cards in tablet compact home mode while reducing the hero/photo area instead.
- Increased tablet quiz hint/explanation height for readability.
- Restored larger Next/Stop buttons in tablet landscape quiz mode so they are easier for children to tap.

## 2026-04-29 Spider Statement Question Fix

- Changed 問23 from image-per-choice mode to text-only mode.
- The four choices remain readable text statements without unrelated image loading.
- This prevents the app from trying to load photos for long statement choices such as `頭胸部と腹部...`.

## 2026-04-29 Irregular Question Handling Update

- Changed statement/classification/formula/person questions to text-only choices so the app does not show unrelated fallback photos.
- Added A/B/C/D statement blocks for combination questions such as 問51 and 問59.
- Replaced generated diagrams for 問6, 問7, 問10, and 問36 with clipped source-problem images placed in the main question area.
- Removed unnecessary prompt photos from text-only questions such as 問23.
- Saved per-question progress immediately after each answer so results survive browser refreshes more reliably.

## 2026-04-29 Image Override Fix

- Fixed 問16 option `シミ` so it uses a silverfish photo instead of the generic butterfly fallback image.

## 2026-04-30 Category Count Fix

- Fixed category-specific question counts so `全カテゴリ` shows all questions, while each biology category shows only its own questions.
- Correct visible 4級 distribution is now: 全カテゴリ 85, 魚類 8, 昆虫類 10, 植物 40, 鳥類 8, 哺乳類 6, 両生類 2, 爬虫類 1.

## Image Strategy

- App does not store book scan images.
- Most organism option cards attempt to load a real image from Japanese Wikipedia page summaries by option name.
- If a question is text-only, its choices intentionally show no images.
- If the original prompt depends on a silhouette or diagram, a clipped source image can be stored under `assets/stems/` and attached as `stemVisual`.
- If a specific organism image is not found, the app falls back to a category-level real image.
- This keeps future updates easy: add text and options first, mark text-only or stem-visual exceptions, then add explicit image URLs only when an automatic image is poor.

## Update Workflow

1. Add new questions to `photoQuestions` in `app.js` using `makePhotoQuestion(...)`.
2. Enter `answer` as zero-based index when confirmed: A=0, B=1, C=2, D=3.
3. Leave `answer` as `null` when the answer key is not confirmed.
4. Add explicit `img` URLs to options only when automatic Wikipedia images are not good enough.
5. Set `addedAt` for newly entered questions so the home category shows `NEW`.
6. Commit with a short message, for example `Add questions 87-92`.

## Known Limitations

- 問46 question text is still missing.
- Korean translations are blank for newly transcribed book questions. The app already supports Korean display, so translations can be added later without UI changes.
- The current app is static and online image loading depends on Wikipedia/Wikimedia availability.
- GitHub Pages deployment is intended to use `Deploy from a branch` with `main` and `/root`.
