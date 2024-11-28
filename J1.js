function J1_show() {
	$("h2").css("background-color", "white").css("color", "black");
	$("#J1").show();
	$("#J1_info div").hide();
}

/* 北海道コンサドーレ札幌 */
function HokkaidoConsadoleSapporo() {
	$("h2").css("background-color", "#CF0000").css("color", "black");
	$("#J1").hide();
	$("#J1_info #HokkaidoConsadoleSapporo").show();
	$("#J1_info #HokkaidoConsadoleSapporo #SapporoDome").show();
}

// 大和ハウス プレミストドーム
function SapporoDome() {
	$("#J1_info #HokkaidoConsadoleSapporo #SapporoDome").show();
	$("#J1_info #HokkaidoConsadoleSapporo #SapporoAtsubetsu").hide();
}

// 札幌厚別公園陸上競技場
function SapporoAtsubetsu() {
	$("#J1_info #HokkaidoConsadoleSapporo #SapporoDome").hide();
	$("#J1_info #HokkaidoConsadoleSapporo #SapporoAtsubetsu").show();
}

/* 鹿島アントラーズ */
function KashimaAntlers() {
	$("#J1").hide();
	$("#J1_info #KashimaAntlers").show();
	$("h2").css("background-color", "#B71840").css("color", "white");
}

/* 浦和レッズ */
function UrawaReds() {
	$("#J1").hide();
	$("#J1_info #UrawaReds").show();
	$("h2").css("background-color", "#E6002D").css("color", "black");
	$("#J1_info #UrawaReds #SaitamaStadium2002").show();
}

// 埼玉スタジアム2002
function SaitamaStadium2002() {
	$("#J1_info #UrawaReds #SaitamaStadium2002").show();
	$("#J1_info #UrawaReds #UrawaKomabaStadium").hide();
}

// 浦和駒場スタジアム
function UrawaKomabaStadium() {
	$("#J1_info #UrawaReds #SaitamaStadium2002").hide();
	$("#J1_info #UrawaReds #UrawaKomabaStadium").show();
}

/* 柏レイソル */
function KashiwaReysol() {
	$("#J1").hide();
	$("#J1_info #KashiwaReysol").show();
	$("h2").css("background-color", "#FFF100").css("color", "black");
}

/* FC東京 */
function FCTokyo() {
	$("#J1").hide();
	$("#J1_info #FCTokyo").show();
	$("h2").css("background-color", "#000A6E").css("color", "#FC0000");
}

/* 東京ヴェルディ */
function TokyoVerdy() {
	$("#J1").hide();
	$("#J1_info #TokyoVerdy").show();
	$("h2").css("background-color", "#046A38").css("color", "white");
}

/* FC町田ゼルビア */
function FCMachidaZelvia() {
	$("#J1").hide();
	$("#J1_info #FCMachidaZelvia").show();
	$("h2").css("background-color", "#05488B").css("color", "white");
}

/* 川崎フロンターレ */
function KawasakiFrontale() {
	$("#J1").hide();
	$("#J1_info #KawasakiFrontale").show();
	$("h2").css("background-color", "#23B9FE").css("color", "white");
}

/* 横浜F・マリノス */
function YokohamaFMarinos() {
	$("#J1").hide();
	$("#J1_info #YokohamaF・Marinos").show();
	$("h2").css("background-color", "#004098").css("color", "white");
	$("#J1_info #YokohamaF・Marinos #NissanStadium").show();
}

// 日産スタジアム
function NissanStadium() {
	$("#J1_info #YokohamaF・Marinos #NissanStadium").show();
	$("#J1_info #YokohamaF・Marinos #NippatsuMitsuzawa").hide();
}

// ニッパツ三ッ沢球技場
function NippatsuMitsuzawa() {
	$("#J1_info #YokohamaF・Marinos #NissanStadium").hide();
	$("#J1_info #YokohamaF・Marinos #NippatsuMitsuzawa").show();
}

/* 湘南ベルマーレ */
function ShonanBellmare() {
	$("#J1").hide();
	$("#J1_info #ShonanBellmare").show();
	$("h2").css("background-color", "#60B424").css("color", "#005CA2");
}

/* アルビレックス新潟 */
function AlbirexNiigata() {
	$("#J1").hide();
	$("#J1_info #AlbirexNiigata").show();
	$("h2").css("background-color", "#FF6325").css("color", "#014099");
}

/* ジュビロ磐田 */
function JubiroIwata() {
	$("#J1").hide();
	$("#J1_info #JubiroIwata").show();
	$("h2").css("background-color", "#7399D1").css("color", "white");
	$("#J1_info #JubiroIwata #YamahaStadium").show();
}

// ヤマハスタジアム(磐田)
function YamahaStadium() {
	$("#J1_info #JubiroIwata #YamahaStadium").show();
	$("#J1_info #JubiroIwata #EkopaStadium").hide();
}

// エコパスタジアム
function EkopaStadium() {
	$("#J1_info #JubiroIwata #YamahaStadium").hide();
	$("#J1_info #JubiroIwata #EkopaStadium").show();
}

/* 名古屋グランパス */
function NagoyaGrampus() {
	$("#J1").hide();
	$("#J1_info #NagoyaGrampus").show();
	$("h2").css("background-color", "#D70C18").css("color", "#F8B500");
}

/* 京都サンガF.C. */
function KyotoSangaFC() {
	$("#J1").hide();
	$("#J1_info #KyotoSangaF\\.C\\.").show();
	$("h2").css("background-color", "#6F0467").css("color", "white");
}

/* ガンバ大阪 */
function GambaOsaka() {
	$("#J1").hide();
	$("#J1_info #GambaOsaka").show();
	$("h2").css("background-color", "#003287").css("color", "white");
}

/* セレッソ大阪 */
function CerezoOsaka() {
	$("#J1").hide();
	$("#J1_info #CerezoOsaka").show();
	$("h2").css("background-color", "#DA005C").css("color", "#1E2380");
}

/* ヴィッセル神戸 */
function VisselKobe() {
	$("#J1").hide();
	$("#J1_info #VisselKobe").show();
	$("h2").css("background-color", "#980323").css("color", "white");
}

/* サンフレッチェ広島 */
function SanfrecceHiroshima() {
	$("#J1").hide();
	$("#J1_info #SanfrecceHiroshima").show();
	$("h2").css("background-color", "#51318F").css("color", "white");
}

/* アビスパ福岡 */
function AvispaFukuoka() {
	$("#J1").hide();
	$("#J1_info #AvispaFukuoka").show();
	$("h2").css("background-color", "#00205B").css("color", "white");
}

/* サガン鳥栖 */
function SaganTosu() {
	$("#J1").hide();
	$("#J1_info #SaganTosu").show();
	$("h2").css("background-color", "#2196F3").css("color", "#E95599");
}