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

const examYears = [
  { id: "all", label: "전체" },
  { id: 2023, label: "2023" },
  { id: 2024, label: "2024" },
  { id: 2025, label: "2025" },
];

const img = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=720`;
const localImg = (file) => `./assets/stems/${file}`;
const clipVisual = (file, alt) => `<img class="stem-clip" src="${localImg(file)}" alt="${alt}" loading="eager" />`;

const answerDataByYear = {
  2023: {
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
  17: [0, "テントウムシと同じ昆虫綱に入る選択肢はアワフキムシです。ザトウムシはクモ綱、ツリガネムシは原生生物、ハリガネムシは類線形動物です。"],
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
  "46-1": [2, "写真の動物は背中に縞のあるシマリスです。"],
  "46-2": [3, "写真の鳥はスズメです。"],
  "46-3": [3, "写真の爬虫類は壁などにもつくヤモリです。"],
  "46-4": [3, "写真の昆虫は大あごをもつノコギリクワガタです。"],
  "46-5": [3, "写真の動物は背面に複数の殻板をもつヒザラガイです。"],
  "46-6": [0, "写真の植物は厚くとげのある葉をもつアロエです。"],
  "46-7": [1, "写真の花はサクラです。"],
  "46-8": [0, "写真の植物は反り返った花弁が特徴のカタクリです。"],
  "46-9": [0, "写真の種子はアズキです。"],
  "46-10": [3, "写真のつる植物の果実はヘチマです。"],
  "87-1": [0, "写真の葉縁には鋸歯があります。"],
  "87-2": [1, "この葉は3枚ではなく、5枚の小葉からなります。"],
  "87-3": [1, "葉の表面に長毛は密生していないため、この記述は誤りです。"],
  "87-4": [1, "この葉は羽状複葉ではありません。"],
  "87-5": [3, "写真の植物はヤブカラシです。"],
},
  2024: {
  1: [1, "カンガルーは有袋類です。腹部の育児のうで子を育てます。"],
  2: [2, "オコジョとイタチはどちらもイタチ科の哺乳類です。"],
  3: [1, "キクガシラコウモリは翼で羽ばたいて飛ぶ哺乳類です。"],
  4: [1, "カケスはカラス科の鳥です。"],
  5: [1, "オオタカとトビはどちらもタカ目の猛禽類です。"],
  6: [1, "カルガモはカモ類らしい丸い体と短めの首、水面に浮く姿のシルエットを選びます。"],
  7: [2, "長い尾と大きな体のシルエットはキジです。"],
  8: [0, "カワウは水辺で泳ぐ鳥で、足にみずかきが発達しています。"],
  9: [1, "カナヘビとイシガメはどちらも爬虫類です。"],
  10: [0, "アマガエルは指先に吸盤があり、木や葉の上に登ることができます。"],
  11: [1, "アカエイはサメと同じ軟骨魚類です。"],
  12: [2, "タイとスズキはどちらもスズキ目の魚です。"],
  13: [2, "図の魚は体高が低く、背びれが長く、尾びれが深く二叉するシイラです。"],
  14: [0, "横に張り出した頭部をもつシルエットはシュモクザメです。"],
  15: [1, "コイは口ひげをもつ魚です。"],
  16: [3, "コガネムシは甲虫で、前翅がかたくなった上翅をもちます。"],
  17: [0, "ケラはバッタと同じ直翅目の昆虫です。"],
  18: [1, "カマキリはカマキリ目で、セミ・アメンボ・アブラムシの属するカメムシ目とは異なります。"],
  19: [2, "ナナホシテントウの成虫は左右に動くあごでアブラムシなどをかみます。"],
  20: [3, "ワラジムシは甲殻類です。サソリ、ムカデ、ヤスデは多足類や鋏角類に属します。"],
  21: [1, "タコとウミウシはどちらも軟体動物です。"],
  22: [1, "横に広がった甲と長い遊泳脚をもつカニのシルエットはガザミです。"],
  23: [3, "ダイオウイカを含むイカの腕は、腕8本と触腕2本を合わせて10本です。"],
  24: [1, "ヘゴは木生シダの仲間で、シダ植物です。"],
  25: [2, "ダイコンはアブラナ科の植物です。"],
  26: [2, "ハマダイコンはナズナと同じアブラナ科です。"],
  27: [1, "コブシはモクレン科の植物です。"],
  28: [3, "セリはセロリと同じセリ科です。"],
  29: [1, "シュンギクはレタスと同じキク科です。"],
  30: [1, "図の野菜はトマトです。"],
  31: [3, "図の野菜は花序を食べるカリフラワーです。"],
  32: [2, "図の実は殻斗に包まれたクヌギのどんぐりです。"],
  33: [2, "ナスは紫色の花をつける植物です。"],
  34: [0, "アザミは小さな花が多数集まった頭花をつくります。"],
  35: [1, "キクは合弁花冠の花をもつキク科植物です。"],
  36: [2, "図の葉はだ円形です。"],
  37: [3, "ササの葉脈は平行脈です。"],
  38: [1, "写真のように葉が向かい合ってつくつき方は対生です。"],
  39: [3, "ネギは枝分かれしないひげ状の根をもつ単子葉植物です。"],
  40: [1, "マテバシイはかたい殻をもつ堅果（どんぐり）をつけます。"],
  41: [0, "バイカモは淡水に生育する種子植物です。"],
  42: [1, "ドクダミは特有の臭気があり、白い花弁のように見える部分は総苞片です。"],
  43: [3, "ヒジキは褐藻の仲間です。"],
  44: [1, "シメジは菌類です。"],
  45: [0, "カメノテは甲殻類で、無脊椎動物です。"],
  "46-1": [2, "写真のサルはニホンザルです。"],
  "46-2": [0, "写真のカモはコガモです。"],
  "46-3": [3, "写真のカエルは大型で外来種として知られるウシガエルです。"],
  "46-4": [2, "写真の昆虫は赤い上翅に黒い斑紋をもつテントウムシです。"],
  "46-5": [1, "写真の動物は触手を広げたイソギンチャクです。"],
  "46-6": [1, "写真の植物はヘクソカズラです。"],
  "46-7": [3, "写真の植物は胞子茎が見えるスギナです。"],
  "46-8": [2, "写真の針葉樹はクロマツです。"],
  "46-9": [1, "写真の植物はハスです。"],
  "46-10": [2, "写真の植物はヤハズエンドウ（カラスノエンドウ）です。"],
  47: [3, "ホンドモモンガは樹上の洞に巣をつくる動物です。"],
  48: [2, "ツキノワグマは木に登ることが得意な動物です。"],
  49: [1, "オオルリは本州で見られる夏鳥です。"],
  50: [2, "コゲラは樹洞に巣をつくる鳥です。"],
  51: [2, "ツバメは主に飛びながら昆虫を捕らえます。"],
  52: [2, "モリアオガエルは樹上に泡状の卵塊を産みます。"],
  53: [3, "ヒラメは海の砂底にひそんで生活する魚です。"],
  54: [0, "ニシンは海藻に卵を産みつける魚です。"],
  55: [0, "サクラマスは産卵のため海から川へ遡上します。"],
  56: [2, "ナミテントウは成虫で越冬します。"],
  57: [0, "キャベツはモンシロチョウの幼虫の食草になります。"],
  58: [0, "アオムシコマユバチは他の昆虫に卵を産みつけて寄生します。"],
  59: [0, "オビカレハは木の枝に卵塊で卵を産みます。"],
  60: [0, "クラゲは刺胞で餌を捕らえたり外敵から防御したりします。"],
  61: [1, "ヒトデは二枚貝を食べる動物です。"],
  62: [1, "オカダンゴムシは刺激を受けると丸くなります。"],
  63: [1, "カモノハシは水かきがあり、毛が生え、卵生で乳で子を育てる哺乳類です。"],
  64: [3, "ユリはひとつの花におしべとめしべをもつ両性花です。"],
  65: [1, "サトイモは栄養繁殖をする植物です。"],
  66: [0, "ネコヤナギは綿毛のある種子が主に風で散布されます。"],
  67: [1, "ホウセンカは熟した果実がはじけて種子を飛ばします。"],
  68: [0, "ミツマタは落葉低木です。クチナシとジンチョウゲは常緑低木、クヌギは落葉高木なので、落葉低木に当てはまるのはミツマタです。"],
  69: [0, "スミレは多年生（宿根性）の植物です。"],
  70: [0, "ヤマユリは球根で冬を越す植物です。"],
  71: [1, "ヒツジグサは水生植物です。"],
  72: [1, "ギンリョウソウは葉緑素をもたず、光合成をしない植物です。"],
  73: [3, "ブナは日本の冷温帯林を代表する植物です。"],
  74: [3, "ワタスゲは湿原を代表する植物です。"],
  75: [0, "ツバキは秋から冬に開花する植物です。"],
  76: [3, "トリカブトは強い毒をもつ植物です。"],
  77: [1, "分類階級では、界のひとつ下は門です。"],
  78: [2, "Cryptomeria japonica の Cryptomeria は属名を示します。"],
  79: [2, "おし葉標本のラベルには採集年月日を必ず記入します。"],
  80: [1, "アナグマは日本在来の動物です。"],
  81: [3, "トキは日本ではかつて野生絶滅した鳥です。"],
  82: [0, "ウシガエルは日本における外来種です。"],
  83: [2, "タラノキは山菜として新芽をよく食用にします。"],
  84: [2, "ウルシの主な利用法は漆器などに使う塗料です。"],
  85: [1, "マメ科植物と共生する根粒菌は窒素固定をします。"],
  86: [1, "クサカゲロウの卵は細い柄の先につき、うどんげの花と呼ばれます。"],
  "87-1": [0, "写真の葉の先はとがっています。"],
  "87-2": [0, "写真の葉縁には鋸歯があります。"],
  "87-3": [1, "葉の裏面には長毛が密生していないため、この記述は誤りです。"],
  "87-4": [0, "この葉は単葉です。"],
  "87-5": [2, "写真の植物はカエデです。"],
},
  2025: {},
};

function questionOrderValue(numText) {
  const [, main, sub = "0"] = String(numText).match(/(\d+)(?:-(\d+))?/) || [];
  return Number(main || 0) * 100 + Number(sub || 0);
}

let activeQuestionYear = 2023;
let activeAnswerData = answerDataByYear[activeQuestionYear];

function makePhotoQuestion(num, category, ja, options, answer = null, note = null, addedAt = activeQuestionYear === 2023 ? "2026-04-29" : "2026-05-04") {
  const key = String(num);
  const inferred = activeAnswerData[key];
  const finalAnswer = answer ?? inferred?.[0] ?? null;
  const mainNum = Number(key.split("-")[0]);
  const grade = activeQuestionYear >= 2024 ? 4 : mainNum >= 77 ? 3 : 4;
  return {
    id: `book-${activeQuestionYear}-${key.replace(/[^0-9]+/g, "-")}`,
    grade,
    year: activeQuestionYear,
    category,
    difficulty: mainNum >= 77 ? "hard" : mainNum >= 41 ? "medium" : "easy",
    num: `問 ${key}`,
    ja,
    kr: "",
    answer: finalAnswer,
    needsAudit: finalAnswer === null,
    addedAt,
    options: options.map((name) => ({ ja: name, kr: "", img: "" })),
    hint: note || buildStudyHint(category, ja),
    explanation: inferred?.[1] || buildExplanation(activeQuestionYear, num, ja, options, finalAnswer),
  };
}

const textOnlyQuestionNums2023 = new Set([6, 7, 10, 15, 19, 20, 23, 36, 41, 51, 59, 75, 77, 78, 79, 81, 83, 85, 86, 87]);

const statementBlocks2023 = {
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

function buildExplanation(year, num, text, options, answer) {
  const known = {
    "2023:11": "正解はコイです。キンギョはフナの仲間をもとに作られた魚で、コイと同じコイ科にふくまれます。",
    "2023:53": "正解はグッピーです。グッピーは母親の体内で子が育ってから生まれる胎生の魚です。イワナ、タナゴ、ハゼは卵を産む魚です。",
    "2023:55": "正解はサケです。サケは海で大きくなり、産卵のために川へ戻ってくる魚です。",
    "2023:56": "正解はナツミカンです。ナミアゲハの幼虫はミカン科の葉を食べます。ナツミカンはミカン科です。",
    "2023:58": "正解はカマキリです。アリ、シロアリ、ミツバチは集団で生活する社会性昆虫ですが、カマキリは社会性昆虫ではありません。",
    "2025:11": "正解はウナギです。ウナギは硬骨魚類です。イトマキエイ、ノコギリザメ、ネムリブカは軟骨魚類です。",
    "2025:53": "正解はモツゴです。モツゴは川や池などの淡水に生息する魚です。キビナゴ、マサバ、サヨリは海水魚です。",
    "2025:55": "正解はチョウチンアンコウです。チョウチンアンコウは深海に生息する魚です。",
    "2025:56": "正解はカミキリムシです。カミキリムシの幼虫は木材の中に入り、木を食べて成長します。",
    "2025:58": "正解はヒトスジシマカです。ヒトスジシマカは雌が産卵のために吸血し、雄は吸血しません。",
  };
  if (known[`${year}:${num}`]) return known[`${year}:${num}`];
  if (answer === null) {
    return "この問題はまだ正解データを入れていないため採点しません。答え合わせ後に、正解と理由を追加します。";
  }
  const focus = String(text || "").replace(/[。！？]/g, "").slice(0, 42);
  return `正解は${options[answer]}です。問題文の「${focus}」の条件に当てはまる選択肢です。`;
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
  const question = String(text || "");
  const focusHint = (hint) => {
    const focus = question.replace(/[。！？]/g, "").slice(0, 46);
    return `問題文の「${focus}」が手がかりです。${hint}`;
  };
  if (question.includes("根粒菌") || question.includes("窒素固定") || question.includes("（ア）固定")) {
    return focusHint("根粒菌はマメ科植物と共生し、空気中の窒素を利用できる形にする窒素固定を行います。空欄に入る言葉と働きを結びつけます。");
  }
  if (question.includes("ファーブル")) {
    return focusHint("ファーブルが観察記録を残した対象は昆虫です。人名と著作名を手がかりに、身近な生物の分類を比べます。");
  }
  if (question.includes("おし葉標本") || (question.includes("標本") && question.includes("ラベル"))) {
    return focusHint("おし葉標本のラベルには、採集場所・採集者名に加えて採集年月日などの記録を残します。標本そのものの保存方法と混同しないようにします。");
  }
  if (question.includes("種子散布") || question.includes("種子を散布") || question.includes("種子をはじ") || question.includes("種子をはじき")) {
    return focusHint("種子の運ばれ方を比べます。風・動物への付着・動物に食べられる・果実がはじける、のどれが問題文の植物に当てはまるか確認します。");
  }
  if (question.includes("次の記述にあてはまる植物")) {
    return focusHint("文章に出てくる生育場所、におい、葉や花の形を一つずつ拾い、すべての条件に合う植物を選びます。");
  }
  if (question.includes("異なる目")) {
    return focusHint("選択肢を目ごとに分けます。三つが同じ目で、一つだけ別の目になる組み合わせを確認します。");
  }
  if (question.includes("甲殻類")) {
    return focusHint("甲殻類は節足動物のなかまです。体をおおう硬い殻や、頭胸部・脚のつくりを他の無脊椎動物と比べます。");
  }
  if (question.includes("軟体動物")) {
    return focusHint("軟体動物は柔らかい体をもち、貝殻や足などに特徴があります。貝・イカ・タコのなかまかどうかを確認します。");
  }
  if (question.includes("（門）") || question.includes("（綱）") || question.includes("（目）") || question.includes("（科）")) {
    return focusHint("分類階級の順番を確認します。門・綱・目・科など、問題文が求める階級と生物の所属を対応させます。");
  }
  if (question.includes("科の植物") || question.includes("科ではない") || question.includes("科の野菜")) {
    return focusHint("科名を手がかりに選択肢を分類します。見た目や利用法ではなく、問題文に示された植物の科が一致するかを確認します。");
  }
  if (question.includes("社会性昆虫")) {
    return focusHint("社会性昆虫は集団で役割分担して暮らします。単独で生活する昆虫を、アリ・シロアリ・ハチなどと区別します。");
  }
  if (question.includes("鳴かない昆虫")) {
    return focusHint("音を出す器官や行動の有無を比べます。セミやコオロギのように鳴く昆虫と、鳴かない昆虫を区別します。");
  }
  if (question.includes("有袋類")) {
    return focusHint("有袋類は子を早く産み、育児のうで成長させます。育児のうをもつ哺乳類かどうかを確認します。");
  }
  if (question.includes("無脊椎動物")) {
    return focusHint("背骨をもつ脊椎動物か、背骨をもたない無脊椎動物かを分けます。節足動物や軟体動物などの分類も手がかりです。");
  }
  if (question.includes("うで（あし）の数") || question.includes("腕の数")) {
    return focusHint("イカの腕は8本で、触腕2本を合わせて10本です。腕と触腕を別々に数える点に注意します。");
  }
  if (question.includes("刺胞")) {
    return focusHint("刺胞はクラゲなどが餌を捕らえたり身を守ったりする細胞です。刺胞動物の特徴と、他の無脊椎動物の器官を比べます。");
  }
  if (question.includes("砂底")) {
    return focusHint("海底のどこで暮らす魚かに注目します。砂底に身をひそめる魚と、岩場や水面を使う魚を比べます。");
  }
  if (question.includes("海に下る")) {
    return focusHint("川と海を行き来する魚の生活史を確認します。成長場所と産卵場所がどちらかを選択肢と比べます。");
  }
  if (question.includes("刺激を受けると丸く") || question.includes("丸くなる動物")) {
    return focusHint("刺激を受けたときの防御行動に注目します。体を丸めて柔らかい部分を守る動物を選択肢と比べます。");
  }
  if (question.includes("陸上生活")) {
    return focusHint("海ではなく陸上で長く生活できる体のつくりに注目します。水中中心のカニと、陸上へ上がるカニを比べます。");
  }
  if (question.includes("タカのあし")) {
    return focusHint("猛禽類の足は、獲物をつかむ太い指と鋭い爪が特徴です。水鳥や小鳥の足と形を比べます。");
  }
  if (question.includes("群れをつくる")) {
    return focusHint("単独で暮らすか、同じ種の仲間と群れをつくるかを比べます。問題文の生活形態に合う動物を選びます。");
  }
  if (question.includes("落ち葉や菌類")) {
    return focusHint("落ち葉や菌類を食べる分解者に注目します。植物を食べる動物や肉食動物ではなく、土や落ち葉の中で有機物を利用する動物を比べます。");
  }
  if (question.includes("巣網")) {
    return focusHint("幼虫が集団で作る巣網の有無を比べます。卵の産み方ではなく、幼虫期の生活と巣の形に注目します。");
  }
  if (question.includes("巣穴")) {
    return focusHint("巣を作る場所に注目します。土中に自分で掘った巣穴で子を育てる動物かどうかを比べます。");
  }
  if (question.includes("砂浜に穴") || question.includes("砂浜で産卵")) {
    return focusHint("砂浜に穴を掘って産卵する生活を確認します。海から上陸して砂に卵を埋める動物と、淡水や陸上で繁殖する動物を比べます。");
  }
  if (question.includes("水底") || question.includes("抽水植物") || question.includes("浮葉植物")) {
    return focusHint("水中での植物の位置に注目します。根が水底にあり葉や茎が水上に出る抽水植物か、葉を水面に浮かべる浮葉植物かを比べます。");
  }
  if (question.includes("食虫植物")) {
    return focusHint("虫を捕らえる袋や捕虫器の有無を確認します。光合成をしながら不足する養分を昆虫から補う植物を選びます。");
  }
  if (question.includes("木本植物")) {
    return focusHint("茎が木質化する木本か、柔らかい茎の草本かを比べます。木の高さや多年生かどうかも確認します。");
  }
  if (question.includes("地中に果実")) {
    return focusHint("花のあとに果実が地中へ入る植物かを確認します。地上で実る植物ではなく、子房柄などが土中へ伸びる特徴を比べます。");
  }
  if (question.includes("海岸林")) {
    return focusHint("海風や砂に耐えて海岸林をつくる植物に注目します。海岸の防風林に多い樹種と内陸の植物を比べます。");
  }
  if (question.includes("春の七草")) {
    return focusHint("春の七草の名前を思い出し、選択肢の植物と照合します。別の季節の野草や食用植物と混同しないようにします。");
  }
  if (question.includes("野生絶滅")) {
    return focusHint("生息環境ではなく、国内での絶滅状況を確認します。かつて日本で野生絶滅し、保全や再導入の対象になった鳥を選びます。");
  }
  if (question.includes("夏の終わりから秋") || question.includes("秋から冬") || question.includes("夕方に開花") || question.includes("開花する植物")) {
    return focusHint("開花する季節や時間帯を比べます。春・夏・秋冬のどの時期、または夕方に花を開く植物かを確認します。");
  }
  if (question.includes("堅果") || question.includes("なんの実")) {
    return focusHint("実の形と殻のつくりを観察します。堅果やどんぐりの殻斗など、植物ごとの果実の特徴を選択肢と比べます。");
  }
  if (question.includes("ひげ状の根")) {
    return focusHint("根の分かれ方を見ます。枝分かれしないひげ状の根をもつ単子葉植物かどうかを比べます。");
  }
  if (question.includes("ひげくじら")) {
    return focusHint("ひげ板をもつヒゲクジラか、歯をもつハクジラかを比べます。体の大きさだけで決めず、口のつくりを確認します。");
  }
  if (question.includes("紅藻") || question.includes("褐藻") || question.includes("藻類")) {
    return focusHint("海藻の色だけでなく、紅藻・褐藻・緑藻の分類を確認します。選択肢の生物がどの藻類に属するかを比べます。");
  }
  if (question.includes("うどんげ") || question.includes("クサカゲロウ")) {
    return focusHint("クサカゲロウの卵は細い柄の先につき、うどんげの花のように見えます。卵のつき方と昆虫名を結びつけて考えます。");
  }
  if (question.includes("耐久型") || question.includes("乾燥や低温") || question.includes("低温に強")) {
    return focusHint("耐久型は不利な環境をやり過ごす状態です。乾燥や低温に耐えられる動物の性質を選択肢と比べます。");
  }
  if (question.includes("硬骨魚類") || question.includes("軟骨魚類")) {
    return focusHint("骨格が硬い硬骨魚類か、軟骨でできた軟骨魚類かを比べます。えらやひれだけでなく、魚の分類を確認します。");
  }
  if (question.includes("寄生植物") || question.includes("腐肉臭")) {
    return focusHint("寄生植物は自分で光合成せず、他の植物から養分を得ます。地上部の形やにおいなど、問題文の特徴を選択肢と比べます。");
  }
  if (question.includes("近縁") || question.includes("同じ仲間") || question.includes("同じなかま") || question.includes("同じ科") || question.includes("同じ目")) {
    return focusHint("見た目だけでなく、分類上の共通点を比べます。問題文が同じ科・同じ目・近縁のどれを聞いているかを確認します。");
  }
  if (question.includes("深海") || question.includes("深海魚")) {
    return focusHint("深海に適応した魚かどうかを考えます。発光器官や体の形など、深い海で生活する特徴を選択肢と比べます。");
  }
  if (question.includes("キノコ") || question.includes("菌類")) {
    return focusHint("植物に見えても、菌類かどうかを確認します。花や葉をつくる植物と、胞子でふえる菌類を区別します。");
  }
  if (question.includes("光合成")) {
    return focusHint("葉緑素をもち光合成をするかを確認します。光合成をしない植物は、他の生物から養分を得る特徴があります。");
  }
  if (question.includes("毒")) {
    return focusHint("食用かどうかではなく、有毒成分の有無を比べます。強い毒をもつ植物の名前を選択肢から確認します。");
  }
  if (question.includes("山菜") || question.includes("新芽") || question.includes("食用")) {
    return focusHint("植物の利用部位に注目します。新芽や茎など、食用にする部分が問題文の条件と合うか比べます。");
  }
  if (question.includes("雌雄異株") || question.includes("雌雄別株") || question.includes("雌花と雄花") || question.includes("巻きひげ")) {
    return focusHint("雌花・雄花のつき方や、つるを支える巻きひげの有無を比べます。植物の繁殖と体のつくりを確認します。");
  }
  if (question.includes("卵の世話") || question.includes("卵塊") || question.includes("卵を産")) {
    return focusHint("卵をどこに産むか、誰が守るかを確認します。産卵場所や親の世話のしかたが選択肢と合うか比べます。");
  }
  if (question.includes("水生") || question.includes("冷温帯") || question.includes("野生絶滅")) {
    return focusHint("生活する環境を手がかりにします。水辺・森林帯・野生での分布など、問題文の環境条件と選択肢を比べます。");
  }
  if (question.includes("共通する") || question.includes("共通する特徴")) {
    return focusHint("二つの生物に共通する特徴だけを選びます。片方だけに当てはまる形や分類は除いて比べます。");
  }
  if (question.includes("全長が短い") || question.includes("もっとも小さい")) {
    return focusHint("名前の印象ではなく、全長を基準に比べます。選択肢の大きさを同じ基準で確認します。");
  }
  if (question.includes("尾が") || question.includes("尾の全体")) {
    return focusHint("尾の有無と形に注目します。尾がないのか、全体が平たいのかを選択肢の体つきと比べます。");
  }
  if (question.includes("樹上") || question.includes("木に登") || question.includes("木の枝")) {
    return focusHint("生活する高さと巣の場所を確認します。樹上・木の枝・地上のどこを使う動物かを選択肢と比べます。");
  }
  if (question.includes("吸盤")) {
    return focusHint("指先の吸盤の有無と形を確認します。吸盤で葉や壁に張り付くカエルかどうかを選択肢と比べます。");
  }
  if (question.includes("木の中") || question.includes("木材の中")) {
    return focusHint("幼虫が木材の中で成長するかを確認します。成虫の姿だけでなく、幼虫のすみ場所と食べ物を比べます。");
  }
  if (question.includes("雌だけ") || question.includes("雌が") && question.includes("吸血")) {
    return focusHint("雄と雌で食べ物が違うかを確認します。産卵のために雌だけが血を吸う昆虫を選択肢と比べます。");
  }
  if (question.includes("関係") || question.includes("共生") || question.includes("寄生") || question.includes("捕食") || question.includes("被食")) {
    return focusHint("二つの生物のどちらが利益を得るか、害があるかを分けて考えます。食べる・食べられる関係か、共生・寄生かを確認します。");
  }
  if (question.includes("学者") || question.includes("提唱") || question.includes("名前を") || question.includes("学名") || question.includes("二名法") || question.includes("命名者") || question.includes("種小名") || question.includes("科名") || question.includes("属名") || question.includes("Temminck") || question.includes("ファーブル") || question.includes("リンネ") || question.includes("ウェゲナー")) {
    return focusHint("人名・学名・分類名を混同しないようにします。問題文が人物、属名、科名、種小名のどれを聞いているかを先に確認します。");
  }
  if (question.includes("陸上で生活") || question.includes("淡水") || question.includes("海水") || question.includes("海浜") || question.includes("湿原") || question.includes("生息") || question.includes("生育") || question.includes("分布") || question.includes("原産") || question.includes("外来") || question.includes("在来")) {
    return focusHint("すむ場所や分布を手がかりにします。海・淡水・陸のどこで生活するか、原産地や外来種かどうかを選択肢と確認します。");
  }
  if (question.includes("コケ植物") || question.includes("シダ植物") || question.includes("裸子植物") || question.includes("被子植物") || question.includes("種子植物")) {
    return focusHint("種子をつくるか、胞子でふえるか、種子が果実に包まれるかを確認して分類します。");
  }
  if (question.includes("シルエット") || question.includes("図") || question.includes("形状") || question.includes("検索表")) {
    return focusHint("まず輪郭と配置を見ます。動物は頭・足・尾・ひれ、植物は葉・花・実の形を選択肢と一つずつ比べます。");
  }
  if (question.includes("検索表") || question.includes("分類階級") || /(?:門|綱|目|科|属)を/.test(question)) {
    return focusHint("名前の似ているものだけで選ばず、同じ科・同じ目など分類上の近さを考えます。写真では体の形、足、くちばし、葉や花のつくりも比べます。");
  }
  if (question.includes("正しい") || question.includes("誤り") || question.includes("記述") || question.includes("組み合わせ")) {
    return focusHint("選択肢を一つずつ読み、問題で示された条件と合うか確認します。特に「正しい」と「誤り」を先に区別して考えます。");
  }
  if (question.includes("なんですか") || question.includes("和名")) {
    return focusHint("まず大きな形を見ます。魚なら体形とひれ、鳥ならくちばしと足、植物なら葉・花・実の特徴を比べます。");
  }
  if (question.includes("はばた") || question.includes("飛ぶ") || question.includes("飛びながら") || question.includes("滑空")) {
    return focusHint("飛び方と体のつくりを見ます。翼や飛膜の位置、体の大きさ、飛ぶための特徴が選択肢と合うか比べます。");
  }
  if (question.includes("みずかき") || question.includes("水かき") || question.includes("足") || question.includes("脚")) {
    return focusHint("足の本数と形を確認します。水で泳ぐ動物は水かき、鳥は足指や爪の形も選択肢と比べます。");
  }
  if (question.includes("翅") || question.includes("鱗") || question.includes("甲羅") || question.includes("歯舌") || question.includes("呼吸") || question.includes("えら") || question.includes("肺") || question.includes("あご") || question.includes("口") || question.includes("吸盤")) {
    return focusHint("問題文で指定された体の部分だけに注目します。昆虫なら翅・口、魚ならえら・ひれ、爬虫類なら鱗・甲羅が一致するか比べます。");
  }
  if (question.includes("餌") || question.includes("食べ") || question.includes("肉食") || question.includes("吸血") || question.includes("食草") || question.includes("捕食")) {
    return focusHint("食べ物と食べ方を分けて考えます。何を食べるか、口の形や食べる場所が選択肢の説明と合うか確認します。");
  }
  if (question.includes("胎生") || question.includes("卵生") || question.includes("産卵") || question.includes("繁殖") || question.includes("越冬") || question.includes("冬眠") || question.includes("夏鳥") || question.includes("冬鳥") || question.includes("巣") || question.includes("育てる")) {
    return focusHint("ふえ方や生活時期を確認します。卵を産むか、子を体内で育てるか、いつ渡来・越冬するかを選択肢と比べます。");
  }
  if (question.includes("常緑") || question.includes("落葉") || question.includes("一年生") || question.includes("多年")) {
    return focusHint("一年中葉が残る常緑か、季節に葉を落とす落葉かを確認します。草本・低木・高木の生活形も選択肢と比べます。");
  }
  if (question.includes("花") || question.includes("葉") || question.includes("果実") || question.includes("種子") || question.includes("根") || question.includes("茎") || question.includes("花弁") || question.includes("葉脈") || question.includes("葉柄") || question.includes("野菜")) {
    return focusHint("植物のどの部分を聞いているかを先に決めます。花・葉・実・根・茎の形や季節の変化を選択肢と比べます。");
  }
  if (question.includes("標本") || question.includes("採集") || question.includes("固定") || question.includes("解剖")) {
    return focusHint("標本の目的に合う方法を考えます。形を残すのか液体で保存するのか、採集日や場所を記録するのか確認します。");
  }
  if (question.includes("利用法") || question.includes("原料") || question.includes("用途")) {
    return focusHint("生物の特徴ではなく、問題に出た利用目的を探します。食用・薬用・材料・燃料のどれかを選択肢と対照します。");
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
  return focusHint(categoryHints[category] || categoryHints.all);
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

const stemVisuals2023 = {
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

const optionVisuals2023 = {};

const promptPhotos2023 = {
  13: { name: "カツオ", img: img("Katsuwonus_pelamis.jpg") },
  22: { name: "タニシ", img: img("Cipangopaludina_japonica_-_Osaka_Museum_of_Natural_History_-_DSC07741.JPG") },
  31: { name: "ハクサイ", img: localImg("q31-hakusai.jpg") },
  32: { name: "ミツバ", img: localImg("q32-mitsuba.jpg") },
  33: { name: "カシワ", img: localImg("q33-kashiwa.jpg") },
  "46-1": { name: "シマリス", img: localImg("q46-1-2023-shimarisu.jpg") },
  "46-2": { name: "スズメ", img: localImg("q46-2-2023-suzume.jpg") },
  "46-3": { name: "ヤモリ", img: localImg("q46-3-2023-yamori.jpg") },
  "46-4": { name: "ノコギリクワガタ", img: localImg("q46-4-2023-nokogirikuwagata.jpg") },
  "46-5": { name: "ヒザラガイ", img: localImg("q46-5-2023-hizaragai.jpg") },
  "46-6": { name: "アロエ", img: localImg("q46-6-2023-aroe.jpg") },
  "46-7": { name: "サクラ", img: localImg("q46-7-2023-sakura.jpg") },
  "46-8": { name: "カタクリ", img: localImg("q46-8-2023-katakuri.jpg") },
  "46-9": { name: "アズキ", img: localImg("q46-9-2023-azuki.jpg") },
  "46-10": { name: "ヘチマ", img: localImg("q46-10-2023-hechima.jpg") },
  87: { name: "2023年度 問87 葉の観察写真", img: localImg("q87-2023-leaf-plate.jpg") },
};


const textOnlyQuestionNums2024 = new Set([19, 20, 23, 41, 51, 63, 77, 78, 79, 81, 85]);

const statementBlocks2024 = {};

const stemVisuals2024 = {
  6: clipVisual("q06-2024-karugamo-silhouettes.jpg", "カルガモのシルエット選択図"),
  7: clipVisual("q07-2024-kiji-silhouette.jpg", "キジのシルエット"),
  13: clipVisual("q13-2024-shiira.jpg", "シイラの図"),
  14: clipVisual("q14-2024-shumokuzame.jpg", "シュモクザメのシルエット"),
  22: clipVisual("q22-2024-gazami.jpg", "ガザミのシルエット"),
  30: clipVisual("q30-2024-tomato.jpg", "トマトの図"),
  31: clipVisual("q31-2024-cauliflower.jpg", "カリフラワーの図"),
  32: clipVisual("q32-2024-kunugi.jpg", "クヌギの実の図"),
  36: clipVisual("q36-2024-ellipse-leaf.jpg", "だ円形の葉の図"),
  38: clipVisual("q38-2024-opposite-leaves.jpg", "対生の葉の写真"),
};

const optionVisuals2024 = {};

const promptPhotos2024 = {
  "46-1": { name: "ニホンザル", img: localImg("q46-1-nihonzaru.jpg") },
  "46-2": { name: "コガモ", img: localImg("q46-2-kogamo.jpg") },
  "46-3": { name: "ウシガエル", img: localImg("q46-3-ushigaeru.jpg") },
  "46-4": { name: "テントウムシ", img: localImg("q46-4-tentoumushi.jpg") },
  "46-5": { name: "イソギンチャク", img: localImg("q46-5-isoginchaku.jpg") },
  "46-6": { name: "ヘクソカズラ", img: localImg("q46-6-hekusokazura.jpg") },
  "46-7": { name: "スギナ", img: localImg("q46-7-sugina.jpg") },
  "46-8": { name: "クロマツ", img: localImg("q46-8-kuromatsu.jpg") },
  "46-9": { name: "ハス", img: localImg("q46-9-hasu.jpg") },
  "46-10": { name: "ヤハズエンドウ", img: localImg("q46-10-yahazuendou.jpg") },
  87: { name: "2024年度 問87 葉の観察写真", img: localImg("q87-2024-leaf-plate.jpg") },
};

const textOnlyQuestionNums2025 = new Set([6, 7, 10, 19, 20, 23, 36, 40, 41, 44, 45, 66, 67, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87]);

const statementBlocks2025 = {
  23: [
    ["A", "歯舌がある。"],
    ["B", "歯舌がない。"],
    ["C", "眼がある。"],
    ["D", "眼がない。"],
  ],
};

const stemVisuals2025 = {
  6: clipVisual("q06-2025-kijibato-silhouettes.jpg", "キジバトのシルエット選択図"),
  7: clipVisual("q07-2025-bird-feet.jpg", "タカのあしの選択図"),
  10: clipVisual("q10-2025-turtle-shells.jpg", "ニホンイシガメの甲羅の選択図"),
  13: clipVisual("q13-2025-madara.jpg", "マダラの図"),
  14: clipVisual("q14-2025-akaei.jpg", "アカエイのシルエット"),
  22: clipVisual("q22-2025-mukade.jpg", "ムカデのシルエット"),
  30: clipVisual("q30-2025-hourensou.jpg", "ホウレンソウの図"),
  31: clipVisual("q31-2025-okura.jpg", "オクラの図"),
  32: clipVisual("q32-2025-omodaka-leaf.jpg", "オモダカの葉のシルエット"),
  36: clipVisual("q36-2025-palmate-leaf.jpg", "掌状複葉の図"),
  40: clipVisual("q40-2025-strawberry.jpg", "イチゴの図"),
  44: clipVisual("q44-2025-plant-key.jpg", "植物の検索表"),
  45: clipVisual("q45-2025-animal-key.jpg", "動物の検索表"),
};

const optionVisuals2025 = {};

const promptPhotos2025 = {
  "46-1": { name: "ニホンジカ", img: localImg("q46-1-2025-nihonjika.jpg") },
  "46-2": { name: "キジ", img: localImg("q46-2-2025-kiji.jpg") },
  "46-3": { name: "ヒガシニホントカゲ", img: localImg("q46-3-2025-higashinihontokage.jpg") },
  "46-4": { name: "モンシロチョウ", img: localImg("q46-4-2025-monshirochou.jpg") },
  "46-5": { name: "ジョロウグモ", img: localImg("q46-5-2025-jorougumo.jpg") },
  "46-6": { name: "キンモクセイ", img: localImg("q46-6-2025-kinmokusei.jpg") },
  "46-7": { name: "ジンチョウゲ", img: localImg("q46-7-2025-jinchouge.jpg") },
  "46-8": { name: "オシロイバナ", img: localImg("q46-8-2025-oshiroi-bana.jpg") },
  "46-9": { name: "サザンカ", img: localImg("q46-9-2025-sazanka.jpg") },
  "46-10": { name: "ウメ", img: localImg("q46-10-2025-ume.jpg") },
  87: { name: "2025年度 問87 葉の観察写真", img: localImg("q87-2025-leaf-plate.jpg") },
};

// Keep these as image-choice questions. Their labels describe a use or an
// abbreviated plant name, so pin context-checked images instead of guessing
// from the raw label with the organism-name resolver.
const questionOptionImages = {
  "book-2024-84": [
    img("Hoe handle, wood - Museo Egizio, Turin S 7524 p02.jpg"),
    img("Washi(Sugihara paper).JPG"),
    img("Lacquer (8237571740).jpg"),
    img("Firewood in Russia.jpg"),
  ],
  "book-2025-68": [
    img("(ms) Paulownia tomentosa 1.jpg"),
    img("Jasminum mesnyi.jpg"),
    img("Kerria japonica Japanese Rose Waterperry Gardens Oxfordshire England 01.jpg"),
    img("Cinnamomum camphora.jpg"),
  ],
};

const textOnlyQuestionNumsByYear = {
  2023: textOnlyQuestionNums2023,
  2024: textOnlyQuestionNums2024,
  2025: textOnlyQuestionNums2025,
};
const statementBlocksByYear = {
  2023: statementBlocks2023,
  2024: statementBlocks2024,
  2025: statementBlocks2025,
};
const stemVisualsByYear = {
  2023: stemVisuals2023,
  2024: stemVisuals2024,
  2025: stemVisuals2025,
};
const optionVisualsByYear = {
  2023: optionVisuals2023,
  2024: optionVisuals2024,
  2025: optionVisuals2025,
};
const promptPhotosByYear = {
  2023: promptPhotos2023,
  2024: promptPhotos2024,
  2025: promptPhotos2025,
};

activeQuestionYear = 2023;
activeAnswerData = answerDataByYear[activeQuestionYear];
const photoQuestions2023 = [
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
  makePhotoQuestion("46-1", "mammal", "この生物はなんですか。ひとつ選びなさい。", ["アカネズミ", "イタチ", "シマリス", "モモンガ"]),
  makePhotoQuestion("46-2", "bird", "この生物はなんですか。ひとつ選びなさい。", ["エナガ", "ムクドリ", "シジュウカラ", "スズメ"]),
  makePhotoQuestion("46-3", "reptile", "この生物はなんですか。ひとつ選びなさい。", ["イモリ", "カナヘビ", "サンショウウオ", "ヤモリ"]),
  makePhotoQuestion("46-4", "insect", "この生物はなんですか。ひとつ選びなさい。", ["ゴマダラカミキリ", "カナブン", "カブトムシ", "ノコギリクワガタ"]),
  makePhotoQuestion("46-5", "all", "この生物はなんですか。ひとつ選びなさい。", ["アメフラシ", "ウニ", "カメノテ", "ヒザラガイ"]),
  makePhotoQuestion("46-6", "plant", "この生物はなんですか。ひとつ選びなさい。", ["アロエ", "カランコエ", "タラノキ", "ハボタン"]),
  makePhotoQuestion("46-7", "plant", "この生物はなんですか。ひとつ選びなさい。", ["サザンカ", "サクラ", "ツツジ", "モクレン"]),
  makePhotoQuestion("46-8", "plant", "この生物はなんですか。ひとつ選びなさい。", ["カタクリ", "ヤマユリ", "シュンラン", "スミレ"]),
  makePhotoQuestion("46-9", "plant", "この生物はなんですか。ひとつ選びなさい。", ["アズキ", "エンドウ", "ソラマメ", "ダイズ"]),
  makePhotoQuestion("46-10", "plant", "この生物はなんですか。ひとつ選びなさい。", ["カボチャ", "トウガン", "ニガウリ（ゴーヤ）", "ヘチマ"]),
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
  makePhotoQuestion(70, "plant", "水底に根を張り、葉を水面に浮かべている植物（浮葉植物）をひとつ選びなさい。", ["カヤツリグサ", "ススキ", "ヒシ", "メヒシバ"]),
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
  makePhotoQuestion("87-1", "plant", "次の記述について、正しいか誤りかひとつ選びなさい。葉縁にはきょ（鋸）歯がある。", ["正しい", "誤り"]),
  makePhotoQuestion("87-2", "plant", "次の記述について、正しいか誤りかひとつ選びなさい。この葉は3枚の小葉からなる。", ["正しい", "誤り"]),
  makePhotoQuestion("87-3", "plant", "次の記述について、正しいか誤りかひとつ選びなさい。葉の表面には長毛が密生している。", ["正しい", "誤り"]),
  makePhotoQuestion("87-4", "plant", "次の記述について、正しいか誤りかひとつ選びなさい。この葉は羽状複葉である。", ["正しい", "誤り"]),
  makePhotoQuestion("87-5", "plant", "この植物はなんですか。ひとつ選びなさい。", ["アサガオ", "ヤマノイモ", "オランダイチゴ", "ヤブカラシ"]),
];

activeQuestionYear = 2024;
activeAnswerData = answerDataByYear[activeQuestionYear];
const photoQuestions2024 = [
makePhotoQuestion(1, "mammal", "有袋類をひとつ選びなさい。", ["カバ", "カンガルー", "ネズミ", "モグラ"]),
  makePhotoQuestion(2, "mammal", "オコジョにもっとも近縁な動物をひとつ選びなさい。", ["キツネ", "シマリス", "イタチ", "ノウサギ"]),
  makePhotoQuestion(3, "mammal", "はばたいて飛ぶ動物をひとつ選びなさい。", ["キタリス", "キクガシラコウモリ", "ムササビ", "ヤマネ"]),
  makePhotoQuestion(4, "bird", "カラスと同じなかま（同じ科）の鳥をひとつ選びなさい。", ["カワウ", "カケス", "カラスバト", "ヤマガラ"]),
  makePhotoQuestion(5, "bird", "オオタカにもっとも近縁な鳥をひとつ選びなさい。", ["フクロウ", "トビ", "アオバズク", "ハシブトガラス"]),
  makePhotoQuestion(6, "bird", "カルガモのシルエットをひとつ選びなさい。", ["シルエット1", "シルエット2", "シルエット3", "シルエット4"]),
  makePhotoQuestion(7, "bird", "このシルエットの鳥はなんですか。", ["カラス", "カモメ", "キジ", "ツバメ"]),
  makePhotoQuestion(8, "bird", "みずかきが発達している鳥をひとつ選びなさい。", ["カワウ", "カワガラス", "カワラバト", "カワラヒワ"]),
  makePhotoQuestion(9, "reptile", "カナヘビにもっとも近縁な動物をひとつ選びなさい。", ["アマガエル", "イシガメ", "イモリ", "トウキョウサンショウウオ"]),
  makePhotoQuestion(10, "amphibian", "指に吸盤があるカエルをひとつ選びなさい。", ["アマガエル", "ウシガエル", "トノサマガエル", "ヒキガエル"]),
  makePhotoQuestion(11, "fish", "軟骨魚類をひとつ選びなさい。", ["ハリセンボン", "アカエイ", "ウツボ", "オコゼ"]),
  makePhotoQuestion(12, "fish", "タイにもっとも近縁な魚をひとつ選びなさい。", ["アンコウ", "コイ", "スズキ", "タラ"]),
  makePhotoQuestion(13, "fish", "この魚はなんですか。", ["アマダイ", "タチウオ", "シイラ", "ブダイ"]),
  makePhotoQuestion(14, "fish", "このシルエットの魚はなんですか。", ["シュモクザメ", "ネコザメ", "コバンザメ", "オヒョウ"]),
  makePhotoQuestion(15, "fish", "口ひげがある魚をひとつ選びなさい。", ["イシガレイ", "コイ", "シシャモ", "クサフグ"]),
  makePhotoQuestion(16, "insect", "前翅（まえばね）がかたい昆虫をひとつ選びなさい。", ["カマキリ", "カマドウマ", "ゴキブリ", "コガネムシ"]),
  makePhotoQuestion(17, "insect", "バッタにもっとも近縁な昆虫をひとつ選びなさい。", ["ケラ", "シロアリ", "カマキリ", "ハサミムシ"]),
  makePhotoQuestion(18, "insect", "他と異なるグループ（異なる目）の昆虫をひとつ選びなさい。", ["セミ", "カマキリ", "アメンボ", "アブラムシ"]),
  makePhotoQuestion(19, "insect", "ナナホシテントウの成虫の餌の食べ方について、正しい記述をひとつ選びなさい。", ["ブラシ状の口でなめる", "ストロー状の口で吸う", "左右に動くあごでかむ", "上下に動くあごでかむ"]),
  makePhotoQuestion(20, "all", "甲殻類をひとつ選びなさい。", ["サソリ", "ムカデ", "ヤスデ", "ワラジムシ"]),
  makePhotoQuestion(21, "all", "タコにもっとも近縁な動物をひとつ選びなさい。", ["クラゲ", "ウミウシ", "ナマコ", "ホヤ"]),
  makePhotoQuestion(22, "all", "このシルエットの動物はなんですか。", ["タラバガニ", "ガザミ", "クルマエビ", "シャコ"]),
  makePhotoQuestion(23, "all", "ダイオウイカのうで（あし）の数をひとつ選びなさい。", ["4本", "6本", "8本", "10本"]),
  makePhotoQuestion(24, "plant", "シダ植物をひとつ選びなさい。", ["シュロ", "ヘゴ", "ガジュマル", "ヤシ"]),
  makePhotoQuestion(25, "plant", "アブラナ科の植物をひとつ選びなさい。", ["ダイズ", "ゴマ", "ダイコン", "トマト"]),
  makePhotoQuestion(26, "plant", "ナズナと同じなかま（同じ科）の植物をひとつ選びなさい。", ["オオイヌノフグリ", "オオバコ", "ハマダイコン", "ハルジオン"]),
  makePhotoQuestion(27, "plant", "モクレンと同じなかま（同じ科）の植物をひとつ選びなさい。", ["キブシ", "コブシ", "ハルニレ", "ハンノキ"]),
  makePhotoQuestion(28, "plant", "セロリと同じなかま（同じ科）の植物をひとつ選びなさい。", ["ゴボウ", "シソ", "ニラ", "セリ"]),
  makePhotoQuestion(29, "plant", "レタスと同じなかま（同じ科）の植物をひとつ選びなさい。", ["キャベツ", "シュンギク", "コマツナ", "クレソン"]),
  makePhotoQuestion(30, "plant", "この野菜はなんですか。", ["カブ", "トマト", "ジャガイモ", "タマネギ"]),
  makePhotoQuestion(31, "plant", "この野菜はなんですか。", ["キャベツ", "ハクサイ", "ニンニク", "カリフラワー"]),
  makePhotoQuestion(32, "plant", "これはなんの実ですか。", ["スダジイ", "クリ", "クヌギ", "ミズナラ"]),
  makePhotoQuestion(33, "plant", "花弁が紫色の植物をひとつ選びなさい。", ["キュウリ", "トマト", "ナス", "セロリ"]),
  makePhotoQuestion(34, "plant", "小さな花が多数集まってひとつの花のようにみえる植物をひとつ選びなさい。", ["アザミ", "バラ", "イチゴ", "アケビ"]),
  makePhotoQuestion(35, "plant", "合弁花冠の植物をひとつ選びなさい。", ["ナシ", "キク", "モモ", "フジ"]),
  makePhotoQuestion(36, "plant", "この葉の形をなんと呼びますか。", ["線形", "披針形", "だ円形", "心形"]),
  makePhotoQuestion(37, "plant", "平行脈の葉をもつ植物をひとつ選びなさい。", ["アジサイ", "ヨモギ", "ヤマブキ", "ササ"]),
  makePhotoQuestion(38, "plant", "写真のような葉のつき方をなんといいますか。", ["互生", "対生", "束生", "輪生"]),
  makePhotoQuestion(39, "plant", "枝分かれしないひげ状の根をもつ植物をひとつ選びなさい。", ["キュウリ", "カブ", "ナス", "ネギ"]),
  makePhotoQuestion(40, "plant", "かたい殻の果実（堅果）をつける植物をひとつ選びなさい。", ["アケビ", "マテバシイ", "グミ", "ヤマモモ"]),
  makePhotoQuestion(41, "plant", "バイカモについて正しい記述をひとつ選びなさい。", ["淡水に生育する種子植物", "淡水に生育する藻類", "海に生育する種子植物", "海に生育する藻類"]),
  makePhotoQuestion(42, "plant", "次の記述にあてはまる植物をひとつ選びなさい。植物全体に特異な臭気がある。葉は心形で、4枚の白い花弁にみえるものは総苞片である。", ["サンショウ", "ドクダミ", "ナツミカン", "ミツバ"]),
  makePhotoQuestion(43, "plant", "藻類をひとつ選びなさい。", ["アマモ", "ウキクサ", "コウホネ", "ヒジキ"]),
  makePhotoQuestion(44, "plant", "菌類をひとつ選びなさい。", ["ウメノキゴケ", "シメジ", "マダケ", "マンネンスギ"]),
  makePhotoQuestion(45, "all", "無脊椎動物をひとつ選びなさい。", ["カメノテ", "タイマイ", "ヨウジウオ", "ヤツメウナギ"]),
  makePhotoQuestion("46-1", "mammal", "この生物の和名をひとつ選びなさい。", ["オランウータン", "ゴリラ", "ニホンザル", "マントヒヒ"]),
  makePhotoQuestion("46-2", "bird", "この生物の和名をひとつ選びなさい。", ["コガモ", "オオバン", "オナガガモ", "ヒシクイ"]),
  makePhotoQuestion("46-3", "amphibian", "この生物の和名をひとつ選びなさい。", ["トノサマガエル", "モリアオガエル", "ニホンアマガエル", "ウシガエル"]),
  makePhotoQuestion("46-4", "insect", "この生物の和名をひとつ選びなさい。", ["ハンミョウ", "コガネムシ", "テントウムシ", "ホタル"]),
  makePhotoQuestion("46-5", "all", "この生物の和名をひとつ選びなさい。", ["ウニ", "イソギンチャク", "フジツボ", "ナマコ"]),
  makePhotoQuestion("46-6", "plant", "この生物の和名をひとつ選びなさい。", ["カラスウリ", "ヘクソカズラ", "ヒルガオ", "スイカズラ"]),
  makePhotoQuestion("46-7", "plant", "この生物の和名をひとつ選びなさい。", ["イタドリ", "ゼンマイ", "スイバ", "スギナ"]),
  makePhotoQuestion("46-8", "plant", "この生物の和名をひとつ選びなさい。", ["イチイ", "イヌマキ", "クロマツ", "カヤ"]),
  makePhotoQuestion("46-9", "plant", "この生物の和名をひとつ選びなさい。", ["ガマ", "ハス", "ヒシ", "ヨシ"]),
  makePhotoQuestion("46-10", "plant", "この生物の和名をひとつ選びなさい。", ["ゲンゲ（レンゲソウ）", "ウシハコベ", "ヤハズエンドウ（カラスノエンドウ）", "ヒメオドリコソウ"]),
  makePhotoQuestion(47, "mammal", "樹上の洞に巣をつくる動物をひとつ選びなさい。", ["ニホンイタチ", "オコジョ", "カヤネズミ", "ホンドモモンガ"]),
  makePhotoQuestion(48, "mammal", "木に登ることが得意な動物をひとつ選びなさい。", ["アカギツネ", "タヌキ", "ツキノワグマ", "ノウサギ"]),
  makePhotoQuestion(49, "bird", "本州での夏鳥をひとつ選びなさい。", ["ウグイス", "オオルリ", "キジ", "シジュウカラ"]),
  makePhotoQuestion(50, "bird", "樹洞に巣をつくる鳥をひとつ選びなさい。", ["エナガ", "キジバト", "コゲラ", "ヒヨドリ"]),
  makePhotoQuestion(51, "bird", "主に飛びながら昆虫を捕らえる鳥をひとつ選びなさい。", ["ウグイス", "スズメ", "ツバメ", "メジロ"]),
  makePhotoQuestion(52, "amphibian", "樹上に泡状の卵塊を産むカエルをひとつ選びなさい。", ["カジカガエル", "タゴガエル", "モリアオガエル", "ヤマアカガエル"]),
  makePhotoQuestion(53, "fish", "海の砂底にひそんで生活している魚をひとつ選びなさい。", ["カワハギ", "カツオ", "マダイ", "ヒラメ"]),
  makePhotoQuestion(54, "fish", "海藻に卵を産みつける魚をひとつ選びなさい。", ["ニシン", "クロマグロ", "マイワシ", "マンボウ"]),
  makePhotoQuestion(55, "fish", "海に下る魚をひとつ選びなさい。", ["サクラマス", "ドジョウ", "オイカワ", "ギンブナ"]),
  makePhotoQuestion(56, "insect", "成虫で越冬する昆虫をひとつ選びなさい。", ["カマキリ", "トノサマバッタ", "ナミテントウ", "モンシロチョウ"]),
  makePhotoQuestion(57, "insect", "モンシロチョウの食草となるものをひとつ選びなさい。", ["キャベツ", "セロリ", "ニンジン", "レタス"]),
  makePhotoQuestion(58, "insect", "他の昆虫に卵を産みつけて寄生する昆虫をひとつ選びなさい。", ["アオムシコマユバチ", "キアシナガバチ", "クロスズメバチ", "セイヨウミツバチ"]),
  makePhotoQuestion(59, "insect", "木の枝に卵塊で卵を産む昆虫をひとつ選びなさい。", ["オビカレハ", "カラスアゲハ", "キタテハ", "モンキチョウ"]),
  makePhotoQuestion(60, "all", "刺胞によって餌を捕えたり、外敵から防御する動物をひとつ選びなさい。", ["クラゲ", "イカ", "ナマコ", "タコ"]),
  makePhotoQuestion(61, "all", "二枚貝を食べる動物をひとつ選びなさい。", ["アメフラシ", "ヒトデ", "フジツボ", "ホヤ"]),
  makePhotoQuestion(62, "all", "刺激を受けると丸くなる動物をひとつ選びなさい。", ["タマムシ", "オカダンゴムシ", "フナムシ", "ワラジムシ"]),
  makePhotoQuestion(63, "mammal", "次の特徴をもつ動物をひとつ選びなさい。足に水かきがあり、体には毛が生えている。卵生であるが乳で子を育てる。", ["ウミガメ", "カモノハシ", "ペンギン", "ラッコ"]),
  makePhotoQuestion(64, "plant", "ひとつの花におしべとめしべのある両性花をつける植物をひとつ選びなさい。", ["ズッキーニ", "ソテツ", "トウモロコシ", "ユリ"]),
  makePhotoQuestion(65, "plant", "栄養繁殖をする植物をひとつ選びなさい。", ["エンドウ", "サトイモ", "ナス", "ピーマン"]),
  makePhotoQuestion(66, "plant", "主に風によって種子が散布される植物をひとつ選びなさい。", ["ネコヤナギ", "オニグルミ", "ハイマツ", "マンリョウ"]),
  makePhotoQuestion(67, "plant", "種子をはじき飛ばす植物をひとつ選びなさい。", ["ゲンゲ（レンゲソウ）", "ホウセンカ", "ナズナ", "ハコベ"]),
  makePhotoQuestion(68, "plant", "落葉低木をひとつ選びなさい。", ["ミツマタ", "クチナシ", "クヌギ", "ジンチョウゲ"]),
  makePhotoQuestion(69, "plant", "多年生（宿根性）の植物をひとつ選びなさい。", ["スミレ", "ツユクサ", "シソ", "ハコベ"]),
  makePhotoQuestion(70, "plant", "球根で冬を越す植物をひとつ選びなさい。", ["ヤマユリ", "ハハコグサ", "タンポポ", "フクジュソウ"]),
  makePhotoQuestion(71, "plant", "水生植物をひとつ選びなさい。", ["メヒシバ", "ヒツジグサ", "ニリンソウ", "スベリヒユ"]),
  makePhotoQuestion(72, "plant", "光合成をしない植物をひとつ選びなさい。", ["セッコク", "ギンリョウソウ", "ヌスビトハギ", "トクサ"]),
  makePhotoQuestion(73, "plant", "日本の冷温帯林を代表する植物をひとつ選びなさい。", ["シラカシ", "ダケカンバ", "ハイマツ", "ブナ"]),
  makePhotoQuestion(74, "plant", "湿原を代表する植物をひとつ選びなさい。", ["シュンラン", "カンアオイ", "コマクサ", "ワタスゲ"]),
  makePhotoQuestion(75, "plant", "秋から冬に開花する植物をひとつ選びなさい。", ["ツバキ", "ユキヤナギ", "レンギョウ", "ロウバイ"]),
  makePhotoQuestion(76, "plant", "強い毒をもつ植物をひとつ選びなさい。", ["クズ", "タンポポ", "クサギ", "トリカブト"]),
  makePhotoQuestion(77, "all", "生物の分類階級で「界」のひとつ下位の階級をひとつ選びなさい。", ["科", "門", "綱", "目"]),
  makePhotoQuestion(78, "all", "スギの学名を Cryptomeria japonica と表したとき、Cryptomeria はなにを示していますか。", ["科名", "命名者", "属名", "種小名"]),
  makePhotoQuestion(79, "plant", "植物のおし葉標本につけるラベルには、採集場所と採集者名のほかに何を記入しますか。必ず記入することをひとつ選びなさい。", ["花の色", "種子の色", "採集年月日", "標本作製年月日"]),
  makePhotoQuestion(80, "mammal", "日本在来の動物をひとつ選びなさい。", ["アカゲザル", "アナグマ", "ガビチョウ", "カミツキガメ"]),
  makePhotoQuestion(81, "bird", "日本ではかつて野生絶滅した鳥をひとつ選びなさい。", ["タンチョウ", "オオミズナギドリ", "シマフクロウ", "トキ"]),
  makePhotoQuestion(82, "amphibian", "日本における外来種をひとつ選びなさい。", ["ウシガエル", "シュレーゲルアオガエル", "モリアオガエル", "ヤマアカガエル"]),
  makePhotoQuestion(83, "plant", "山菜として、新芽をよく食用とする植物をひとつ選びなさい。", ["トチノキ", "シラカンバ", "タラノキ", "ヌルデ"]),
  makePhotoQuestion(84, "plant", "ウルシの主な利用法をひとつ選びなさい。", ["農具の柄", "和紙の原料", "塗料", "燃料"]),
  makePhotoQuestion(85, "all", "次の記述の（ア）にあてはまるものをひとつ選びなさい。マメ科植物と共生している根粒菌は（ア）固定をする。", ["カリウム", "窒素", "ブドウ糖（グルコース）", "リン酸"]),
  makePhotoQuestion(86, "insect", "産みつけられた卵の様子が「うどんげの花」と呼ばれている昆虫をひとつ選びなさい。", ["カワゲラ", "クサカゲロウ", "トビケラ", "ムカシトンボ"]),
  makePhotoQuestion("87-1", "plant", "次の記述について、正しいか誤りかひとつ選びなさい。葉の先はとがる。", ["正しい", "誤り"]),
  makePhotoQuestion("87-2", "plant", "次の記述について、正しいか誤りかひとつ選びなさい。葉縁にはきょ（鋸）歯がある。", ["正しい", "誤り"]),
  makePhotoQuestion("87-3", "plant", "次の記述について、正しいか誤りかひとつ選びなさい。葉の裏面には長毛が密生する。", ["正しい", "誤り"]),
  makePhotoQuestion("87-4", "plant", "次の記述について、正しいか誤りかひとつ選びなさい。この葉は単葉である。", ["正しい", "誤り"]),
  makePhotoQuestion("87-5", "plant", "この植物はなんですか。ひとつ選びなさい。", ["トチノキ", "クワ", "カエデ", "ブドウ"]),
];

activeQuestionYear = 2025;
activeAnswerData = answerDataByYear[activeQuestionYear];
const photoQuestions2025 = [
  makePhotoQuestion(1, "mammal", "尾がない動物をひとつ選びなさい。", ["ボノボ", "ワオキツネザル", "コモンマーモセット", "テングザル"], 0),
  makePhotoQuestion(2, "mammal", "セミクジラと同じなかま（同じ目）の動物をひとつ選びなさい。", ["オットセイ", "マイルカ", "ゴマフアザラシ", "ジュゴン"], 1),
  makePhotoQuestion(3, "mammal", "尾の全体が平たい動物をひとつ選びなさい。", ["クマネズミ", "カワウソ", "ミンク", "ビーバー"], 3),
  makePhotoQuestion(4, "bird", "カッコウと同じなかま（同じ科）の鳥をひとつ選びなさい。", ["アカゲラ", "カワラバト", "ホトトギス", "ムクドリ"], 2),
  makePhotoQuestion(5, "bird", "モズと同じなかま（同じ目）の鳥をひとつ選びなさい。", ["スズメ", "ハヤブサ", "サシバ", "ヨタカ"], 0),
  makePhotoQuestion(6, "bird", "キジバトのシルエットをひとつ選びなさい。", ["シルエット1", "シルエット2", "シルエット3", "シルエット4"], 2),
  makePhotoQuestion(7, "bird", "タカのあしをひとつ選びなさい。", ["足1", "足2", "足3", "足4"], 3),
  makePhotoQuestion(8, "bird", "もっとも小さい（全長が短い）鳥をひとつ選びなさい。", ["ハシボソガラス", "カルガモ", "カモメ", "ハクセキレイ"], 3),
  makePhotoQuestion(9, "reptile", "ヒバカリにもっとも近縁な動物をひとつ選びなさい。", ["ヤモリ", "ツチガエル", "オオサンショウウオ", "ヤマカガシ"], 3),
  makePhotoQuestion(10, "reptile", "ニホンイシガメの背側の甲羅の図として、正しいものをひとつ選びなさい。", ["図1", "図2", "図3", "図4"], 1),
  makePhotoQuestion(11, "fish", "硬骨魚類をひとつ選びなさい。", ["イトマキエイ", "ウナギ", "ノコギリザメ", "ネムリブカ"], 1),
  makePhotoQuestion(12, "fish", "グッピーと同じなかま（同じ科）の魚をひとつ選びなさい。", ["イトヨ", "カダヤシ", "ヤマメ", "ギンブナ"], 1),
  makePhotoQuestion(13, "fish", "この魚はなんですか。", ["ナマズ", "ニジマス", "サワラ", "マダラ"], 3),
  makePhotoQuestion(14, "fish", "このシルエットの魚はなんですか。", ["ガレイ", "ホウボウ", "マゴチ", "アカエイ"], 3),
  makePhotoQuestion(15, "fish", "鱗（うろこ）がない魚をひとつ選びなさい。", ["イワシ", "カレイ", "サバ", "ナマズ"], 3),
  makePhotoQuestion(16, "insect", "鱗粉をもつ昆虫をひとつ選びなさい。", ["オオムラサキ", "オオスズメバチ", "トノサマバッタ", "シオカラトンボ"], 0),
  makePhotoQuestion(17, "insect", "クワガタムシと同じなかま（同じ目）の昆虫をひとつ選びなさい。", ["ゴキブリ", "カメムシ", "テントウムシ", "ハサミムシ"], 2),
  makePhotoQuestion(18, "insect", "他と異なるなかま（異なる目）の昆虫をひとつ選びなさい。", ["ヘイケボタル", "ゲンゴロウ", "タイコウチ", "ミズスマシ"], 2),
  makePhotoQuestion(19, "insect", "タガメの成虫の餌の食べ方について、正しい記述をひとつ選びなさい。", ["ブラシ状の口でなめる", "管状の口で吸う", "左右に動くあごでかむ", "上下に動くあごでかむ"], 1),
  makePhotoQuestion(20, "all", "軟体動物をひとつ選びなさい。", ["イソギンチャク", "クラゲ", "サザエ", "ヒトデ"], 2),
  makePhotoQuestion(21, "all", "ゴカイにもっとも近縁な動物をひとつ選びなさい。", ["アメフラシ", "フナムシ", "コブシメ", "イトミミズ"], 3),
  makePhotoQuestion(22, "all", "このシルエットの動物はなんですか。", ["ムカデ", "ヤスデ", "ゴカイ", "ヒル"], 0),
  makePhotoQuestion(23, "all", "カタツムリ（マイマイ）の記述について正しい組み合わせをひとつ選びなさい。", ["A-C", "A-D", "B-C", "B-D"], 0),
  makePhotoQuestion(24, "plant", "裸子植物をひとつ選びなさい。", ["モミ", "ヤマグワ", "ココヤシ", "ウチワサボテン"], 0),
  makePhotoQuestion(25, "plant", "マツ科ではない植物をひとつ選びなさい。", ["カラマツ", "トウヒ", "アカマツ", "スギ"], 3),
  makePhotoQuestion(26, "plant", "ヘチマと同じなかま（同じ科）の植物をひとつ選びなさい。", ["アケビ", "イチジク", "スイカ", "ブドウ"], 2),
  makePhotoQuestion(27, "plant", "イチゴと同じなかま（同じ科）の植物をひとつ選びなさい。", ["キウイフルーツ", "ブルーベリー", "マンゴー", "リンゴ"], 3),
  makePhotoQuestion(28, "plant", "ミカンと同じなかま（同じ科）の植物をひとつ選びなさい。", ["ヒイラギ", "ネムノキ", "サンショウ", "ハリギリ"], 2),
  makePhotoQuestion(29, "plant", "スミレと同じなかま（同じ科）の植物をひとつ選びなさい。", ["パンジー", "マリーゴールド", "サルビア", "ヒアシンス"], 0),
  makePhotoQuestion(30, "plant", "この野菜はなんですか。", ["ホウレンソウ", "チンゲンサイ", "パセリ", "ニラ"], 0),
  makePhotoQuestion(31, "plant", "この野菜はなんですか。", ["オクラ", "ナス", "トウガラシ", "ピーマン"], 0),
  makePhotoQuestion(32, "plant", "このシルエットはなんの葉ですか。", ["オモダカ", "ガマ", "マコモ", "コウホネ"], 0),
  makePhotoQuestion(33, "plant", "黄色の花をつける植物をひとつ選びなさい。", ["オオイヌノフグリ", "カキドオシ", "ニリンソウ", "オニタビラコ"], 3),
  makePhotoQuestion(34, "plant", "花弁が4枚の植物をひとつ選びなさい。", ["カタバミ", "ツユクサ", "コハコベ", "メマツヨイグサ"], 3),
  makePhotoQuestion(35, "plant", "つぼ形の花をつける植物をひとつ選びなさい。", ["ドウダンツツジ", "ハイビスカス", "コスモス", "ユリ"], 0),
  makePhotoQuestion(36, "plant", "次の図は一枚の葉を表しています。図のような形状の葉をなんといいますか。", ["単葉", "三出複葉", "掌状複葉", "羽状複葉"], 2),
  makePhotoQuestion(37, "plant", "葉の縁にきょ（鋸）歯がない植物をひとつ選びなさい。", ["クスノキ", "サクラ", "ツバキ", "ミズナラ"], 0),
  makePhotoQuestion(38, "plant", "葉が互生する植物をひとつ選びなさい。", ["ソメイヨシノ", "トウカエデ", "カツラ", "アオキ"], 0),
  makePhotoQuestion(39, "plant", "主につぼみと花茎を食用にする野菜をひとつ選びなさい。", ["ハス", "ブロッコリー", "ニンジン", "ネギ"], 1),
  makePhotoQuestion(40, "plant", "次の図はイチゴ（オランダイチゴ）です。（ア）はなにが発達したものですか。", ["花床", "子房", "子房と花柱", "めしべ"], 0),
  makePhotoQuestion(41, "plant", "オニユリとノイバラに共通する特徴をひとつ選びなさい。", ["花弁が5枚ある", "茎にとげがある", "両性花である", "種子をむかごで繁殖する"], 2),
  makePhotoQuestion(42, "plant", "巻きひげのない植物をひとつ選びなさい。", ["サルトリイバラ", "ソラマメ", "カボチャ", "ヤブカラシ"], 1),
  makePhotoQuestion(43, "plant", "褐藻をひとつ選びなさい。", ["アサクサノリ", "ワカメ", "トサカノリ", "マクサ"], 1),
  makePhotoQuestion(44, "plant", "次の検索表のAにあてはまるものをひとつ選びなさい。", ["コケ植物", "シダ植物", "裸子植物", "被子植物"], 0),
  makePhotoQuestion(45, "all", "動物の検索表です。ニシキヘビはどこにあてはまりますか。", ["A", "B", "C", "D"], 3),
  makePhotoQuestion("46-1", "mammal", "この生物の和名をひとつ選びなさい。", ["イノシシ", "ニホンカモシカ", "ニホンジカ", "ヤギ"], 2),
  makePhotoQuestion("46-2", "bird", "この生物の和名をひとつ選びなさい。", ["コジュケイ", "ヤマドリ", "キジ", "ライチョウ"], 2),
  makePhotoQuestion("46-3", "reptile", "この生物の和名をひとつ選びなさい。", ["ヒガシニホントカゲ", "ニホンカナヘビ", "ニホンマムシ", "アカハライモリ"], 0),
  makePhotoQuestion("46-4", "insect", "この生物の和名をひとつ選びなさい。", ["ウスバシロチョウ", "モンキチョウ", "モンシロチョウ", "ツマキチョウ"], 2),
  makePhotoQuestion("46-5", "all", "この生物の和名をひとつ選びなさい。", ["ジグモ", "ジョロウグモ", "セアカゴケグモ", "アシダカグモ"], 1),
  makePhotoQuestion("46-6", "plant", "この生物の和名をひとつ選びなさい。", ["キンモクセイ", "ビョウヤナギ", "レンギョウ", "コナラ"], 0),
  makePhotoQuestion("46-7", "plant", "この生物の和名をひとつ選びなさい。", ["エゴノキ", "ユキヤナギ", "ウツギ", "ジンチョウゲ"], 3),
  makePhotoQuestion("46-8", "plant", "この生物の和名をひとつ選びなさい。", ["ツリフネソウ", "フウセンカズラ", "オシロイバナ", "ナデシコ"], 2),
  makePhotoQuestion("46-9", "plant", "この生物の和名をひとつ選びなさい。", ["ボタン", "サザンカ", "シャクナゲ", "ボケ"], 1),
  makePhotoQuestion("46-10", "plant", "この生物の和名をひとつ選びなさい。", ["ロウバイ", "ハナミズキ", "クチナシ", "ウメ"], 3),
  makePhotoQuestion(47, "mammal", "土中に掘った巣穴で子を育てる動物をひとつ選びなさい。", ["アカギツネ", "ニホンジカ", "キクガシラコウモリ", "ムササビ"], 0),
  makePhotoQuestion(48, "mammal", "群れをつくる動物をひとつ選びなさい。", ["カヤネズミ", "ニホンカモシカ", "ツキノワグマ", "ニホンザル"], 3),
  makePhotoQuestion(49, "bird", "本州での冬鳥をひとつ選びなさい。", ["オナガ", "スズメ", "ツグミ", "ハクセキレイ"], 2),
  makePhotoQuestion(50, "bird", "地面に巣をつくる鳥をひとつ選びなさい。", ["カワラヒワ", "ヒバリ", "オシドリ", "メジロ"], 1),
  makePhotoQuestion(51, "bird", "渓流で水中を歩きながら餌をとる鳥をひとつ選びなさい。", ["カワガラス", "アカショウビン", "カワセミ", "マヒワ"], 0),
  makePhotoQuestion(52, "reptile", "砂浜に穴を掘り、産卵する動物をひとつ選びなさい。", ["アカウミガメ", "シュレーゲルアオガエル", "ニホンヤモリ", "クロサンショウウオ"], 0),
  makePhotoQuestion(53, "fish", "淡水に生息する魚をひとつ選びなさい。", ["キビナゴ", "マサバ", "サヨリ", "モツゴ"], 3),
  makePhotoQuestion(54, "fish", "胎生の魚をひとつ選びなさい。", ["アカエイ", "サケ", "スケトウダラ", "ボラ"], 0),
  makePhotoQuestion(55, "fish", "深海魚をひとつ選びなさい。", ["チョウチンアンコウ", "サンマ", "ウツボ", "オオカミウオ"], 0),
  makePhotoQuestion(56, "insect", "幼虫が木の中に潜り込んで成長する昆虫をひとつ選びなさい。", ["カブトムシ", "オサムシ", "カミキリムシ", "ホタル"], 2),
  makePhotoQuestion(57, "insect", "幼虫が集団で巣網をつくる昆虫をひとつ選びなさい。", ["アメリカシロヒトリ", "カラスアゲハ", "オオミズアオ", "モンシロチョウ"], 0),
  makePhotoQuestion(58, "insect", "雌だけが吸血する昆虫をひとつ選びなさい。", ["ヒトスジシマカ", "ヒトジラミ", "トコジラミ", "ネコノミ"], 0),
  makePhotoQuestion(59, "insect", "雄の成虫が卵の世話をする昆虫をひとつ選びなさい。", ["アメンボ", "ゲンゴロウ", "タガメ", "ミズスマシ"], 2),
  makePhotoQuestion(60, "all", "耐久型になると乾燥や低温に強くなる動物をひとつ選びなさい。", ["クマムシ", "カニムシ", "ダンゴムシ", "ガムシ"], 0),
  makePhotoQuestion(61, "all", "主に落ち葉や菌類を食べる動物をひとつ選びなさい。", ["シカ", "コウガイビル", "ゲジ", "ヤスデ"], 3),
  makePhotoQuestion(62, "all", "陸上で生活する貝をひとつ選びなさい。", ["サカマキガイ", "キセルガイ", "カラスガイ", "ムラサキイガイ"], 1),
  makePhotoQuestion(63, "mammal", "育児のうで子を育てる動物をひとつ選びなさい。", ["ポッサム", "カバ", "ナマケモノ", "キツネザル"], 0),
  makePhotoQuestion(64, "plant", "ひとつの株に雌花と雄花の両方をつける植物をひとつ選びなさい。", ["アカマツ", "イチョウ", "サツキ", "コブシ"], 0),
  makePhotoQuestion(65, "plant", "主に地下茎でふえる植物をひとつ選びなさい。", ["クロマツ", "シュロ", "トウモロコシ", "モウソウチク"], 3),
  makePhotoQuestion(66, "plant", "アメリカセンダングサの主な種子散布の方法をひとつ選びなさい。", ["風で運ばれる", "動物のからだに付着して運ばれる", "動物に食べられて運ばれる", "果実がはじけて種子が飛ぶ"], 1),
  makePhotoQuestion(67, "plant", "ススキの主な種子散布の方法をひとつ選びなさい。", ["風で運ばれる", "昆虫によって運ばれる", "動物に食べられて運ばれる", "果実がはじけて種子が飛ぶ"], 0),
  makePhotoQuestion(68, "plant", "落葉高木をひとつ選びなさい。", ["キリ", "ウンナン", "ヤマブキ", "クスノキ"], 0),
  makePhotoQuestion(69, "plant", "常緑広葉樹をひとつ選びなさい。", ["ミカン", "ナシ", "カキノキ", "リンゴ"], 0),
  makePhotoQuestion(70, "plant", "一年生植物をひとつ選びなさい。", ["アサガオ", "スミレ", "シロツメクサ", "ハナショウブ"], 0),
  makePhotoQuestion(71, "plant", "水生植物をひとつ選びなさい。", ["ツユクサ", "ジュンサイ", "ミズヒキ", "ミズキ"], 1),
  makePhotoQuestion(72, "plant", "次の記述にあてはまる植物をひとつ選びなさい。インドネシアに分布する寄生植物。地上部は腐肉臭のする大きな花だけをつける。", ["ラフレシア", "スマトラオオコンニャク（ショクダイコンニャク）", "リュウゼツラン", "オオタニワタリ"], 0),
  makePhotoQuestion(73, "plant", "湿原を代表する植物をひとつ選びなさい。", ["ススキ", "キキョウ", "ミズバショウ", "マツムシソウ"], 2),
  makePhotoQuestion(74, "plant", "海浜に生育する植物をひとつ選びなさい。", ["ワレモコウ", "サクラソウ", "ハマナス", "エビネ"], 2),
  makePhotoQuestion(75, "plant", "夏の終わりから秋に咲く植物をひとつ選びなさい。", ["ホトケノザ", "マンサク", "ナズナ", "ヒガンバナ"], 3),
  makePhotoQuestion(76, "plant", "スズカケノキ（プラタナス）の記述として誤りであるものをひとつ選びなさい。", ["日本原産の植物である", "落葉樹である", "高木である", "ピンポン球大の球形果がぶら下がる"], 0),
  makePhotoQuestion(77, "all", "生物の分類階級で「科」のひとつ上位の階級をひとつ選びなさい。", ["綱", "属", "目", "門"], 2),
  makePhotoQuestion(78, "all", "ニホンジネズミの学名を Crocidura dsinezumi (Temminck, 1842) と表したとき、Temminck はなにを示していますか。", ["科名", "属名", "命名者", "種小名"], 2),
  makePhotoQuestion(79, "all", "一般に乾燥させて標本にするものをひとつ選びなさい。", ["魚類", "クモ類", "昆虫類", "両生類"], 2),
  makePhotoQuestion(80, "plant", "北アメリカ原産の植物をひとつ選びなさい。", ["イチョウ", "トウカエデ", "タイサンボク", "マテバシイ"], 2),
  makePhotoQuestion(81, "bird", "日本ではかつて野生絶滅した鳥をひとつ選びなさい。", ["アホウドリ", "コウノトリ", "タンチョウ", "ブッポウソウ"], 1),
  makePhotoQuestion(82, "all", "日本の在来種ではないものをひとつ選びなさい。", ["イトヨ", "ソウギョ", "ウグイ", "ホトケドジョウ"], 1),
  makePhotoQuestion(83, "plant", "ハゼノキの利用法をひとつ選びなさい。", ["殺虫剤", "仏壇のお供え", "香辛料", "蝋（ろう）の原料"], 3),
  makePhotoQuestion(84, "plant", "殺虫剤の原料として用いる植物をひとつ選びなさい。", ["ヤマグワ", "モチノキ", "ジョチュウギク", "ヒイラギ"], 2),
  makePhotoQuestion(85, "all", "大陸移動説を提唱したドイツの学者の名前をひとつ選びなさい。", ["ダーウィン", "ウェゲナー", "メンデル", "ラマルク"], 1),
  makePhotoQuestion(86, "all", "オニヒトデとサンゴの関係をあらわす言葉をひとつ選びなさい。", ["寄生", "相利共生", "片利共生", "捕食－被食"], 3),
  makePhotoQuestion("87-1", "plant", "次の記述について、正しいか誤りかひとつ選びなさい。この葉には葉柄がある。", ["正しい", "誤り"], 0),
  makePhotoQuestion("87-2", "plant", "次の記述について、正しいか誤りかひとつ選びなさい。葉の縁にはきょ（鋸）歯がある。", ["正しい", "誤り"], 0),
  makePhotoQuestion("87-3", "plant", "次の記述について、正しいか誤りかひとつ選びなさい。葉の先端はとがる。", ["正しい", "誤り"], 0),
  makePhotoQuestion("87-4", "plant", "次の記述について、正しいか誤りかひとつ選びなさい。裏面の葉脈上には毛がある。", ["正しい", "誤り"], 0),
  makePhotoQuestion("87-5", "plant", "この植物はなんですか。ひとつ選びなさい。", ["ワサビ", "エンドウ", "シソ", "シュンギク"], 2),
];

const photoQuestions = [...photoQuestions2023, ...photoQuestions2024, ...photoQuestions2025];

photoQuestions.forEach((question) => {
  const key = String(question.num).replace(/^問\s*/, "");
  const mainNum = Number(key.split("-")[0]);
  const year = question.year;
  const textOnlyQuestionNums = textOnlyQuestionNumsByYear[year] || new Set();
  const statementBlocks = statementBlocksByYear[year] || {};
  const stemVisuals = stemVisualsByYear[year] || {};
  const promptPhotos = promptPhotosByYear[year] || {};
  const optionVisuals = optionVisualsByYear[year] || {};
  const explicitOptionImages = questionOptionImages[question.id];
  if (explicitOptionImages) {
    question.options.forEach((option, index) => {
      option.img = explicitOptionImages[index] || "";
    });
  }
  if (textOnlyQuestionNums.has(mainNum)) {
    question.textOnlyOptions = true;
  }
  if (statementBlocks[mainNum]) {
    question.statementBlock = statementBlocks[mainNum];
    question.textOnlyOptions = true;
  }
  if (stemVisuals[mainNum] && !promptPhotos[key]) {
    question.stemVisual = stemVisuals[mainNum];
    question.textOnlyOptions = true;
  }
  if (promptPhotos[key] || promptPhotos[mainNum]) {
    const photo = promptPhotos[key] || promptPhotos[mainNum];
    question.promptPhotoName = photo.name;
    question.promptPhotoImg = photo.img || "";
    question.textOnlyOptions = true;
  }
  if (optionVisuals[mainNum]) {
    question.options.forEach((option, index) => {
      option.visual = optionVisuals[mainNum][index];
    });
  }
});

const optionImageOverrides = {
  ガン: img("Greater white-fronted goose (Anser albifrons) in flight.jpg"),
  シミ: img("Lepisma saccharina.jpg"),
  アオキ: img("Aucuba_japonica0.jpg"),
  カリン: img("Pseudocydonia_sinensis_fruit.jpg"),
  ヤツデ: img("Fatsia_japonica1.jpg"),
  キンカン: img("Kumquat.jpeg"),
  カンタン: img("Oecanthus_longicauda_Male.jpg"),
};

const optionImageCache = new Map(Object.entries(optionImageOverrides));

const imageQueryAliases = {
  "アゲハ（ナミアゲハ）": "ナミアゲハ",
  "ニガウリ（ゴーヤ）": "ツルレイシ",
  "ヤハズエンドウ（カラスノエンドウ）": "ヤハズエンドウ",
  "ゲンゲ（レンゲソウ）": "レンゲソウ",
  "スマトラオオコンニャク（ショクダイコンニャク）": "スマトラオオコンニャク",
  "うろこ": "鱗",
  "えら": "鰓",
  "ひれ": "鰭",
};

const imageCacheStorageKey = "biomaster-image-cache-v1";
const imageRequestQueue = [];
let imageRequestActive = false;

try {
  const savedImageCache = JSON.parse(localStorage.getItem(imageCacheStorageKey) || "{}");
  Object.entries(savedImageCache).forEach(([name, source]) => {
    if (typeof source === "string" && /^https?:\/\//.test(source)) {
      optionImageCache.set(name, source);
    }
  });
} catch {
  // Image cache is optional; the resolver can still fetch fresh sources.
}

function persistImageCache(name, source) {
  try {
    const saved = JSON.parse(localStorage.getItem(imageCacheStorageKey) || "{}");
    saved[name] = source;
    localStorage.setItem(imageCacheStorageKey, JSON.stringify(saved));
  } catch {
    // Storage can be unavailable in private or embedded browsers.
  }
}

const questions = photoQuestions.sort((a, b) => {
  const yearDiff = a.year - b.year;
  if (yearDiff) return yearDiff;
  return questionOrderValue(a.num) - questionOrderValue(b.num);
});
const NEW_WINDOW_DAYS = 14;

const letters = ["A", "B", "C", "D"];
const app = document.querySelector("#app");
const rubyCache = new Map();

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

// Readings used by the recovered question text and the standalone kanji mode.
// The character fallback below deliberately leaves an unknown kanji unchanged
// instead of displaying a misleading question mark.
Object.assign(kanjiReadings, {
  番: "ばん", 羽: "はね", 咲: "さ", 菌: "きん", 世: "せ", 式: "しき", 命: "めい", 者: "しゃ", 書: "か", 採: "さい", 月: "つき", 場: "ば", 所: "しょ", 入: "はい", 在: "ざい", 域: "いき", 過: "す", 繁: "はん", 殖: "しょく", 鋸: "きょ", 歯: "は", 枚: "まい", 並: "なら", 粒: "つぶ", 窒: "ちつ",
  漢: "かん", 字: "じ", 言: "こと", 味: "あじ", 読: "よ", 縞: "しま", 厚: "あつ", 反: "はん", 返: "かえ", 密: "みつ", 指: "ゆび", 盤: "ばん", 登: "のぼ", 深: "ふか", 叉: "さ", 横: "よこ", 鋏: "はさみ", 角: "かく", 腕: "うで", 触: "ふ", 序: "じょ", 斗: "と", 紫: "むらさき", 冠: "かん", 円: "えん", 披: "ひ", 心: "こころ", 互: "たが", 束: "たば", 堅: "かた", 淡: "たん", 臭: "くさ", 総: "そう", 苞: "ほう", 片: "かた", 椎: "しい", 型: "かた", 黒: "くろ", 斑: "はん", 紋: "もん", 手: "て", 泡: "あわ", 塊: "かたまり", 敵: "てき", 防: "ぼう", 御: "ご", 激: "げき", 受: "う", 常: "じょう", 緑: "みどり", 宿: "しゅく", 冷: "つめ", 湿: "しつ", 秋: "あき", 毒: "どく", 漆: "うるし", 塗: "ぬ", 具: "ぐ", 燃: "も", 羅: "ら", 粉: "こな", 掌: "しょう", 三: "さん", 床: "ゆか", 柱: "はしら", 掘: "ほ", 穴: "あな", 渓: "けい", 流: "なが", 歩: "ある", 浜: "はま", 息: "いき", 潜: "もぐ", 網: "あみ", 血: "ち", 話: "はなし", 耐: "た", 久: "ひさ", 落: "お", 付: "つ", 着: "つ", 終: "お", 般: "はん", 北: "きた", 蝋: "ろう", 殺: "さつ", 剤: "ざい", 仏: "ぶつ", 壇: "だん", 供: "そな", 香: "かお", 辛: "から", 移: "うつ", 提: "てい", 唱: "とな", 相: "あい", 端: "はし"
});

// Context-specific readings take precedence over the single-kanji fallback.
// Biology terms such as 花柱 and 鋏角類 cannot be read correctly one character
// at a time, so keep their natural readings here.
const rubyContextEntries = [
  ["問題文", "もんだいぶん"], ["確認", "かくにん"], ["仲間", "なかま"], ["近縁", "きんえん"], ["名前", "なまえ"], ["関係", "かんけい"], ["指定", "してい"], ["部分", "ぶぶん"], ["注目", "ちゅうもく"], ["甲羅", "こうら"], ["一致", "いっち"], ["家禽化", "かきんか"], ["輪郭", "りんかく"], ["細長", "ほそなが"], ["猛禽類", "もうきんるい"], ["発達", "はったつ"], ["本数", "ほんすう"], ["足指", "あしゆび"], ["水辺", "みずべ"], ["無尾類", "むびるい"], ["体形", "たいけい"], ["体側", "たいそく"], ["種類", "しゅるい"], ["時期", "じき"], ["昆虫綱", "こんちゅうこう"], ["原生生物", "げんせいせいぶつ"], ["類線形動物", "るいせんけいどうぶつ"], ["変態", "へんたい"], ["区別", "くべつ"], ["何門", "なんもん"], ["何綱", "なんこう"], ["何目", "なんもく"], ["何科", "なんか"], ["節足動物門", "せっそくどうぶつもん"], ["節足動物", "せっそくどうぶつ"], ["環形動物", "かんけいどうぶつ"], ["線形動物", "せんけいどうぶつ"], ["扁形動物", "へんけいどうぶつ"], ["頭胸部", "とうきょうぶ"], ["腹部", "ふくぶ"], ["頭部", "とうぶ"], ["胸部", "きょうぶ"], ["歯舌", "しぜつ"], ["眼", "め"], ["胞子", "ほうし"], ["季節", "きせつ"], ["変化", "へんか"], ["多数", "たすう"], ["葉先", "はさき"], ["複数", "ふくすう"], ["背中", "せなか"], ["背面", "はいめん"], ["位置", "いち"], ["場所", "ばしょ"], ["説明", "せつめい"], ["生活時期", "せいかつじき"], ["体内", "たいない"], ["渡来", "とらい"], ["母親", "ははおや"], ["水草", "みずくさ"], ["原虫", "げんちゅう"], ["雌雄異株", "しゆういしゅ"], ["雄株", "おかぶ"], ["雌株", "めかぶ"], ["地中", "ちちゅう"], ["一部", "いちぶ"], ["空中", "くうちゅう"], ["水上", "すいじょう"], ["袋状", "たいじょう"], ["捕虫器", "ほちゅうき"], ["構成", "こうせい"], ["分布", "ぶんぷ"], ["淡水", "たんすい"], ["原産地", "げんさんち"], ["海風", "かいふう"], ["夕方", "ゆうがた"], ["多年草", "たねんそう"], ["一年草", "いちねんそう"], ["雌雄別株", "しゆうべっしゅ"], ["食用", "しょくよう"], ["下位", "かい"], ["階級", "かいきゅう"], ["人物", "じんぶつ"], ["目的", "もくてき"], ["方法", "ほうほう"], ["液体", "えきたい"], ["保存", "ほぞん"], ["採集日", "さいしゅうび"], ["液浸標本", "えきしんひょうほん"], ["煮沸", "しゃふつ"], ["狩猟鳥獣", "しゅりょうちょうじゅう"], ["農林業被害", "のうりんぎょうひがい"], ["染料", "せんりょう"], ["薬用", "やくよう"], ["育児", "いくじ"], ["吸盤", "きゅうばん"], ["幼生", "ようせい"], ["成体", "せいたい"], ["有無", "うむ"], ["指先", "ゆびさき"], ["軟骨魚類", "なんこつぎょるい"], ["体高", "たいこう"], ["二叉", "にさ"], ["前翅", "ぜんし"], ["甲虫", "こうちゅう"], ["上翅", "じょうし"], ["直翅目", "ちょくしもく"], ["多足類", "たそくるい"], ["鋏角類", "きょうかくるい"], ["軟体動物", "なんたいどうぶつ"], ["遊泳脚", "ゆうえいきゃく"], ["触腕", "しょくわん"], ["木生", "もくせい"], ["花序", "かじょ"], ["殻斗", "かくと"], ["紫色", "むらさきいろ"], ["頭花", "とうか"], ["合弁花冠", "ごうべんかかん"], ["科植物", "かしょくぶつ"], ["円形", "えんけい"], ["線形", "せんけい"], ["披針形", "ひしんけい"], ["心形", "しんけい"], ["平行脈", "へいこうみゃく"], ["対生", "たいせい"], ["互生", "ごせい"], ["束生", "そくせい"], ["輪生", "りんせい"], ["枝分かれ", "えだわかれ"], ["単子葉植物", "たんしようしょくぶつ"], ["堅果", "けんか"], ["植物全体", "しょくぶつぜんたい"], ["特異", "とくい"], ["臭気", "しゅうき"], ["総苞片", "そうほうへん"], ["特有", "とくゆう"], ["無脊椎動物", "むせきついどうぶつ"], ["和名", "わめい"], ["大型", "おおがた"], ["斑紋", "はんもん"], ["触手", "しょくしゅ"], ["胞子茎", "ほうしけい"], ["針葉樹", "しんようじゅ"], ["樹上", "じゅじょう"], ["得意", "とくい"], ["泡状", "ほうじょう"], ["卵塊", "らんかい"], ["砂底", "さてい"], ["刺胞", "しほう"], ["外敵", "がいてき"], ["防御", "ぼうぎょ"], ["二枚貝", "にまいがい"], ["刺激", "しげき"], ["両性花", "りょうせいか"], ["栄養繁殖", "えいようはんしょく"], ["落葉", "らくよう"], ["常緑低木", "じょうりょくていぼく"], ["多年生", "たねんせい"], ["宿根性", "しゅっこんせい"], ["球", "きゅう"], ["球大", "きゅうだい"], ["球根", "きゅうこん"], ["球形果", "きゅうけいか"], ["葉緑素", "ようりょくそ"], ["冷温帯林", "れいおんたいりん"], ["代表", "だいひょう"], ["属名", "ぞくめい"], ["科名", "かめい"], ["命名者", "めいめいしゃ"], ["種小名", "しゅしょうめい"], ["採集場所", "さいしゅうばしょ"], ["採集者名", "さいしゅうしゃめい"], ["記入", "きにゅう"], ["採集年月日", "さいしゅうねんがっぴ"], ["標本作製年月日", "ひょうほんさくせいねんがっぴ"], ["日本在来", "にほんざいらい"], ["野生絶滅", "やせいぜつめつ"], ["山菜", "さんさい"], ["新芽", "しんめ"], ["利用法", "りようほう"], ["利用目的", "りようもくてき"], ["材料", "ざいりょう"], ["燃料", "ねんりょう"], ["対照", "たいしょう"], ["漆器", "しっき"], ["塗料", "とりょう"], ["農具", "のうぐ"], ["共生", "きょうせい"], ["根粒菌", "こんりゅうきん"], ["窒素固定", "ちっそこてい"], ["窒素", "ちっそ"], ["様子", "ようす"], ["裏面", "りめん"], ["単葉", "たんよう"], ["追加", "ついか"], ["全体", "ぜんたい"], ["硬骨魚類", "こうこつぎょるい"], ["鱗粉", "りんぷん"], ["管状", "かんじょう"], ["一枚", "いちまい"], ["形状", "けいじょう"], ["掌状複葉", "しょうじょうふくよう"], ["三出複葉", "さんしゅつふくよう"], ["花茎", "かけい"], ["花床", "かしょう"], ["子房", "しぼう"], ["花柱", "かちゅう"], ["共通", "きょうつう"], ["繁殖", "はんしょく"], ["検索表", "けんさくひょう"], ["土中", "どちゅう"], ["巣穴", "すあな"], ["冬鳥", "ふゆどり"], ["地面", "じめん"], ["渓流", "けいりゅう"], ["砂浜", "すなはま"], ["生息", "せいそく"], ["深海魚", "しんかいぎょ"], ["成長", "せいちょう"], ["巣網", "そうもう"], ["吸血", "きゅうけつ"], ["世話", "せわ"], ["耐久型", "たいきゅうがた"], ["低温", "ていおん"], ["陸上", "りくじょう"], ["雌花", "めばな"], ["雄花", "おばな"], ["両方", "りょうほう"], ["種子散布", "しゅしさんぷ"], ["付着", "ふちゃく"], ["落葉高木", "らくようこうぼく"], ["常緑広葉樹", "じょうりょくこうようじゅ"], ["一年生植物", "いちねんせいしょくぶつ"], ["寄生植物", "きせいしょくぶつ"], ["地上部", "ちじょうぶ"], ["腐肉臭", "ふにくしゅう"], ["海浜", "かいひん"], ["日本原産", "にほんげんさん"], ["落葉樹", "らくようじゅ"], ["高木", "こうぼく"], ["上位", "じょうい"], ["一般", "いっぱん"], ["在来種", "ざいらいしゅ"], ["殺虫剤", "さっちゅうざい"], ["仏壇", "ぶつだん"], ["香辛料", "こうしんりょう"], ["大陸移動説", "たいりくいどうせつ"], ["提唱", "ていしょう"], ["学者", "がくしゃ"], ["言葉", "ことば"], ["捕食", "ほしょく"], ["被食", "ひしょく"], ["相利共生", "そうりきょうせい"], ["片利共生", "へんりきょうせい"], ["先端", "せんたん"], ["葉脈上", "ようみゃくじょう"], ["実写", "じっしゃ"], ["実", "み"], ["小さな", "ちいさな"], ["表されます", "あらわされます"], ["表した", "あらわした"]
];

const rubyHintEntries = [
  ["求める", "もとめる"], ["拾い", "ひろい"], ["暮らします", "くらします"], ["暮らす", "くらす"], ["単独", "たんどく"], ["伸びる", "のびる"], ["柔らかい", "やわらかい"], ["樹種", "じゅしゅ"], ["照合", "しょうごう"], ["対象", "たいしょう"], ["早く", "はやく"], ["守ったり", "まもったり"], ["空欄", "くうらん"], ["働き", "はたらき"], ["埋める", "うめる"]
];

const rubyContextEntriesExtra = [
  ["文章", "ぶんしょう"], ["属する", "ぞくする"], ["役割分担", "やくわりぶんたん"], ["木質化", "もくしつか"], ["海岸林", "かいがんりん"], ["防風林", "ぼうふうりん"], ["内陸", "ないりく"], ["著作名", "ちょさくめい"], ["脊椎動物", "せきついどうぶつ"], ["脊椎", "せきつい"], ["背骨", "せぼね"], ["海底", "かいてい"], ["岩場", "いわば"], ["生活史", "せいかつし"], ["行き来", "いきき"], ["下る", "くだる"], ["細胞", "さいぼう"], ["器官", "きかん"], ["国内", "こくない"], ["状況", "じょうきょう"], ["保全", "ほぜん"], ["再導入", "さいどうにゅう"], ["結びつけます", "むすびつけます"], ["貝殻", "かいがら"], ["生活形態", "せいかつけいたい"], ["上陸", "じょうりく"], ["卵", "たまご"], ["落ち葉", "おちば"], ["分解者", "ぶんかいしゃ"], ["肉食動物", "にくしょくどうぶつ"], ["有機物", "ゆうきぶつ"], ["近い", "ちかい"], ["分類上近い", "ぶんるいじょうちかい"], ["多数集まって", "たすうあつまって"], ["表面", "ひょうめん"], ["小葉", "しょうよう"], ["緑藻", "りょくそう"], ["本州", "ほんしゅう"], ["生活", "せいかつ"], ["消化管内", "しょうかかんない"], ["人名", "じんめい"], ["分類名", "ぶんるいめい"], ["混同", "こんどう"], ["肺呼吸", "はいこきゅう"], ["体表", "たいひょう"], ["密生", "みっせい"], ["落葉低木", "らくようていぼく"], ["湿原", "しつげん"], ["海水魚", "かいすいぎょ"], ["深海", "しんかい"], ["木材", "もくざい"], ["不利", "ふり"], ["環境", "かんきょう"], ["状態", "じょうたい"], ["性質", "せいしつ"], ["配置", "はいち"], ["条件", "じょうけん"], ["利益", "りえき"], ["理由", "りゆう"], ["殻板", "かくばん"], ["背側", "はいそく"], ["昆虫記", "こんちゅうき"], ["長毛", "ちょうもう"], ["有袋類", "ゆうたいるい"], ["葉標本", "はひょうほん"], ["おし葉標本", "おしばひょうほん"], ["昆虫名", "こんちゅうめい"], ["寄生植物地上部", "きせいしょくぶつちじょうぶ"], ["腐肉", "ふにく"], ["低木", "ていぼく"], ["印象", "いんしょう"], ["基準", "きじゅん"], ["除いて", "のぞいて"], ["自分", "じぶん"], ["支える", "ささえる"], ["守る", "まもる"], ["誰", "だれ"], ["決", "き"], ["飛", "と"], ["短", "みじか"], ["広", "ひろ"], ["甲", "こう"], ["殻", "から"], ["洞", "ほら"], ["越", "こ"], ["探", "さが"], ["柄", "え"], ["詳", "くわ"], ["強", "つよ"], ["貝", "かい"], ["当", "あ"], ["点", "てん"], ["森", "もり"], ["腐", "くさ"]
];

function withRuby(text) {
  if (!text) return "";
  const cacheKey = String(text);
  if (rubyCache.has(cacheKey)) return rubyCache.get(cacheKey);
  const placeholders = [];
  let output = escapeHtml(text);
  const entries = [...rubyContextEntries, ...rubyHintEntries, ...rubyContextEntriesExtra, ...rubyEntries, ...kanjiTerms.map((term) => [term.term, term.reading])];
  entries
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
  output = output.replace(/[\u3400-\u9fff]/gu, (char) => {
    const reading = kanjiReadings[char];
    return reading ? `<ruby>${char}<rt>${reading}</rt></ruby>` : char;
  });
  placeholders.forEach((html, index) => {
    output = output.replace(`__RUBY_${index}__`, html);
  });
  rubyCache.set(cacheKey, output);
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

const KANJI_SESSION_SIZE = 15;

const kanjiTerms = [
  { id: "seibutsu", term: "生物", reading: "せいぶつ", kr: "생물", meaning: "生きているもの。動物や植物など。", krMeaning: "살아 있는 것. 동물과 식물 등.", example: "生物をなかまで分ける。" },
  { id: "bunrui", term: "分類", reading: "ぶんるい", kr: "분류", meaning: "にているところで、なかまに分けること。", krMeaning: "비슷한 점으로 무리를 나누는 것.", example: "写真を見て分類する。" },
  { id: "bunrui-kaikyu", term: "分類階級", reading: "ぶんるいかいきゅう", kr: "분류 계급", meaning: "生物を分けるときの大きい順番。", krMeaning: "생물을 나눌 때 쓰는 단계.", example: "界、門、綱、目、科、属、種。" },
  { id: "honyurui", term: "哺乳類", reading: "ほにゅうるい", kr: "포유류", meaning: "お母さんの乳で子を育てる動物のなかま。", krMeaning: "어미의 젖으로 새끼를 키우는 동물 무리.", example: "ニホンザルは哺乳類です。" },
  { id: "chorui", term: "鳥類", reading: "ちょうるい", kr: "조류", meaning: "羽があり、卵を産む鳥のなかま。", krMeaning: "깃털이 있고 알을 낳는 새 무리.", example: "スズメは鳥類です。" },
  { id: "gyorui", term: "魚類", reading: "ぎょるい", kr: "어류", meaning: "水の中で生活し、えらで呼吸する魚のなかま。", krMeaning: "물속에서 살고 아가미로 숨 쉬는 물고기 무리.", example: "コイは魚類です。" },
  { id: "konchurui", term: "昆虫類", reading: "こんちゅうるい", kr: "곤충류", meaning: "体が頭・胸・腹に分かれ、脚が6本あるなかま。", krMeaning: "몸이 머리, 가슴, 배로 나뉘고 다리가 6개인 무리.", example: "テントウムシは昆虫類です。" },
  { id: "ryoseirui", term: "両生類", reading: "りょうせいるい", kr: "양서류", meaning: "子どものころは水中、大人になると陸でも生活するなかま。", krMeaning: "어릴 때는 물속, 자라면 땅에서도 사는 무리.", example: "カエルは両生類です。" },
  { id: "hachurui", term: "爬虫類", reading: "はちゅうるい", kr: "파충류", meaning: "うろこがあり、肺で呼吸する動物のなかま。", krMeaning: "비늘이 있고 폐로 숨 쉬는 동물 무리.", example: "ヤモリは爬虫類です。" },
  { id: "shokubutsu", term: "植物", reading: "しょくぶつ", kr: "식물", meaning: "根・茎・葉などをもち、光合成をする生き物。", krMeaning: "뿌리, 줄기, 잎 등이 있고 광합성을 하는 생물.", example: "植物の葉を観察する。" },
  { id: "shushi-shokubutsu", term: "種子植物", reading: "しゅししょくぶつ", kr: "종자식물", meaning: "種子でふえる植物。", krMeaning: "씨앗으로 번식하는 식물.", example: "アマモは種子植物です。" },
  { id: "hishi-shokubutsu", term: "被子植物", reading: "ひししょくぶつ", kr: "속씨식물", meaning: "種子が果実の中にできる植物。", krMeaning: "씨앗이 열매 안에 생기는 식물.", example: "花を咲かせる被子植物。" },
  { id: "rashi-shokubutsu", term: "裸子植物", reading: "らししょくぶつ", kr: "겉씨식물", meaning: "種子がむき出しに近い植物。", krMeaning: "씨앗이 겉으로 드러난 식물.", example: "スギは裸子植物です。" },
  { id: "sorui", term: "藻類", reading: "そうるい", kr: "조류", meaning: "水の中などにすむ、海藻をふくむなかま。", krMeaning: "물속 등에 사는 해조류를 포함한 무리.", example: "ヒジキは藻類です。" },
  { id: "kinrui", term: "菌類", reading: "きんるい", kr: "균류", meaning: "キノコやカビのなかま。", krMeaning: "버섯과 곰팡이 무리.", example: "シメジは菌類です。" },
  { id: "gakumei", term: "学名", reading: "がくめい", kr: "학명", meaning: "世界で使う、生物の正式な名前。", krMeaning: "세계에서 쓰는 생물의 공식 이름.", example: "学名には属名がある。" },
  { id: "meimeisha", term: "命名者", reading: "めいめいしゃ", kr: "명명자", meaning: "生物に名前をつけた人。", krMeaning: "생물에 이름을 붙인 사람.", example: "学名のあとに命名者を書く。" },
  { id: "hyohon", term: "標本", reading: "ひょうほん", kr: "표본", meaning: "調べるために残しておく体や葉。", krMeaning: "조사하려고 남겨 둔 몸이나 잎.", example: "おし葉標本を作る。" },
  { id: "saishu", term: "採集", reading: "さいしゅう", kr: "채집", meaning: "調べるものを集めること。", krMeaning: "조사할 것을 모으는 것.", example: "採集年月日を書く。" },
  { id: "zetsumetsu", term: "絶滅", reading: "ぜつめつ", kr: "멸종", meaning: "その生き物がいなくなること。", krMeaning: "그 생물이 사라지는 것.", example: "野生絶滅した鳥。" },
  { id: "gairaishu", term: "外来種", reading: "がいらいしゅ", kr: "외래종", meaning: "ほかの場所から入ってきた生き物。", krMeaning: "다른 곳에서 들어온 생물.", example: "ウシガエルは外来種です。" },
  { id: "zairaishu", term: "在来種", reading: "ざいらいしゅ", kr: "재래종", meaning: "もともとその地域にいる生き物。", krMeaning: "원래 그 지역에 살던 생물.", example: "日本在来の動物。" },
  { id: "suisei-shokubutsu", term: "水生植物", reading: "すいせいしょくぶつ", kr: "수생식물", meaning: "水辺や水の中で育つ植物。", krMeaning: "물가나 물속에서 자라는 식물.", example: "ヒツジグサは水生植物です。" },
  { id: "chusui-shokubutsu", term: "抽水植物", reading: "ちゅうすいしょくぶつ", kr: "정수식물", meaning: "根は水底、葉や茎は水の上に出る植物。", krMeaning: "뿌리는 물밑, 잎과 줄기는 물 위로 나오는 식물.", example: "ガマは抽水植物です。" },
  { id: "fuyo-shokubutsu", term: "浮葉植物", reading: "ふようしょくぶつ", kr: "부엽식물", meaning: "葉を水面に浮かべる植物。", krMeaning: "잎을 물 위에 띄우는 식물.", example: "ヒシは浮葉植物です。" },
  { id: "shokuchu-shokubutsu", term: "食虫植物", reading: "しょくちゅうしょくぶつ", kr: "식충식물", meaning: "虫をとって養分にする植物。", krMeaning: "곤충을 잡아 영양분으로 삼는 식물.", example: "ウツボカズラは食虫植物です。" },
  { id: "kisei", term: "寄生", reading: "きせい", kr: "기생", meaning: "ほかの生き物から栄養をもらって生活すること。", krMeaning: "다른 생물에게서 영양분을 얻어 사는 것.", example: "寄生する昆虫。" },
  { id: "tomin", term: "冬眠", reading: "とうみん", kr: "동면", meaning: "冬に動きを少なくして過ごすこと。", krMeaning: "겨울에 활동을 줄이고 지내는 것.", example: "冬眠する動物。" },
  { id: "sanran", term: "産卵", reading: "さんらん", kr: "산란", meaning: "卵を産むこと。", krMeaning: "알을 낳는 것.", example: "海藻に産卵する魚。" },
  { id: "hanshoku", term: "繁殖", reading: "はんしょく", kr: "번식", meaning: "子や種子をつくってふえること。", krMeaning: "새끼나 씨앗을 만들어 늘어나는 것.", example: "植物が繁殖する。" },
  { id: "eiyo-hanshoku", term: "栄養繁殖", reading: "えいようはんしょく", kr: "영양번식", meaning: "種子を使わず、茎や根などでふえること。", krMeaning: "씨앗 없이 줄기나 뿌리 등으로 번식하는 것.", example: "サトイモは栄養繁殖をする。" },
  { id: "yoen", term: "葉縁", reading: "ようえん", kr: "잎 가장자리", meaning: "葉のふちのこと。", krMeaning: "잎의 가장자리.", example: "葉縁には鋸歯がある。" },
  { id: "kyoshi", term: "鋸歯", reading: "きょし", kr: "톱니", meaning: "葉のふちにある、ぎざぎざ。", krMeaning: "잎 가장자리의 톱니 모양.", example: "葉の縁には鋸歯がある。" },
  { id: "tanyo", term: "単葉", reading: "たんよう", kr: "홑잎", meaning: "一枚の葉でできている葉。", krMeaning: "한 장으로 된 잎.", example: "この葉は単葉です。" },
  { id: "fukuyo", term: "複葉", reading: "ふくよう", kr: "겹잎", meaning: "小さな葉がいくつか集まった葉。", krMeaning: "작은 잎 여러 장이 모인 잎.", example: "フジの葉は複葉です。" },
  { id: "ujo-fukuyo", term: "羽状複葉", reading: "うじょうふくよう", kr: "깃꼴겹잎", meaning: "羽のように小葉が並ぶ複葉。", krMeaning: "깃털처럼 작은 잎이 늘어선 겹잎.", example: "羽状複葉か観察する。" },
  { id: "yomyaku", term: "葉脈", reading: "ようみゃく", kr: "잎맥", meaning: "葉に見えるすじ。", krMeaning: "잎에 보이는 줄기 같은 선.", example: "葉脈をよく見る。" },
  { id: "kaben", term: "花弁", reading: "かべん", kr: "꽃잎", meaning: "花びらのこと。", krMeaning: "꽃잎.", example: "花弁が4枚ある。" },
  { id: "kajitsu", term: "果実", reading: "かじつ", kr: "열매", meaning: "花のあとにでき、種子を包むもの。", krMeaning: "꽃이 진 뒤 생기며 씨앗을 감싸는 것.", example: "果実の中に種子がある。" },
  { id: "chikakei", term: "地下茎", reading: "ちかけい", kr: "땅속줄기", meaning: "土の中にある茎。", krMeaning: "땅속에 있는 줄기.", example: "ジャガイモは地下茎です。" },
  { id: "kogosei", term: "光合成", reading: "こうごうせい", kr: "광합성", meaning: "光を使って、植物が栄養を作ること。", krMeaning: "빛을 이용해 식물이 영양분을 만드는 것.", example: "植物は光合成をする。" },
  { id: "konryukin", term: "根粒菌", reading: "こんりゅうきん", kr: "뿌리혹박테리아", meaning: "マメ科植物の根にすむ菌。", krMeaning: "콩과 식물 뿌리에 사는 균.", example: "根粒菌は窒素固定をする。" },
  { id: "chisso-kotei", term: "窒素固定", reading: "ちっそこてい", kr: "질소고정", meaning: "空気中の窒素を植物が使える形にすること。", krMeaning: "공기 중 질소를 식물이 쓸 수 있게 바꾸는 것.", example: "根粒菌は窒素固定をする。" },
];

const kanjiQuestionTypes = ["meaning", "reading"];

function defaultProgress() {
  return { sessions: [], answers: {}, kanji: {}, kanjiSessions: [], activeQuiz: null, activeKanji: null };
}

const state = {
  view: "home",
  grade: 4,
  year: "all",
  category: "all",
  showKr: true,
  musicEnabled: false,
  session: [],
  index: 0,
  answers: [],
  recordedAnswers: [],
  kanjiSession: [],
  kanjiIndex: 0,
  kanjiAnswers: [],
  kanjiRecordedAnswers: [],
  startedAt: 0,
  lastResult: null,
  lastKanjiResult: null,
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
    const saved = JSON.parse(localStorage.getItem("biomaster-progress")) || {};
    return {
      ...defaultProgress(),
      ...saved,
      answers: saved.answers || {},
      kanji: saved.kanji || {},
      sessions: saved.sessions || [],
      kanjiSessions: saved.kanjiSessions || [],
      activeQuiz: saved.activeQuiz || null,
      activeKanji: saved.activeKanji || null,
    };
  } catch {
    return defaultProgress();
  }
}

function saveProgress() {
  try {
    localStorage.setItem("biomaster-progress", JSON.stringify(state.progress));
  } catch {
    // Storage can fail in private/in-app browsers; keep the in-memory score usable.
  }
}

function availableQuestions(category, grade, year = state.year) {
  return questions.filter((q) => {
    const categoryMatch = category === "all" || q.category === category;
    const yearMatch = year === "all" || q.year === Number(year);
    return categoryMatch && yearMatch && q.grade <= grade;
  });
}

function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function questionWeight(question) {
  const record = state.progress.answers[question.id];
  if (!record) return 0;
  const wrongBoost = Math.min(record.wrong * 0.18, 0.72);
  const masteredPenalty = record.streak >= 3 ? 0.28 : 0;
  return wrongBoost - masteredPenalty;
}

function buildSession(category, grade, year) {
  return shuffle(availableQuestions(category, grade, year))
    .map((question) => ({
      question,
      score: Math.random() + questionWeight(question),
    }))
    .sort((a, b) => b.score - a.score)
    .map((item) => item.question);
}

function kanjiTermMarkup(term, showReading = true) {
  const safeTerm = escapeHtml(term.term);
  if (!showReading) return safeTerm;
  return `<ruby>${safeTerm}<rt>${escapeHtml(term.reading)}</rt></ruby>`;
}

function kanjiWeight(term) {
  const record = state.progress.kanji[term.id];
  if (!record) return 0;
  const wrongBoost = Math.min(record.wrong * 0.22, 0.88);
  const masteredPenalty = record.streak >= 3 ? 0.35 : 0;
  return wrongBoost - masteredPenalty;
}

function buildKanjiQuestion(term) {
  const type = kanjiQuestionTypes[Math.floor(Math.random() * kanjiQuestionTypes.length)];
  const field = type === "reading" ? "reading" : "meaning";
  const distractors = shuffle(kanjiTerms.filter((item) => item.id !== term.id))
    .map((item) => item[field])
    .filter((value, index, list) => list.indexOf(value) === index)
    .slice(0, 3);
  const choices = shuffle([term[field], ...distractors]).map((value) => ({
    value,
    isCorrect: value === term[field],
    krValue: type === "meaning" ? kanjiTerms.find((item) => item.meaning === value)?.krMeaning || "" : "",
  }));
  return {
    id: `${term.id}-${type}`,
    term,
    type,
    prompt: type === "reading" ? "この漢字は、なんと読みますか。" : "この言葉の意味を選びましょう。",
    choices,
    answer: choices.findIndex((choice) => choice.isCorrect),
  };
}

function buildKanjiSession() {
  return shuffle(kanjiTerms)
    .map((term) => ({ term, score: Math.random() + kanjiWeight(term) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, KANJI_SESSION_SIZE)
    .map((item) => buildKanjiQuestion(item.term));
}

function saveActiveQuiz() {
  if (!state.session.length || state.view === "result") return;
  state.progress.activeQuiz = {
    category: state.category,
    grade: state.grade,
    year: state.year,
    questionIds: state.session.map((q) => q.id),
    index: state.index,
    answers: state.answers,
    recordedAnswers: state.recordedAnswers,
    startedAt: state.startedAt,
    savedAt: new Date().toISOString(),
  };
  saveProgress();
}

function clearActiveQuiz() {
  state.progress.activeQuiz = null;
  saveProgress();
}

function resumeQuiz() {
  const active = state.progress.activeQuiz;
  if (!active?.questionIds?.length) return;
  const restored = active.questionIds.map((id) => questions.find((q) => q.id === id)).filter(Boolean);
  if (!restored.length) {
    clearActiveQuiz();
    return;
  }
  state.category = active.category || "all";
  state.grade = active.grade || 4;
  state.year = active.year || "all";
  state.session = restored;
  state.index = Math.min(active.index || 0, restored.length - 1);
  state.answers = restored.map((_, i) => active.answers?.[i] ?? null);
  state.recordedAnswers = restored.map((_, i) => Boolean(active.recordedAnswers?.[i]));
  state.startedAt = active.startedAt || Date.now();
  state.view = "quiz";
  render();
}

function saveActiveKanji() {
  if (!state.kanjiSession.length || state.view === "kanjiResult") return;
  state.progress.activeKanji = {
    session: state.kanjiSession.map((q) => ({
      termId: q.term.id,
      type: q.type,
      choices: q.choices,
      answer: q.answer,
    })),
    index: state.kanjiIndex,
    answers: state.kanjiAnswers,
    recordedAnswers: state.kanjiRecordedAnswers,
    startedAt: state.startedAt,
    savedAt: new Date().toISOString(),
  };
  saveProgress();
}

function clearActiveKanji() {
  state.progress.activeKanji = null;
  saveProgress();
}

function resumeKanjiQuiz() {
  const active = state.progress.activeKanji;
  if (!active?.session?.length) return;
  const restored = active.session
    .map((item) => {
      const term = kanjiTerms.find((candidate) => candidate.id === item.termId);
      if (!term) return null;
      return {
        id: `${term.id}-${item.type}`,
        term,
        type: item.type,
        prompt: item.type === "reading" ? "この漢字は、なんと読みますか。" : "この言葉の意味を選びましょう。",
        choices: item.choices,
        answer: item.answer,
      };
    })
    .filter(Boolean);
  if (!restored.length) {
    clearActiveKanji();
    return;
  }
  state.kanjiSession = restored;
  state.kanjiIndex = Math.min(active.index || 0, restored.length - 1);
  state.kanjiAnswers = restored.map((_, i) => active.answers?.[i] ?? null);
  state.kanjiRecordedAnswers = restored.map((_, i) => Boolean(active.recordedAnswers?.[i]));
  state.startedAt = active.startedAt || Date.now();
  state.view = "kanji";
  render();
}

function startKanjiQuiz() {
  state.kanjiSession = buildKanjiSession();
  state.kanjiIndex = 0;
  state.kanjiAnswers = new Array(state.kanjiSession.length).fill(null);
  state.kanjiRecordedAnswers = new Array(state.kanjiSession.length).fill(false);
  state.startedAt = Date.now();
  state.view = "kanji";
  saveActiveKanji();
  render();
}

function submitKanjiAnswer(choice) {
  if (state.kanjiAnswers[state.kanjiIndex] !== null) return;
  const q = state.kanjiSession[state.kanjiIndex];
  const isCorrect = choice === q.answer;
  state.kanjiAnswers[state.kanjiIndex] = choice;
  recordKanjiAnswer(q, choice, state.kanjiIndex);
  saveActiveKanji();
  render();
  if (isCorrect) launchConfetti();
}

function recordKanjiAnswer(q, choice, index) {
  if (state.kanjiRecordedAnswers[index]) return;
  const record = state.progress.kanji[q.term.id] || { correct: 0, wrong: 0, streak: 0 };
  if (choice === q.answer) {
    record.correct += 1;
    record.streak += 1;
  } else {
    record.wrong += 1;
    record.streak = 0;
  }
  state.progress.kanji[q.term.id] = record;
  state.kanjiRecordedAnswers[index] = true;
  saveProgress();
}

function nextKanjiQuestion() {
  if (state.kanjiIndex < state.kanjiSession.length - 1) {
    state.kanjiIndex += 1;
    saveActiveKanji();
    render();
    return;
  }
  finishKanjiQuiz();
}

function previousKanjiQuestion() {
  if (state.kanjiIndex <= 0) return;
  state.kanjiIndex -= 1;
  saveActiveKanji();
  render();
}

function finishKanjiQuiz() {
  const correct = state.kanjiSession.reduce((sum, q, i) => sum + (state.kanjiAnswers[i] === q.answer ? 1 : 0), 0);
  const result = {
    id: String(Date.now()),
    date: new Date().toISOString(),
    total: state.kanjiSession.length,
    correct,
    wrongIds: state.kanjiSession.filter((q, i) => state.kanjiAnswers[i] !== q.answer).map((q) => q.term.id),
    timeSeconds: Math.round((Date.now() - state.startedAt) / 1000),
  };
  state.progress.kanjiSessions = [result, ...state.progress.kanjiSessions].slice(0, 30);
  state.progress.activeKanji = null;
  state.lastKanjiResult = result;
  saveProgress();
  state.view = "kanjiResult";
  render();
}

function startQuiz(category) {
  const session = buildSession(category, state.grade, state.year);
  if (!session.length) return;

  state.category = category;
  state.session = session;
  state.index = 0;
  state.answers = new Array(state.session.length).fill(null);
  state.recordedAnswers = new Array(state.session.length).fill(false);
  state.startedAt = Date.now();
  state.view = "quiz";
  saveActiveQuiz();
  render();
}

function submitAnswer(choice) {
  if (state.answers[state.index] !== null) return;
  const q = state.session[state.index];
  const isCorrect = q.answer !== null && choice === q.answer;
  state.answers[state.index] = choice;
  recordQuestionAnswer(q, choice, state.index);
  saveActiveQuiz();
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
    saveActiveQuiz();
    render();
    return;
  }
  finishQuiz();
}

function previousQuestion() {
  if (state.index <= 0) return;
  state.index -= 1;
  saveActiveQuiz();
  render();
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
    year: state.year,
    total: audited.length || state.session.length,
    correct,
    wrongIds,
    timeSeconds: Math.round((Date.now() - state.startedAt) / 1000),
  };

  state.progress.sessions = [result, ...state.progress.sessions].slice(0, 30);
  state.progress.activeQuiz = null;
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

function questionCountForYear(year) {
  return availableQuestions("all", state.grade, year).length;
}

function selectedYearLabel() {
  return examYears.find((item) => item.id === state.year)?.label || String(state.year);
}

function resumeQuizLabel(active) {
  if (!active) return "";
  const answered = (active.answers || []).filter((answer) => answer !== null).length;
  const total = active.questionIds?.length || 0;
  const year = active.year === "all" ? "전체" : active.year;
  const cat = categories[active.category]?.ja || categories.all.ja;
  return `${year} · ${withRuby(cat)} · ${answered}/${total}`;
}

function resumeKanjiLabel(active) {
  if (!active) return "";
  const answered = (active.answers || []).filter((answer) => answer !== null).length;
  const total = active.session?.length || 0;
  return `<ruby>漢字<rt>かんじ</rt></ruby><ruby>認識<rt>にんしき</rt></ruby> · ${answered}/${total}`;
}

function masteredCount(pool) {
  return pool.filter((q) => q.answer !== null && (state.progress.answers[q.id]?.streak || 0) >= 3).length;
}

function render() {
  if (state.view === "quiz") renderQuiz();
  else if (state.view === "kanji") renderKanjiQuiz();
  else if (state.view === "kanjiResult") renderKanjiResult();
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
  const resumeItems = [
    state.progress.activeQuiz
      ? `<button class="resume-button" data-resume-quiz><strong>${withRuby("途中から続ける")}</strong><small>${resumeQuizLabel(state.progress.activeQuiz)}</small></button>`
      : "",
    state.progress.activeKanji
      ? `<button class="resume-button kanji-resume" data-resume-kanji><strong><ruby>漢字<rt>かんじ</rt></ruby>を${withRuby("続ける")}</strong><small>${resumeKanjiLabel(state.progress.activeKanji)}</small></button>`
      : "",
  ].filter(Boolean).join("");
  const yearTabs = examYears
    .map((year) => {
      const count = questionCountForYear(year.id);
      const disabled = year.id === "all" ? count === 0 : count === 0;
      return `
        <button class="${state.year === year.id ? "active" : ""}" data-year="${year.id}" ${disabled ? "disabled" : ""}>
          ${year.label}<small>${count}</small>
        </button>
      `;
    })
    .join("");
  const cards = Object.entries(categories)
    .map(([key, cat]) => {
      const pool = availableQuestions(key, state.grade);
      const done = masteredCount(pool);
      const pct = percent(done, pool.length);
      const newCount = newCountForCategory(key, state.grade);
      return `
        <button class="category-card" data-start="${key}" style="border-top: 4px solid ${cat.accent}" ${pool.length ? "" : "disabled"}>
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
        <p class="support">${withRuby("問題文は日本語、必要なら韓国語の補助文も表示します。画像問題には問題に合う実写写真を使い、文章や分類を問う問題は読みやすいテキストで表示します。")}</p>
        <div class="controls">
          <div class="segmented" aria-label="grade">
            <button class="${grade4Active}" data-grade="4">4${withRuby("級")}</button>
            <button class="${grade3Active}" data-grade="3">3${withRuby("級")}</button>
          </div>
          <div class="year-tabs" aria-label="exam year">${yearTabs}</div>
          <button class="primary-button" data-start="all">${selectedYearLabel()} · ${withRuby("全カテゴリを始める")}</button>
          <button class="kanji-mode-button" data-kanji-start><span><ruby>漢字<rt>かんじ</rt></ruby><ruby>認識<rt>にんしき</rt></ruby></span><small>23·24·25와 별도</small></button>
          <button class="ghost-button" data-view="stats">${withRuby("成績を見る")}</button>
        </div>
        ${resumeItems ? `<div class="resume-row">${resumeItems}</div>` : ""}
      </div>
      <div class="hero-photo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Papilio_xuthus_front_view_2011-07-16.jpg" alt="実写のアゲハチョウ" />
        <span>${withRuby("問題に合う実写写真を使用")}</span>
      </div>
    </section>
    <section class="study-panel">
      <div class="section-title">
        <h3>カテゴリを${withRuby("選ぶ")}</h3>
        <p>${selectedYearLabel()} · ${withRuby("間違えた問題は次回出やすくなります")}</p>
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
              <img ${option.img ? `src="${option.img}"` : ""} alt="${option.ja}の実写写真" loading="eager" data-photo data-name="${option.ja}" data-category="${q.category}" />
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
        <button class="ghost-button" data-prev ${state.index === 0 ? "disabled" : ""}>${withRuby("前へ")}</button>
        <button class="primary-button" data-next ${answered ? "" : "disabled"}>${state.index === state.session.length - 1 ? withRuby("結果を見る") : withRuby("次へ")}</button>
      </div>
    </section>
  `);
  wireImages();
}

function renderKanjiQuiz() {
  const q = state.kanjiSession[state.kanjiIndex];
  const selected = state.kanjiAnswers[state.kanjiIndex];
  const answered = selected !== null;
  const correctCount = state.kanjiSession.reduce((sum, item, i) => sum + (state.kanjiAnswers[i] === item.answer ? 1 : 0), 0);
  const wrongCount = state.kanjiAnswers.filter((answer, i) => answer !== null && answer !== state.kanjiSession[i].answer).length;
  const progress = percent(state.kanjiIndex + (answered ? 1 : 0), state.kanjiSession.length);
  const optionCards = q.choices
    .map((choice, i) => {
      let cardState = "idle";
      if (answered && i === q.answer) cardState = selected === q.answer ? "correct" : "reveal";
      if (answered && i === selected && selected !== q.answer) cardState = "wrong";
      const badge = cardState === "correct" || cardState === "reveal" ? "✓" : cardState === "wrong" ? "×" : "";
      return `
        <button class="kanji-option ${cardState}" data-kanji-choice="${i}" ${answered ? "disabled" : ""}>
          <span class="letter">${letters[i]}</span>
          <strong>${q.type === "reading" ? escapeHtml(choice.value) : withRuby(choice.value)}</strong>
          ${state.showKr && choice.krValue ? `<small>${escapeHtml(choice.krValue)}</small>` : ""}
          ${badge ? `<span class="state-badge">${badge}</span>` : ""}
        </button>
      `;
    })
    .join("");
  const feedback = answered
    ? selected === q.answer
      ? withRuby("正解です。")
      : `${withRuby("答えは")} ${q.type === "reading" ? escapeHtml(q.term.reading) : withRuby(q.term.meaning)} ${withRuby("です。")}`
    : "";

  shell(`
    <section class="kanji-panel">
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
      <div class="kanji-card">
        <p class="eyebrow">KANJI · <ruby>見<rt>み</rt></ruby>て<ruby>選<rt>えら</rt></ruby>ぶ</p>
        <h2>${kanjiTermMarkup(q.term, q.type === "meaning")}</h2>
        ${q.type === "reading" ? `<p class="kanji-reading">${escapeHtml(q.term.kr)}</p>` : ""}
        <p>${withRuby(q.prompt)}</p>
      </div>
      <div class="kanji-options">${optionCards}</div>
      ${answered ? `
        <div class="explain-box">
          <strong>${feedback}</strong><br />
          ${kanjiTermMarkup(q.term)} = ${withRuby(q.term.meaning)}
          ${state.showKr ? `<br /><span class="kr-text">${escapeHtml(q.term.kr)} · ${escapeHtml(q.term.krMeaning)}</span>` : ""}
          <br /><small>${withRuby("例")}: ${withRuby(q.term.example)}</small>
        </div>
      ` : ""}
      <div class="quiz-actions">
        <button class="danger-button" data-view="home">やめる</button>
        <button class="ghost-button" data-kanji-prev ${state.kanjiIndex === 0 ? "disabled" : ""}>${withRuby("前へ")}</button>
        <button class="primary-button" data-kanji-next ${answered ? "" : "disabled"}>${state.kanjiIndex === state.kanjiSession.length - 1 ? withRuby("結果を見る") : withRuby("次へ")}</button>
      </div>
    </section>
  `);
}

function renderKanjiResult() {
  const result = state.lastKanjiResult;
  const pct = percent(result.correct, result.total);
  const wrongItems = result.wrongIds
    .map((id) => kanjiTerms.find((term) => term.id === id))
    .filter(Boolean)
    .map((term) => `<div class="wrong-item"><strong>${kanjiTermMarkup(term)}</strong><br /><small>${withRuby(term.meaning)}${state.showKr ? ` · ${escapeHtml(term.krMeaning)}` : ""}</small></div>`)
    .join("");
  shell(`
    <section class="result-panel kanji-result-panel">
      <div class="section-title">
        <h3>${withRuby(pct >= 80 ? "漢字もよくできました" : pct >= 50 ? "読み方をもう少し練習します" : "ゆっくり復習します")}</h3>
        <p>${result.timeSeconds}${withRuby("秒")}</p>
      </div>
      <div class="result-score"><strong>${pct}%</strong></div>
      <div class="stats-grid">
        <div class="stat-card">${withRuby("正解")}<b>${result.correct}</b></div>
        <div class="stat-card">${withRuby("不正解")}<b>${result.total - result.correct}</b></div>
        <div class="stat-card">${withRuby("漢字")}<b>${result.total}</b></div>
      </div>
      <div class="wrong-list">
        ${wrongItems || `<div class="wrong-item"><strong>${withRuby("間違えた漢字はありません。")}</strong><br /><small>${withRuby("この調子です。")}</small></div>`}
      </div>
      <div class="quiz-actions">
        <button class="ghost-button" data-view="home">ホームへ</button>
        <button class="primary-button" data-kanji-retry>${withRuby("もう一度")}</button>
      </div>
    </section>
  `);
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
  const kanjiAnswered = Object.values(state.progress.kanji).reduce((sum, item) => sum + item.correct + item.wrong, 0);
  const kanjiMastered = Object.values(state.progress.kanji).filter((item) => item.streak >= 3).length;
  const pendingAudit = questions.filter((q) => q.answer === null).length;
  const recent = state.progress.sessions
    .slice(0, 8)
    .map((s) => {
      const date = new Date(s.date).toLocaleDateString("ja-JP", { month: "2-digit", day: "2-digit" });
      const year = s.year || "전체";
      return `<div class="history-row"><span>${date} · ${year} · ${withRuby(categories[s.category].ja)} · ${s.grade}${withRuby("級")}</span><b>${s.correct}/${s.total}</b></div>`;
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
        <div class="stat-card"><ruby>漢字<rt>かんじ</rt></ruby>${withRuby("習得")}<b>${kanjiMastered}/${kanjiTerms.length}</b></div>
        <div class="stat-card"><ruby>漢字<rt>かんじ</rt></ruby>${withRuby("練習回数")}<b>${kanjiAnswered}</b></div>
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
    photo.addEventListener("load", () => {
      status?.classList.add("hidden");
    });
    photo.addEventListener("error", () => {
      markImageUnavailable(photo, status, "正確に一致する写真を読み込めません");
    });
    if (!photo.getAttribute("src")) resolveOptionImage(photo, status);
    if (photo.complete && photo.naturalWidth > 0) status?.classList.add("hidden");
  });
}

function markImageUnavailable(photo, status, message = "正確に一致する写真がありません") {
  photo.dataset.imageMissing = "true";
  photo.classList.add("hidden");
  if (status) {
    status.textContent = message;
    status.className = "image-error";
  }
}

function waitForImageRequest(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function enqueueImageRequest(name) {
  return new Promise((resolve) => {
    imageRequestQueue.push({ name, resolve });
    processImageRequestQueue();
  });
}

async function processImageRequestQueue() {
  if (imageRequestActive) return;
  imageRequestActive = true;
  while (imageRequestQueue.length) {
    const request = imageRequestQueue.shift();
    const source = await fetchImageSource(request.name);
    request.resolve(source);
    // Keep the public Wikimedia endpoint below its burst/rate limit on tablets.
    if (imageRequestQueue.length) await waitForImageRequest(140);
  }
  imageRequestActive = false;
}

async function fetchImageSource(name) {
  const candidates = [...new Set([name, imageQueryAliases[name]].filter(Boolean))];
  for (const candidate of candidates) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        const response = await fetch(`https://ja.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(candidate)}`, {
          headers: { Accept: "application/json" },
        });
        if (response.status === 404) break;
        if (response.status === 429 || response.status === 503) {
          if (attempt === 0) await waitForImageRequest(700);
          else break;
          continue;
        }
        if (!response.ok) break;
        const data = await response.json();
        const source = data?.originalimage?.source || data?.thumbnail?.source || "";
        if (/^https?:\/\//.test(source)) return source;
        break;
      } catch {
        if (attempt === 0) await waitForImageRequest(400);
      }
    }
    const commonsSource = await fetchCommonsImageSource(candidate);
    if (commonsSource) return commonsSource;
  }
  return "";
}

