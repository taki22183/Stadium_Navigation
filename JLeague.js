/* Jリーグ */
function JLeague() {
	Clear();

	$("h2").css("background-color", "#FFFFFF").css("color", "#000000");
	$("#JLeague div").hide();
	$("#input_Location").hide();
	$("#Route").hide();
	$(".SelectClub" || ".SelectStadium").hide();
	$("#WE").hide();
	$("#NPB div").hide();
	$("#BLeague div").hide();
	$("#JLeague div").show();
}

/* J1 */
function J1_show() {
	Clear();

	$("h2").css("background-color", "#E60012").css("color", "#FFFFFF");
	$("#JLeague div").hide();
	$("#input_Location").hide();
	$("#Route").hide();
	$(".SelectClub" || ".SelectStadium").hide();
	$("#WE").hide();
	$("#J1").show();
}

/* 鹿島アントラーズ */
function KashimaAntlers() {
	Clear();

	$("h2").css("background-color", "#B71840").css("color", "#FFFFFF");

	$("#KashimaAntlers").show();
	$("#input_Location").show();

	$("#KashimaAntlers").addClass("SelectClub");
}

/* 浦和レッズ */
function UrawaReds() {
	Clear();

	$("h2").css("background-color", "#E6002D").css("color", "#000000");

	$("#UrawaReds").show();
	$("#SaitamaStadium2002").show();
	$("#UrawaKomabaStadium").hide();
	$("#input_Location").show();

	$("#UrawaReds").addClass("SelectClub");
	$("#UrawaReds p").eq(0).addClass("SelectStadium");
}

// 埼玉スタジアム2002
function SaitamaStadium2002() {
	$("#SaitamaStadium2002").show();
	$("#UrawaKomabaStadium").hide();
	$("#UrawaReds p").eq(0).addClass("SelectStadium");
	$("#UrawaReds p").eq(1).removeClass("SelectStadium");
	$("#Route").hide();
}

// 浦和駒場スタジアム
function UrawaKomabaStadium() {
	$("#SaitamaStadium2002").hide();
	$("#UrawaKomabaStadium").show();
	$("#UrawaReds p").eq(0).removeClass("SelectStadium");
	$("#UrawaReds p").eq(1).addClass("SelectStadium");
	$("#Route").hide();
}

/* 柏レイソル */
function KashiwaReysol() {
	Clear();

	$("h2").css("background-color", "#FFF100").css("color", "#000000");

	$("#KashiwaReysol").show();
	$("#input_Location").show();

	$("#KashiwaReysol").addClass("SelectClub");
}

/* FC東京 */
function FCTokyo() {
	Clear();

	$("h2").css("background-color", "#000A6E").css("color", "#FC0000");

	$("#FCTokyo").show();
	$("#input_Location").show();

	$("#FCTokyo").addClass("SelectClub");
}

/* 東京ヴェルディ */
function TokyoVerdy() {
	Clear();

	$("h2").css("background-color", "#046A38").css("color", "#FFFFFF");

	$("#TokyoVerdy").show();
	$("#input_Location").show();

	$("#TokyoVerdy").addClass("SelectClub");
}

/* FC町田ゼルビア */
function FCMachidaZelvia() {
	Clear();

	$("h2").css("background-color", "#05488B").css("color", "#FFFFFF");

	$("#FCMachidaZelvia").show();
	$("#input_Location").show();

	$("#FCMachidaZelvia").addClass("SelectClub");
}

/* 川崎フロンターレ */
function KawasakiFrontale() {
	Clear();

	$("h2").css("background-color", "#23B9FE").css("color", "#FFFFFF");

	$("#KawasakiFrontale").show();
	$("#input_Location").show();

	$("#KawasakiFrontale").addClass("SelectClub");
}

/* 横浜F・マリノス */
function YokohamaFMarinos() {
	Clear();

	$("h2").css("background-color", "#004098").css("color", "#FFFFFF");

	$("#YokohamaF・Marinos").show();
	$("#NissanStadium").show();
	$("#NippatsuMitsuzawa").hide();
	$("#input_Location").show();

	$("#YokohamaF・Marinos").addClass("SelectClub");
	$("#YokohamaF・Marinos p").eq(0).addClass("SelectStadium");
}

