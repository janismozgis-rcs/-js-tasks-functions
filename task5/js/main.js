function sortString(phrase) {
    let wordsArray = phrase.split(' ');
    for (let wordIndex in wordsArray) {
        const word = wordsArray[wordIndex];
        let lettersArray = word.split('');
        lettersArray[0] = lettersArray[0].toUpperCase(); 
        wordsArray[wordIndex] = lettersArray.join('');
    }
    return wordsArray.join(' ');
}

console.log(sortString('nurses run'));
console.log(sortString('the quick brown fox'));