/* Jリーグ */
function JLeague() {
	$("h2").css("background-color", "white").css("color", "black");
	$("#JLeague div").hide();
	$("#input_Location").hide();
	$("#Route").hide();
	$(".Selection" || ".Selected").hide();
	$("#WE").hide();
	$("#NPB div").hide();
	$("#JLeague div").show();
}

/* J1 */
function J1_show() {
	$("h2").css("background-color", "#E60012").css("color", "white");
	$("#JLeague div").hide();
	$("#input_Location").hide();
	$("#Route").hide();
	$(".Selection" || ".Selected").hide();
	$("#WE").hide();
	$("#J1").show();
}

/* 北海道コンサドーレ札幌 */
function HokkaidoConsadoleSapporo() {
	remove();

	$("h2").css("background-color", "#CF0000").css("color", "black");
	$("#J1").hide();
	$("#HokkaidoConsadoleSapporo").show();
	$("#SapporoDome").show();
	$("#input_Location").show();

	$("#HokkaidoConsadoleSapporo").addClass("Selection");
	$("#HokkaidoConsadoleSapporo p").eq(0).addClass("Selected");
}

// 大和ハウス プレミストドーム
function SapporoDome() {
	$("#SapporoDome").show();
	$("#SapporoAtsubetsu").hide();
	$("#HokkaidoConsadoleSapporo p").eq(0).addClass("Selected");
	$("#HokkaidoConsadoleSapporo p").eq(1).removeClass("Selected");
	$("#Route").hide();
}

// 札幌厚別公園陸上競技場
function SapporoAtsubetsu() {
	$("#SapporoDome").hide();
	$("#SapporoAtsubetsu").show();
	$("#HokkaidoConsadoleSapporo p").eq(0).removeClass("Selected");
	$("#HokkaidoConsadoleSapporo p").eq(1).addClass("Selected");
	$("#Route").hide();
}

/* 鹿島アントラーズ */
function KashimaAntlers() {
	remove();

	$("h2").css("background-color", "#B71840").css("color", "white");
	$("#J1").hide();
	$("#KashimaAntlers").show();
	$("#input_Location").show();

	$("#KashimaAntlers").addClass("Selection");
}

/* 浦和レッズ */
function UrawaReds() {
	remove();

	$("h2").css("background-color", "#E6002D").css("color", "black");
	$("#J1").hide();
	$("#UrawaReds").show();
	$("#SaitamaStadium2002").show();
	$("#input_Location").show();

	$("#UrawaReds").addClass("Selection");
	$("#UrawaReds p").eq(0).addClass("Selected");
}

// 埼玉スタジアム2002
function SaitamaStadium2002() {
	$("#SaitamaStadium2002").show();
	$("#UrawaKomabaStadium").hide();
	$("#UrawaReds p").eq(0).addClass("Selected");
	$("#UrawaReds p").eq(1).removeClass("Selected");
	$("#Route").hide();
}

// 浦和駒場スタジアム
function UrawaKomabaStadium() {
	$("#SaitamaStadium2002").hide();
	$("#UrawaKomabaStadium").show();
	$("#UrawaReds p").eq(0).removeClass("Selected");
	$("#UrawaReds p").eq(1).addClass("Selected");
	$("#Route").hide();
}

/* 柏レイソル */
function KashiwaReysol() {
	remove();

	$("h2").css("background-color", "#FFF100").css("color", "black");
	$("#J1").hide();
	$("#KashiwaReysol").show();
	$("#input_Location").show();

	$("#KashiwaReysol").addClass("Selection");
}

/* FC東京 */
function FCTokyo() {
	remove();

	$("h2").css("background-color", "#000A6E").css("color", "#FC0000");
	$("#J1").hide();
	$("#FCTokyo").show();
	$("#input_Location").show();

	$("#FCTokyo").addClass("Selection");
}

/* 東京ヴェルディ */
function TokyoVerdy() {
	remove();

	$("h2").css("background-color", "#046A38").css("color", "white");
	$("#J1").hide();
	$("#TokyoVerdy").show();
	$("#input_Location").show();

	$("#TokyoVerdy").addClass("Selection");
}

