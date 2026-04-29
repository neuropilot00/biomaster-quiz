const categories = {
  all: { ja: "全カテゴリ", kr: "전체", accent: "#2563eb" },
  fish: { ja: "魚類", kr: "어류", accent: "#0f766e" },
  insect: { ja: "昆虫類", kr: "곤충", accent: "#b45309" },
  plant: { ja: "植物", kr: "식물", accent: "#15803d" },
  bird: { ja: "鳥類", kr: "조류", accent: "#7c3aed" },
  mammal: { ja: "哺乳類", kr: "포유류", accent: "#be123c" },
  amphibian: { ja: "両生類", kr: "양서류", accent: "#16a34a" },
  reptile: { ja: "爬虫類", kr: "파충류", accent: "#a16207" },
};

const img = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=720`;
const localImg = (file) => `./assets/stems/${file}`;
const clipVisual = (file, alt) => `<img class="stem-clip" src="${localImg(file)}" alt="${alt}" loading="eager" />`;

const starterQuestions = [
  {
    id: "fish-001",
    grade: 4,
    category: "fish",
    difficulty: "easy",
    num: "問 53",
    ja: "胎生の魚をひとつ選びなさい。",
    kr: "새끼를 직접 낳는 태생 물고기를 고르세요.",
    answer: 1,
    options: [
      { ja: "イワナ", kr: "곤들매기", img: img("Salvelinus_leucomaenis_japonicus-3.jpg") },
      { ja: "グッピー", kr: "구피", img: img("Guppy_pho_0048.jpg") },
      { ja: "タナゴ", kr: "납줄개", img: img("Acheilognathus_melanogaster.jpg") },
      { ja: "ハゼ", kr: "망둑어", img: img("Acanthogobius_flavimanus_Nakagawa.jpg") },
    ],
    hint: "観賞魚として人気で、お腹の中で稚魚が育ってから生まれます。",
    explanation: "グッピーは胎生魚の代表例です。卵ではなく、母体内で稚魚が育ってから生まれます。",
  },
  {
    id: "fish-002",
    grade: 4,
    category: "fish",
    difficulty: "easy",
    num: "問 54",
    ja: "成長すると川から海へ下る魚を選びなさい。",
    kr: "자라면 강에서 바다로 내려가는 물고기를 고르세요.",
    answer: 2,
    options: [
      { ja: "アユ", kr: "은어", img: img("Ayu_oncorhynchus_masou_ishikawa.jpg") },
      { ja: "メダカ", kr: "송사리", img: img("Oryzias_latipes(Hamamatsu,Shizuoka,Japan).jpg") },
      { ja: "ウナギ", kr: "뱀장어", img: img("Anguilla_japonica.jpg") },
      { ja: "コイ", kr: "잉어", img: img("Cyprinus_carpio_2.jpg") },
    ],
    hint: "細長い体で、蒲焼きでも知られる魚です。",
    explanation: "ウナギは川や湖で成長し、産卵のため海へ向かう降河回遊魚です。",
  },
  {
    id: "fish-003",
    grade: 3,
    category: "fish",
    difficulty: "medium",
    num: "問 55",
    ja: "軟骨魚類にふくまれるものを選びなさい。",
    kr: "연골어류에 포함되는 것을 고르세요.",
    answer: 0,
    options: [
      { ja: "アカエイ", kr: "노랑가오리류", img: img("Dasyatis_akajei.jpg") },
      { ja: "マダイ", kr: "참돔", img: img("Pagrus_major_by_OpenCage.jpg") },
      { ja: "キンギョ", kr: "금붕어", img: img("Goldfish3.jpg") },
      { ja: "サケ", kr: "연어", img: img("Oncorhynchus_keta.jpeg") },
    ],
    hint: "サメの仲間と同じく、骨格が軟骨でできています。",
    explanation: "エイの仲間はサメと同じ軟骨魚類です。マダイ、キンギョ、サケは硬骨魚類です。",
  },
  {
    id: "insect-001",
    grade: 4,
    category: "insect",
    difficulty: "easy",
    num: "問 56",
    ja: "完全変態をする昆虫を選びなさい。",
    kr: "완전변태를 하는 곤충을 고르세요.",
    answer: 3,
    options: [
      { ja: "バッタ", kr: "메뚜기", img: img("Oxya_yezoensis.jpg") },
      { ja: "カマキリ", kr: "사마귀", img: img("Tenodera_aridifolia_2011-09-18.jpg") },
      { ja: "トンボ", kr: "잠자리", img: img("Anax_parthenope_20100725.jpg") },
      { ja: "カブトムシ", kr: "장수풍뎅이", img: img("Trypoxylus_dichotomus_male_2015.jpg") },
    ],
    hint: "幼虫、さなぎ、成虫の段階があります。",
    explanation: "カブトムシは卵、幼虫、蛹、成虫の順に育つ完全変態の昆虫です。",
  },
  {
    id: "insect-002",
    grade: 4,
    category: "insect",
    difficulty: "easy",
    num: "問 57",
    ja: "腹部に長い産卵管をもつ昆虫を選びなさい。",
    kr: "배 끝에 긴 산란관이 있는 곤충을 고르세요.",
    answer: 1,
    options: [
      { ja: "アブラゼミ", kr: "유지매미", img: img("Graptopsaltria_nigrofuscata_001.jpg") },
      { ja: "キリギリス", kr: "여치", img: img("Gampsocleis_buergeri_01.JPG") },
      { ja: "ナナホシテントウ", kr: "칠성무당벌레", img: img("Coccinella_septempunctata_detail.jpg") },
      { ja: "アゲハチョウ", kr: "호랑나비", img: img("Papilio_xuthus_formosanus_Male_2014_01.jpg") },
    ],
    hint: "草むらで鳴く直翅目の仲間です。",
    explanation: "キリギリスのメスには、土や植物に卵を産むための長い産卵管があります。",
  },
  {
    id: "insect-003",
    grade: 3,
    category: "insect",
    difficulty: "medium",
    num: "問 58",
    ja: "前あしが鎌のように発達した昆虫を選びなさい。",
    kr: "앞다리가 낫처럼 발달한 곤충을 고르세요.",
    answer: 2,
    options: [
      { ja: "ミンミンゼミ", kr: "민민매미", img: img("Hyalessa_maculaticollis_001.jpg") },
      { ja: "ショウリョウバッタ", kr: "방아깨비", img: img("Acrida_cinerea_2012-08-11.jpg") },
      { ja: "オオカマキリ", kr: "왕사마귀", img: img("Tenodera_aridifolia.jpg") },
      { ja: "ゲンゴロウ", kr: "물방개", img: img("Cybister_japonicus.jpg") },
    ],
    hint: "獲物をつかまえるための前あしです。",
    explanation: "カマキリの前あしは捕獲脚とよばれ、獲物を捕らえるのに適しています。",
  },
  {
    id: "plant-001",
    grade: 4,
    category: "plant",
    difficulty: "easy",
    num: "問 59",
    ja: "裸子植物を選びなさい。",
    kr: "겉씨식물을 고르세요.",
    answer: 0,
    options: [
      { ja: "アカマツ", kr: "소나무류", img: img("Pinus_densiflora_Kumgangsan.jpg") },
      { ja: "サクラ", kr: "벚나무", img: img("Prunus_serrulata_Blossoms.jpg") },
      { ja: "タンポポ", kr: "민들레", img: img("Taraxacum_officinale_001.JPG") },
      { ja: "イネ", kr: "벼", img: img("Oryza_sativa_-_Köhler–s_Medizinal-Pflanzen-232.jpg") },
    ],
    hint: "まつぼっくりをつくる植物です。",
    explanation: "アカマツは種子が子房に包まれない裸子植物です。サクラ、タンポポ、イネは被子植物です。",
  },
  {
    id: "plant-002",
    grade: 4,
    category: "plant",
    difficulty: "easy",
    num: "問 60",
    ja: "胞子でふえる植物を選びなさい。",
    kr: "포자로 번식하는 식물을 고르세요.",
    answer: 3,
    options: [
      { ja: "ヒマワリ", kr: "해바라기", img: img("Sunflower_sky_backdrop.jpg") },
      { ja: "チューリップ", kr: "튤립", img: img("Tulipa_greigii_Red_Riding_Hood_0.8_R.jpg") },
      { ja: "アサガオ", kr: "나팔꽃", img: img("Ipomoea_nil_5.jpg") },
      { ja: "ゼンマイ", kr: "고비류", img: img("Osmunda_japonica_fiddleheads.jpg") },
    ],
    hint: "若い芽が丸く巻いているシダ植物です。",
    explanation: "ゼンマイはシダ植物で、花や種子ではなく胞子でふえます。",
  },
  {
    id: "plant-003",
    grade: 3,
    category: "plant",
    difficulty: "medium",
    num: "問 61",
    ja: "単子葉類の特徴として正しいものを選びなさい。",
    kr: "외떡잎식물의 특징으로 맞는 것을 고르세요.",
    answer: 2,
    options: [
      { ja: "サクラ", kr: "벚나무", img: img("Prunus_jamAsakura2.jpg") },
      { ja: "アブラナ", kr: "유채", img: img("Brassica_napus_001.JPG") },
      { ja: "イネ", kr: "벼", img: img("Rice_Plants_(IRRI).jpg") },
      { ja: "エンドウ", kr: "완두", img: img("Pisum_sativum_blossom.jpg") },
    ],
    hint: "葉脈が平行に走る植物です。",
    explanation: "イネは単子葉類です。平行脈、ひげ根、花弁が3の倍数になりやすい特徴があります。",
  },
  {
    id: "bird-001",
    grade: 4,
    category: "bird",
    difficulty: "easy",
    num: "問 62",
    ja: "水かきのある鳥を選びなさい。",
    kr: "물갈퀴가 있는 새를 고르세요.",
    answer: 1,
    options: [
      { ja: "スズメ", kr: "참새", img: img("Passer_montanus_saturatus.jpg") },
      { ja: "カルガモ", kr: "흰뺨검둥오리", img: img("Eastern_spot-billed_duck_in_Tokyo.jpg") },
      { ja: "キジ", kr: "꿩", img: img("Phasianus_colchicus_male.jpg") },
      { ja: "ツバメ", kr: "제비", img: img("Hirundo_rustica_gutturalis.JPG") },
    ],
    hint: "池や川でよく見られるカモの仲間です。",
    explanation: "カルガモは水上生活に適した水かきのある足をもちます。",
  },
  {
    id: "bird-002",
    grade: 3,
    category: "bird",
    difficulty: "medium",
    num: "問 63",
    ja: "猛禽類を選びなさい。",
    kr: "맹금류를 고르세요.",
    answer: 3,
    options: [
      { ja: "メジロ", kr: "동박새", img: img("Zosterops_japonicus_02.jpg") },
      { ja: "ハクセキレイ", kr: "알락할미새", img: img("Motacilla_alba_lugens_2.jpg") },
      { ja: "カワセミ", kr: "물총새", img: img("Alcedo_atthis_-_Salmoragi.jpg") },
      { ja: "トビ", kr: "솔개", img: img("Black-eared_Kite_800.jpg") },
    ],
    hint: "鋭いくちばしと爪で獲物をとらえます。",
    explanation: "トビはタカ目の猛禽類です。鋭い爪とくちばしをもちます。",
  },
  {
    id: "mammal-001",
    grade: 4,
    category: "mammal",
    difficulty: "easy",
    num: "問 64",
    ja: "卵を産む哺乳類を選びなさい。",
    kr: "알을 낳는 포유류를 고르세요.",
    answer: 0,
    options: [
      { ja: "カモノハシ", kr: "오리너구리", img: img("Ornithorhynchus_anatinus.jpg") },
      { ja: "コアラ", kr: "코알라", img: img("Koala_climbing_tree.jpg") },
      { ja: "ニホンザル", kr: "일본원숭이", img: img("Macaca_fuscata_fuscata1.jpg") },
      { ja: "イルカ", kr: "돌고래", img: img("Tursiops_truncatus_01.jpg") },
    ],
    hint: "くちばしのような口をもつ単孔類です。",
    explanation: "カモノハシは単孔類に属し、哺乳類でありながら卵を産みます。",
  },
  {
    id: "mammal-002",
    grade: 3,
    category: "mammal",
    difficulty: "medium",
    num: "問 65",
    ja: "有袋類を選びなさい。",
    kr: "유대류를 고르세요.",
    answer: 2,
    options: [
      { ja: "キツネ", kr: "여우", img: img("Vulpes_vulpes_laying_in_snow.jpg") },
      { ja: "リス", kr: "다람쥐", img: img("Sciurus_vulgaris_2.jpg") },
      { ja: "カンガルー", kr: "캥거루", img: img("Macropus_giganteus_-_Brunkerville.jpg") },
      { ja: "シカ", kr: "사슴", img: img("Cervus_nippon_centralis_in_Nara_Park.jpg") },
    ],
    hint: "子どもを育てる袋をもつことで知られます。",
    explanation: "カンガルーは有袋類です。未熟な状態で生まれた子を育児嚢で育てます。",
  },
  {
    id: "amphibian-001",
    grade: 4,
    category: "amphibian",
    difficulty: "easy",
    num: "問 66",
    ja: "両生類を選びなさい。",
    kr: "양서류를 고르세요.",
    answer: 3,
    options: [
      { ja: "ヤモリ", kr: "도마뱀붙이", img: img("Gekko_japonicus.JPG") },
      { ja: "カナヘビ", kr: "장지뱀류", img: img("Takydromus_tachydromoides.jpg") },
      { ja: "ミシシッピアカミミガメ", kr: "붉은귀거북", img: img("Trachemys_scripta_elegans.jpg") },
      { ja: "アマガエル", kr: "청개구리", img: img("Hyla_japonica_001.jpg") },
    ],
    hint: "幼生は水中でえら呼吸し、成体は肺と皮膚で呼吸します。",
    explanation: "アマガエルは両生類です。ヤモリ、カナヘビ、カメは爬虫類です。",
  },
  {
    id: "amphibian-002",
    grade: 3,
    category: "amphibian",
    difficulty: "medium",
    num: "問 67",
    ja: "有尾目にふくまれるものを選びなさい。",
    kr: "유미목에 포함되는 것을 고르세요.",
    answer: 1,
    options: [
      { ja: "トノサマガエル", kr: "참개구리류", img: img("Rana_nigromaculata.jpg") },
      { ja: "アカハライモリ", kr: "일본영원", img: img("Cynops_pyrrhogaster_sasayamae.jpg") },
      { ja: "ヒキガエル", kr: "두꺼비", img: img("Bufo_japonicus_formosus.jpg") },
      { ja: "アマガエル", kr: "청개구리", img: img("Hyla_japonica_in_forest.jpg") },
    ],
    hint: "成体になっても尾が残る両生類です。",
    explanation: "イモリやサンショウウオの仲間は有尾目です。カエルの仲間は無尾目です。",
  },
  {
    id: "reptile-001",
    grade: 4,
    category: "reptile",
    difficulty: "easy",
    num: "問 68",
    ja: "爬虫類を選びなさい。",
    kr: "파충류를 고르세요.",
    answer: 0,
    options: [
      { ja: "ニホンカナヘビ", kr: "일본장지뱀", img: img("Takydromus_tachydromoides_200705.jpg") },
      { ja: "アカハライモリ", kr: "일본영원", img: img("Cynops_pyrrhogaster_001.jpg") },
      { ja: "アマガエル", kr: "청개구리", img: img("Hyla_japonica_001.jpg") },
      { ja: "サンショウウオ", kr: "도롱뇽", img: img("Hynobius_nebulosus.jpg") },
    ],
    hint: "体表はうろこでおおわれ、肺で呼吸します。",
    explanation: "ニホンカナヘビは爬虫類です。イモリ、カエル、サンショウウオは両生類です。",
  },
  {
    id: "reptile-002",
    grade: 3,
    category: "reptile",
    difficulty: "medium",
    num: "問 69",
    ja: "ヤモリについて正しいものを選びなさい。",
    kr: "도마뱀붙이에 대해 맞는 것을 고르세요.",
    answer: 2,
    options: [
      { ja: "両生類である", kr: "양서류이다", img: img("Cynops_pyrrhogaster_sasayamae.jpg") },
      { ja: "えらで呼吸する", kr: "아가미로 호흡한다", img: img("Rana_japonica_tadpole.jpg") },
      { ja: "爬虫類である", kr: "파충류이다", img: img("Gekko_japonicus_in_Mie_Prefecture.jpg") },
      { ja: "胎生魚である", kr: "태생어이다", img: img("Guppy_pho_0048.jpg") },
    ],
    hint: "家の壁や窓で見られ、肺で呼吸します。",
    explanation: "ヤモリは爬虫類です。名前が似ているイモリは両生類なので注意しましょう。",
  },
  {
    id: "mix-001",
    grade: 4,
    category: "all",
    difficulty: "easy",
    num: "問 70",
    ja: "昆虫ではないものを選びなさい。",
    kr: "곤충이 아닌 것을 고르세요.",
    answer: 2,
    options: [
      { ja: "ナナホシテントウ", kr: "칠성무당벌레", img: img("Coccinella_septempunctata_01.JPG") },
      { ja: "アゲハチョウ", kr: "호랑나비", img: img("Papilio_xuthus_Larva_2011-10-01.jpg") },
      { ja: "クモ", kr: "거미", img: img("Argiope_bruennichi_female.jpg") },
      { ja: "カブトムシ", kr: "장수풍뎅이", img: img("Trypoxylus_dichotomus_male_2015.jpg") },
    ],
    hint: "足の数に注目します。昆虫は6本です。",
    explanation: "クモは昆虫ではなくクモ綱です。昆虫は頭・胸・腹に分かれ、成虫の足は6本です。",
  },
  {
    id: "mix-002",
    grade: 3,
    category: "all",
    difficulty: "hard",
    num: "問 71",
    ja: "鳥類と哺乳類に共通する特徴を選びなさい。",
    kr: "조류와 포유류에 공통되는 특징을 고르세요.",
    answer: 1,
    options: [
      { ja: "体表にうろこがある", kr: "몸 표면에 비늘이 있다", img: img("Takydromus_tachydromoides_200705.jpg") },
      { ja: "恒温動物である", kr: "항온동물이다", img: img("Eastern_spot-billed_duck_in_Tokyo.jpg") },
      { ja: "幼生はえら呼吸する", kr: "유생은 아가미 호흡을 한다", img: img("Rana_japonica_tadpole.jpg") },
      { ja: "胞子でふえる", kr: "포자로 번식한다", img: img("Osmunda_japonica_fiddleheads.jpg") },
    ],
    hint: "外の温度が変わっても体温を比較的一定に保ちます。",
    explanation: "鳥類と哺乳類はどちらも恒温動物です。体温を一定に保つしくみがあります。",
  },
  {
    id: "mix-003",
    grade: 3,
    category: "all",
    difficulty: "hard",
    num: "問 72",
    ja: "種子をつくらない生物を選びなさい。",
    kr: "씨앗을 만들지 않는 생물을 고르세요.",
    answer: 3,
    options: [
      { ja: "アカマツ", kr: "소나무류", img: img("Pinus_densiflora2.jpg") },
      { ja: "サクラ", kr: "벚나무", img: img("Prunus_serrulata_Blossoms.jpg") },
      { ja: "イネ", kr: "벼", img: img("Rice_Plants_(IRRI).jpg") },
      { ja: "ワラビ", kr: "고사리", img: img("Pteridium_aquilinum_002.JPG") },
    ],
    hint: "シダ植物は胞子でふえます。",
    explanation: "ワラビはシダ植物で、種子ではなく胞子でふえます。",
  },
];

const answerData = {
  1: [0, "ザトウクジラはひげ板をもつひげくじらです。シャチ、ハンドウイルカ、マッコウクジラは歯をもつハクジラの仲間です。"],
  2: [0, "シカとイノシシはどちらも偶蹄類の仲間です。サイ、タヌキ、クマより分類上近い関係です。"],
  3: [1, "センザンコウは体がかたい鱗でおおわれています。ハリネズミやヤマアラシは針状の毛をもつ哺乳類です。"],
  4: [1, "ウミネコとユリカモメはどちらもカモメ科の鳥です。ウミウ、ヤマセミ、ライチョウとは別の仲間です。"],
  5: [0, "ガチョウはガンを家禽化した鳥で、ガンと同じカモ科の仲間です。"],
  6: [0, "ウは長い首、細長いくちばし、水面に低く構える姿が特徴です。"],
  7: [2, "トビは広い翼と浅くへこんだ尾をもつ猛禽類で、空を旋回するシルエットが特徴です。"],
  8: [3, "カワセミは水に飛びこみますが、水かきは発達していません。アヒル、オシドリ、カワウは水辺で泳ぐため足が水に適しています。"],
  9: [0, "サンショウウオとイモリはどちらも尾をもつ両生類です。カナヘビとトカゲは爬虫類、アカガエルは無尾類です。"],
  10: [0, "アマガエルのオスはのどの鳴のうをふくらませて鳴きます。のどの下が大きくふくらむ姿を選びます。"],
  11: [1, "キンギョはフナの仲間をもとに作られた魚で、コイと同じコイ科にふくまれます。"],
  12: [0, "イワナとサクラマスはどちらもサケ科の魚です。マイワシ、オイカワ、ウグイとは科が異なります。"],
  13: [0, "カツオは紡錘形の体と体側のしま模様が特徴です。クロマグロ、ブリ、ボラとは体形や模様が異なります。"],
  14: [0, "サケは背びれと脂びれをもち、川で産卵するサケ科の魚です。"],
  15: [1, "コイは魚なので、呼吸器官はえらです。肺ではなく、水中の酸素をえらで取り入れます。"],
  16: [1, "シミは成虫になっても翅をもたない昆虫です。アブラムシ、シロアリ、ハネカクシには翅をもつ種類や時期があります。"],
  17: [0, "この選択肢の中で昆虫として近いのはアワフキムシです。ザトウムシ、ツリガネムシ、ハリガネムシは昆虫ではありません。"],
  18: [3, "アゲハ、オオミズアオ、ドクガはチョウ目です。トビケラはトビケラ目なので異なるグループです。"],
  19: [0, "カブトムシの成虫は樹液をなめるように食べます。左右に動くあごで固いものをかみ砕く食べ方ではありません。"],
  20: [1, "ミジンコは小さな甲殻類で、節足動物門に属します。"],
  21: [0, "ヒトデとウニはどちらも棘皮動物です。フジツボは節足動物、クラゲは刺胞動物、ホヤは脊索動物です。"],
  22: [3, "図のように丸みのある巻貝で、池や田んぼにすむものはタニシです。"],
  23: [1, "クモは頭胸部と腹部に分かれ、頭胸部に8本の脚があります。昆虫のように頭・胸・腹の3つではありません。"],
  24: [1, "マンサクは花を咲かせる被子植物です。ヒノキ、スギ、イチイは裸子植物です。"],
  25: [3, "ハマナスはバラ科で、花弁が分かれている離弁花です。"],
  26: [1, "アンズはバラ科の植物です。カキノキ、ミカン、ブドウは別の科です。"],
  27: [2, "カリフラワーとキャベツはどちらもアブラナ科の野菜です。"],
  28: [1, "クズとハギはどちらもマメ科の植物です。"],
  29: [1, "サトイモとコンニャクはどちらもサトイモ科です。"],
  30: [2, "アヤメとハナショウブはどちらもアヤメ科です。"],
  31: [3, "図の野菜は葉が重なって結球するハクサイです。"],
  32: [3, "図の野菜は葉が3つに分かれるように見えるミツバです。"],
  33: [1, "カシワの葉は大きく、ふちが波のようにぎざぎざしています。図の葉の形に合います。"],
  34: [3, "ヤマブキは黄色い花を咲かせます。アセビ、クサボケ、ヤマツツジは黄色ではありません。"],
  35: [3, "ヒマワリは多数の小さな花が集まって、ひとつの大きな花のように見えます。"],
  36: [3, "オオバコの葉は根もとから出て、何本もの太いすじが葉先へ向かって走ります。"],
  37: [2, "フジの葉は複数の小葉からなる複葉です。"],
  38: [2, "サクラの葉柄には蜜腺が見られます。"],
  39: [1, "ジャガイモは地下茎に栄養分をたくわえます。サツマイモ、ダイコン、ゴボウは主に根です。"],
  40: [0, "アオキは赤い実をつけます。"],
  41: [0, "アマモは海に生育する種子植物です。海藻ではなく、花を咲かせる植物です。"],
  42: [3, "ハハコグサは春の七草のゴギョウで、黄色い花と白っぽい綿毛のある姿が特徴です。"],
  43: [1, "ゼニゴケはコケ植物です。サギゴケやモウセンゴケは名前にコケがつきますが被子植物です。"],
  44: [1, "テングサは紅藻の仲間です。ワカメ、ヒジキ、ホンダワラは褐藻です。"],
  45: [3, "スズタケはタケの仲間で、キノコではありません。キヌガサタケ、ショウロ、マイタケは菌類です。"],
  47: [2, "ムササビは前足と後足の間の飛膜を広げて滑空します。"],
  48: [0, "オットセイは魚などを食べる肉食性の哺乳類です。カバ、サイ、ジュゴンは主に植物を食べます。"],
  49: [3, "キツネは冬眠しません。アブラコウモリ、ヤマネ、シマリスは冬眠する動物として知られます。"],
  50: [3, "ホトトギスは本州では夏鳥として渡来します。"],
  51: [3, "カワセミは主に魚を食べ、全長はキジバトより短い鳥です。水中生活者ではなく、木の上に巣をつくる鳥でもありません。"],
  52: [0, "コサギは木の上に小枝を集めて巣をつくります。コゲラは樹洞、ツバメは泥の巣、ヒバリは地上に巣をつくります。"],
  53: [1, "グッピーは母親の体内で子が育ってから生まれる胎生の魚です。イワナ、タナゴ、ハゼは卵を産む魚です。"],
  54: [0, "イトヨは水草などを使って巣をつくる魚として知られます。"],
  55: [2, "サケは海で大きくなり、産卵のために川へ戻ってくる魚です。"],
  56: [1, "ナミアゲハの幼虫はミカン科の葉を食べます。ナツミカンはミカン科です。"],
  57: [3, "ナナフシは鳴かない昆虫です。セミ、カンタン、コオロギは音を出す昆虫です。"],
  58: [1, "アリ、シロアリ、ミツバチは集団で生活する社会性昆虫です。カマキリは社会性昆虫ではありません。"],
  59: [2, "オオムラサキは幼虫で越冬し、成虫の翅を広げた大きさはモンシロチョウより大きいです。幼虫は主にエノキを食べ、成虫は花の蜜より樹液に集まります。"],
  60: [0, "アカテガニは陸上生活に適応したカニです。ハナサキガニ、ケガニ、タラバガニは海にすむ種類です。"],
  61: [2, "ムカデは他の小動物を食べる肉食性の動物です。ダンゴムシ、ミミズ、ヤスデは主に腐植物などを食べます。"],
  62: [0, "カイチュウは哺乳類の消化管内に寄生する線形動物です。"],
  63: [0, "イチョウは雄株と雌株が分かれる雌雄異株の植物です。"],
  64: [3, "ラッカセイは花のあと子房柄が地中にもぐり、地中に実をつけます。"],
  65: [0, "アザミの種子には綿毛があり、風で散布されます。"],
  66: [2, "カタバミは熟した果実がはじけて種子を飛ばします。"],
  67: [0, "アケビの果実は動物に食べられ、種子が運ばれます。"],
  68: [0, "モモは木本植物です。バナナ、パイナップル、メロンは木ではありません。"],
  69: [1, "ガマは水底に根を張り、葉や茎を水上に出す抽水植物です。"],
  70: [2, "ヒシは水底に根を張り、葉を水面に浮かべる浮葉植物です。"],
  71: [0, "ウツボカズラは袋状の捕虫器で虫を捕らえる食虫植物です。"],
  72: [2, "本州の海岸林ではクロマツがよく植えられ、海風や砂に強い植物です。"],
  73: [2, "クロユリは日本では主に高山帯に生育する植物です。"],
  74: [0, "オシロイバナは夕方に開花する植物です。"],
  75: [2, "ヤマノイモは多年草です。一年草であるという記述が誤りです。"],
  76: [0, "ワニは卵を産む卵生の動物です。コウモリ、ジュゴン、コアラは哺乳類で子を産みます。"],
  77: [0, "分類階級では、目のひとつ下は科です。界、綱、目、科、属、種の順に細かくなります。"],
  78: [3, "二名法を確立した人物はリンネです。"],
  79: [3, "カブトムシの標本は筋肉や内臓を取り出さず、形を整えて乾燥させる方法が適しています。"],
  80: [3, "ユーカリはオーストラリア原産の植物としてよく知られています。"],
  81: [2, "環境省のレッドリストは、日本で絶滅のおそれのある野生生物の種のリストです。"],
  82: [3, "ハルジオンは日本に入ってきた外来種です。"],
  83: [1, "ミツマタは和紙の原料として伝統的に利用されます。"],
  84: [3, "ナズナは春の七草のひとつです。"],
  85: [3, "ファーブルは身近な昆虫類の観察記録を『昆虫記』として著しました。"],
  86: [3, "植物が光合成で糖をつくる原料は二酸化炭素と水です。酸素は光合成で出てくるものです。"],
};

function makePhotoQuestion(num, category, ja, options, answer = null, note = null, addedAt = "2026-04-29") {
  const inferred = answerData[num];
  const finalAnswer = answer ?? inferred?.[0] ?? null;
  return {
    id: `book-2026-${String(num).padStart(3, "0")}`,
    grade: num >= 77 ? 3 : 4,
    category,
    difficulty: num >= 77 ? "hard" : num >= 41 ? "medium" : "easy",
    num: `問 ${num}`,
    ja,
    kr: "",
    answer: finalAnswer,
    needsAudit: finalAnswer === null,
    addedAt,
    options: options.map((name) => ({ ja: name, kr: "", img: "" })),
    hint: note || buildStudyHint(category, ja),
    explanation: inferred?.[1] || buildExplanation(num, ja, options, finalAnswer),
  };
}

const textOnlyQuestionNums = new Set([6, 7, 10, 15, 19, 20, 23, 36, 41, 51, 59, 75, 77, 78, 79, 81, 83, 85, 86]);

const statementBlocks = {
  51: [
    ["A", "水中生活者である。"],
    ["B", "おもに魚を食べる。"],
    ["C", "樹上に巣をつくる。"],
    ["D", "全長（くちばしの先から尾羽の先まで）はキジバトより短い。"],
  ],
  59: [
    ["A", "幼虫はおもにクヌギの葉を食べる。"],
    ["B", "幼虫の状態で越冬する。"],
    ["C", "成虫はおもに花の蜜を吸う。"],
    ["D", "成虫の翅（はね）を広げた大きさはモンシロチョウより大きい。"],
  ],
};

function buildExplanation(num, text, options, answer) {
  const known = {
    11: "正解はコイです。キンギョはフナの仲間をもとに作られた魚で、コイと同じコイ科にふくまれます。",
    53: "正解はグッピーです。グッピーは母親の体内で子が育ってから生まれる胎生の魚です。イワナ、タナゴ、ハゼは卵を産む魚です。",
    55: "正解はサケです。サケは海で大きくなり、産卵のために川へ戻ってくる魚です。",
    56: "正解はナツミカンです。ナミアゲハの幼虫はミカン科の葉を食べます。ナツミカンはミカン科です。",
    58: "正解はカマキリです。アリ、シロアリ、ミツバチは集団で生活する社会性昆虫ですが、カマキリは社会性昆虫ではありません。",
  };
  if (known[num]) return known[num];
  if (answer === null) {
    return "この問題はまだ正解データを入れていないため採点しません。答え合わせ後に、正解と理由を追加します。";
  }
  return `正解は${options[answer]}です。この問題は答え合わせ済みです。詳しい理由はあとで追加できます。`;
}

function buildFeedback(q, selectedIndex) {
  if (q.answer === null) return q.explanation;
  const selectedName = q.options[selectedIndex]?.ja || "";
  const correctName = q.options[q.answer]?.ja || "";
  const base = q.explanation;
  if (selectedIndex === q.answer) return base;
  return `${base} あなたが選んだ${selectedName}は、この問題で聞かれている特徴が${correctName}とは違います。写真の姿だけでなく、同じ科・ふえ方・すみかなどの条件をもう一度比べてみましょう。`;
}

function buildStudyHint(category, text) {
  if (text.includes("近縁") || text.includes("同じ")) {
    return "名前の似ているものだけで選ばず、同じ科・同じ目など分類上の近さを考えます。写真では体の形、足、くちばし、葉や花のつくりも比べます。";
  }
  if (text.includes("シルエット") || text.includes("図") || text.includes("葉")) {
    return "細かい色ではなく、全体の形を見ます。首やくちばし、尾、葉脈、葉のふちなど、輪郭に出る特徴を先に確認します。";
  }
  if (text.includes("正しい記述") || text.includes("誤り")) {
    return "選択肢を一つずつ読んで、すみか、体のつくり、ふえ方、食べ方のどれを聞いているかに分けて考えます。";
  }
  if (text.includes("なんですか")) {
    return "まず大きな形を見ます。魚なら体形とひれ、鳥ならくちばしと足、植物なら葉・花・実の特徴を比べます。";
  }
  if (text.includes("胎生")) {
    return "胎生は卵を外に産むのではなく、親の体内で子が育ってから生まれることです。";
  }
  if (text.includes("産卵") || text.includes("種子") || text.includes("散布")) {
    return "ふえ方を聞く問題です。卵・種子・胞子のどれか、また風・動物・水のどれで運ばれるかを考えます。";
  }
  const categoryHints = {
    fish: "魚の問題では、すみか、産卵のしかた、ひれ・えら・体形に注目します。",
    insect: "昆虫の問題では、足の数、翅、口の形、変態、食草に注目します。",
    plant: "植物の問題では、花・葉・実・根、種子か胞子か、何科かに注目します。",
    bird: "鳥の問題では、くちばし、足、水かき、巣、渡りの時期に注目します。",
    mammal: "哺乳類の問題では、食べ物、冬眠、子の育て方、体の特徴に注目します。",
    amphibian: "両生類の問題では、水辺との関係、幼生と成体の違い、尾の有無に注目します。",
    reptile: "爬虫類の問題では、うろこ、肺呼吸、卵、体表の乾きやすさに注目します。",
    all: "分類の問題では、見た目だけでなく、何門・何綱・何目・何科かを思い出します。",
  };
  return categoryHints[category] || categoryHints.all;
}

const svgWrap = (body, viewBox = "0 0 320 140") => `
  <svg class="stem-svg" viewBox="${viewBox}" role="img" aria-hidden="true" focusable="false">
    <rect width="100%" height="100%" rx="12" fill="#f8fafc"/>
    ${body}
  </svg>
