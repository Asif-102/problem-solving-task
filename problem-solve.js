let arr = [];

function rotateLeft(n, d) {

    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    for (let j = 0; j < d; j++) {
        let firstItem = arr.shift();
        arr.push(firstItem);
    }

    return arr;
}

const test = rotateLeft(5, 4);

console.log(test)