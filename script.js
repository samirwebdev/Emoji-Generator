const url =
	"https://emoji-api.com/emojis?access_key=307afbaa4544c6f35098b36ba0907c9edeb3f0f5";
const emoji = document.querySelector("#emoji");
const name = document.querySelector("#name");
const btn = document.querySelector("#btn");
const falls = document.querySelectorAll(".fall");
const loadEmoji = async () => {
	try {
		let res = await fetch(url);
		let data = await res.json();
		data = JSON.stringify(data);
		localStorage.setItem("Emojis", data);
		name.innerText = "Go on buddy! Everything is Ready.";
	} catch (e) {
		name.innerText = "Something went wrong! Please try again.";
	}
};
const showEmoji = () => {
	if (!localStorage.getItem("Emojis")) {
		loadEmoji();
	}
	name.innerText = "Loading...";
	let n = Math.floor(Math.random() * 1859);
	let = emojiArray = localStorage.getItem("Emojis");
	emojiArray = JSON.parse(emojiArray);
	emoji.innerText = emojiArray[n].character;
	name.innerText = emojiArray[n].unicodeName;
};

if (!localStorage.getItem("Emojis")) {
	document.addEventListener("DOMContentLoaded", loadEmoji);
} else {
  emoji.innerText = "👌";
	name.innerText = "Go on buddy! Everything is Ready.";
}
btn.addEventListener("click", showEmoji);

const falling = () => {
	try {
		let emojiArray = localStorage.getItem("Emojis");
		emojiArray = JSON.parse(emojiArray);
		falls.forEach(fall => {
			let n = Math.floor(Math.random() * 1859);
			let r = Math.floor(Math.random() * 80);
			let v = Math.floor(Math.random() * 30);
			fall.innerText = emojiArray[n].character;
			fall.style.left = r + "vw";
			fall.style.top = "-" + v + "vh";
		});
	} catch (e) {
		console.log(e);
		setTimeout(falling, 4000);
	}
};
falling();
setInterval(falling, 6000);
