// 通常の更新時はxxxDataListのみ編集する。
// Data
// guideDataList = 火災保険ガイドのコンテンツ
// // id:ヘッダーの表示切り替え用変数
// // link:遷移先 
// // title:記事タイトル 
// //  description:記事のさわり 
// reportDataList = 火災保険リポートのコンテンツ
// // id:ヘッダーの表示切り替え用変数
// // link:遷移先 
// // title:記事タイトル 
// //  description:記事のさわり 
// //  bgTitle:リポート個別ページ下部バックナンバー部分の記事のタイトル 
// //  bgDescription:リポート個別ページ下部バックナンバー部分の記事のさわり 
// //  image:リポート個別ページ下部バックナンバー部分の記事の画像パス 
// //  index:リポート個別ページ下部バックナンバー部分の記事の画像大体テキスト、記事インデックス番号 
var guideDataList = [
  {
    id: 'f06',
    link: '/fire/gde006.html',
    title: '火災保険は1年契約よりも長期契約がお得？',
    description: '火災保険の保険期間を長期で契約するメリットと契約時の注意点のほか、長期契約した場合の保険料について解説します。'
  },
  {
    id: 'f05',
    link: '/fire/gde005.html',
    title: '火災保険や地震保険は所得控除を受けられる？',
    description: '年末調整と所得控除の仕組みと併せて、所得控除の対象や控除額、申請方法について解説します。'
  },
  {
    id: 'f04',
    link: '/fire/gde004.html',
    title: '新築住宅に火災保険は必要？',
    description: '新築住宅を購入した際、住宅の引渡しや引越しなどで忙しいなかでも忘れずに対応しておきたいのが、火災保険の加入です。新築住宅を購入したときに火災保険が必要な理由と選び方を解説します。'
  },
  {
    id: 'f03',
    link: '/fire/gde003.html',
    title: 'マンションでも火災保険は加入するべき？',
    description: '鉄筋コンクリート造などのマンションは、耐火性が高いとされていますが、火災の被害を全く受けないわけではありません。マンションでも火災保険の加入が必要な理由や、補償の選び方を解説します。'
  },
  {
    id: 'f02',
    link: '/fire/gde002.html',
    title: '火災保険料の相場は？',
    description: '保険料の決まり方と、保険料をなるべく抑えながらも満足できる補償内容にするためのポイントを解説します。'
  },
  {
    id: 'f01',
    link: '/fire/gde001.html',
    title: '賃貸住宅でも火災保険は必要？',
    description: '賃貸住宅でも火災保険が必要な理由や、つけておきたい補償内容のほか、家財のみを補償対象にした際の保険料の相場を紹介します。'
  },

]
var reportDataList = [
  {
    id: 'r03',
    link: '/fire/rsc_004.html',
    title: '戸建て派vsマンション派の火災保険実態調査',
    description: '過去5年間に住宅を購入した火災保険契約者に対して、災害リスクと火災保険に関する実態調査を実施しました。',
    bgTitle: '戸建て派vsマンション派の火災保険実態調査',
    bgDescription: '過去5年間に住宅を購入した火災保険契約者に対して、災害リスクと火災保険に関する実態調査を実施しました。',
    image: '/share/image/fire/rsc/thumb_index_vol-03.png',
    index: 'Vol. 03'
  },
  {
    id: 'r02',
    link: '/fire/rsc_003.html',
    title: '値上げラッシュに備えてファイナンシャルプランナーに緊急調査',
    description: '全国のファイナンシャルプランナー200名を対象にした家計支出や見直しに関する調査を実施しました。',
    bgTitle: '2021年値上げラッシュに備えて、ファイナンシャルプランナー200名に緊急調査',
    bgDescription: '全国のファイナンシャルプランナー200名を対象にした家計支出や見直しに関する調査を実施しました。',
    image: '/share/image/fire/rsc/thumb_index_vol-02.png',
    index: 'Vol. 02'
  },
  {
    id: 'r01',
    link: '/fire/rsc_002.html',
    title: '火災保険を見直して備えよう',
    description: '9月1日の「防災の日」に合わせ、全国1,087の持ち家家庭に対して、災害リスクと火災保険に関する意識調査を実施しました。',
    bgTitle: '9月1日は防災の日、火災保険も見直して備えよう',
    bgDescription: '9月1日の「防災の日」に合わせ、全国1,087の持ち家家庭に対して、災害リスクと火災保険に関する意識調査を実施しました。',
    image: '/share/image/fire/rsc/thumb_index_vol-01.png',
    index: 'Vol. 01'
  },
]



