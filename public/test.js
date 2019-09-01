let pathToRegExp = require('path-to-regexp')

let reg =  pathToRegExp('/home',[],{end: false})
console.log(reg)
console.log(reg.test('/home/1/1/2/3'))

// 执行方式：cd 到当前目录，执行 node test.js