// 日産スタジアム
function NissanStadium() {
	$("#NissanStadium").show();
	$("#NippatsuMitsuzawa").hide();
	$("#YokohamaF・Marinos p").eq(0).addClass("SelectStadium");
	$("#YokohamaF・Marinos p").eq(1).removeClass("SelectStadium");

	$("#Route").hide();
}

// ニッパツ三ッ沢球技場
function NippatsuMitsuzawa() {
	$("#NissanStadium").hide();
	$("#NippatsuMitsuzawa").show();
	$("#YokohamaF・Marinos p").eq(0).removeClass("SelectStadium");
	$("#YokohamaF・Marinos p").eq(1).addClass("SelectStadium");

	$("#Route").hide();
}

/* 横浜FC */
function YokohamaFC() {
	Clear();

	$("h2").css("background-color", "#00A4F9").css("color", "#FFFFFF");

	$("#YokohamaFC").show();
	$("#input_Location").show();

	$("#YokohamaFC").addClass("SelectClub");
}

/* 湘南ベルマーレ */
function ShonanBellmare() {
	Clear();

	$("h2").css("background-color", "#60B424").css("color", "#005CA2");

	$("#ShonanBellmare").show();
	$("#input_Location").show();

	$("#ShonanBellmare").addClass("SelectClub");
}

/* アルビレックス新潟 */
function AlbirexNiigata() {
	Clear();

	$("h2").css("background-color", "#FF6325").css("color", "#014099");
	;
	$("#AlbirexNiigata").show();
	$("#input_Location").show();

	$("#AlbirexNiigata").addClass("SelectClub");
}

/* 清水エスパルス */
function ShimizuSPulse() {
	Clear();

	$("h2").css("background-color", "#FF8709").css("color", "#012D55");

	$("#ShimizuS-Pulse").show();
	$("#input_Location").show();

	$("#ShimizuS-Pulse").addClass("SelectClub");
}

/* 名古屋グランパス */
function NagoyaGrampus() {
	Clear();

	$("h2").css("background-color", "#D70C18").css("color", "#F8B500");

	$("#NagoyaGrampus").show();
	$("#ToyotaStadium").show();
	$("#PalomaMizuhoStadium").hide();
	$("#input_Location").show();

	$("#NagoyaGrampus").addClass("SelectClub");
	$("#NagoyaGrampus p").eq(0).addClass("SelectStadium");
}

// 豊田スタジアム
function ToyotaStadium() {
	$("#ToyotaStadium").show();
	$("#PalomaMizuhoStadium").hide();
	$("#NagoyaGrampus p").eq(0).addClass("SelectStadium");
	$("#NagoyaGrampus p").eq(1).removeClass("SelectStadium");
	$("#Route").hide();
}

// パロマ瑞穂スタジアム
function PalomaMizuhoStadium() {
	$("#PalomaMizuhoStadium").show();
	$("#ToyotaStadium").hide();
	$("#NagoyaGrampus p").eq(0).addClass("SelectStadium");
	$("#NagoyaGrampus p").eq(1).removeClass("SelectStadium");
	$("#Route").hide();
}

/* 京都サンガF.C. */
function KyotoSangaFC() {
	Clear();

	$("h2").css("background-color", "#6F0467").css("color", "#FFFFFF");

	$("#KyotoSangaFC").show();
	$("#input_Location").show();

	$("#KyotoSangaFC").addClass("SelectClub");
}

/* ガンバ大阪 */
function GambaOsaka() {
	Clear();

	$("h2").css("background-color", "#003287").css("color", "#FFFFFF");

	$("#GambaOsaka").show();
	$("#input_Location").show();

	$("#GambaOsaka").addClass("SelectClub");
}

