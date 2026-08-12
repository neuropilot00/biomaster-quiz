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

## 2026-05-04 Random Question Order

- Changed quiz sessions from numeric question order to randomized order at quiz start.
- Previous wrong answers receive a small priority boost so review questions appear earlier more often.
- Questions with a 3-answer streak are slightly deprioritized, while all eligible category/grade questions remain in the session.

## 2026-05-04 Content Sanity Pass

- Removed unused `starterQuestions` data that duplicated question numbers with separate prototype content.
- Corrected 問70 option text from `スヒシバ` to `メヒシバ`.
- Rechecked the active 85-question bank for invalid answer indexes; no broken indexes were found.

## 2026-05-04 Year Split and 2024 Intake

- Corrected the year model: the existing bank remains the 2023 set, and the newly supplied book photos are entered as the 2024 4級 set.
- Added year tabs for `전체`, `2023`, `2024`, and `2025`; `전체` combines all registered years in one random session.
- Added 2024 questions 問1-86, 問46-1-46-10, and 問87-1-87-5 with the answer key from the supplied photo.
- Clipped and attached the 2024 source images for 問6, 問7, 問13, 問14, 問22, 問30, 問31, 問32, 問36, 問38, and 問46-1-46-10.
- Rechecked 185 active questions for invalid answer indexes and duplicate IDs; no broken answer indexes or duplicate IDs were found.
- 2024 問68 was corrected to `落葉低木`: `ミツマタ` is the only deciduous shrub in the four choices; the explanation now distinguishes the evergreen shrubs and deciduous tall tree.

## 2026-05-04 2025 Intake

- Added the 2025 4級 set as a separate `photoQuestions2025` bank.
- Added 2025 questions 問1-86, 問46-1-46-10, and 問87-1-87-5 with the supplied 2025 answer key.
- Clipped and attached the 2025 source images for 問6, 問7, 問10, 問13, 問14, 問22, 問30, 問31, 問32, 問36, 問40, 問44, 問45, and 問46-1-46-10.
- Rechecked 285 active questions for invalid answer indexes, duplicate IDs, and missing local image files; no broken answer indexes, duplicate IDs, or missing local image references were found.
- The 2025 問87 leaf-plate reference is resolved by the shared prompt photo attached above.

## 2026-05-04 Question 87 Leaf Plate Update

- Kept the 2023 bank ending at 問86, matching the available 2023 source set.
- Added the shared 問87 leaf observation plates from the supplied source photo for 2024 and 2025.
- Attached each yearly plate as the prompt photo for 問87-1 through 問87-5, so all statement questions show the referenced leaf photos before the text-only answer choices.
- Rechecked 285 active questions for invalid answer indexes, duplicate IDs, and missing local image files; no broken answer indexes, duplicate IDs, or missing local image references were found.
- The earlier 2024/2025 問87 missing-photo notes are now resolved for the provided plates.

## 2026-05-04 2023 Missing Set Intake

- Added the missing 2023 問46-1 through 問46-10 photo-identification set from the newly supplied pages.
- Added the missing 2023 問87-1 through 問87-5 observation set and replaced the earlier placeholder 2023 問87 answer/explanation data with the source-page wording.
- Clipped and attached the 2023 source images for 問46-1 through 問46-10 and the 2023 問87 leaf observation plate.
- Rechecked 300 active questions for invalid answer indexes, duplicate IDs, and missing local image files; no broken answer indexes, duplicate IDs, or missing local image references were found.

## Image Strategy
- App does not store full book scan images.
- Most organism option cards attempt to load a real image from Japanese Wikipedia page summaries by option name.
- If a question is text-only, its choices intentionally show no images.
- If the original prompt depends on a silhouette or diagram, a clipped source image can be stored under `assets/stems/` and attached as `stemVisual`.
- If a specific organism image is not found, the option card keeps its text and shows an explicit exact-photo-unavailable state; it never substitutes a category-level photo.
- This keeps future updates easy: add text and options first, mark text-only or stem-visual exceptions, then add explicit image URLs only when an automatic image is poor.

## 2026-08-11 Full Content and Reading Recheck

