function awatData1(a) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve(a)
        },1000)
    })
}
function awatData2(a) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve(a+1)
        },1000)
    })
}
function awatData3(a) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve(a+2)
        },1000)
    })
}
(async ()=> {
   var a= await awatData1(1)
    var b= await awatData2(1)
    console.log(b)
    var c=  await awatData3(1)
    console.log(a,b,c)

})()