/* セレッソ大阪 */
function CerezoOsaka() {
	Clear();

	$("h2").css("background-color", "#DA005C").css("color", "#1E2380");

	$("#CerezoOsaka").show();
	$("#input_Location").show();

	$("#CerezoOsaka").addClass("SelectClub");
}

/* ヴィッセル神戸 */
function VisselKobe() {
	Clear();

	$("h2").css("background-color", "#980323").css("color", "#FFFFFF");

	$("#VisselKobe").show();
	$("#input_Location").show();

	$("#VisselKobe").addClass("SelectClub");
}

/* ファジアーノ岡山 */
function FagianoOkayama() {
	Clear();

	$("h2").css("background-color", "#B6003D").css("color", "#1C2469");

	$("#FagianoOkayama").show();
	$("#input_Location").show();

	$("#FagianoOkayama").addClass("SelectClub");
}

/* サンフレッチェ広島 */
function SanfrecceHiroshima() {
	Clear();

	$("h2").css("background-color", "#51318F").css("color", "#FFFFFF");

	$("#SanfrecceHiroshima").show();
	$("#input_Location").show();

	$("#SanfrecceHiroshima").addClass("SelectClub");
}

/* アビスパ福岡 */
function AvispaFukuoka() {
	Clear();

	$("h2").css("background-color", "#00205B").css("color", "#FFFFFF");
	$("#AvispaFukuoka").show();
	$("#input_Location").show();

	$("#AvispaFukuoka").addClass("SelectClub");
}

/* J2 */
function J2_show() {
	Clear();

	$("h2").css("background-color", "#007E41").css("color", "#FFFFFF");
	$("#JLeague div").hide();
	$(".SelectClub" || ".SelectStadium").hide();
	$("#input_Location").hide();
	$("#Route").hide();
	$("#WE").hide();
	$("#NPB div").hide();
	$("#J2").show();
}

/* 北海道コンサドーレ札幌 */
function HokkaidoConsadoleSapporo() {
	Clear();

	$("h2").css("background-color", "#CF0000").css("color", "#000000");

	$("#HokkaidoConsadoleSapporo").show();
	$("#SapporoDome").show();
	$("#SapporoAtsubetsu").hide();
	$("#input_Location").show();

	$("#HokkaidoConsadoleSapporo").addClass("SelectClub");
	$("#HokkaidoConsadoleSapporo p").eq(0).addClass("SelectStadium");
}

// 大和ハウス プレミストドーム
function SapporoDome() {
	$("#SapporoDome").show();
	$("#SapporoAtsubetsu").hide();
	$("#HokkaidoConsadoleSapporo p").eq(0).addClass("SelectStadium");
	$("#HokkaidoConsadoleSapporo p").eq(1).removeClass("SelectStadium");
	$("#Route").hide();
}

// 札幌厚別公園陸上競技場
function SapporoAtsubetsu() {
	$("#SapporoDome").hide();
	$("#SapporoAtsubetsu").show();
	$("#HokkaidoConsadoleSapporo p").eq(0).removeClass("SelectStadium");
	$("#HokkaidoConsadoleSapporo p").eq(1).addClass("SelectStadium");
	$("#Route").hide();
}

/* ベガルタ仙台 */
function VegaltaSendai() {
	Clear();

	$("h2").css("background-color", "#FCC800").css("color", "#2C4198");

	$("#VegaltaSendai").show();
	$("#input_Location").show();

	$("#VegaltaSendai").addClass("SelectClub");
}

/* ブラウブリッツ秋田 */
function BlaublitzAkita() {
	Clear();

	$("h2").css("background-color", "#005BAB").css("color", "#FFFFFF");

	$("#BlaublitzAkita").show();
	$("#input_Location").show();

	$("#BlaublitzAkita").addClass("SelectClub");
}

/* モンテディオ山形 */
function MontedioYamagata() {
	Clear();

	$("h2").css("background-color", "#1A1A7C").css("color", "#FFFFFF");

	$("#MontedioYamagata").show();
	$("#input_Location").show();

	$("#MontedioYamagata").addClass("SelectClub");
}

