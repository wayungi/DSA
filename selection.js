const arr = [1,7,8,3,0,9,7]

const selection = arr => {

    for (let i = 0; i < arr.length-1; i++) {

        let minIndex = i;

        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }


    }

    return arr;
}

console.log(selection(arr))