- Rechecked all 300 questions across 2023, 2024, and 2025: 300 unique IDs, 100 questions per year, non-empty prompts/options/hints/explanations, and valid answer indexes for every question.
- Fixed the year-leak in generated explanations. 2025 問11, 53, 55, 56, and 58 now explain their own answers instead of receiving stale 2023 answer text; all remaining generated explanations now include the matching question condition rather than a placeholder.
- Corrected 2024 問68 from `常緑低木` to `落葉低木` and updated its answer explanation. Corrected the 2025 category labels for 問9 and 問52 from 両生類 to 爬虫類.
- Reordered and specialized hints for taxonomy, habitats, reproduction, plant seasonality, specimen work, parasitic plants, deep-sea fish, and sex-specific feeding. Every hint still begins with the exact question focus.
- Added contextual ruby readings for biology compounds and all newly introduced hint words. The renderer now produces a reading for every kanji in all question, option, hint, and explanation fields; no `?` fallback remains.
- Marked every prompt/stem diagram question as text-only for answer cards. Removed the empty 2023 問14 prompt-photo entry so its salmon diagram is the only prompt visual. Rechecked all 300 prompt-image paths and all option-image modes: no missing local assets and no empty image lookup is attempted for diagram/text choices.
- Bumped the static asset query strings to `20260811-1` so GitHub Pages clients fetch this audit instead of a cached pre-audit bundle.

## 2026-08-12 Image-to-Question Matching Recheck

- Rechecked all 300 questions, 1,176 answer choices, 28 stem diagrams, and 50 prompt-photo entries. Every local stem/prompt asset still resolves, and every non-text-only choice has a non-empty normalized image query.
- Corrected 2024 問61 choice `アオフラシ` to the valid organism name `アメフラシ`. The question now requests the matching organism photo instead of silently falling back from an invalid lookup.
- Changed 2024 問84 (ウルシの利用法) and 2025 問68 (the ambiguous `ウンナン` choice) to text-only choices. These choices describe a use/classification or an incomplete name, so attaching organism photos would mislead the learner.
- Removed the category-photo fallback for option and prompt images. When an exact Wikimedia/Commons match cannot be loaded, the card now shows a clear “exact photo unavailable” state instead of displaying an unrelated plant, bird, fish, or insect.
- The static render audit found no phrase-like choice labels in image mode after these fixes; text-only choices render without `<img>` elements. Asset query strings are now `20260812-1`.

## Update Workflow

1. Add new questions to the relevant yearly array such as `photoQuestions2025` in `app.js` using `makePhotoQuestion(...)`.
2. Enter `answer` as zero-based index when confirmed: A=0, B=1, C=2, D=3.
3. Leave `answer` as `null` when the answer key is not confirmed.
4. Add explicit `img` URLs to options only when automatic Wikipedia images are not good enough.
5. Set `addedAt` for newly entered questions so the home category shows `NEW`.
6. Commit with a short message, for example `Add questions 87-92`.

## Known Limitations

- Korean translations are blank for newly transcribed book questions. The app already supports Korean display, so translations can be added later without UI changes.
- The current app is static and online image loading depends on Wikipedia/Wikimedia availability.

## 2026-08-05 Display, Hint, and Image Repair

- Removed visible `?` furigana fallbacks by completing the readings used by the recovered question text and kanji mode; unknown future characters remain readable instead of showing a question mark.
- Rebuilt study hints around the actual question wording and prepended the question focus so all 300 questions show a relevant hint rather than an unrelated category-only sentence.
- Added a throttled Wikimedia image queue, retry handling for rate limits, Japanese-name aliases, and persistent successful-image caching. Failed lookups no longer get cached as if they were a correct match.
- Changed quiz layout to allow vertical scrolling so long Japanese prompts, source diagrams, options, hints, and explanations remain reachable on phones and tablets.
- Rechecked all 300 questions: unique IDs, non-empty prompts/options, valid answer indexes, renderable question/option markup, and local prompt-image paths.
- GitHub Pages deployment is intended to use `Deploy from a branch` with `main` and `/root`.