/* いわきFC */
function IwakiFC() {
	Clear();

	$("h2").css("background-color", "#C11830").css("color", "#121834");

	$("#IwakiFC").show();
	$("#input_Location").show();

	$("#IwakiFC").addClass("SelectClub");
}

/* 水戸ホーリーホック */
function MitoHollyhock() {
	Clear();

	$("h2").css("background-color", "#001976").css("color", "#FFFFFF");

	$("#MitoHollyhock").show();
	$("#input_Location").show();

	$("#MitoHollyhock").addClass("SelectClub");
}

/* RB大宮アルディージャ */
function RBOmiyaArdija() {
	Clear();

	$("h2").css("background-color", "#020D38").css("color", "#EF7A28");

	$("#RBOmiyaArdija").show();
	$("#input_Location").show();

	$("#RBOmiyaArdija").addClass("SelectClub");
}

/* ジェフユナイテッド千葉 */
function JEFUnitedChiba() {
	Clear();

	$("h2").css("background-color", "#FFE100").css("color", "#009260");

	$("#JEFUnitedChiba").show();
	$("#input_Location").show();

	$("#JEFUnitedChiba").addClass("SelectClub");
}

/* 横浜FC */
function YokohamaFC() {
	Clear();

	$("h2").css("background-color", "#00A4F9").css("color", "#FFFFFF");

	$("#YokohamaFC").show();
	$("#input_Location").show();

	$("#YokohamaFC").addClass("SelectClub");
}

/* ヴァンフォーレ甲府 */
function VentforetKofu() {
	Clear();

	$("h2").css("background-color", "#005BAC").css("color", "#B8193F");

	$("#VentforetKofu").show();
	$("#input_Location").show();

	$("#VentforetKofu").addClass("SelectClub");
}

/* カターレ富山 */
function KatallerToyama() {
	Clear();

	$("h2").css("background-color", "#0D277E").css("color", "#9C0339");

	$("#KatallerToyama").show();
	$("#input_Location").show();

	$("#KatallerToyama").addClass("SelectClub");
}

/* ジュビロ磐田 */
function JubiroIwata() {
	Clear();

	$("h2").css("background-color", "#7399D1").css("color", "#FFFFFF");

	$("#JubiroIwata").show();
	$("#YamahaStadium").show();
	$("#EkopaStadium").show();
	$("#input_Location").show();

	$("#JubiroIwata").addClass("SelectClub");
	$("#JubiroIwata p").eq(0).addClass("SelectStadium");
}

// ヤマハスタジアム(磐田)
function YamahaStadium() {
	$("#YamahaStadium").show();
	$("#EkopaStadium").hide();
	$("#JubiroIwata p").eq(0).addClass("SelectStadium");
	$("#JubiroIwata p").eq(1).removeClass("SelectStadium");

	$("#Route").hide();
}

// エコパスタジアム
function EkopaStadium() {
	Clear();

	$("#YamahaStadium").hide();
	$("#EkopaStadium").show();
	$("#JubiroIwata p").eq(0).removeClass("SelectStadium");
	$("#JubiroIwata p").eq(1).addClass("SelectStadium");

	$("#Route").hide();
}

/* 藤枝MYFC */
function FujiedaMYFC() {
	Clear();

	$("h2").css("background-color", "#87367B").css("color", "#89BA2A");
	$("#FujiedaMYFC").show();
	$("#input_Location").show();

	$("#FujiedaMYFC").addClass("SelectClub");
}

/* レノファ山口FC */
function RenofaYamaguchiFC() {
	Clear();

	$("h2").css("background-color", "#ED6F1F").css("color", "#FFFFFF");

	$("#RenofaYamaguchiFC").show();
	$("#IshinMiraifuStadium").show();
	$("#SavingStadium").hide();
	$("#input_Location").show();

	$("#RenofaYamaguchiFC").addClass("SelectClub");
	$("#RenofaYamaguchiFC p").eq(0).addClass("SelectStadium");
}

