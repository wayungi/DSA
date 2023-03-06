const arr = [8,3,5,2,6,4,1]

const bubble = (arr) => {
    for (let i = 0; i < arr.length-i; i++) {
        console.log(`==== ${i} ====`);
        for (j = 0; j < arr.length-(i+1); j++) {
           if(arr[j] > [j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
           }
        }
    };
    return arr;
};

console.log(arr);
console.log(bubble(arr));