/* FC町田ゼルビア */
function FCMachidaZelvia() {
	remove();

	$("h2").css("background-color", "#05488B").css("color", "white");
	$("#J1").hide();
	$("#FCMachidaZelvia").show();
	$("#input_Location").show();

	$("#FCMachidaZelvia").addClass("Selection");
}

/* 川崎フロンターレ */
function KawasakiFrontale() {
	remove();

	$("h2").css("background-color", "#23B9FE").css("color", "white");
	$("#J1").hide();
	$("#KawasakiFrontale").show();
	$("#input_Location").show();

	$("#KawasakiFrontale").addClass("Selection");
}

/* 横浜F・マリノス */
function YokohamaFMarinos() {
	remove();

	$("h2").css("background-color", "#004098").css("color", "white");
	$("#J1").hide();
	$("#YokohamaF・Marinos").show();
	$("#NissanStadium").show();
	$("#input_Location").show();

	$("#YokohamaF・Marinos").addClass("Selection");
	$("#YokohamaF・Marinos p").eq(0).addClass("Selected");
}

// 日産スタジアム
function NissanStadium() {
	$("#NissanStadium").show();
	$("#NippatsuMitsuzawa").hide();
	$("#YokohamaF・Marinos p").eq(0).addClass("Selected");
	$("#YokohamaF・Marinos p").eq(1).removeClass("Selected");

	$("#Route").hide();
}

// ニッパツ三ッ沢球技場
function NippatsuMitsuzawa() {
	$("#NissanStadium").hide();
	$("#NippatsuMitsuzawa").show();
	$("#YokohamaF・Marinos p").eq(0).removeClass("Selected");
	$("#YokohamaF・Marinos p").eq(1).addClass("Selected");

	$("#Route").hide();
}

/* 湘南ベルマーレ */
function ShonanBellmare() {
	remove();

	$("h2").css("background-color", "#60B424").css("color", "#005CA2");
	$("#J1").hide();
	$("#ShonanBellmare").show();
	$("#input_Location").show();

	$("#ShonanBellmare").addClass("Selection");
}

/* アルビレックス新潟 */
function AlbirexNiigata() {
	remove();

	$("h2").css("background-color", "#FF6325").css("color", "#014099");
	$("#J1").hide();
	$("#AlbirexNiigata").show();
	$("#input_Location").show();

	$("#AlbirexNiigata").addClass("Selection");
}

/* ジュビロ磐田 */
function JubiroIwata() {
	remove();

	$("h2").css("background-color", "#7399D1").css("color", "white");
	$("#J1").hide();
	$("#JubiroIwata").show();
	$("#YamahaStadium").show();
	$("#input_Location").show();

	$("#YokohamaF・Marinos").addClass("Selection");
	$("#JubiroIwata p").eq(0).addClass("Selected");
}

// ヤマハスタジアム(磐田)
function YamahaStadium() {
	$("#YamahaStadium").show();
	$("#EkopaStadium").hide();
	$("#JubiroIwata p").eq(0).addClass("Selected");
	$("#JubiroIwata p").eq(1).removeClass("Selected");

	$("#Route").hide();
}

// エコパスタジアム
function EkopaStadium() {
	remove();

	$("#YamahaStadium").hide();
	$("#EkopaStadium").show();
	$("#JubiroIwata p").eq(0).removeClass("Selected");
	$("#JubiroIwata p").eq(1).addClass("Selected");

	$("#Route").hide();
}

/* 名古屋グランパス */
function NagoyaGrampus() {
	remove();

	$("h2").css("background-color", "#D70C18").css("color", "#F8B500");
	$("#J1").hide();
	$("#NagoyaGrampus").show();
	$("#ToyotaStadium").show();
	$("#input_Location").show();

	$("#NagoyaGrampus").addClass("Selection");
	$("#NagoyaGrampus p").eq(0).addClass("Selected");
}

// 豊田スタジアム
function ToyotaStadium() {
	$("#ToyotaStadium").show();
	$("#PalomaMizuhoStadium").hide();
	$("#NagoyaGrampus p").eq(0).addClass("Selected");
	$("#NagoyaGrampus p").eq(1).removeClass("Selected");
	$("#Route").hide();
}

