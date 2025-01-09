/* 経路のURLを表示 */
function input() {
	var Location = $("#Location").val();

	var Stadium = Stadium_Name();

	if (Location == "")
		Location = "現在地";

	$("#Route").html('<a href="https://maps.google.com/maps?saddr=' + Location + '&daddr=' + Stadium + '&dirflg=r" target="_blank">' + '公共交通機関</a></li>'
		+ '<br><a href="https://maps.google.com/maps?saddr=' + Location + '&daddr=' + Stadium + '&dirflg=d" target="_blank"> ' + '車</a></li>');

	$("#Route").show();
}

/* スタジアム名を取得 */
function Stadium_Name() {
	var Clubname = $(".SelectClub").attr("id");

	if ($(".SelectStadium").length)
		var Stadium = $("p.SelectStadium").text();
	else
		var Stadium = $("#" + Clubname + " p").text();

	return Stadium;
}

/* クリア */
function Clear() {
	$(".SelectClub").hide();
	$(".SelectStadium").hide();

	$(".SelectClub").removeClass("SelectClub");
	$(".SelectStadium").removeClass("SelectStadium");
	$("#Location").val("");
	$("#Route").hide();

	$("#J1").hide();
	$("#J2").hide();
	$("#J3").hide();
	$("NationalStadium").hide();

	$("#CentralLeague").hide();
	$("#PacificLeague").hide();

	$("#B1").hide();
	$("#B2").hide();
}