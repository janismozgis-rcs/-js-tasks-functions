function findLongersWord(phrase) {
    const wordsArray = phrase.split(' ');
    let longestWord = '';
    for (let word of wordsArray) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongersWord('nurses run'));
console.log(findLongersWord('the quick brown fox'));
console.log(findLongersWord('Web Development Tutorial'));