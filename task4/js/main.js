function sortString(string) {
    return string.split('').sort().join('');
}

console.log(sortString('nurses run'));
console.log(sortString('Madam'));
console.log(sortString('foo'));
console.log(sortString('webmaster'));