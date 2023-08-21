const text =
	"スズキ エブリイワゴン DA64W | Arakawa Laboratory https://arkw.work/da64w/";

function copy() {
	navigator.clipboard.writeText(text).then(
		() => {
			alert("サイト名とURLをクリップボードにコピーしました。");
		},
		() => {
			alert("クリップボードへのコピーに失敗しました。");
		},
	);
}