// パロマ瑞穂スタジアム
function PalomaMizuhoStadium() {
	$("#PalomaMizuhoStadium").show();
	$("#ToyotaStadium").hide();
	$("#NagoyaGrampus p").eq(0).addClass("Selected");
	$("#NagoyaGrampus p").eq(1).removeClass("Selected");
	$("#Route").hide();
}

/* 京都サンガF.C. */
function KyotoSangaFC() {
	remove();

	$("h2").css("background-color", "#6F0467").css("color", "white");
	$("#J1").hide();
	$("#KyotoSangaFC").show();
	$("#input_Location").show();

	$("#KyotoSangaFC").addClass("Selection");
}

/* ガンバ大阪 */
function GambaOsaka() {
	remove();

	$("h2").css("background-color", "#003287").css("color", "white");
	$("#J1").hide();
	$("#GambaOsaka").show();
	$("#input_Location").show();

	$("#GambaOsaka").addClass("Selection");
}

/* セレッソ大阪 */
function CerezoOsaka() {
	remove();

	$("h2").css("background-color", "#DA005C").css("color", "#1E2380");
	$("#J1").hide();
	$("#CerezoOsaka").show();
	$("#input_Location").show();

	$("#CerezoOsaka").addClass("Selection");
}

/* ヴィッセル神戸 */
function VisselKobe() {
	remove();

	$("h2").css("background-color", "#980323").css("color", "white");
	$("#J1").hide();
	$("#VisselKobe").show();
	$("#input_Location").show();

	$("#VisselKobe").addClass("Selection");
}

/* サンフレッチェ広島 */
function SanfrecceHiroshima() {
	remove();

	$("h2").css("background-color", "#51318F").css("color", "white");
	$("#J1").hide();
	$("#SanfrecceHiroshima").show();
	$("#input_Location").show();

	$("#SanfrecceHiroshima").addClass("Selection");
}

/* アビスパ福岡 */
function AvispaFukuoka() {
	remove();

	$("h2").css("background-color", "#00205B").css("color", "white");
	$("#J1").hide();
	$("#AvispaFukuoka").show();
	$("#input_Location").show();

	$("#AvispaFukuoka").addClass("Selection");
}

/* サガン鳥栖 */
function SaganTosu() {
	remove();

	$("h2").css("background-color", "#2196F3").css("color", "#E95599");
	$("#J1").hide();
	$("#SaganTosu").show();
	$("#input_Location").show();

	$("#SaganTosu").addClass("Selection");
}

/* J2 */
function J2_show() {
	$("h2").css("background-color", "#007E41").css("color", "white");
	$("#JLeague div").hide();
	$(".Selection" || ".Selected").hide();
	$("#input_Location").hide();
	$("#Route").hide();
	$("#WE").hide();
	$("#NPB div").hide();
	$("#J2").show();
}

/* ベガルタ仙台 */
function VegaltaSendai() {
	remove();

	$("h2").css("background-color", "#FCC800").css("color", "#2C4198");
	$("#J2").hide();
	$("#VegaltaSendai").show();
	$("#input_Location").show();

	$("#VegaltaSendai").addClass("Selection");
}

/* ブラウブリッツ秋田 */
function BlaublitzAkita() {
	remove();

	$("h2").css("background-color", "#005BAB").css("color", "white");
	$("#J2").hide();
	$("#BlaublitzAkita").show();
	$("#input_Location").show();

	$("#BlaublitzAkita").addClass("Selection");

}

/* モンテディオ山形 */
function MontedioYamagata() {
	remove();

	$("h2").css("background-color", "#1A1A7C").css("color", "white");
	$("#J2").hide();
	$("#MontedioYamagata").show();
	$("#input_Location").show();

	$("#MontedioYamagata").addClass("Selection");

}

/* いわきFC */
function IwakiFC() {
	remove();

	$("h2").css("background-color", "#C11830").css("color", "#121834");
	$("#J2").hide();
	$("#IwakiFC").show();
	$("#input_Location").show();

	$("#IwakiFC").addClass("Selection");
}

