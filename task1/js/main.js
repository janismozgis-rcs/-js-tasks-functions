function reverseNumber(number) {
    const string = number.toString();

    return string.split('').reverse().join('');
}

console.log(reverseNumber(12345));