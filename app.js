let array = [
	"Kyrgyzstan",
	"Central Asia",
	6,
	"capital",
	"food and adventures",
	"soon"
];

// It selects button and attaches a event('click). If somebody clicks the button, displayMyInfo function execute.
document.querySelector(".button").addEventListener("click", displayMyInfo);

// This function iterates the array, assigns (ele) variable to each element of array. And checks, if condition true, it inserts element of array into sentense(`` is template literals in es6) and passes that sentence into insertHtml function.
function displayMyInfo() {
	for (let i = 0; i < array.length; i++) {
		const ele = array[i];
		if (ele === "Kyrgyzstan") {
			insertHtml(`Kanday, Welcome to ${ele}!`);
		} else if (ele === "Central Asia") {
			insertHtml(`Kyrgyzstan is located in ${ele}`);
		} else if (ele === 6) {
			insertHtml(`The population of the country is ${ele} million`);
		} else if (ele === "capital") {
			insertHtml(`Bishkek is the ${ele} city`);
		} else if (ele === "food and adventures") {
			insertHtml(`In Kyrgyzstan, you can find tons of delicious ${ele}`);
		} else {
			insertHtml(`See you ${ele} there 🤓`);
		}
	}
}

// this function selects .intro-box__p div in index.html document and assigns it to introBoxP variable
// it creates p tag and assigns it to pTag variable
// it inserts text argument into p.
// then it gives class name to p. class name is about-me
// if you check style.css, you will find about-me class and its styles
// finally, it inserts p into .intro-box__p div in index.html
function insertHtml(text) {
	const introBoxP = document.querySelector(".intro-box__p");
	const pTag = document.createElement("p");
	pTag.textContent = text;
	pTag.setAttribute("class", "about-me");
	introBoxP.appendChild(pTag);
}
