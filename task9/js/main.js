function getType(variable) {
    return typeof variable;
}

console.log(getType(1));
console.log(getType('foo'));
console.log(getType({}));
console.log(getType(function() {}));
console.log(getType(true));
let foo;
console.log(getType(foo));