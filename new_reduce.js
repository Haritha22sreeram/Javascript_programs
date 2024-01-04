function new_reduce(arr, func, initialValue){
    let result = initialValue
    for(let i = 0; i < arr.length; i++){
        result = func(result, arr[i])
    }
    return result
}
function accumulator(initialResult, currentItem){
    return initialResult + currentItem
}

let a = [12, 7, 90, 42, 38]
a = new_reduce(a, accumulator, 0)
console.log(a)