/* 水戸ホーリーホック */
function MitoHollyhock() {
	remove();

	$("h2").css("background-color", "#001976").css("color", "white");
	$("#J2").hide();
	$("#MitoHollyhock").show();
	$("#input_Location").show();

	$("#MitoHollyhock").addClass("Selection");
}

/* 栃木SC */
function TochigiSC() {
	remove();

	$("h2").css("background-color", "#FFF100").css("color", "#005BAC");
	$("#J2").hide();
	$("#TochigiSC").show();
	$("#KansekiStadiumTochigi").show()
	$("#input_Location").show();

	$("#TochigiSC").addClass("Selection");
	$("#TochigiSC p").eq(0).addClass("Selected");
}

// カンセキスタジアムとちぎ
function KansekiStadiumTochigi() {
	$("#KansekiStadiumTochigi").show();
	$("#GreenStadium").hide();
	$("#TochigiSC p").eq(0).addClass("Selected");
	$("#TochigiSC p").eq(1).removeClass("Selected");
	$("#Route").hide();
}

// 栃木県グリーンスタジアム
function GreenStadium() {
	$("#KansekiStadiumTochigi").show();
	$("#GreenStadium").show();
	$("#TochigiSC p").eq(0).removeClass("Selected");
	$("#TochigiSC p").eq(1).addClass("Selected");
	$("#Route").hide();
}

/* ザスパ群馬 */
function ThespaGunma() {
	remove();

	$("h2").css("background-color", "#002C5B").css("color", "white");
	$("#J2").hide();
	$("#ThespaGunma").show();
	$("#input_Location").show();

	$("#ThespaGunma").addClass("Selection");
}

/* ジェフユナイテッド千葉 */
function JEFUnitedChiba() {
	remove();

	$("h2").css("background-color", "#FFE100").css("color", "#009260");
	$("#J2").hide();
	$("#JEFUnitedChiba").show();
	$("#input_Location").show();

	$("#JEFUnitedChiba").addClass("Selection");
}

/* 横浜FC */
function YokohamaFC() {
	remove();

	$("h2").css("background-color", "#00A4F9").css("color", "white");
	$("#J2").hide();
	$("#YokohamaFC").show();
	$("#input_Location").show();

	$("#YokohamaFC").addClass("Selection");
}

/* ヴァンフォーレ甲府 */
function VentforetKofu() {
	remove();

	$("h2").css("background-color", "#005BAC").css("color", "#B8193F");
	$("#J2").hide();
	$("#VentforetKofu").show();
	$("#input_Location").show();

	$("#VentforetKofu").addClass("Selection");
}

/* 清水エスパルス */
function ShimizuSPulse() {
	remove();

	$("h2").css("background-color", "#FF8709").css("color", "#012D55");
	$("#J2").hide();
	$("#ShimizuS-Pulse").show();
	$("#input_Location").show();

	$("#ShimizuS-Pulse").addClass("Selection");
}

/* 藤枝MYFC */
function FujiedaMYFC() {
	remove();

	$("h2").css("background-color", "#87367B").css("color", "#89BA2A");
	$("#J2").hide();
	$("#FujiedaMYFC").show();
	$("#input_Location").show();

	$("#FujiedaMYFC").addClass("Selection");
}

/* ファジアーノ岡山 */
function FagianoOkayama() {
	remove();

	$("h2").css("background-color", "#B6003D").css("color", "#1C2469");
	$("#J2").hide();
	$("#FagianoOkayama").show();
	$("#input_Location").show();

	$("#FagianoOkayama").addClass("Selection");
}

/* レノファ山口FC */
function RenofaYamaguchiFC() {
	remove();

	$("h2").css("background-color", "#ED6F1F").css("color", "white");
	$("#J2").hide();
	$("#RenofaYamaguchiFC").show();
	$("#IshinMiraifuStadium").show();
	$("#input_Location").show();

	$("#RenofaYamaguchiFC").addClass("Selection");
	$("#RenofaYamaguchiFC p").eq(0).addClass("Selected");
}

// 維新みらいふスタジアム
function IshinMiraifuStadium() {
	$("#IshinMiraifuStadium").show();
	$("#SavingStadium").hide();
	$("#RenofaYamaguchiFC p").eq(0).addClass("Selected");
	$("#RenofaYamaguchiFC p").eq(1).removeClass("Selected");
	$("#Route").hide();
}

