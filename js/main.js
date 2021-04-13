const url = 'list.json';
let list;

const lettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const lettersCount = 5;
let randomLetters = [];

const selectBlock = document.getElementById('letterSelect');
const namesListBlock = document.getElementById('namesList');

fetch(url)
	.then(response => response.json())
	.then(data => setList(data));

for (let i = 0; i < lettersCount; i++) {

	let letter = lettersArr.splice(randNum(0, lettersArr.length-1), 1);
	randomLetters.push(letter[0]);

}

renderSelect(randomLetters);

selectBlock.onchange = function(event) {
	renderList(event.target.value)
}

function renderList(letter) {
	namesListBlock.innerHTML = '';

	let filteredList = list.filter(item => {
		return letter === item[0];
	});

	if (filteredList.length === 0) {
		namesListBlock.append('No matches result!');
		return;
	}

	for (let i = 0; i < filteredList.length; i++) {
		let person = document.createElement('li');
		person.innerHTML = filteredList[i];
		namesListBlock.append(person);
	}

}

function setList(data) {
	list = data.map(item => item.name);
}

function renderSelect(arr) {

	for (let i = 0; i < randomLetters.length; i++) {
		let option = document.createElement('option');
		option.innerHTML = randomLetters[i];
		selectBlock.append(option);
	}

}

function randNum(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

