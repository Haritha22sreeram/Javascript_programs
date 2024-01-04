function new_forEach(arr, func){
    for(let i = 0; i < arr.length; i++){
        func(arr[i])
    }
}
function add5AndPrint(x){
    console.log(5 + x);
}

let a = [56, 23, 12, 10, 9]
new_forEach(a, add5AndPrint)