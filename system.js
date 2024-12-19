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
	var Clubname = $(".Selection").attr("id");

	if ($(".Selected").length)
		var Stadium = $("p.Selected").text();
	else
		var Stadium = $("#" + Clubname + " p").text();

	return Stadium;
}

/* 削除 */
function remove() {
	$(".Selection").removeClass("Selection");
	$(".Selected").removeClass("Selected");
	$("#Location").val("");
	$("#Route").hide();
}