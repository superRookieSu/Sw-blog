
const str = "abcdefg12312*!@#$%^&()_+-=";
const reg = new RegExp("[a-z+0-9+]", "g");
// const arr = reg.exec(str);
// console.log(arr);
console.log(str.replace(/[a-z0-9&]+/, ''));