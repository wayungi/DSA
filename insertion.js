const arr = [8,3,5,2,6,4,1]


const insertion = (arr) => {

    for(let i = 1; i < arr.length; i++) {
        let j = i-1
        let curr = arr[i];
        while( j >= 0 && arr[j] > curr){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = curr;
    }

    return arr;

};

console.log(arr);
console.log(insertion(arr));
