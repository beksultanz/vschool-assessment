let array = [
	"Kyrgyzstan",
	"Central Asia",
	6,
	"capital",
	"food and adventures",
	"soon"
];

document.querySelector(".button").addEventListener("click", displayMyInfo);

function displayMyInfo() {
	for (let i = 0; i < array.length; i = i + 1) {
		const ele = array[i];
		if (ele === "Kyrgyzstan") {
			console.log(`Kanday, Welcome to ${ele}!`);
		} else if (ele === "Central Asia") {
			console.log(`Kyrgyzstan is located in ${ele}`);
		} else if (ele === 6) {
			console.log(`The population of the country is ${ele} million`);
		} else if (ele === "capital") {
			console.log(`Bishkek is the ${ele} city`);
		} else if (ele === "food and adventures") {
			console.log(`In Kyrgyzstan, you can find tons of delicious ${ele}`);
		} else {
			console.log(`See you ${ele} there 🤓`);
		}
	}
}
