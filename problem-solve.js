
function rotateLeft(arr, d) {

    let n = arr.length;
    d = d%n ;
    for (let j = 0; j < d; j++) {
        let firstItem = arr.shift();
        arr.push(firstItem);
    }

    return arr;
}


let arr = [1,2,3,4,5];
let d = 4;
const test = rotateLeft(arr, d);
console.log(test)