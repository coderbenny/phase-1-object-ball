// console.log('Simple debugging example running.')
// debugger
// let x = 99
// debugger
// console.log(x)


let oo = { foo: 42, bar: 83, "key w/ spaces": true };
// console.log(oo["key w/ spaces"])
for (let key in oo){
    let value = oo[key];
    console.log("key:", key, "value:", value)
}

