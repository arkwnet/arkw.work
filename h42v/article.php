<?php
	$header = file_get_contents("header.html");
	$footer = file_get_contents("footer.html");
	$id = $_GET["id"];
	if (!file_exists("article/".$id.".html")) {
		$id = "404";
	}
	$main = file_get_contents("article/".$id.".html");
	$main = explode("\n", $main);
	$cnt = count($main);
	$title = $main[0];
	$header = str_replace("[PageTitle]", $title . " - 三菱 ミニカ H42V | Arakawa Laboratory", $header);
	$date[0] = intval(substr($id, 0, 4));
	$date[1] = intval(substr($id, 4, 2));
	$date[2] = intval(substr($id, 6, 2));
	$main[0] = "";
?>

<?php echo $header; ?>
<p><a href="index.html">トップページ</a> &gt;</p>
<h4><?php echo $title; ?></h4>
<p>
	<?php
		if ($id != "404") {
			echo $date[0]."年".$date[1]."月".$date[2]."日";
		}
	?>
</p><br>
<?php
	for ($i = 0; $i < $cnt; $i++ ) {
		echo($main[$i]);
	}
?>
<?php echo $footer; ?>