// 維新みらいふスタジアム
function IshinMiraifuStadium() {
	$("#IshinMiraifuStadium").show();
	$("#SavingStadium").hide();
	$("#RenofaYamaguchiFC p").eq(0).addClass("SelectStadium");
	$("#RenofaYamaguchiFC p").eq(1).removeClass("SelectStadium");
	$("#Route").hide();
}

// セービング陸上競技場
function SavingStadium() {
	$("#IshinMiraifuStadium").hide();
	$("#SavingStadium").show();
	$("#RenofaYamaguchiFC p").eq(0).removeClass("SelectStadium");
	$("#RenofaYamaguchiFC p").eq(1).addClass("SelectStadium");
	$("#Route").hide();
}

/* 徳島ヴォルティス */
function TokushimaVortis() {
	Clear();

	$("h2").css("background-color", "#112849").css("color", "#FFFFFF");
	$("#TokushimaVortis").show();
	$("#input_Location").show();

	$("#TokushimaVortis").addClass("SelectClub");
}

/* 愛媛FC */
function EhimeFC() {
	Clear();

	$("h2").css("background-color", "#DD960F").css("color", "#FFFFFF");
	$("#EhimeFC").show();
	$("#input_Location").show();

	$("#EhimeFC").addClass("SelectClub");
}

/* FC今治 */
function FCImabari() {
	Clear();

	$("h2").css("background-color", "#163669").css("color", "#FFFFFF");
	$("#FCImabari").show();
	$("#input_Location").show();

	$("#FCImabari").addClass("SelectClub");
}

/* サガン鳥栖 */
function SaganTosu() {
	Clear();

	$("h2").css("background-color", "#2196F3").css("color", "#E95599");
	$("#SaganTosu").show();
	$("#input_Location").show();

	$("#SaganTosu").addClass("SelectClub");
}

/* V・ファーレン長崎 */
function VVarenNagasaki() {
	Clear();

	$("h2").css("background-color", "#005BAC").css("color", "#FE6000");

	$("#V-VarenNagasaki").show();
	$("#input_Location").show();

	$("#V-VarenNagasaki").addClass("SelectClub");
}

/* ロアッソ熊本 */
function RoassoKumamoto() {
	Clear();

	$("h2").css("background-color", "#B61A14").css("color", "#000000");

	$("#RoassoKumamoto").show();
	$("#input_Location").show();

	$("#RoassoKumamoto").addClass("SelectClub");
}

/* 大分トリニータ */
function OitaTrinita() {
	Clear();

	$("h2").css("background-color", "#073190").css("color", "#FFFFFF");

	$("#OitaTrinita").show();
	$("#input_Location").show();

	$("#OitaTrinita").addClass("SelectClub");
}

/* J3 */
function J3_show() {
	Clear();

	$("h2").css("background-color", "#0062B2").css("color", "#FFFFFF");
	$("#JLeague div").hide();
	$(".SelectClub" || ".SelectStadium").hide();
	$("#input_Location").hide();
	$("#Route").hide();
	$("#WE").hide();
	$("#NPB div").hide();
	$("#J3").show();
}

/* ヴァンラーレ八戸 */
function VanraureHachinohe() {
	Clear();

	$("h2").css("background-color", "#14A83C").css("color", "#00ACEC");

	$("#VanraureHachinohe").show();
	$("#input_Location").show();

	$("#VanraureHachinohe").addClass("SelectClub");
}

/* 福島ユナイテッドFC */
function FukushimaUnitedFC() {
	Clear();

	$("h2").css("background-color", "#E60012").css("color", "#FFFFFF");

	$("#FukushimaUnitedFC").show();
	$("#TouhouMinnanoStadium").show();
	$("#AizuStadium").hide();
	$("#input_Location").show();

	$("#FukushimaUnitedFC").addClass("SelectClub");
	$("#FukushimaUnitedFC p").eq(0).addClass("SelectStadium");
}