`;

const birdSilhouette = (shape) => {
  const shapes = {
    cormorant: `<path d="M101 133 C83 108 83 74 101 45 C111 29 125 18 143 12 C136 33 136 52 148 69 C159 84 169 99 163 118 C154 145 118 154 101 133 Z" fill="#020617"/><path d="M137 17 C155 12 171 14 190 22 L142 31 Z" fill="#020617"/><path d="M111 129 L97 148 M129 132 L146 149" stroke="#020617" stroke-width="7" stroke-linecap="round"/><path d="M99 92 C74 108 57 124 42 146 L109 125 Z" fill="#020617"/>`,
    passerine: `<path d="M58 92 C78 52 129 54 164 88 C137 96 105 111 76 116 C60 120 50 107 58 92 Z" fill="#020617"/><path d="M146 86 L222 112 L151 105 Z" fill="#020617"/><path d="M68 88 L34 77 L66 77 Z" fill="#020617"/><path d="M98 113 L82 136 M111 111 L121 135" stroke="#020617" stroke-width="5" stroke-linecap="round"/>`,
    kingfisher: `<path d="M88 84 C108 61 142 59 169 81 C145 103 107 107 86 96 Z" fill="#020617"/><path d="M88 85 L22 76 L88 72 Z" fill="#020617"/><path d="M155 84 L214 89 L159 97 Z" fill="#020617"/><path d="M122 103 L113 130 M134 101 L142 128" stroke="#020617" stroke-width="5" stroke-linecap="round"/>`,
    heron: `<path d="M132 122 C151 91 147 66 129 40 C140 24 158 13 173 10 C159 35 169 65 191 88 C174 101 160 116 154 137 Z" fill="#020617"/><path d="M171 12 L226 23 L174 25 Z" fill="#020617"/><path d="M148 132 L129 139 M161 132 L184 139" stroke="#020617" stroke-width="6" stroke-linecap="round"/>`,
    kite: `<path d="M30 78 C75 40 112 35 148 55 C189 33 229 43 268 79 C219 74 181 83 148 106 C115 83 78 74 30 78 Z" fill="#020617"/><path d="M142 99 L112 141 L148 122 L184 141 L154 99 Z" fill="#020617"/><path d="M139 55 C143 44 153 44 158 55 C154 62 144 62 139 55 Z" fill="#020617"/>`,
  };
  return svgWrap(shapes[shape], "0 0 280 150");
};

const frogCall = (sac) => {
  const sacs = {
    throat: `
      <ellipse cx="92" cy="108" rx="50" ry="44" fill="#eef2f7" stroke="#020617" stroke-width="5"/>
    `,
    side: `
      <ellipse cx="55" cy="84" rx="33" ry="31" fill="#eef2f7" stroke="#020617" stroke-width="5"/>
      <ellipse cx="183" cy="94" rx="38" ry="35" fill="#eef2f7" stroke="#020617" stroke-width="5"/>
    `,
    none: "",
    both: `
      <ellipse cx="48" cy="86" rx="34" ry="32" fill="#eef2f7" stroke="#020617" stroke-width="5"/>
      <ellipse cx="197" cy="94" rx="38" ry="35" fill="#eef2f7" stroke="#020617" stroke-width="5"/>
    `,
  };
  return svgWrap(`
    ${sacs[sac]}
    <path d="M61 79 C83 42 151 35 199 67 C184 92 125 104 73 91 C64 89 58 84 61 79 Z" fill="#f8fafc" stroke="#020617" stroke-width="5" stroke-linejoin="round"/>
    <path d="M180 67 C206 80 222 103 218 134" fill="none" stroke="#020617" stroke-width="5" stroke-linecap="round"/>
    <path d="M159 103 C180 113 195 128 201 147" fill="none" stroke="#020617" stroke-width="5" stroke-linecap="round"/>
    <circle cx="83" cy="50" r="16" fill="#f8fafc" stroke="#020617" stroke-width="5"/>
    <circle cx="151" cy="51" r="17" fill="#f8fafc" stroke="#020617" stroke-width="5"/>
    <circle cx="84" cy="50" r="8" fill="#020617"/>
    <circle cx="151" cy="51" r="8" fill="#020617"/>
    <circle cx="87" cy="47" r="2.4" fill="#f8fafc"/>
    <circle cx="154" cy="48" r="2.4" fill="#f8fafc"/>
    <path d="M96 82 C118 96 151 94 177 75" fill="none" stroke="#020617" stroke-width="4" stroke-linecap="round"/>
    <path d="M72 69 C78 66 83 64 89 62 M107 66 C97 71 86 71 76 67" fill="none" stroke="#020617" stroke-width="3" stroke-linecap="round"/>
  `, "0 0 260 160");
};

const leafDiagram = (kind) => {
  const leaves = {
    saw: `<path d="M150 18 L173 45 L196 52 L178 72 L198 91 L174 101 L170 128 L150 111 L130 128 L126 101 L102 91 L122 72 L104 52 L127 45 Z" fill="#eef2ff" stroke="#020617" stroke-width="4"/><path d="M150 20 L150 132 M150 47 L119 62 M150 62 L184 55 M150 79 L115 91 M150 91 L181 102" stroke="#020617" stroke-width="3"/>`,
    oval: `<path d="M153 18 C207 45 207 106 151 130 C98 106 94 48 153 18 Z" fill="#eef2ff" stroke="#020617" stroke-width="4"/><path d="M151 22 L151 133 M151 55 C130 65 120 80 111 100 M151 56 C171 69 180 84 188 103" stroke="#020617" stroke-width="3" fill="none"/>`,
    plantain: `<path d="M154 14 C206 48 207 103 153 132 C99 102 98 48 154 14 Z" fill="#eef2ff" stroke="#020617" stroke-width="4"/><path d="M153 19 L153 134 M139 31 C124 64 121 98 148 131 M167 31 C184 67 183 101 158 131 M128 48 C113 76 117 103 146 130 M178 48 C194 78 190 106 160 130" stroke="#020617" stroke-width="3" fill="none"/>`,
    narrowPlantain: `<path d="M156 13 C196 51 194 101 153 133 C113 99 112 52 156 13 Z" fill="#eef2ff" stroke="#020617" stroke-width="4"/><path d="M154 18 L154 134 M142 30 C128 68 130 101 150 131 M166 30 C180 68 178 101 158 131 M132 47 C123 77 128 104 149 130 M176 47 C187 77 181 105 159 130" stroke="#020617" stroke-width="3" fill="none"/>`,
    oak: `<path d="M148 14 C170 25 181 43 171 57 C196 67 191 90 169 96 C177 118 155 130 137 112 C116 124 99 106 113 89 C91 78 99 55 123 55 C112 36 126 21 148 14 Z" fill="#f1f5f9" stroke="#020617" stroke-width="4"/><path d="M146 20 L142 132 M145 58 L113 69 M145 72 L177 67 M143 91 L116 101 M143 100 L164 109" stroke="#020617" stroke-width="3"/>`,
  };
  return svgWrap(leaves[kind], "0 0 300 150");
};

const fishDiagram = (kind) => {
  const marks = kind === "katsuo"
    ? `<path d="M82 87 C122 102 179 106 242 93 M83 98 C130 119 190 120 239 106 M88 76 C145 84 203 84 267 76 M113 61 C151 65 196 66 237 61" stroke="#020617" stroke-width="4" fill="none" stroke-linecap="round"/>
       <path d="M211 62 C225 54 242 53 257 59" stroke="#020617" stroke-width="3" fill="none"/>
       <g fill="#020617">${Array.from({ length: 9 }, (_, i) => `<circle cx="${206 + i * 8}" cy="${55 + i * 2}" r="2.6"/>`).join("")}</g>`
    : `<path d="M94 84 C130 76 161 78 193 91 M106 99 C146 111 182 111 218 98" stroke="#020617" stroke-width="3" fill="none"/><path d="M169 40 L188 17 L198 47" fill="#e5e7eb" stroke="#020617" stroke-width="4"/>`;
  return svgWrap(`
    <path d="M25 78 C72 26 188 24 269 67 L317 36 L301 80 L320 120 L267 96 C186 138 73 129 25 78 Z" fill="#eef2f7" stroke="#020617" stroke-width="6" stroke-linejoin="round"/>
    <path d="M77 57 C95 38 121 36 141 50" fill="none" stroke="#020617" stroke-width="4"/>
    <circle cx="62" cy="71" r="7" fill="#020617"/>
    <path d="M82 89 C67 101 51 101 40 88" fill="none" stroke="#020617" stroke-width="5" stroke-linecap="round"/>
    <path d="M118 55 L100 22 L153 51" fill="#eef2f7" stroke="#020617" stroke-width="5" stroke-linejoin="round"/>
    <path d="M169 50 L151 17 L203 51" fill="#eef2f7" stroke="#020617" stroke-width="5" stroke-linejoin="round"/>
    <path d="M135 105 L112 143 L167 114" fill="#eef2f7" stroke="#020617" stroke-width="5" stroke-linejoin="round"/>
    <path d="M228 95 L244 127 L258 88" fill="#eef2f7" stroke="#020617" stroke-width="5" stroke-linejoin="round"/>
    <path d="M91 52 C105 84 100 108 81 124" fill="none" stroke="#020617" stroke-width="4"/>
    ${marks}
  `, "0 0 340 160");
};

const stemVisuals = {
  6: clipVisual("q06-bird-silhouettes.jpg", "ウのシルエット選択図"),
  7: clipVisual("q07-kite-silhouette.jpg", "トビのシルエット"),
  10: clipVisual("q10-frog-calls.jpg", "アマガエルの鳴く姿の選択図"),
  13: fishDiagram("katsuo"),
  14: fishDiagram("salmon"),
  22: svgWrap(`<path d="M82 108 C80 52 126 18 174 28 C225 42 234 95 196 121 C159 145 104 136 82 108 Z" fill="#e5e7eb" stroke="#020617" stroke-width="5"/><path d="M93 109 C127 64 164 50 199 63 M101 119 C137 82 174 78 205 96 M123 41 C138 76 132 105 106 127 M151 31 C158 70 153 105 128 134 M176 33 C179 68 174 98 151 135 M203 52 C198 82 188 111 172 133" stroke="#020617" stroke-width="3" fill="none"/>`, "0 0 300 150"),
  31: svgWrap(`<path d="M67 92 C48 62 82 31 121 43 C136 17 190 28 190 61 C226 55 247 100 217 119 C184 151 95 143 67 92 Z" fill="#f1f5f9" stroke="#020617" stroke-width="5"/><path d="M90 101 C122 73 163 73 195 103 M92 87 C128 49 168 55 197 87 M109 116 C137 97 167 98 191 117 M122 45 C131 77 125 103 105 125 M166 42 C157 80 164 107 187 128" stroke="#020617" stroke-width="3" fill="none"/>`, "0 0 300 150"),
  32: svgWrap(`<path d="M55 119 C103 92 136 74 177 38 M63 123 C112 104 157 92 225 87 M60 126 C103 119 146 121 209 135" stroke="#020617" stroke-width="8" stroke-linecap="round"/><path d="M176 38 C160 14 193 7 198 32 C218 17 241 40 220 57 C225 80 190 81 186 59 C162 68 149 49 176 38 Z" fill="#e5e7eb" stroke="#020617" stroke-width="4"/><path d="M224 86 C214 58 249 52 255 79 C277 69 292 96 269 111 C270 134 236 130 238 106 C215 110 204 93 224 86 Z" fill="#e5e7eb" stroke="#020617" stroke-width="4"/>`, "0 0 320 150"),
  33: leafDiagram("oak"),
  36: clipVisual("q36-leaf-row.jpg", "オオバコの葉の選択図"),
};

const optionVisuals = {};

const promptPhotos = {
  13: { name: "カツオ", img: img("Katsuwonus_pelamis.jpg") },
  14: { name: "サケ" },
  22: { name: "タニシ", img: img("Cipangopaludina_japonica_-_Osaka_Museum_of_Natural_History_-_DSC07741.JPG") },
  31: { name: "ハクサイ", img: localImg("q31-hakusai.jpg") },
  32: { name: "ミツバ", img: localImg("q32-mitsuba.jpg") },
  33: { name: "カシワ", img: localImg("q33-kashiwa.jpg") },
};

const photoQuestions = [
  makePhotoQuestion(1, "mammal", "「ひげくじら」をひとつ選びなさい。", ["ザトウクジラ", "シャチ", "ハンドウイルカ", "マッコウクジラ"]),
  makePhotoQuestion(2, "mammal", "シカにもっとも近縁な動物をひとつ選びなさい。", ["イノシシ", "サイ", "タヌキ", "クマ"]),
  makePhotoQuestion(3, "mammal", "体がかたい鱗（うろこ）でおおわれている動物をひとつ選びなさい。", ["アリクイ", "センザンコウ", "ハリネズミ", "ヤマアラシ"]),
  makePhotoQuestion(4, "bird", "ウミネコにもっとも近縁な鳥をひとつ選びなさい。", ["ウミウ", "ユリカモメ", "ヤマセミ", "ライチョウ"]),
  makePhotoQuestion(5, "bird", "ガチョウにもっとも近縁な鳥をひとつ選びなさい。", ["ガン", "サギ", "シギ", "ツル"]),
  makePhotoQuestion(6, "bird", "ウのシルエットをひとつ選びなさい。", ["シルエット1", "シルエット2", "シルエット3", "シルエット4"]),
  makePhotoQuestion(7, "bird", "このシルエットの鳥はなんですか。", ["オナガガモ", "キジバト", "トビ", "キジ"]),
  makePhotoQuestion(8, "bird", "みずかきが発達していない鳥をひとつ選びなさい。", ["アヒル", "オシドリ", "カワウ", "カワセミ"]),
  makePhotoQuestion(9, "amphibian", "サンショウウオにもっとも近縁な動物をひとつ選びなさい。", ["イモリ", "カナヘビ", "アカガエル", "トカゲ"]),
  makePhotoQuestion(10, "amphibian", "アマガエルの鳴く姿の図をひとつ選びなさい。", ["図1", "図2", "図3", "図4"]),
  makePhotoQuestion(11, "fish", "キンギョと同じ仲間（同じ科）の魚をひとつ選びなさい。", ["アユ", "コイ", "ドジョウ", "ナマズ"], 1),
  makePhotoQuestion(12, "fish", "イワナと同じなかま（同じ科）の魚をひとつ選びなさい。", ["サクラマス", "マイワシ", "オイカワ", "ウグイ"]),
  makePhotoQuestion(13, "fish", "この魚はなんですか。", ["カツオ", "クロマグロ", "ブリ", "ボラ"]),
  makePhotoQuestion(14, "fish", "この魚はなんですか。", ["サケ", "ウツボ", "サンマ", "フナ"]),
  makePhotoQuestion(15, "fish", "コイの呼吸器官をひとつ選びなさい。", ["うろこ", "えら", "肺", "ひれ"]),
  makePhotoQuestion(16, "insect", "翅（はね）をもたない昆虫をひとつ選びなさい。", ["アブラムシ", "シミ", "シロアリ", "ハネカクシ"]),
  makePhotoQuestion(17, "insect", "テントウムシにもっとも近縁な動物をひとつ選びなさい。", ["アワフキムシ", "ザトウムシ", "ツリガネムシ", "ハリガネムシ"]),
  makePhotoQuestion(18, "insect", "他と異なるグループ（異なる目）の昆虫をひとつ選びなさい。", ["アゲハ（ナミアゲハ）", "オオミズアオ", "ドクガ", "トビケラ"]),
  makePhotoQuestion(19, "insect", "カブトムシの成虫の餌の食べ方について、正しい記述をひとつ選びなさい。", ["ブラシ状の口でなめる", "ストロー状の口で吸う", "左右に動くあごでかむ", "上下に動くあごでかむ"]),
  makePhotoQuestion(20, "all", "ミジンコが属するグループ（門）をひとつ選びなさい。", ["環形動物", "節足動物", "線形動物", "扁形動物"]),
  makePhotoQuestion(21, "all", "ヒトデにもっとも近縁な動物をひとつ選びなさい。", ["ウニ", "フジツボ", "クラゲ", "ホヤ"]),
  makePhotoQuestion(22, "all", "この動物はなんですか。", ["トコブシ", "カワニナ", "ホラガイ", "タニシ"]),
  makePhotoQuestion(23, "all", "クモの記述として正しいものをひとつ選びなさい。", ["頭胸部と腹部に分かれ、頭胸部に6本の脚がついている", "頭胸部と腹部に分かれ、頭胸部に8本の脚がついている", "頭部、胸部、腹部に分かれ、腹部に6本の脚がついている", "頭部、胸部、腹部に分かれ、腹部に8本の脚がついている"]),
  makePhotoQuestion(24, "plant", "被子植物をひとつ選びなさい。", ["ヒノキ", "マンサク", "スギ", "イチイ"]),
  makePhotoQuestion(25, "plant", "離弁花である植物をひとつ選びなさい。", ["アサガオ", "サツキ", "タンポポ", "ハマナス"]),
  makePhotoQuestion(26, "plant", "バラ科の植物をひとつ選びなさい。", ["カキノキ", "アンズ", "ミカン", "ブドウ"]),
  makePhotoQuestion(27, "plant", "カリフラワーと同じなかま（同じ科）の野菜をひとつ選びなさい。", ["ジャガイモ", "ニンニク", "キャベツ", "レタス"]),
  makePhotoQuestion(28, "plant", "クズと同じ仲間（同じ科）の植物をひとつ選びなさい。", ["オオイヌノフグリ", "ハギ", "ブタクサ", "ヘビイチゴ"]),
  makePhotoQuestion(29, "plant", "サトイモと同じなかま（同じ科）の植物をひとつ選びなさい。", ["カブ", "コンニャク", "サツマイモ", "ハス"]),
  makePhotoQuestion(30, "plant", "アヤメと同じなかま（同じ科）の植物をひとつ選びなさい。", ["シクラメン", "シュンラン", "ハナショウブ", "ジャノヒゲ"]),
  makePhotoQuestion(31, "plant", "この野菜はなんですか。", ["キャベツ", "セロリ", "コマツナ", "ハクサイ"]),
  makePhotoQuestion(32, "plant", "この野菜はなんですか。", ["チンゲンサイ", "ニラ", "ホウレンソウ", "ミツバ"]),
  makePhotoQuestion(33, "plant", "この葉はなんですか。", ["クヌギ", "カシワ", "ケヤキ", "ツバキ"]),
  makePhotoQuestion(34, "plant", "花弁が黄色い植物をひとつ選びなさい。", ["アセビ", "クサボケ", "ヤマツツジ", "ヤマブキ"]),
  makePhotoQuestion(35, "plant", "小さな花が多数集まってひとつの花のようにみえる植物をひとつ選びなさい。", ["ケシ", "チューリップ", "シャクヤク", "ヒマワリ"]),
  makePhotoQuestion(36, "plant", "オオバコの葉はどれですか。", ["葉1", "葉2", "葉3", "葉4"]),
  makePhotoQuestion(37, "plant", "葉が複葉である植物をひとつ選びなさい。", ["イロハモミジ", "スズカケノキ", "フジ", "ヤツデ"]),
  makePhotoQuestion(38, "plant", "葉に蜜腺がある植物をひとつ選びなさい。", ["イチョウ", "ヤマボウシ", "サクラ", "カツラ"]),
  makePhotoQuestion(39, "plant", "地下茎に栄養分を貯蔵する植物をひとつ選びなさい。", ["サツマイモ", "ジャガイモ", "ダイコン", "ゴボウ"]),
  makePhotoQuestion(40, "plant", "果実が赤く熟す植物をひとつ選びなさい。", ["アオキ", "カリン", "ヤツデ", "キンカン"]),
  makePhotoQuestion(41, "plant", "アマモについて正しい記述をひとつ選びなさい。", ["海に生育する種子植物", "海に生育する藻類", "川に生育する種子植物", "川に生育する藻類"]),
  makePhotoQuestion(42, "plant", "次の記述にあてはまる植物をひとつ選びなさい。春の七草のひとつで、ゴギョウ（オギョウ）とも呼ばれる。春に黄色の花をつけ、草が綿毛に覆われ白っぽくみえる。", ["カブ", "セリ", "ハコベ", "ハハコグサ"]),
  makePhotoQuestion(43, "plant", "コケ植物をひとつ選びなさい。", ["サギゴケ", "ゼニゴケ", "マンネンスギ", "モウセンゴケ"]),
  makePhotoQuestion(44, "plant", "紅藻をひとつ選びなさい。", ["ワカメ", "テングサ", "ヒジキ", "ホンダワラ"]),
  makePhotoQuestion(45, "plant", "キノコではないものをひとつ選びなさい。", ["キヌガサタケ", "ショウロ", "マイタケ", "スズタケ"]),
  makePhotoQuestion(47, "mammal", "滑空する動物をひとつ選びなさい。", ["オコジョ", "テン", "ムササビ", "ヤマネ"]),
  makePhotoQuestion(48, "mammal", "肉食性の哺乳類をひとつ選びなさい。", ["オットセイ", "カバ", "サイ", "ジュゴン"]),
  makePhotoQuestion(49, "mammal", "冬眠をしない動物をひとつ選びなさい。", ["アブラコウモリ", "ヤマネ", "シマリス", "キツネ"]),
  makePhotoQuestion(50, "bird", "本州での夏鳥をひとつ選びなさい。", ["スズメ", "カワラヒワ", "メジロ", "ホトトギス"]),
  makePhotoQuestion(51, "bird", "カワセミについて正しい記述の組み合わせをひとつ選びなさい。", ["A-B", "A-D", "B-C", "B-D"]),
  makePhotoQuestion(52, "bird", "木の上に小枝を集めて巣をつくる鳥をひとつ選びなさい。", ["コサギ", "コゲラ", "ツバメ", "ヒバリ"]),
  makePhotoQuestion(53, "fish", "胎生の魚をひとつ選びなさい。", ["イワナ", "グッピー", "タナゴ", "ハゼ"], 1),
  makePhotoQuestion(54, "fish", "巣をつくる魚をひとつ選びなさい。", ["イトヨ", "ドジョウ", "モツゴ", "フナ"]),
  makePhotoQuestion(55, "fish", "産卵のために海から河川に遡上する魚をひとつ選びなさい。", ["イワシ", "クサフグ", "サケ", "ナマズ"], 2),
  makePhotoQuestion(56, "insect", "アゲハ（ナミアゲハ）の幼虫の食草となるものをひとつ選びなさい。", ["カタバミ", "ナツミカン", "ニンジン", "ハクサイ"], 1),
  makePhotoQuestion(57, "insect", "鳴かない昆虫をひとつ選びなさい。", ["アブラゼミ", "カンタン", "コオロギ", "ナナフシ"]),
  makePhotoQuestion(58, "insect", "社会性昆虫でないものをひとつ選びなさい。", ["アリ", "カマキリ", "シロアリ", "ミツバチ"], 1),
  makePhotoQuestion(59, "insect", "オオムラサキについて正しい記述の組み合わせをひとつ選びなさい。", ["A-B", "B-C", "B-D", "C-D"]),
  makePhotoQuestion(60, "all", "陸上生活にもっとも適応しているカニをひとつ選びなさい。", ["アカテガニ", "ハナサキガニ", "ケガニ", "タラバガニ"]),
  makePhotoQuestion(61, "all", "肉食性の動物をひとつ選びなさい。", ["ダンゴムシ", "ミミズ", "ムカデ", "ヤスデ"]),
  makePhotoQuestion(62, "all", "哺乳類の消化管内に寄生する生物をひとつ選びなさい。", ["カイチュウ", "ハリガネムシ", "フィラリア", "マラリア原虫"]),
  makePhotoQuestion(63, "plant", "雌雄異株の植物をひとつ選びなさい。", ["イチョウ", "スギ", "マツ", "クリ"]),
  makePhotoQuestion(64, "plant", "地中に果実をつける植物をひとつ選びなさい。", ["アズキ", "ジャガイモ", "ダイズ", "ラッカセイ"]),
  makePhotoQuestion(65, "plant", "主として風によって種子が散布される植物をひとつ選びなさい。", ["アザミ", "オナモミ", "ヤハズエンドウ（カラスノエンドウ）", "スミレ"]),
  makePhotoQuestion(66, "plant", "種子をはじきとばす植物をひとつ選びなさい。", ["ヌスビトハギ", "センダングサ", "カタバミ", "ホオズキ"]),
  makePhotoQuestion(67, "plant", "主に動物によって種子が散布される植物をひとつ選びなさい。", ["アケビ", "アカマツ", "カエデ", "ポプラ"]),
  makePhotoQuestion(68, "plant", "木本植物をひとつ選びなさい。", ["モモ", "バナナ", "パイナップル", "メロン"]),
  makePhotoQuestion(69, "plant", "水底に根を張り、葉や茎の一部が空中に出ている植物（抽水植物）をひとつ選びなさい。", ["エノコログサ", "ガマ", "コバンソウ", "ノビル"]),
  makePhotoQuestion(70, "plant", "水底に根を張り、葉を水面に浮かべている植物（浮葉植物）をひとつ選びなさい。", ["カヤツリグサ", "ススキ", "ヒシ", "スヒシバ"]),
  makePhotoQuestion(71, "plant", "食虫植物をひとつ選びなさい。", ["ウツボカズラ", "サルトリイバラ", "ホタルブクロ", "ムシトリナデシコ"]),
  makePhotoQuestion(72, "plant", "本州の海岸林を構成する植物をひとつ選びなさい。", ["ハイマツ", "カラマツ", "クロマツ", "トドマツ"]),
  makePhotoQuestion(73, "plant", "日本では主に高山帯に生育する植物をひとつ選びなさい。", ["ツリフネソウ", "カンアオイ", "クロユリ", "ホタルブクロ"]),
  makePhotoQuestion(74, "plant", "夕方に開花する植物をひとつ選びなさい。", ["オシロイバナ", "ヒルガオ", "ホウセンカ", "マツバボタン"]),
  makePhotoQuestion(75, "plant", "ヤマノイモの記述として誤りであるものをひとつ選びなさい。", ["つる性の植物である", "雌雄別株である", "一年草である", "食用になる「むかご」をつける"]),
  makePhotoQuestion(76, "reptile", "卵生の動物をひとつ選びなさい。", ["ワニ", "コウモリ", "ジュゴン", "コアラ"]),
  makePhotoQuestion(77, "all", "生物の分類階級で「目」のひとつ下位の階級をひとつ選びなさい。", ["科", "属", "界", "綱"]),
  makePhotoQuestion(78, "all", "生物の学名は二名法により表されます。二名法を確立した人の名前をひとつ選びなさい。", ["アリストテレス", "シーボルト", "ダーウィン", "リンネ"]),
  makePhotoQuestion(79, "insect", "カブトムシの標本の作製方法として、もっとも適しているものをひとつ選びなさい。", ["解剖して筋肉や内臓を取り出し、綿をつめる", "ホルマリンで固定し、アルコール液浸標本にする", "湯で煮沸して筋肉や内臓を取り出し、綿をつめる", "筋肉や内臓は取り出さず、形を整えて乾燥させる"]),
  makePhotoQuestion(80, "plant", "オーストラリア原産の植物をひとつ選びなさい。", ["オオオニバス", "サボテン", "メタセコイア", "ユーカリ"]),
  makePhotoQuestion(81, "all", "環境省のレッドリストの説明として、正しいものをひとつ選びなさい。", ["日本において、外来生物とされている生物の種のリスト", "日本において、狩猟鳥獣とされている野生生物の種のリスト", "日本において、絶滅のおそれのある野生生物の種のリスト", "日本において、農林業被害をおこしている野生生物の種のリスト"]),
  makePhotoQuestion(82, "plant", "日本における外来種をひとつ選びなさい。", ["オオバコ", "カワラナデシコ", "カワラノギク", "ハルジオン"]),
  makePhotoQuestion(83, "plant", "ミツマタの伝統的な用途はなんですか。", ["染料の原料", "和紙の原料", "薬用", "食用"]),
  makePhotoQuestion(84, "plant", "春の七草に含まれる植物をひとつ選びなさい。", ["オオイヌノフグリ", "スミレ", "カタクリ", "ナズナ"]),
  makePhotoQuestion(85, "insect", "次の記述の（ア）にあてはまるものをひとつ選びなさい。ファーブル（1823-1915）は身近な（ア）の観察記録を全10巻で著した。", ["哺乳類", "両生類", "魚類", "昆虫類"]),
  makePhotoQuestion(86, "plant", "植物が光合成によって糖をつくりだす際の原料として、正しい組み合わせをひとつ選びなさい。", ["酸素・二酸化炭素", "酸素・二酸化炭素・水", "酸素・水", "二酸化炭素・水"]),
];

photoQuestions.forEach((question) => {
  const num = Number(question.num.replace(/\D/g, ""));
  if (textOnlyQuestionNums.has(num)) {
    question.textOnlyOptions = true;
  }
  if (statementBlocks[num]) {
    question.statementBlock = statementBlocks[num];
    question.textOnlyOptions = true;
  }
  if (stemVisuals[num] && !promptPhotos[num]) {
    question.stemVisual = stemVisuals[num];
  }
  if (promptPhotos[num]) {
    question.promptPhotoName = promptPhotos[num].name;
    question.promptPhotoImg = promptPhotos[num].img || "";
    question.textOnlyOptions = true;
  }
  if (optionVisuals[num]) {
    question.options.forEach((option, index) => {
      option.visual = optionVisuals[num][index];
    });
  }
});

const fallbackImages = {
  all: img("Biodiversity_of_Colombia.jpg"),
  fish: img("Guppy_pho_0048.jpg"),
  insect: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Papilio_xuthus_front_view_2011-07-16.jpg",
  plant: img("Taraxacum_officinale_001.JPG"),
  bird: img("Eastern_spot-billed_duck_in_Tokyo.jpg"),
  mammal: img("Macropus_giganteus_-_Brunkerville.jpg"),
  amphibian: img("Hyla_japonica_001.jpg"),
  reptile: img("Takydromus_tachydromoides_200705.jpg"),
};

const optionImageOverrides = {
  ガン: img("Greater white-fronted goose (Anser albifrons) in flight.jpg"),
  シミ: img("Lepisma saccharina.jpg"),
  アオキ: img("Aucuba_japonica0.jpg"),
  カリン: img("Pseudocydonia_sinensis_fruit.jpg"),
  ヤツデ: img("Fatsia_japonica1.jpg"),
  キンカン: img("Kumquat.jpeg"),
  カンタン: img("Oecanthus_longicauda_Male.jpg"),
};

const questions = photoQuestions.sort((a, b) => Number(a.num.replace(/\D/g, "")) - Number(b.num.replace(/\D/g, "")));
const NEW_WINDOW_DAYS = 14;

const letters = ["A", "B", "C", "D"];
const app = document.querySelector("#app");

const rubyEntries = [
  ["生物分類技能検定", "せいぶつぶんるいぎのうけんてい"],
  ["生き物", "いきもの"],
  ["生物分類", "せいぶつぶんるい"],
  ["技能検定", "ぎのうけんてい"],
  ["分類上", "ぶんるいじょう"],
  ["分類階級", "ぶんるいかいきゅう"],
  ["環境省", "かんきょうしょう"],
  ["外来生物", "がいらいせいぶつ"],
  ["外来種", "がいらいしゅ"],
  ["野生生物", "やせいせいぶつ"],
  ["絶滅", "ぜつめつ"],
  ["哺乳類", "ほにゅうるい"],
  ["両生類", "りょうせいるい"],
  ["昆虫類", "こんちゅうるい"],
  ["魚類", "ぎょるい"],
  ["鳥類", "ちょうるい"],
  ["爬虫類", "はちゅうるい"],
  ["植物", "しょくぶつ"],
  ["動物", "どうぶつ"],
  ["生物", "せいぶつ"],
  ["分類", "ぶんるい"],
  ["近縁", "きんえん"],
  ["同じ科", "おなじか"],
  ["仲間", "なかま"],
  ["ひげ板", "ひげいた"],
  ["歯", "は"],
  ["偶蹄類", "ぐうているい"],
  ["針状", "はりじょう"],
  ["胎生", "たいせい"],
  ["魚", "さかな"],
  ["産卵", "さんらん"],
  ["河川", "かせん"],
  ["遡上", "そじょう"],
  ["幼虫", "ようちゅう"],
  ["食草", "しょくそう"],
  ["社会性昆虫", "しゃかいせいこんちゅう"],
  ["昆虫", "こんちゅう"],
  ["成虫", "せいちゅう"],
  ["記述", "きじゅつ"],
  ["正しい", "ただしい"],
  ["誤り", "あやまり"],
  ["組み合わせ", "くみあわせ"],
  ["選びなさい", "えらびなさい"],
  ["選び", "えらび"],
  ["一つ", "ひとつ"],
  ["ひとつ", "ひとつ"],
  ["写真", "しゃしん"],
  ["問題", "もんだい"],
  ["解説", "かいせつ"],
  ["正解", "せいかい"],
  ["不正解", "ふせいかい"],
  ["採点準備中", "さいてんじゅんびちゅう"],
  ["確認", "かくにん"],
  ["選択肢", "せんたくし"],
  ["必要", "ひつよう"],
  ["表示", "ひょうじ"],
  ["画像", "がぞう"],
  ["特徴", "とくちょう"],
  ["名前暗記", "なまえあんき"],
  ["習得", "しゅうとく"],
  ["成績", "せいせき"],
  ["最近", "さいきん"],
  ["記録", "きろく"],
  ["解いた", "といた"],
  ["一度", "いちど"],
  ["調子", "ちょうし"],
  ["葉", "は"],
  ["複葉", "ふくよう"],
  ["蜜腺", "みつせん"],
  ["地下茎", "ちかけい"],
  ["栄養分", "えいようぶん"],
  ["貯蔵", "ちょぞう"],
  ["果実", "かじつ"],
  ["花弁", "かべん"],
  ["黄色", "きいろ"],
  ["紅藻", "こうそう"],
  ["藻類", "そうるい"],
  ["種子植物", "しゅししょくぶつ"],
  ["被子植物", "ひししょくぶつ"],
  ["離弁花", "りべんか"],
  ["木本植物", "もくほんしょくぶつ"],
  ["食虫植物", "しょくちゅうしょくぶつ"],
  ["海岸林", "かいがんりん"],
  ["高山帯", "こうざんたい"],
  ["開花", "かいか"],
  ["卵生", "らんせい"],
  ["標本", "ひょうほん"],
  ["作製方法", "さくせいほうほう"],
  ["解剖", "かいぼう"],
  ["筋肉", "きんにく"],
  ["内臓", "ないぞう"],
  ["乾燥", "かんそう"],
  ["固定", "こてい"],
  ["原産", "げんさん"],
  ["伝統的", "でんとうてき"],
  ["用途", "ようと"],
  ["和紙", "わし"],
  ["原料", "げんりょう"],
  ["光合成", "こうごうせい"],
  ["糖", "とう"],
  ["二酸化炭素", "にさんかたんそ"],
  ["酸素", "さんそ"],
  ["水", "みず"],
  ["属", "ぞく"],
  ["科", "か"],
  ["界", "かい"],
  ["綱", "こう"],
  ["目", "もく"],
  ["学名", "がくめい"],
  ["二名法", "にめいほう"],
  ["確立", "かくりつ"],
  ["身近", "みぢか"],
  ["観察記録", "かんさつきろく"],
  ["消化管", "しょうかかん"],
  ["寄生", "きせい"],
  ["肉食性", "にくしょくせい"],
  ["冬眠", "とうみん"],
  ["夏鳥", "なつどり"],
  ["滑空", "かっくう"],
  ["小枝", "こえだ"],
  ["巣", "す"],
  ["尾羽", "おばね"],
  ["鳴く", "なく"],
  ["姿", "すがた"],
  ["図", "ず"],
  ["翅", "はね"],
  ["翼", "つばさ"],
  ["鱗", "うろこ"],
  ["呼吸器官", "こきゅうきかん"],
  ["紡錘形", "ぼうすいけい"],
  ["体側", "たいそく"],
  ["模様", "もよう"],
  ["背びれ", "せびれ"],
  ["脂びれ", "あぶらびれ"],
  ["口", "くち"],
  ["餌", "えさ"],
  ["食べ方", "たべかた"],
  ["動く", "うごく"],
  ["低く", "ひくく"],
  ["広い", "ひろい"],
  ["広げ", "ひろげ"],
  ["浅く", "あさく"],
  ["旋回", "せんかい"],
  ["飛び", "とび"],
  ["泳ぐ", "およぐ"],
  ["取り入れ", "とりいれ"],
  ["固い", "かたい"],
  ["砕く", "くだく"],
  ["上下", "じょうげ"],
  ["左右", "さゆう"],
  ["樹液", "じゅえき"],
  ["頭胸部", "とうきょうぶ"],
  ["腹部", "ふくぶ"],
  ["頭部", "とうぶ"],
  ["胸部", "きょうぶ"],
  ["脚", "あし"],
  ["本", "ほん"],
  ["何本", "なんぼん"],
  ["門", "もん"],
  ["甲殻類", "こうかくるい"],
  ["棘皮動物", "きょくひどうぶつ"],
  ["刺胞動物", "しほうどうぶつ"],
  ["脊索動物", "せきさくどうぶつ"],
  ["巻貝", "まきがい"],
  ["田んぼ", "たんぼ"],
  ["群", "ぐん"],
  ["陸上生活", "りくじょうせいかつ"],
  ["適応", "てきおう"],
  ["前足", "まえあし"],
  ["後足", "うしろあし"],
  ["飛膜", "ひまく"],
  ["全長", "ぜんちょう"],
  ["水中生活者", "すいちゅうせいかつしゃ"],
  ["樹洞", "じゅどう"],
  ["泥", "どろ"],
  ["地上", "ちじょう"],
  ["水底", "すいてい"],
  ["水中", "すいちゅう"],
  ["根", "ね"],
  ["水面", "すいめん"],
  ["浮かべ", "うかべ"],
  ["抽水植物", "ちゅうすいしょくぶつ"],
  ["浮葉植物", "ふようしょくぶつ"],
  ["散布", "さんぷ"],
  ["風", "かぜ"],
  ["主", "おも"],
  ["川", "かわ"],
  ["海", "うみ"],
  ["春", "はる"],
  ["七草", "ななくさ"],
  ["生育", "せいいく"],
  ["海藻", "かいそう"],
  ["黄色", "きいろ"],
  ["花", "はな"],
  ["咲かせ", "さかせ"],
  ["野菜", "やさい"],
  ["重なって", "かさなって"],
  ["結球", "けっきゅう"],
  ["波", "なみ"],
  ["太い", "ふとい"],
  ["葉柄", "ようへい"],
  ["草", "くさ"],
  ["綿毛", "わたげ"],
  ["覆われ", "おおわれ"],
  ["白", "しろ"],
  ["紅藻", "こうそう"],
  ["褐藻", "かっそう"],
  ["菌類", "きんるい"],
  ["小動物", "しょうどうぶつ"],
  ["腐植物", "ふしょくぶつ"],
  ["子房柄", "しぼうへい"],
  ["種子", "しゅし"],
  ["日本", "にほん"],
  ["短い", "みじかい"],
  ["戻って", "もどって"],
  ["音", "おと"],
  ["集団", "しゅうだん"],
  ["越冬", "えっとう"],
  ["飛ばします", "とばします"],
  ["植えられ", "うえられ"],
  ["砂", "すな"],
  ["強い", "つよい"],
  ["入って", "はいって"],
  ["利用", "りよう"],
];

const kanjiReadings = {
  一: "いち", 七: "なな", 上: "うえ", 下: "した", 不: "ふ", 両: "りょう", 中: "なか", 丸: "まる", 主: "おも", 乳: "にゅう", 乾: "かん",
  二: "に", 人: "ひと", 他: "ほか", 代: "だい", 仲: "なか", 会: "かい", 伝: "でん", 似: "に", 位: "い", 体: "からだ",
  何: "なに", 作: "さく", 使: "つか", 例: "れい", 係: "けい", 保: "ほ", 倍: "ばい", 像: "ぞう", 先: "さき", 光: "こう",
  児: "じ", 全: "ぜん", 共: "きょう", 内: "ない", 写: "しゃ", 冬: "ふゆ", 出: "で", 分: "ぶん", 別: "べつ", 前: "まえ",
  剖: "ぼう", 加: "か", 助: "じょ", 動: "どう", 包: "ほう", 化: "か", 単: "たん", 卵: "らん", 原: "げん", 取: "と",
  口: "くち", 右: "みぎ", 合: "あ", 同: "おな", 名: "な", 向: "む", 含: "ふく", 吸: "す", 呼: "こ", 和: "わ",
  哺: "ほ", 問: "もん", 器: "き", 嚢: "のう", 回: "かい", 図: "ず", 固: "こ", 国: "こく", 土: "つち", 地: "ち",
  境: "きょう", 壁: "かべ", 変: "へん", 夏: "なつ", 夕: "ゆう", 外: "がい", 多: "おお", 大: "おお", 始: "はじ", 姿: "すがた",
  子: "こ", 孔: "こう", 学: "がく", 安: "あん", 完: "かん", 官: "かん", 定: "てい", 実: "じつ", 害: "がい", 家: "いえ",
  寄: "き", 察: "さつ", 対: "たい", 小: "こ", 少: "しょう", 尾: "お", 属: "ぞく", 山: "やま", 岸: "がん", 川: "かわ",
  州: "しゅう", 巣: "す", 左: "ひだり", 巻: "ま", 布: "ふ", 帯: "たい", 平: "へい", 年: "ねん", 幼: "よう", 底: "そこ",
  度: "ど", 弁: "べん", 張: "は", 形: "かたち", 待: "ま", 後: "あと", 得: "とく", 復: "ふく", 徴: "ちょう", 必: "ひつ",
  応: "おう", 思: "おも", 性: "せい", 恒: "こう", 意: "い", 態: "たい", 成: "せい", 房: "ぼう", 扁: "へん", 技: "ぎ",
  択: "たく", 抽: "ちゅう", 捕: "ほ", 散: "さん", 数: "すう", 整: "せい", 文: "ぶん", 料: "りょう", 新: "しん", 方: "ほう",
  日: "にち", 昆: "こん", 明: "めい", 春: "はる", 時: "じ", 暗: "あん", 更: "こう", 最: "さい", 有: "ゆう", 期: "き",
  木: "き", 未: "み", 本: "ほん", 来: "らい", 林: "りん", 果: "か", 枝: "えだ", 染: "せん", 栄: "えい", 株: "かぶ",
  根: "ね", 格: "かく", 植: "しょく", 検: "けん", 業: "ぎょう", 構: "こう", 標: "ひょう", 次: "つぎ", 正: "せい", 残: "のこ",
  段: "だん", 母: "はは", 比: "ひ", 毛: "け", 気: "き", 水: "みず", 池: "いけ", 河: "か", 沸: "ふつ", 法: "ほう",
  注: "ちゅう", 活: "かつ", 浮: "う", 海: "うみ", 浸: "しん", 消: "しょう", 液: "えき", 済: "ず", 渡: "わた", 温: "おん",
  湖: "みずうみ", 湯: "ゆ", 滅: "めつ", 滑: "かつ", 炭: "たん", 無: "む", 焼: "や", 煮: "に", 熟: "じゅく", 燥: "そう",
  爪: "つめ", 爬: "は", 物: "もの", 特: "とく", 状: "じょう", 狩: "しゅ", 猛: "もう", 猟: "りょう", 獣: "じゅう", 獲: "え",
  環: "かん", 生: "せい", 産: "さん", 用: "よう", 画: "が", 界: "かい", 異: "い", 発: "はつ", 白: "しろ", 的: "てき",
  皮: "ひ", 目: "もく", 直: "ちょく", 省: "しょう", 真: "しん", 眠: "みん", 知: "し", 硬: "こう", 確: "かく", 示: "し",
  社: "しゃ", 禽: "きん", 科: "か", 秒: "びょう", 稚: "ち", 種: "しゅ", 空: "そら", 窓: "まど", 立: "た", 筋: "すじ",
  答: "こた", 策: "さく", 管: "かん", 節: "せつ", 糖: "とう", 紅: "こう", 紙: "かみ", 級: "きゅう", 素: "そ", 細: "こま",
  組: "くみ", 結: "けつ", 統: "とう", 絶: "ぜつ", 続: "ぞく", 綱: "こう", 綿: "わた", 線: "せん", 練: "れん", 縁: "えん",
  績: "せき", 群: "ぐん", 翅: "はね", 習: "しゅう", 考: "かんが", 聞: "き", 肉: "にく", 肢: "し", 育: "そだ", 肺: "はい",
  胎: "たい", 胞: "ほう", 胸: "むね", 能: "のう", 脈: "みゃく", 脚: "あし", 腹: "はら", 腺: "せん", 膚: "ふ", 臓: "ぞう",
  色: "いろ", 花: "はな", 芽: "め", 若: "わか", 茎: "くき", 草: "くさ", 菜: "な", 葉: "は", 著: "ちょ", 蒲: "かば",
  蔵: "ぞう", 薬: "やく", 藻: "そう", 虫: "むし", 蛹: "さなぎ", 蜜: "みつ", 行: "い", 表: "ひょう", 袋: "ふくろ", 被: "ひ",
  補: "ほ", 裸: "ら", 製: "せい", 複: "ふく", 要: "よう", 覆: "おお", 見: "み", 親: "おや", 観: "かん", 解: "かい",
  記: "き", 認: "にん", 語: "ご", 誤: "ご", 説: "せつ", 読: "よ", 調: "しら", 貯: "ちょ", 賞: "しょう", 赤: "あか",
  走: "はし", 足: "あし", 身: "み", 軟: "なん", 転: "てん", 較: "かく", 輪: "わ", 農: "のう", 辺: "へん", 込: "こ",
  近: "きん", 述: "じゅつ", 追: "つい", 途: "と", 通: "つう", 連: "れん", 遊: "ゆう", 運: "うん", 達: "たつ", 違: "ちが",
  遡: "そ", 適: "てき", 選: "えら", 部: "ぶ", 郭: "かく", 酸: "さん", 野: "の", 鋭: "するど", 録: "ろく", 鎌: "かま",
  長: "なが", 門: "もん", 開: "ひら", 間: "ま", 関: "かん", 降: "こう", 陸: "りく", 階: "かい", 際: "さい", 雄: "おす",
  集: "あつ", 雌: "めす", 離: "り", 面: "めん", 韓: "かん", 順: "じゅん", 頭: "あたま", 題: "だい", 類: "るい", 風: "かぜ",
  食: "た", 養: "よう", 餌: "えさ", 首: "くび", 骨: "ほね", 高: "たか", 魚: "さかな", 鱗: "うろこ", 鳥: "とり", 鳴: "な",
  黄: "き"
};

function withRuby(text) {
  if (!text) return "";
  const placeholders = [];
  let output = escapeHtml(text);
  rubyEntries
    .slice()
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([word, reading]) => {
      const escapedWord = escapeRegExp(escapeHtml(word));
      output = output.replace(new RegExp(escapedWord, "g"), (match) => {
        const token = `__RUBY_${placeholders.length}__`;
        placeholders.push(`<ruby>${match}<rt>${reading}</rt></ruby>`);
        return token;
      });
    });
  output = output.replace(/[\u3400-\u9fff]/gu, (char) => `<ruby>${char}<rt>${kanjiReadings[char] || "?"}</rt></ruby>`);
  placeholders.forEach((html, index) => {
    output = output.replace(`__RUBY_${index}__`, html);
  });
  return output;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const state = {
  view: "home",
  grade: 4,
  category: "all",
  showKr: true,
  musicEnabled: false,
  session: [],
  index: 0,
  answers: [],
  recordedAnswers: [],
  startedAt: 0,
  lastResult: null,
  progress: loadProgress(),
};

let audioContext = null;
let musicTimer = null;
let musicStep = 0;
const musicNotes = [392, 493.88, 587.33, 493.88, 440, 523.25, 659.25, 523.25];

function toggleMusic() {
  if (state.musicEnabled) {
    stopMusic();
  } else {
    startMusic();
  }
  render();
}

function startMusic() {
  ensureAudio();
  if (!audioContext) return;
  state.musicEnabled = true;
  playMusicNote();
  musicTimer = window.setInterval(playMusicNote, 680);
}

function ensureAudio() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  audioContext ||= new AudioCtor();
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function stopMusic() {
  state.musicEnabled = false;
  if (musicTimer) window.clearInterval(musicTimer);
  musicTimer = null;
}

function playMusicNote() {
  if (!audioContext || !state.musicEnabled) return;
  const now = audioContext.currentTime;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = "triangle";
  osc.frequency.value = musicNotes[musicStep % musicNotes.length];
  musicStep += 1;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.028, now + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.52);
  osc.connect(gain).connect(audioContext.destination);
  osc.start(now);
  osc.stop(now + 0.54);
}

function launchConfetti() {
  const layer = document.createElement("div");
  layer.className = "confetti-layer";
  const colors = ["#60a5fa", "#34d399", "#facc15", "#fb7185", "#a78bfa", "#f97316"];
  for (let i = 0; i < 72; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.setProperty("--x", `${Math.random() * 320 - 160}px`);
    piece.style.setProperty("--y", `${Math.random() * 220 + 180}px`);
    piece.style.setProperty("--r", `${Math.random() * 540 - 270}deg`);
    piece.style.setProperty("--c", colors[i % colors.length]);
    piece.style.left = `${45 + Math.random() * 10}%`;
    piece.style.top = `${22 + Math.random() * 12}%`;
    layer.appendChild(piece);
  }
  document.body.appendChild(layer);
  playCheer();
  window.setTimeout(() => layer.remove(), 3100);
}

function playCheer() {
  const ctx = ensureAudio();
  if (!ctx) return;
  const now = ctx.currentTime;
  [0.02, 0.16, 0.31, 0.72, 0.9, 1.08, 1.55, 1.72, 1.92, 2.28, 2.48].forEach((offset) => {
    playClap(ctx, now + offset);
  });
  [660, 880, 990].forEach((freq, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + index * 0.035);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.35, now + 2.25);
    gain.gain.setValueAtTime(0.0001, now + index * 0.035);
    gain.gain.exponentialRampToValueAtTime(0.018, now + 0.08 + index * 0.035);
    gain.gain.exponentialRampToValueAtTime(0.012, now + 1.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.55);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now + index * 0.035);
    osc.stop(now + 2.6);
  });
}

function playClap(ctx, startTime) {
  const bufferSize = Math.floor(ctx.sampleRate * 0.09);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }
  const noise = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  noise.buffer = buffer;
  filter.type = "bandpass";
  filter.frequency.value = 1600 + Math.random() * 900;
  filter.Q.value = 0.8;
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(0.055, startTime + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.085);
  noise.connect(filter).connect(gain).connect(ctx.destination);
  noise.start(startTime);
  noise.stop(startTime + 0.095);
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem("biomaster-progress")) || { sessions: [], answers: {} };
  } catch {
    return { sessions: [], answers: {} };
  }
}

function saveProgress() {
  try {
    localStorage.setItem("biomaster-progress", JSON.stringify(state.progress));
  } catch {
    // Storage can fail in private/in-app browsers; keep the in-memory score usable.
  }
}

function availableQuestions(category, grade) {
  return questions.filter((q) => {
    const categoryMatch = category === "all" || q.category === category;
    return categoryMatch && q.grade <= grade;
  });
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function startQuiz(category) {
  const pool = availableQuestions(category, state.grade).sort((a, b) => Number(a.num.replace(/\D/g, "")) - Number(b.num.replace(/\D/g, "")));

  state.category = category;
  state.session = pool;
  state.index = 0;
  state.answers = new Array(state.session.length).fill(null);
  state.recordedAnswers = new Array(state.session.length).fill(false);
  state.startedAt = Date.now();
  state.view = "quiz";
  render();
}

function submitAnswer(choice) {
  if (state.answers[state.index] !== null) return;
  const q = state.session[state.index];
  const isCorrect = q.answer !== null && choice === q.answer;
  state.answers[state.index] = choice;
  recordQuestionAnswer(q, choice, state.index);
  render();
  if (isCorrect) launchConfetti();
}

function recordQuestionAnswer(q, choice, index) {
  if (state.recordedAnswers[index] || q.answer === null) return;
  const record = state.progress.answers[q.id] || { correct: 0, wrong: 0, streak: 0 };
  if (choice === q.answer) {
    record.correct += 1;
    record.streak += 1;
  } else {
    record.wrong += 1;
    record.streak = 0;
  }
  state.progress.answers[q.id] = record;
  state.recordedAnswers[index] = true;
  saveProgress();
}

function nextQuestion() {
  if (state.index < state.session.length - 1) {
    state.index += 1;
    render();
    return;
  }
  finishQuiz();
}

function finishQuiz() {
  const audited = state.session.filter((q) => q.answer !== null);
  const correct = state.session.reduce((sum, q, i) => sum + (q.answer !== null && state.answers[i] === q.answer ? 1 : 0), 0);
  const wrongIds = state.session.filter((q, i) => q.answer !== null && state.answers[i] !== q.answer).map((q) => q.id);
  const result = {
    id: String(Date.now()),
    date: new Date().toISOString(),
    category: state.category,
    grade: state.grade,
    total: audited.length || state.session.length,
    correct,
    wrongIds,
    timeSeconds: Math.round((Date.now() - state.startedAt) / 1000),
  };

  state.progress.sessions = [result, ...state.progress.sessions].slice(0, 30);
  state.lastResult = result;
  saveProgress();
  state.view = "result";
  render();
}

function percent(value, total) {
  return total ? Math.round((value / total) * 100) : 0;
}

function isNewQuestion(question) {
  if (!question.addedAt) return false;
  const addedTime = new Date(`${question.addedAt}T00:00:00`).getTime();
  if (Number.isNaN(addedTime)) return false;
  return Date.now() - addedTime <= NEW_WINDOW_DAYS * 24 * 60 * 60 * 1000;
}

function newCountForCategory(category, grade) {
  return availableQuestions(category, grade).filter(isNewQuestion).length;
}

function masteredCount(pool) {
  return pool.filter((q) => q.answer !== null && (state.progress.answers[q.id]?.streak || 0) >= 3).length;
}

function render() {
  if (state.view === "quiz") renderQuiz();
  else if (state.view === "result") renderResult();
  else if (state.view === "stats") renderStats();
  else renderHome();
}

function shell(content) {
  app.innerHTML = `
    <main class="app-shell view-${state.view}">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">Bio</div>
          <div>
            <h1>BioMaster</h1>
            <p>${withRuby("生物分類技能検定")} ${withRuby("対策")} · 아들용 실사 사진 퀴즈</p>
          </div>
        </div>
        <div class="topbar-actions">
          <button class="music-button" data-action="toggle-music">${state.musicEnabled ? "♪ ON" : "♪ OFF"}</button>
          <button class="lang-toggle" data-action="toggle-lang">${state.showKr ? "한국어 ON" : "한국어 OFF"}</button>
        </div>
      </header>
      ${content}
    </main>
  `;
}

function renderHome() {
  const grade4Active = state.grade === 4 ? "active" : "";
  const grade3Active = state.grade === 3 ? "active" : "";
  const cards = Object.entries(categories)
    .map(([key, cat]) => {
      const pool = availableQuestions(key, state.grade);
      const done = masteredCount(pool);
      const pct = percent(done, pool.length);
      const newCount = newCountForCategory(key, state.grade);
      return `
        <button class="category-card" data-start="${key}" style="border-top: 4px solid ${cat.accent}">
          <div class="category-head">
            <span class="photo-pill">${withRuby("実写写真")}つき</span>
            ${newCount ? `<span class="new-pill">NEW ${newCount}</span>` : ""}
            <span>${pool.length}${withRuby("問")}</span>
          </div>
          <strong>${withRuby(cat.ja)}</strong>
          ${state.showKr ? `<small>${cat.kr}</small>` : ""}
          <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
          <small>${withRuby("習得")} ${pct}%</small>
        </button>
      `;
    })
    .join("");

  shell(`
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">PHOTO QUIZ · ${withRuby("生き物分類")}</p>
        <h2>${withRuby("写真を見て、分類の特徴で答える練習アプリ")}</h2>
        <p class="support">${withRuby("問題文は日本語、必要なら韓国語の補助文も表示します。選択肢はすべて実写画像なので、名前暗記だけでなく姿を見て分類できるように作っています。")}</p>
        <div class="controls">
          <div class="segmented" aria-label="grade">
            <button class="${grade4Active}" data-grade="4">4${withRuby("級")}</button>
            <button class="${grade3Active}" data-grade="3">3${withRuby("級")}</button>
          </div>
          <button class="primary-button" data-start="all">${withRuby("全カテゴリを始める")}</button>
          <button class="ghost-button" data-view="stats">${withRuby("成績を見る")}</button>
        </div>
      </div>
      <div class="hero-photo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Papilio_xuthus_front_view_2011-07-16.jpg" alt="実写のアゲハチョウ" />
        <span>${withRuby("全選択肢に実写画像を使用")}</span>
      </div>
    </section>
    <section class="study-panel">
      <div class="section-title">
        <h3>カテゴリを${withRuby("選ぶ")}</h3>
        <p>${withRuby("間違えた問題は次回出やすくなります")}</p>
      </div>
      <div class="category-grid">${cards}</div>
    </section>
  `);
}

function renderQuiz() {
  const q = state.session[state.index];
  const selected = state.answers[state.index];
  const answered = selected !== null;
  const hasStemVisual = Boolean(q.promptPhotoName || q.stemVisual);
  const correctCount = state.session.reduce((sum, item, i) => sum + (item.answer !== null && state.answers[i] === item.answer ? 1 : 0), 0);
  const wrongCount = state.answers.filter((answer, i) => answer !== null && state.session[i].answer !== null && answer !== state.session[i].answer).length;
  const progress = percent(state.index + (answered ? 1 : 0), state.session.length);
  const statementBlock = q.statementBlock
    ? `<div class="statement-block">${q.statementBlock.map(([label, text]) => `<p><b>${label}.</b> ${withRuby(text)}</p>`).join("")}</div>`
    : "";
  const optionCards = q.options
    .map((option, i) => {
      let cardState = "idle";
      if (answered && q.answer === null && i === selected) cardState = "selected";
      if (answered && q.answer !== null && i === q.answer) cardState = selected === q.answer ? "correct" : "reveal";
      if (answered && q.answer !== null && i === selected && selected !== q.answer) cardState = "wrong";
      const badge = cardState === "correct" || cardState === "reveal" ? "✓" : cardState === "wrong" ? "×" : "";
      const visualBlock = option.visual
        ? `<div class="option-image option-diagram">${option.visual}</div>`
        : q.textOnlyOptions
          ? ""
          : `<div class="option-image">
              <span class="image-loading">写真を読み込み中</span>
              <img src="${option.img || ""}" alt="${option.ja}の実写写真" loading="eager" data-photo data-name="${option.ja}" data-category="${q.category}" />
            </div>`;
      return `
        <button class="option-card ${cardState} ${option.visual ? "has-diagram" : ""} ${q.textOnlyOptions ? "text-only" : ""}" data-choice="${i}" ${answered ? "disabled" : ""}>
          ${visualBlock}
          ${badge ? `<span class="state-badge">${badge}</span>` : ""}
          <div class="option-body">
            <div class="option-name"><span class="letter">${letters[i]}</span><span>${withRuby(option.ja)}</span></div>
            ${state.showKr ? `<small>${option.kr}</small>` : ""}
          </div>
        </button>
      `;
    })
    .join("");

  shell(`
    <section class="quiz-panel ${hasStemVisual ? "stem-visual-mode" : ""} ${q.textOnlyOptions ? "text-option-mode" : ""}">
      <div class="quiz-head">
        <div class="quiz-row">
          <button class="ghost-button" data-view="home">← ホーム</button>
          <button class="music-button music-mini" data-action="toggle-music">${state.musicEnabled ? "♪ ON" : "♪ OFF"}</button>
          <div class="score-pills">
            <span class="ok-pill">✓ ${correctCount}</span>
            <span class="bad-pill">× ${wrongCount}</span>
          </div>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
      </div>
      <div class="question-box ${hasStemVisual ? "has-stem-visual" : ""}">
        <p class="question-num">${withRuby(categories[q.category]?.ja || categories[state.category].ja)} · ${withRuby(q.num)} · ${state.index + 1}/${state.session.length}</p>
        <p class="question-text">${withRuby(q.ja)}</p>
        ${statementBlock}
        ${q.stemVisual ? `<div class="stem-visual option-diagram">${q.stemVisual}</div>` : ""}
        ${q.promptPhotoName ? `
          <div class="stem-visual prompt-photo">
            <span class="image-loading">写真を読み込み中</span>
            <img src="${q.promptPhotoImg || ""}" alt="${q.promptPhotoName}の実写写真" loading="eager" data-photo data-name="${q.promptPhotoName}" data-category="${q.category}" />
          </div>
        ` : ""}
        ${state.showKr ? `<p class="kr-text">${q.kr}</p>` : ""}
      </div>
      <div class="option-grid">${optionCards}</div>
      <details class="hint-box">
        <summary>${withRuby("ヒントを見る")}</summary>
        <p>${withRuby(q.hint)}</p>
      </details>
      ${answered ? `<div class="explain-box ${q.answer === null ? "pending" : ""}"><strong>${q.answer === null ? withRuby("採点準備中です。") : selected === q.answer ? withRuby("正解です。") : withRuby("答えは ") + withRuby(q.options[q.answer].ja) + withRuby(" です。")}</strong><br />${withRuby(buildFeedback(q, selected))}</div>` : ""}
      <div class="quiz-actions">
        <button class="danger-button" data-view="home">やめる</button>
        <button class="primary-button" data-next ${answered ? "" : "disabled"}>${state.index === state.session.length - 1 ? withRuby("結果を見る") : withRuby("次へ")}</button>
      </div>
    </section>
  `);
  wireImages();
}

function renderResult() {
  const result = state.lastResult;
  const pct = percent(result.correct, result.total);
  const wrongItems = result.wrongIds
    .map((id) => questions.find((q) => q.id === id))
    .filter(Boolean)
    .map((q) => `<div class="wrong-item"><strong>${withRuby(q.num)} ${withRuby(q.ja)}</strong><br /><small>${withRuby("答え")}: ${withRuby(q.options[q.answer].ja)}</small></div>`)
    .join("");
  shell(`
    <section class="result-panel">
      <div class="section-title">
        <h3>${withRuby(pct >= 80 ? "よくできました" : pct >= 50 ? "もう少しで安定します" : "復習チャンスです")}</h3>
        <p>${result.timeSeconds}${withRuby("秒")}</p>
      </div>
      <div class="result-score"><strong>${pct}%</strong></div>
      <div class="stats-grid">
        <div class="stat-card">${withRuby("正解")}<b>${result.correct}</b></div>
        <div class="stat-card">${withRuby("不正解")}<b>${result.total - result.correct}</b></div>
        <div class="stat-card">${withRuby("問題数")}<b>${result.total}</b></div>
      </div>
      <div class="wrong-list">
        ${wrongItems || `<div class="wrong-item"><strong>${withRuby("間違えた問題はありません。")}</strong><br /><small>${withRuby("この調子です。")}</small></div>`}
      </div>
      <div class="quiz-actions">
        <button class="ghost-button" data-view="home">ホームへ</button>
        <button class="primary-button" data-retry>${withRuby("もう一度")}</button>
      </div>
    </section>
  `);
}

function renderStats() {
  const answeredIds = Object.keys(state.progress.answers);
  const mastered = answeredIds.filter((id) => state.progress.answers[id].streak >= 3).length;
  const totalAnswered = Object.values(state.progress.answers).reduce((sum, item) => sum + item.correct + item.wrong, 0);
  const pendingAudit = questions.filter((q) => q.answer === null).length;
  const recent = state.progress.sessions
    .slice(0, 8)
    .map((s) => {
      const date = new Date(s.date).toLocaleDateString("ja-JP", { month: "2-digit", day: "2-digit" });
      return `<div class="history-row"><span>${date} · ${withRuby(categories[s.category].ja)} · ${s.grade}${withRuby("級")}</span><b>${s.correct}/${s.total}</b></div>`;
    })
    .join("");
  const mastery = Object.entries(categories)
    .filter(([key]) => key !== "all")
    .map(([key, cat]) => {
      const pool = availableQuestions(key, state.grade);
      const pct = percent(masteredCount(pool), pool.length);
      return `<div class="mastery-row"><span>${withRuby(cat.ja)}${state.showKr ? ` · ${cat.kr}` : ""}</span><b>${pct}%</b><div class="progress-track" style="grid-column:1 / -1"><div class="progress-fill" style="width:${pct}%"></div></div></div>`;
    })
    .join("");
  shell(`
    <section class="stats-panel">
      <div class="section-title">
        <h3>${withRuby("成績ダッシュボード")}</h3>
        <button class="ghost-button" data-view="home">ホームへ</button>
      </div>
      <div class="stats-grid">
        <div class="stat-card">${withRuby("解いた回数")}<b>${totalAnswered}</b></div>
        <div class="stat-card">${withRuby("習得済み")}<b>${mastered}</b></div>
        <div class="stat-card">${withRuby("正解確認待ち")}<b>${pendingAudit}</b></div>
      </div>
      <div class="section-title" style="margin-top:22px">
        <h3>${withRuby("カテゴリ別 習熟度")}</h3>
        <p>3${withRuby("回連続正解で習得")}</p>
      </div>
      <div class="mastery-list">${mastery}</div>
      <div class="section-title" style="margin-top:22px">
        <h3>${withRuby("最近の記録")}</h3>
        <button class="danger-button" data-reset>${withRuby("記録リセット")}</button>
      </div>
      <div class="history-list">${recent || `<div class="history-row"><span>${withRuby("まだ記録がありません")}</span><b>0</b></div>`}</div>
    </section>
  `);
}

function wireImages() {
  document.querySelectorAll("[data-photo]").forEach((photo) => {
    const status = photo.previousElementSibling;
    photo.addEventListener("load", () => status.classList.add("hidden"));
    photo.addEventListener("error", () => {
      const fallback = fallbackImages[photo.dataset.category] || fallbackImages.all;
      if (photo.src !== fallback) {
        photo.src = fallback;
        status.textContent = "関連写真を読み込み中";
        return;
      }
      status.textContent = "画像を読み込めません";
      status.className = "image-error";
      photo.classList.add("hidden");
    });
    if (!photo.getAttribute("src")) resolveOptionImage(photo, status);
    if (photo.complete && photo.naturalWidth > 0) status.classList.add("hidden");
  });
}

async function resolveOptionImage(photo, status) {
  const name = normalizeImageQuery(photo.dataset.name || "");
  const fallback = fallbackImages[photo.dataset.category] || fallbackImages.all;
  if (!name) {
    photo.src = fallback;
    return;
  }
  if (optionImageOverrides[name]) {
    photo.src = optionImageOverrides[name];
    return;
  }
  try {
    const response = await fetch(`https://ja.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`);
    if (!response.ok) throw new Error("summary not found");
    const data = await response.json();
    photo.src = data?.originalimage?.source || data?.thumbnail?.source || fallback;
  } catch {
    photo.src = fallback;
  } finally {
    status.textContent = "写真を読み込み中";
  }
}

function normalizeImageQuery(name) {
  if (/^(A|B|C|D)-/.test(name) || /^図\d$/.test(name) || /^葉\d$/.test(name) || /^シルエット\d$/.test(name)) return "";
  return name.replace(/（.*?）|\(.*?\)/g, "").replace(/[0-9.]/g, "").trim();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.action === "toggle-lang") {
    state.showKr = !state.showKr;
    render();
  }
  if (target.dataset.action === "toggle-music") toggleMusic();
  if (target.dataset.grade) {
    state.grade = Number(target.dataset.grade);
    render();
  }
  if (target.dataset.start) startQuiz(target.dataset.start);
  if (target.dataset.choice) submitAnswer(Number(target.dataset.choice));
  if (target.dataset.next !== undefined) nextQuestion();
  if (target.dataset.view) {
    state.view = target.dataset.view;
    render();
  }
  if (target.dataset.retry !== undefined) startQuiz(state.category);
  if (target.dataset.reset !== undefined) {
    state.progress = { sessions: [], answers: {} };
    saveProgress();
    render();
  }
});

render();
