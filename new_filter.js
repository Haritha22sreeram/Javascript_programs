function new_filter(arr, func){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}
function isGreaterThan10(x){
    return x > 10;
}

let a = [3, 7, 16, 50, 34]
a = new_filter(a, isGreaterThan10)
console.log(a)