// とうほう・みんなのスタジアム
function TouhouMinnanoStadium() {
	$("#TouhouMinnanoStadium").show();
	$("#AizuStadium").hide();
	$("#FukushimaUnitedFC p").eq(0).addClass("SelectStadium");
	$("#FukushimaUnitedFC p").eq(1).removeClass("SelectStadium");
	$("#Route").hide();
}

// 会津総合運動公園あいづ陸上競技場
function AizuStadium() {
	$("#TouhouMinnanoStadium").hide();
	$("#AizuStadium").show();
	$("#FukushimaUnitedFC p").eq(0).removeClass("SelectStadium");
	$("#FukushimaUnitedFC p").eq(1).addClass("SelectStadium");
	$("#Route").hide();
}

/* 栃木SC */
function TochigiSC() {
	Clear();

	$("h2").css("background-color", "#FFF100").css("color", "#005BAC");

	$("#TochigiSC").show();
	$("#KansekiStadiumTochigi").show()
	$("#GreenStadium").hide()
	$("#input_Location").show();

	$("#TochigiSC").addClass("SelectClub");
	$("#TochigiSC p").eq(0).addClass("SelectStadium");
}

// カンセキスタジアムとちぎ
function KansekiStadiumTochigi() {
	$("#KansekiStadiumTochigi").show();
	$("#GreenStadium").hide();
	$("#TochigiSC p").eq(0).addClass("SelectStadium");
	$("#TochigiSC p").eq(1).removeClass("SelectStadium");
	$("#Route").hide();
}

// 栃木県グリーンスタジアム
function GreenStadium() {
	$("#KansekiStadiumTochigi").show();
	$("#GreenStadium").show();
	$("#TochigiSC p").eq(0).removeClass("SelectStadium");
	$("#TochigiSC p").eq(1).addClass("SelectStadium");
	$("#Route").hide();
}

/* 栃木シティ */
function TochigiCity() {
	Clear();

	$("h2").css("background-color", "#FFFFFF").css("color", "#000E32");

	$("#TochigiCity").show();
	$("#input_Location").show();

	$("#TochigiCity").addClass("SelectClub");
}

/* ザスパ群馬 */
function ThespaGunma() {
	Clear();

	$("h2").css("background-color", "#002C5B").css("color", "#FFFFFF");

	$("#ThespaGunma").show();
	$("#input_Location").show();

	$("#ThespaGunma").addClass("SelectClub");
}

/* SC相模原 */
function SCSagamihara() {
	Clear();

	$("h2").css("background-color", "#1C6969").css("color", "#FFFFFF");

	$("#SCSagamihara").show();
	$("#input_Location").show();

	$("#SCSagamihara").addClass("SelectClub");
}

/* 松本山雅FC */
function MatsumotoYamagaFC() {
	Clear();

	$("h2").css("background-color", "#008136").css("color", "#FFFFFF");

	$("#MatsumotoYamagaFC").show();
	$("#input_Location").show();

	$("#MatsumotoYamagaFC").addClass("SelectClub");
}

/* AC長野パルセイロ */
function ACNaganoParceiro() {
	Clear();

	$("h2").css("background-color", "#F39F39").css("color", "#17205C");

	$("#ACNaganoParceiro").show();
	$("#input_Location").show();

	$("#ACNaganoParceiro").addClass("SelectClub");
}

/* ツエーゲン金沢 */
function ZweigenKanazawa() {
	Clear();

	$("h2").css("background-color", "#AB0F1B").css("color", "#231815");

	$("#ZweigenKanazawa").show();
	$("#input_Location").show();

	$("#ZweigenKanazawa").addClass("SelectClub");
}

/* アスルクラロ沼津 */
function AzulClaroNumazu() {
	Clear();

	$("h2").css("background-color", "#00A0E9").css("color", "#FFFFFF");

	$("#AzulClaroNumazu").show();
	$("#input_Location").show();

	$("#AzulClaroNumazu").addClass("SelectClub");
}

/* FC岐阜 */
function FCGifu() {
	Clear();

	$("h2").css("background-color", "#00633C").css("color", "#FFFFFF");

	$("#FCGifu").show();
	$("#input_Location").show();

	$("#FCGifu").addClass("SelectClub");
}

