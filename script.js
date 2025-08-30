const emoji = document.getElementById("emoji");
const name = document.getElementById("name");
const url =
	"https://emoji-api.com/emojis?access_key=307afbaa4544c6f35098b36ba0907c9edeb3f0f5";
const btn = document.getElementById("btn");
let fall = document.querySelector(".fall");

const storeData = data => {
	data = JSON.stringify(data);
	localStorage.setItem("Emoji", data);
};

const getData = async () => {
	try {
		let res = await fetch(url);
		let data = await res.json();
		storeData(data);
	} catch (e) {
		alert("Something went wrong! Please refresh the page!");
	}
};
const showData = (eData, nData) => {
	emoji.innerText = eData;
	name.innerText = nData;
};
const retriveData = () => {
	if (localStorage.getItem("Emoji")) {
		let data = localStorage.getItem("Emoji");
		data = JSON.parse(data);
		return data;
	}
};
const main = () => {
	let data = retriveData();
	let num = Math.floor(Math.random() * 1859);
	showData(data[num].character, data[num].unicodeName);
};
const falling = () => {
	let num = Math.floor(Math.random() * 1859);
	let data = retriveData();
	let r = Math.floor(Math.random() * 80);
	fall.innerText = data[num].character;
	fall.style.left = r + "vw";
};
falling();
setInterval(falling, 5000);
btn.addEventListener("click", main);