// セービング陸上競技場
function SavingStadium() {
	$("#IshinMiraifuStadium").hide();
	$("#SavingStadium").show();
	$("#RenofaYamaguchiFC p").eq(0).removeClass("Selected");
	$("#RenofaYamaguchiFC p").eq(1).addClass("Selected");
	$("#Route").hide();
}

/* 徳島ヴォルティス */
function TokushimaVortis() {
	remove();

	$("h2").css("background-color", "#112849").css("color", "white");
	$("#J2").hide();
	$("#TokushimaVortis").show();
	$("#input_Location").show();

	$("#TokushimaVortis").addClass("Selection");
}

/* 愛媛FC */
function EhimeFC() {
	remove();

	$("h2").css("background-color", "#DD960F").css("color", "white");
	$("#J2").hide();
	$("#EhimeFC").show();
	$("#input_Location").show();

	$("#EhimeFC").addClass("Selection");
}

/* V・ファーレン長崎 */
function VVarenNagasaki() {
	remove();

	$("h2").css("background-color", "#005BAC").css("color", "#FE6000");
	$("#J2").hide();
	$("#V-VarenNagasaki").show();
	$("#TransCosmosStadium").show();
	$("#input_Location").show();

	$("#V-VarenNagasaki").addClass("Selection");
	$("#V-VarenNagasaki p").eq(0).addClass("Selected");
}

// トランスコスモススタジアム長崎
function TransCosmosStadium() {
	$("#TransCosmosStadium").show();
	$("#PEACESTADIUMConnectedbySoftBank").hide();
	$("#V-VarenNagasaki p").eq(0).addClass("Selected");
	$("#V-VarenNagasaki p").eq(1).removeClass("Selected");
	$("#Route").hide();
}

// PEACE STADIUM Connected by SoftBank
function PEACESTADIUMConnectedbySoftBank() {
	$("#TransCosmosStadium").hide();
	$("#PEACESTADIUMConnectedbySoftBank").show();
	$("#V-VarenNagasaki p").eq(0).removeClass("Selected");
	$("#V-VarenNagasaki p").eq(1).addClass("Selected");
	$("#Route").hide();
}

/* ロアッソ熊本 */
function RoassoKumamoto() {
	remove();

	$("h2").css("background-color", "#B61A14").css("color", "black");
	$("#J2").hide();
	$("#RoassoKumamoto").show();
	$("#input_Location").show();

	$("#RoassoKumamoto").addClass("Selection");
}

/* 大分トリニータ */
function OitaTrinita() {
	remove();

	$("h2").css("background-color", "#073190").css("color", "white");
	$("#J2").hide();
	$("#OitaTrinita").show();
	$("#input_Location").show();

	$("#OitaTrinita").addClass("Selection");
}

/* 鹿児島ユナイテッドFC */
function KagoshimaUnitedFC() {
	remove();

	$("h2").css("background-color", "#1A335F").css("color", "white");
	$("#J2").hide();
	$("#KagoshimaUnitedFC").show();
	$("#input_Location").show();

	$("#KagoshimaUnitedFC").addClass("Selection");
}

/* J3 */
function J3_show() {
	$("h2").css("background-color", "#0062B2").css("color", "white");
	$("#JLeague div").hide();
	$(".Selection" || ".Selected").hide();
	$("#input_Location").hide();
	$("#Route").hide();
	$("#WE").hide();
	$("#NPB div").hide();
	$("#J3").show();
}

/* ヴァンラーレ八戸 */
function VanraureHachinohe() {
	remove();

	$("h2").css("background-color", "#14A83C").css("color", "#00ACEC");
	$("#J3").hide();
	$("#VanraureHachinohe").show();
	$("#input_Location").show();

	$("#VanraureHachinohe").addClass("Selection");

}

/* いわてグルージャ盛岡 */
function IwateGrullaMorioka() {
	remove();

	$("h2").css("background-color", "white").css("color", "#CF000E");
	$("#J3").hide();
	$("#IwateGrullaMorioka").show();
	$("#IwaginStadium").show();
	$("#input_Location").show();

	$("#IwateGrullaMorioka").addClass("Selection");
	$("#IwateGrullaMorioka p").eq(0).addClass("Selected");
}