/* FC大阪 */
function FCOsaka() {
	Clear();

	$("h2").css("background-color", "#7FCAF1").css("color", "#FFFFFF");

	$("#FCOsaka").show();
	$("#input_Location").show();

	$("#FCOsaka").addClass("SelectClub");
}

/* 奈良クラブ */
function NaraClub() {
	Clear();

	$("h2").css("background-color", "#011D64").css("color", "#910004");

	$("#NaraClub").show();
	$("#input_Location").show();

	$("#NaraClub").addClass("SelectClub");
}

/* ガイナーレ鳥取 */
function GainareTottori() {
	Clear();

	$("h2").css("background-color", "#6EBA3D").css("color", "#003559");

	$("#GainareTottori").show();
	$("#AxisStadium").show();
	$("#YajinStadium").hide();
	$("#input_Location").show();

	$("#GainareTottori").addClass("SelectClub");
	$("#GainareTottori p").eq(0).addClass("SelectStadium");
}

// Axisバードスタジアム
function AxisStadium() {
	$("#AxisStadium").show();
	$("#YajinStadium").hide();
	$("#GainareTottori p").eq(0).addClass("SelectStadium");
	$("#GainareTottori p").eq(1).removeClass("SelectStadium");

	$("#Route").hide();
}

// オールガイナーレYAJINスタジアム
function YajinStadium() {
	$("#AxisStadium").hide();
	$("#YajinStadium").show();
	$("#GainareTottori p").eq(0).removeClass("SelectStadium");
	$("#GainareTottori p").eq(1).addClass("SelectStadium");

	$("#Route").hide();
}

/* カマタマーレ讃岐 */
function KamatamareSanuki() {
	Clear();

	$("h2").css("background-color", "#65AADD").css("color", "#FFFFFF");

	$("#KamatamareSanuki").show();
	$("#input_Location").show();

	$("#KamatamareSanuki").addClass("SelectClub");
}

/* 高知ユナイテッドSC */
function KochiUnitedSC() {
	Clear();

	$("h2").css("background-color", "#B81B21").css("color", "#005731");

	$("#KochiUnitedSC").show();
	$("#input_Location").show();

	$("#KochiUnitedSC").addClass("SelectClub");
}

/* ギラヴァンツ北九州 */
function GiravanzKitakyushu() {
	Clear();

	$("h2").css("background-color", "#F7E900").css("color", "#DF0011");

	$("#GiravanzKitakyushu").show();
	$("#input_Location").show();

	$("#GiravanzKitakyushu").addClass("SelectClub");
}

/* テゲバジャーロ宮崎 */
function TegevajaroMiyazaki() {
	Clear();

	$("h2").css("background-color", "#FFFFFF").css("color", "#E12A75");

	$("#TegevajaroMiyazaki").show();
	$("#input_Location").show();

	$("#TegevajaroMiyazaki").addClass("SelectClub");
}

/* 鹿児島ユナイテッドFC */
function KagoshimaUnitedFC() {
	Clear();

	$("h2").css("background-color", "#1A335F").css("color", "#FFFFFF");

	$("#KagoshimaUnitedFC").show();
	$("#input_Location").show();

	$("#KagoshimaUnitedFC").addClass("SelectClub");
}

/* FC琉球 */
function FCRyukyu() {
	Clear();

	$("h2").css("background-color", "#8A0730").css("color", "#DECA7B");

	$("#FCRyukyu").show();
	$("#input_Location").show();

	$("#FCRyukyu").addClass("SelectClub");
}

/* 国立競技場 */
function NationalStadium() {
	$("#JLeague div").hide();
	$(".SelectClub" || ".SelectStadium").hide();
	$("#WE").hide();
	$("#NPB div").hide();

	Clear();

	$("h2").css("background-color", "blue").css("color", "#E95599");
	$("#NationalStadium").show();
	$("#input_Location").show();

	$("#NationalStadium").addClass("SelectClub");
}