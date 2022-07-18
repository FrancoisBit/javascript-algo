function captitalize(word) {
    
    let wordCapitalized = word.toLowerCase()
    wordCapitalized = wordCapitalized.charAt(0).toUpperCase() + wordCapitalized.slice(1);
    return wordCapitalized;
}

function lastLetter(word) {
    
    const lastLetter = word.charAt(word.length - 1)
    return lastLetter;
}

function RunFizzBuzz() {
    const answer = parseInt(prompt("Enter a number"));

    for(let i = 1; i <= answer; i++) {

        if(i % 15 === 0) {
            console.log("FIZZBUZZ");
        }

        else if(i % 3 === 0) {
            console.log("FIZZ");
        }

        else if(i % 5 === 0) {
            console.log("BUZZ");
        }

        else {
            console.log(i);
        }
    }
}


const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const redText = document.createElement('p');
redText.textContent = 'Hey! I m red!';
redText.style.color = "red";
container.appendChild(redText);

const blueTextH3 = document.createElement('h3');
blueTextH3.textContent = 'Hey! I m blue!';
blueTextH3.style.color = "blue";
container.appendChild(blueTextH3);

const contentPinkBack = document.createElement('div');
contentPinkBack.style.backgroundColor = "pink"
contentPinkBack.style.border = "2px solid black";
contentPinkBack.textContent = 'Hey! I m blue!';

const TextH1 = document.createElement('h1');
TextH1.textContent = 'I m in a div!';
contentPinkBack.appendChild(TextH1);

const pMeToo = document.createElement('p');
pMeToo.textContent = 'Me too!';
contentPinkBack.appendChild(pMeToo);

container.appendChild(contentPinkBack);

function alertFunction (e) {
    console.log(e);
    e.target.style.background = 'blue';
    alert("Hello Worlddd");
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', alertFunction);