// いわぎんスタジアム
function IwaginStadium() {
	$("#IwaginStadium").show();
	$("#Kitakami").hide();
	$("#IwateGrullaMorioka p").eq(0).addClass("Selected");
	$("#IwateGrullaMorioka p").eq(1).removeClass("Selected");
	$("#Route").hide();
}

// ウエスタンデジタルスタジアムきたかみ
function Kitakami() {
	$("#IwaginStadium").hide();
	$("#Kitakami").show();
	$("#IwateGrullaMorioka p").eq(0).removeClass("Selected");
	$("#IwateGrullaMorioka p").eq(1).addClass("Selected");
	$("#Route").hide();
}

/* 福島ユナイテッドFC */
function FukushimaUnitedFC() {
	remove();

	$("h2").css("background-color", "#E60012").css("color", "white");
	$("#J3").hide();
	$("#FukushimaUnitedFC").show();
	$("#TouhouMinnanoStadium").show();
	$("#input_Location").show();

	$("#FukushimaUnitedFC").addClass("Selection");
	$("#FukushimaUnitedFC p").eq(0).addClass("Selected");
}

// とうほう・みんなのスタジアム
function TouhouMinnanoStadium() {
	$("#TouhouMinnanoStadium").show();
	$("#AizuStadium").hide();
	$("#FukushimaUnitedFC p").eq(0).addClass("Selected");
	$("#FukushimaUnitedFC p").eq(1).removeClass("Selected");
	$("#Route").hide();
}

// 会津総合運動公園あいづ陸上競技場
function AizuStadium() {
	$("#TouhouMinnanoStadium").hide();
	$("#AizuStadium").show();
	$("#FukushimaUnitedFC p").eq(0).removeClass("Selected");
	$("#FukushimaUnitedFC p").eq(1).addClass("Selected");
	$("#Route").hide();
}

/* 大宮アルディージャ */
function OmiyaArdija() {
	remove();

	$("h2").css("background-color", "#ED6C00").css("color", "#004077");
	$("#J3").hide();
	$("#OmiyaArdija").show();
	$("#input_Location").show();

	$("#OmiyaArdija").addClass("Selection");
}

/* Y.S.C.C.横浜 */
function YSCCYokohama() {
	remove();

	$("h2").css("background-color", "#005BAC").css("color", "white");
	$("#J3").hide();
	$("#YSCCYokohama").show();
	$("#input_Location").show();

	$("#YSCCYokohama").addClass("Selection");
}

/* SC相模原 */
function SCSagamihara() {
	remove();

	$("h2").css("background-color", "#1C6969").css("color", "white");
	$("#J3").hide();
	$("#SCSagamihara").show();
	$("#input_Location").show();

	$("#SCSagamihara").addClass("Selection");
}

/* 松本山雅FC */
function MatsumotoYamagaFC() {
	remove();

	$("h2").css("background-color", "#008136").css("color", "white");
	$("#J3").hide();
	$("#MatsumotoYamagaFC").show();
	$("#input_Location").show();

	$("#MatsumotoYamagaFC").addClass("Selection");
}

/* AC長野パルセイロ */
function ACNaganoParceiro() {
	remove();

	$("h2").css("background-color", "#F39F39").css("color", "#17205C");
	$("#J3").hide();
	$("#ACNaganoParceiro").show();
	$("#input_Location").show();

	$("#ACNaganoParceiro").addClass("Selection");
}

/* カターレ富山 */
function KatallerToyama() {
	remove();

	$("h2").css("background-color", "#0D277E").css("color", "#9C0339");
	$("#J3").hide();
	$("#KatallerToyama").show();
	$("#input_Location").show();

	$("#KatallerToyama").addClass("Selection");
}

/* ツエーゲン金沢 */
function ZweigenKanazawa() {
	remove();

	$("h2").css("background-color", "#AB0F1B").css("color", "#231815");
	$("#J3").hide();
	$("#ZweigenKanazawa").show();
	$("#input_Location").show();

	$("#ZweigenKanazawa").addClass("Selection");
}

