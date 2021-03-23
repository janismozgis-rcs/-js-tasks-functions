function isPalindrome(string) {
    const cleanedUpStirng = string.toLowerCase().replace(/ /g, '');

    return cleanedUpStirng.split('').reverse().join('') === cleanedUpStirng;
}

console.log(isPalindrome('nurses run'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('foo'));