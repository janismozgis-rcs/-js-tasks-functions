function getIdentityMatrixAsString(number) {
    let output = '';
    for (let row = 0; row < number; row++) {
        let rowString = '';
        for (let col = 0; col < number; col++) {
            if (col === row) {
                rowString += '1  ';
            } else {
                rowString += '0  ';
            }
        }            
        output += `${rowString}\n`;
    }

    return output;
}

console.log(getIdentityMatrixAsString(1));
console.log(getIdentityMatrixAsString(10));

function getIdentityMatrixAsArray(number) {
    let outputArray = [];
    for (let row = 0; row < number; row++) {
        let rowArray = [];
        for (let col = 0; col < number; col++) {
            if (col === row) {
                rowArray.push(1);
            } else {
                rowArray.push(0);
            }
        }            
        outputArray.push(rowArray);
    }

    return outputArray;
}
console.log(getIdentityMatrixAsArray(1));
console.log(getIdentityMatrixAsArray(10));