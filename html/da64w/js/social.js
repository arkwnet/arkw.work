const list = [
	{
		href: "https://twitter.com/share?url=https://arkw.work/da64w/&text=%E3%82%B9%E3%82%BA%E3%82%AD+%E3%82%A8%E3%83%96%E3%83%AA%E3%82%A4%E3%83%AF%E3%82%B4%E3%83%B3+DA64W+%7C+Arakawa+Laboratory",
		color: "#212121",
		src: "img/social/x.svg",
	},
	{
		href: "https://www.facebook.com/sharer/sharer.php?u=https://arkw.work/da64w/",
		color: "#1877f2",
		src: "img/social/facebook.svg",
	},
	{
		href: "http://line.me/R/msg/text/?%E3%82%B9%E3%82%BA%E3%82%AD+%E3%82%A8%E3%83%96%E3%83%AA%E3%82%A4%E3%83%AF%E3%82%B4%E3%83%B3+DA64W+%7C+Arakawa+Laboratory%20https://arkw.work/da64w/",
		color: "#06c755",
		src: "img/social/line.svg",
	},
	{
		href: "https://b.hatena.ne.jp/entry/arkw.work/da64w/#bbutton",
		color: "#00a4de",
		src: "img/social/hatena.svg",
	},
	{
		href: "javascript:copy()",
		color: "#757575",
		src: "img/social/copy.svg",
	},
];

const text =
	"スズキ エブリイワゴン DA64W | Arakawa Laboratory https://arkw.work/da64w/";

function copy() {
	navigator.clipboard.writeText(text).then(
		() => {
			alert("サイト名とURLをクリップボードにコピーしました。");
		},
		() => {
			alert("クリップボードへのコピーに失敗しました。");
		}
	);
}

window.onload = function () {
	let footer = document.getElementsByTagName("footer")[0];
	let elementShare = document.createElement("div");
	elementShare.style.marginBottom = "20px";
	elementShare.style.overflow = "hidden";
	let elementHeading = document.createElement("h1");
	elementHeading.innerText = "SNSでこのページをシェア";
	elementHeading.style.marginTop = "0";
	elementHeading.style.marginBottom = "8px";
	elementHeading.style.padding = "0";
	elementHeading.style.fontSize = "12px";
	elementHeading.style.color = "#9e9e9e";
	elementHeading.style.border = "0";
	elementShare.prepend(elementHeading);
	for (let i = 0; i < list.length; i++) {
		let elementLink = document.createElement("a");
		elementLink.href = list[i].href;
		elementLink.style.width = "40px";
		let elementDiv = document.createElement("div");
		elementDiv.style.width = "40px";
		elementDiv.style.height = "40px";
		elementDiv.style.marginRight = "5px";
		elementDiv.style.fontSize = "14px";
		elementDiv.style.textAlign = "center";
		elementDiv.style.float = "left";
		elementDiv.style.boxSizing = "border-box";
		elementDiv.style.backgroundColor = list[i].color;
		let elementImage = document.createElement("img");
		elementImage.style.height = "20px";
		elementImage.style.padding = "10px 0";
		elementImage.src = list[i].src;
		elementDiv.appendChild(elementImage);
		elementLink.appendChild(elementDiv);
		elementShare.appendChild(elementLink);
	}
	footer.prepend(elementShare);
};
