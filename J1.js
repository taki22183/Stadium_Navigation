/* J1 */
function J1_show() {
	$("h2").css("background-color", "white").css("color", "black");
	$("#J1").show();
	$("#J1_info div").hide();
	$("#input_Location").hide();
	$("#List").hide();
}

/* 北海道コンサドーレ札幌 */
function HokkaidoConsadoleSapporo() {
	remove();

	$("h2").css("background-color", "#CF0000").css("color", "black");
	$("#J1").hide();
	$("#HokkaidoConsadoleSapporo").show();
	$("#SapporoDome").show();
	$("#input_Location").show();

	$("#HokkaidoConsadoleSapporo p").addClass("selection");
	$("#HokkaidoConsadoleSapporo p").eq(0).addClass("selected");
}

// 大和ハウス プレミストドーム
function SapporoDome() {
	$("#SapporoDome").show();
	$("#SapporoAtsubetsu").hide();
	$("#HokkaidoConsadoleSapporo p").eq(0).addClass("selected");
	$("#HokkaidoConsadoleSapporo p").eq(1).removeClass("selected");
	$("#List").hide();
}

// 札幌厚別公園陸上競技場
function SapporoAtsubetsu() {
	$("#SapporoDome").hide();
	$("#SapporoAtsubetsu").show();
	$("#HokkaidoConsadoleSapporo p").eq(0).removeClass("selected");
	$("#HokkaidoConsadoleSapporo p").eq(1).addClass("selected");
	$("#List").hide();
}

/* 鹿島アントラーズ */
function KashimaAntlers() {
	remove();

	$("h2").css("background-color", "#B71840").css("color", "white");
	$("#J1").hide();
	$("#KashimaAntlers").show();
	$("#input_Location").show();

	$("#KashimaAntlers").addClass("selection");
}

/* 浦和レッズ */
function UrawaReds() {
	remove();

	$("h2").css("background-color", "#E6002D").css("color", "black");
	$("#J1").hide();
	$("#UrawaReds").show();
	$("#SaitamaStadium2002").show();
	$("#input_Location").show();

	$("#UrawaReds").addClass("selection");
	$("#UrawaReds p").eq(0).addClass("selected");
}

// 埼玉スタジアム2002
function SaitamaStadium2002() {
	$("#SaitamaStadium2002").show();
	$("#UrawaKomabaStadium").hide();
	$("#UrawaReds p").eq(0).addClass("selected");
	$("#UrawaReds p").eq(1).removeClass("selected");
	$("#List").hide();
}

// 浦和駒場スタジアム
function UrawaKomabaStadium() {
	$("#SaitamaStadium2002").hide();
	$("#UrawaKomabaStadium").show();
	$("#UrawaReds p").eq(0).removeClass("selected");
	$("#UrawaReds p").eq(1).addClass("selected");
	$("#List").hide();
}

/* 柏レイソル */
function KashiwaReysol() {
	remove();

	$("h2").css("background-color", "#FFF100").css("color", "black");
	$("#J1").hide();
	$("#KashiwaReysol").show();
	$("#input_Location").show();

	$("#KashiwaReysol").addClass("selection");
}

/* FC東京 */
function FCTokyo() {
	remove();

	$("h2").css("background-color", "#000A6E").css("color", "#FC0000");
	$("#J1").hide();
	$("#FCTokyo").show();
	$("#input_Location").show();

	$("#FCTokyo").addClass("selection");
}

/* 東京ヴェルディ */
function TokyoVerdy() {
	remove();

	$("h2").css("background-color", "#046A38").css("color", "white");
	$("#J1").hide();
	$("#TokyoVerdy").show();
	$("#input_Location").show();

	$("#TokyoVerdy").addClass("selection");
}

/* FC町田ゼルビア */
function FCMachidaZelvia() {
	remove();

	$("h2").css("background-color", "#05488B").css("color", "white");
	$("#J1").hide();
	$("#FCMachidaZelvia").show();
	$("#input_Location").show();

	$("#FCMachidaZelvia").addClass("selection");
}

/* 川崎フロンターレ */
function KawasakiFrontale() {
	remove();

	$("h2").css("background-color", "#23B9FE").css("color", "white");
	$("#J1").hide();
	$("#KawasakiFrontale").show();
	$("#input_Location").show();

	$("#KawasakiFrontale").addClass("selection");
}

/* 横浜F・マリノス */
function YokohamaFMarinos() {
	remove();

	$("h2").css("background-color", "#004098").css("color", "white");
	$("#J1").hide();
	$("#YokohamaF・Marinos").show();
	$("#NissanStadium").show();
	$("#input_Location").show();

	$("#YokohamaF・Marinos").addClass("selection");
	$("#YokohamaF・Marinos p").eq(0).addClass("selected");
}

