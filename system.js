/* 経路のURLを表示 */
function input() {
	var Location = $("#Location").val();

	var stadium = set_stadium_name();

	if (Location == "")
		Location = "現在地";

	$("#List").html('<a href="https://maps.google.com/maps?saddr=' + Location + '&daddr=' + stadium + '&dirflg=r" target="_blank">' + '公共交通機関</a></li>'
		+ '<br><a href="https://maps.google.com/maps?saddr=' + Location + '&daddr=' + stadium + '&dirflg=d" target="_blank"> ' + '車</a></li>');

	$("#List").show();
}

/* スタジアム名を設定 */
function set_stadium_name() {
	var stadium = get_stadium_name();

	return stadium;
}

/* スタジアム名を取得 */
function get_stadium_name() {
	var clubname = $(".selection").attr("id");

	if ($('.selected').length)
		var stadium = $("p.selected").text();
	else
		var stadium = $("#" + clubname + " p").text();

	return stadium;
}

/* 削除 */
function remove() {
	$(".selection").removeClass("selection");
	$(".selected").removeClass("selected");
	$("#Location").val("");
	$("#List").hide();
}