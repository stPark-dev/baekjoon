let fs = require('fs')
let input = fs.readFileSync(__dirname+'/test.txt').toString().split(' ');

let h = Number(input[0])
let m = Number(input[1])
m -= 45
if(m < 0) {
    m += 60
    h--
}
if(h < 0) {
    h = 23
}
console.info(h + ' ' + m)