// 以下は通常の更新時は編集不要
// Template

var footer = function footer(data) {
  return "<li><a href=".concat(data.link, ">").concat(data.title, "</a></li>");
};

var headerListSp = function headerListSp(data) {
  return "<li><a href=".concat(data.link, ">").concat(data.title, "</a></li>");
};

var headerList = function headerList(data) {
  return "<li><a href=".concat(data.link, " data-link-id=").concat(data.id, ">").concat(data.title, "</a></li>");
};

var headerDescription = function headerDescription(data) {
  return "\n<li data-content-id=\"".concat(data.id, "\">\n<div class=\"gn_text\">\n  <p class=\"gn_title\">").concat(data.title, "</p>\n  <p>").concat(data.description, "</p>\n</div>\n</li>\n");
};

var backNumber = function backNumber(data) {
  return "\n<section class=\"index_link-box\">\n<figure class=\"index_link-thumb\"><img src=".concat(data.image, " alt=").concat(data.index, "></figure>\n<div class=\"index_link-summary\">\n  <h3 class=\"index_link-ttl\">").concat(data.bgTitle, "</h3>\n  <p class=\"index_link-txt\">").concat(data.bgDescription, "</p>\n  <p class=\"index_link-vol\">").concat(data.index, "</p>\n  <div class=\"index_link-btn\"><a href=").concat(data.link, " class=\"btn_link\">\u3055\u3089\u306B\u8A73\u3057\u304F</a></div>\n</div>\n</section>\n");
}; // 挿入箇所


var insertPoint = [{
  parent: "[data-guide='headerList']",
  template: headerList,
  position: 'beforeend',
  list: guideDataList.slice().reverse()
}, {
  parent: "[data-sp-header='guide']",
  template: headerListSp,
  list: guideDataList,
  position: 'afterend'
}, {
  parent: "[data-sp-header='report']",
  template: headerListSp,
  list: reportDataList.slice(0, 3).reverse(),
  position: 'afterend',
  quantity: 3 //表示したい数

}, {
  parent: "[data-report='headerList']",
  // template: headerList,
  template: headerList,
  position: 'beforeend',
  list: reportDataList,
  quantity: 3 //表示したい数

}, {
  parent: "[data-header='description']",
  template: headerDescription,
  position: 'beforeend',
  list: [].concat(guideDataList, reportDataList)
}, {
  parent: "[data-guide='footer']",
  template: footer,
  position: 'beforeend',
  list: guideDataList.slice().reverse()
}, {
  //parent: "[data-report='footer']",
  parent: "[data-guide='footer']",
  template: footer,
  list: reportDataList,
  position: 'beforeend',
  quantity: 3 //表示したい数

}, {
  parent: "[data-back-number]",
  template: backNumber,
  list: reportDataList,
  position: 'beforeend',
  quantity: 3 //表示したい数

}]; // main function

var insertFunction = function insertFunction(part) {
  var targetPart = document.querySelector(part.parent);
  targetPart && part.list.forEach(function (guideData, index) {
    // バックナンバーは直近（part.quantity）の数だけ挿入
    part.quantity && part.quantity <= index ? false : targetPart.insertAdjacentHTML(part.position, part.template(guideData));
  });
}; // 実行


insertPoint.map(function (point) {
  return insertFunction(point);
});

