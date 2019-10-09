function a() {
    console.log("a");
}

function b(callback) {
    setTimeout(() => {
        console.log("b");
        callback()
        // setTimeout(()=>{
        //     console.log("c");
        //     setTimeout(()=>{
        //         console.log("d");
        //     },1000)
        // },1000)
    }, 1000)
}
b(a);
// 单个异步时，可使用回调按需求设置顺序