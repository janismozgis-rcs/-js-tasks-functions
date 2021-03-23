function getNumbers(numbersArray) {
    numbersArray = numbersArray.sort();
    const numbersArrayLength = numbersArray.length;

    if (numbersArrayLength === 0) {
        return '';
    }
    if (numbersArrayLength === 1) {
        return numbersArray[0];
    }
    const secondSmallestNumber = numbersArray[1];
    const secondLargestNubmer = numbersArray[numbersArrayLength - 2];

    return `${secondSmallestNumber},${secondLargestNubmer}`;
}

console.log(getNumbers([]));
console.log(getNumbers([5]));
console.log(getNumbers([1,2,3,4,5]));
console.log(getNumbers([1,2,3,4,5,6,3,4,5,7,2,4,5,1,5,4,7,3,9]));