function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("a");
            resolve();
        },1000)
    })
}

function b(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("b");
            resolve();
        },2000)
    })
}

function c(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("c");
            resolve();
        },500)
    })
}
console.log(0);
;;;(async()=>{
    await b();
    await a();
    await c();
})();
console.log(1);
// 多个异步任务相互嵌套时可使用Promise，可使用async按需求排序