async function fetchCommonsImageSource(name) {
  try {
    const search = encodeURIComponent(`intitle:${name}`);
    const endpoint = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${search}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|mime&iiurlwidth=720&origin=*`;
    const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
    if (!response.ok) return "";
    const data = await response.json();
    const pages = Object.values(data?.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
    for (const page of pages) {
      const info = page.imageinfo?.[0];
      const source = info?.thumburl || info?.url || "";
      if (/^https?:\/\//.test(source) && (!info.mime || info.mime.startsWith("image/"))) return source;
    }
  } catch {
    // A missing Commons result must not be replaced with an unrelated category photo.
  }
  return "";
}

async function resolveOptionImage(photo, status) {
  const name = normalizeImageQuery(photo.dataset.name || "");
  if (!name) {
    markImageUnavailable(photo, status);
    return;
  }
  if (optionImageCache.has(name)) {
    photo.src = optionImageCache.get(name);
    if (status) status.textContent = "写真を読み込み中";
    return;
  }
  photo.dataset.imageResolvedName = name;
  if (status) status.textContent = "写真を検索中";
  const source = await enqueueImageRequest(name);
  if (source) {
    optionImageCache.set(name, source);
    persistImageCache(name, source);
    photo.src = source;
  } else {
    markImageUnavailable(photo, status);
  }
}

function normalizeImageQuery(name) {
  const original = String(name || "").trim();
  if (!original || /^(A|B|C|D)(?:-|$)/.test(original) || /^(図|葉|シルエット|足)\d$/.test(original)) return "";
  if (original.length > 28 || /[「」。、]/.test(original)) return "";
  const cleaned = original.replace(/（.*?）|\(.*?\)/g, "").replace(/[0-9.]/g, "").trim();
  return imageQueryAliases[original] || imageQueryAliases[cleaned] || cleaned;
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
  if (target.dataset.year !== undefined) {
    state.year = target.dataset.year === "all" ? "all" : Number(target.dataset.year);
    render();
  }
  if (target.dataset.resumeQuiz !== undefined) resumeQuiz();
  if (target.dataset.resumeKanji !== undefined) resumeKanjiQuiz();
  if (target.dataset.kanjiStart !== undefined) startKanjiQuiz();
  if (target.dataset.kanjiChoice !== undefined) submitKanjiAnswer(Number(target.dataset.kanjiChoice));
  if (target.dataset.kanjiNext !== undefined) nextKanjiQuestion();
  if (target.dataset.kanjiPrev !== undefined) previousKanjiQuestion();
  if (target.dataset.kanjiRetry !== undefined) startKanjiQuiz();
  if (target.dataset.start) startQuiz(target.dataset.start);
  if (target.dataset.choice !== undefined) submitAnswer(Number(target.dataset.choice));
  if (target.dataset.next !== undefined) nextQuestion();
  if (target.dataset.prev !== undefined) previousQuestion();
  if (target.dataset.view) {
    state.view = target.dataset.view;
    render();
  }
  if (target.dataset.retry !== undefined) startQuiz(state.category);
  if (target.dataset.reset !== undefined) {
    state.progress = defaultProgress();
    saveProgress();
    render();
  }
});

render();
