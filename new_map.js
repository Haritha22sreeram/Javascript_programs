function new_map(arr, func){
    for(let i =0; i < arr.length; i++){
        arr[i] = func(arr[i])
    }
    return arr
}
function square(x){
    return x * x;
}

let a = [1, 2, 3, 4, 5]
a = new_map(a,square)
console.log(a)