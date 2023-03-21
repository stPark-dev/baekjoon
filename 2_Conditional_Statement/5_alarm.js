// 원래 설정되어 있는 알람 시간에서 45분 앞서는 시간을 구하는 프로그램을 작성해라
// 예시 : 10 10  -> 9 25

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

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