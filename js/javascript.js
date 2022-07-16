function captitalize(word) {
    
    let wordCapitalized = word.toLowerCase()
    wordCapitalized = wordCapitalized.charAt(0).toUpperCase() + wordCapitalized.slice(1);
    return wordCapitalized;
}

function lastLetter(word) {
    
    const lastLetter = word.charAt(word.length - 1)
    return lastLetter;
}

/*const result = lastLetter("Tomorrowland");
console.log(result);*/

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