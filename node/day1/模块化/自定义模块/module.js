const module2 = require('./module2.js');
const fn = require('./fn.js');
console.log(1);
module2();
console.log(fn.arr);
// require为导入，并使用变量名接收，若是函数需调用