/* アスルクラロ沼津 */
function AzulClaroNumazu() {
	remove();

	$("h2").css("background-color", "#00A0E9").css("color", "white");
	$("#J3").hide();
	$("#AzulClaroNumazu").show();
	$("#input_Location").show();

	$("#AzulClaroNumazu").addClass("Selection");
}

/* FC岐阜 */
function FCGifu() {
	remove();

	$("h2").css("background-color", "#00633C").css("color", "white");
	$("#J3").hide();
	$("#FCGifu").show();
	$("#input_Location").show();

	$("#FCGifu").addClass("Selection");
}

/* FC大阪 */
function FCOsaka() {
	remove();

	$("h2").css("background-color", "#7FCAF1").css("color", "white");
	$("#J3").hide();
	$("#FCOsaka").show();
	$("#input_Location").show();

	$("#FCOsaka").addClass("Selection");
}

/* 奈良クラブ */
function NaraClub() {
	remove();

	$("h2").css("background-color", "#011D64").css("color", "#910004");
	$("#J3").hide();
	$("#NaraClub").show();
	$("#input_Location").show();

	$("#NaraClub").addClass("Selection");
}

/* ガイナーレ鳥取 */
function GainareTottori() {
	remove();

	$("h2").css("background-color", "#6EBA3D").css("color", "#003559");
	$("#J3").hide();
	$("#GainareTottori").show();
	$("#AxisStadium").show();
	$("#input_Location").show();

	$("#GainareTottori").addClass("Selection");
	$("#GainareTottori p").eq(0).addClass("Selected");
}

// Axisバードスタジアム
function AxisStadium() {
	$("#AxisStadium").show();
	$("#YajinStadium").hide();
	$("#GainareTottori p").eq(0).addClass("Selected");
	$("#GainareTottori p").eq(1).removeClass("Selected");

	$("#Route").hide();
}

// オールガイナーレYAJINスタジアム
function YajinStadium() {
	$("#AxisStadium").hide();
	$("#YajinStadium").show();
	$("#GainareTottori p").eq(0).removeClass("Selected");
	$("#GainareTottori p").eq(1).addClass("Selected");

	$("#Route").hide();
}

/* カマタマーレ讃岐 */
function KamatamareSanuki() {
	remove();

	$("h2").css("background-color", "#65AADD").css("color", "white");
	$("#J3").hide();
	$("#KamatamareSanuki").show();
	$("#input_Location").show();

	$("#KamatamareSanuki").addClass("Selection");
}

/* FC今治 */
function FCImabari() {
	remove();

	$("h2").css("background-color", "#163669").css("color", "white");
	$("#J3").hide();
	$("#FCImabari").show();
	$("#input_Location").show();

	$("#FCImabari").addClass("Selection");
}

/* ギラヴァンツ北九州 */
function GiravanzKitakyushu() {
	remove();

	$("h2").css("background-color", "#F7E900").css("color", "#DF0011");
	$("#J3").hide();
	$("#GiravanzKitakyushu").show();
	$("#input_Location").show();

	$("#GiravanzKitakyushu").addClass("Selection");
}

/* テゲバジャーロ宮崎 */
function TegevajaroMiyazaki() {
	remove();

	$("h2").css("background-color", "white").css("color", "#E12A75");
	$("#J3").hide();
	$("#TegevajaroMiyazaki").show();
	$("#input_Location").show();

	$("#TegevajaroMiyazaki").addClass("Selection");
}

/* FC琉球 */
function FCRyukyu() {
	remove();

	$("h2").css("background-color", "#8A0730").css("color", "#DECA7B");
	$("#J3").hide();
	$("#FCRyukyu").show();
	$("#input_Location").show();

	$("#FCRyukyu").addClass("Selection");
}

/* 国立競技場 */
function NationalStadium() {
	$("#JLeague div").hide();
	$(".Selection" || ".Selected").hide();
	$("#WE").hide();
	$("#NPB div").hide();

	remove();

	$("h2").css("background-color", "blue").css("color", "#E95599");
	$("#NationalStadium").show();
	$("#input_Location").show();

	$("#NationalStadium").addClass("Selection");
}