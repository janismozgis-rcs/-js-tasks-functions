function isPrimeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrimeNumber(6));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(81));