/* 日本プロ野球 */
function NPB() {
	$("h2").css("background-color", "white").css("color", "black");
	$("#JLeague div").hide();
	$("#input_Location").hide();
	$("#Route").hide();
	$(".Selection" || ".Selected").hide();
	$("#WE").hide();
	$("#CentralLeague").show();
	$("#PacificLeague").show();
}

/* セ・リーグ */
function CentralLeague_show() {
	$("h2").css("background-color", "").css("color", "");
	$("#NPB div").hide();
	$("#input_Location").hide();
	$("#Route").hide();
	$(".Selection" || ".Selected").hide();
	$("#WE").hide();
	$("#CentralLeague").show();
}

/* 読売ジャイアンツ */
function YomiuriGiants() {
	remove();

	$("h2").css("background-color", "black").css("color", "#F89828");
	$("#CentralLeague").hide();
	$("#YomiuriGiants").show();
	$("#input_Location").show();

	$("#YomiuriGiants").addClass("Selection");
}

/* 東京ヤクルトスワローズ */
function TokyoYakultSwallows() {
	remove();

	$("h2").css("background-color", "#073190").css("color", "#E6002D");
	$("#CentralLeague").hide();
	$("#TokyoYakultSwallows").show();
	$("#input_Location").show();

	$("#TokyoYakultSwallows").addClass("Selection");
}

/* 横浜DeNaベイスターズ */
function YokohamaDeNABaystars() {
	remove();

	$("h2").css("background-color", "#014799").css("color", "white");
	$("#CentralLeague").hide();
	$("#YokohamaDeNABaystars").show();
	$("#input_Location").show();

	$("#YokohamaDeNABaystars").addClass("Selection");
}

/* 中日ドラゴンズ */
function ChunichiDragons() {
	remove();

	$("h2").css("background-color", "#00418E").css("color", "white");
	$("#CentralLeague").hide();
	$("#ChunichiDragons").show();
	$("#input_Location").show();

	$("#ChunichiDragons").addClass("Selection");
}

/* 阪神タイガース */
function HanshinTigers() {
	remove();

	$("h2").css("background-color", "#FADC00").css("color", "black");
	$("#CentralLeague").hide();
	$("#HanshinTigers").show();
	$("#input_Location").show();

	$("#HanshinTigers").addClass("Selection");
}

/* 広島東洋カープ */
function HiroshimaToyoCarp() {
	remove();

	$("h2").css("background-color", "#EB0021").css("color", "white");
	$("#CentralLeague").hide();
	$("#HiroshimaToyoCarp").show();
	$("#input_Location").show();

	$("#HiroshimaToyoCarp").addClass("Selection");
}

/* パ・リーグ */
function PacificLeague_show() {
	$("h2").css("background-color", "white").css("color", "black");
	$("#NPB div").hide();
	$(".Selection" || ".Selected").hide();
	$("#input_Location").hide();
	$("#Route").hide();
	$("#WE").hide();
	$("#PacificLeague").show();
}

/* 北海道日本ハムファイターズ */
function HokkaidoNipponHamFighters() {
	remove();

	$("h2").css("background-color", "#006298").css("color", "white");
	$("#PacificLeague").hide();
	$("#HokkaidoNippon-HamFighters").show();
	$("#input_Location").show();

	$("#HokkaidoNippon-HamFighters").addClass("Selection");
}

/* 東北楽天ゴールデンイーグルス */
function TohokuRakutenGoldenEagles() {
	remove();

	$("h2").css("background-color", "#870011").css("color", "#F7AB00");
	$("#PacificLeague").hide();
	$("#TohokuRakutenGoldenEagles").show();
	$("#input_Location").show();

	$("#TohokuRakutenGoldenEagles").addClass("Selection");

}

/* 埼玉西武ライオンズ */
function SaitamaSeibuLions() {
	remove();

	$("h2").css("background-color", "#001E40").css("color", "white");
	$("#PacificLeague").hide();
	$("#SaitamaSeibuLions").show();
	$("#input_Location").show();

	$("#SaitamaSeibuLions").addClass("Selection");

}

/* 千葉ロッテマリーンズ */
function ChibaLotteMarines() {
	remove();

	$("h2").css("background-color", "black").css("color", "white");
	$("#PacificLeague").hide();
	$("#ChibaLotteMarines").show();
	$("#input_Location").show();

	$("#ChibaLotteMarines").addClass("Selection");
}

/* オリックス・バファローズ */
function OrixBuffaloes() {
	remove();

	$("h2").css("background-color", "#000121").css("color", "#B8A536");
	$("#PacificLeague").hide();
	$("#OrixBuffaloes").show();
	$("#input_Location").show();

	$("#OrixBuffaloes").addClass("Selection");
}

/* 福岡ソフトバンクホークス */
function FukuokaSoftBankHawks() {
	remove();

	$("h2").css("background-color", "#FFCC00").css("color", "black");
	$("#PacificLeague").hide();
	$("#FukuokaSoftBankHawks").show();
	$("#input_Location").show();

	$("#FukuokaSoftBankHawks").addClass("Selection");
}