// 日産スタジアム
function NissanStadium() {
	$("#NissanStadium").show();
	$("#NippatsuMitsuzawa").hide();
	$("#YokohamaF・Marinos p").eq(0).addClass("selected");
	$("#YokohamaF・Marinos p").eq(1).removeClass("selected");

	$("#List").hide();
}

// ニッパツ三ッ沢球技場
function NippatsuMitsuzawa() {
	$("#NissanStadium").hide();
	$("#NippatsuMitsuzawa").show();
	$("#YokohamaF・Marinos p").eq(0).removeClass("selected");
	$("#YokohamaF・Marinos p").eq(1).addClass("selected");

	$("#List").hide();
}

/* 湘南ベルマーレ */
function ShonanBellmare() {
	remove();

	$("h2").css("background-color", "#60B424").css("color", "#005CA2");
	$("#J1").hide();
	$("#ShonanBellmare").show();
	$("#input_Location").show();

	$("#ShonanBellmare").addClass("selection");
}

/* アルビレックス新潟 */
function AlbirexNiigata() {
	remove();

	$("h2").css("background-color", "#FF6325").css("color", "#014099");
	$("#J1").hide();
	$("#AlbirexNiigata").show();
	$("#input_Location").show();

	$("#AlbirexNiigata").addClass("selection");
}

/* ジュビロ磐田 */
function JubiroIwata() {
	remove();

	$("h2").css("background-color", "#7399D1").css("color", "white");
	$("#J1").hide();
	$("#JubiroIwata").show();
	$("#YamahaStadium").show();
	$("#input_Location").show();

	$("#YokohamaF・Marinos").addClass("selection");
	$("#JubiroIwata p").eq(0).addClass("selected");
}

// ヤマハスタジアム(磐田)
function YamahaStadium() {
	$("#YamahaStadium").show();
	$("#EkopaStadium").hide();
	$("#JubiroIwata p").eq(0).addClass("selected");
	$("#JubiroIwata p").eq(1).removeClass("selected");

	$("#List").hide();
}

// エコパスタジアム
function EkopaStadium() {
	remove();

	$("#YamahaStadium").hide();
	$("#EkopaStadium").show();
	$("#JubiroIwata p").eq(0).removeClass("selected");
	$("#JubiroIwata p").eq(1).addClass("selected");

	$("#List").hide();
}

/* 名古屋グランパス */
function NagoyaGrampus() {
	remove();

	$("h2").css("background-color", "#D70C18").css("color", "#F8B500");
	$("#J1").hide();
	$("#NagoyaGrampus").show();
	$("#input_Location").show();

	$("#NagoyaGrampus").addClass("selection");
}

/* 京都サンガF.C. */
function KyotoSangaFC() {
	remove();

	$("h2").css("background-color", "#6F0467").css("color", "white");
	$("#J1").hide();
	$("#KyotoSangaFC").show();
	$("#input_Location").show();

	$("#KyotoSangaFC").addClass("selection");
}

/* ガンバ大阪 */
function GambaOsaka() {
	remove();

	$("h2").css("background-color", "#003287").css("color", "white");
	$("#J1").hide();
	$("#GambaOsaka").show();
	$("#input_Location").show();

	$("#GambaOsaka").addClass("selection");
}

/* セレッソ大阪 */
function CerezoOsaka() {
	remove();

	$("h2").css("background-color", "#DA005C").css("color", "#1E2380");
	$("#J1").hide();
	$("#CerezoOsaka").show();
	$("#input_Location").show();

	$("#CerezoOsaka").addClass("selection");
}

/* ヴィッセル神戸 */
function VisselKobe() {
	remove();

	$("h2").css("background-color", "#980323").css("color", "white");
	$("#J1").hide();
	$("#VisselKobe").show();
	$("#input_Location").show();

	$("#VisselKobe").addClass("selection");
}

/* サンフレッチェ広島 */
function SanfrecceHiroshima() {
	remove();

	$("h2").css("background-color", "#51318F").css("color", "white");
	$("#J1").hide();
	$("#SanfrecceHiroshima").show();
	$("#input_Location").show();

	$("#SanfrecceHiroshima").addClass("selection");
}

/* アビスパ福岡 */
function AvispaFukuoka() {
	remove();

	$("h2").css("background-color", "#00205B").css("color", "white");
	$("#J1").hide();
	$("#AvispaFukuoka").show();
	$("#input_Location").show();

	$("#AvispaFukuoka").addClass("selection");
}

/* サガン鳥栖 */
function SaganTosu() {
	remove();

	$("h2").css("background-color", "#2196F3").css("color", "#E95599");
	$("#J1").hide();
	$("#SaganTosu").show();
	$("#input_Location").show();

	$("#SaganTosu").addClass("selection");
}