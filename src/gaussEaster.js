"use strict"

console.log("Enter year: ")
let y = 2001;

function guassEasterSunday(y) {
    let a  = Math.floor(y % 19);
    let b = Math.floor(y / 100);
    let c = Math.floor(y % 100);
    let d = Math.floor(b / 4);
    let e = Math.floor(b % 4);
    let g = Math.floor((8 * b + 13)/25);
    let h = Math.floor((19 * a + b - d - g + 15) % 30);
    let j = Math.floor(c / 4);
    let k = Math.floor(c % 4);
    let m = Math.floor((a + 11 * h) / 319);
    let r = Math.floor((2 * e + 2 * j - k - h + m + 32) % 7);
    let n = Math.floor((h - m + r + 90) / 25);
    let p = Math.floor((h - m + r + n + 19) % 32);
    n = Math.round(n)
    p = Math.round(p)

    let result = "In " + y + " Easter Sunday is on month " + n + " and day " + p;
    return result;
}

console.log(guassEasterSunday(2001));