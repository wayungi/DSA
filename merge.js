const arr = [9,5,3,6,4];

const merge = (arri, arrj) => {
    let i = 0;
    let j = 0;
    const arr = [];
    
    while(i < arri.length && j < arrj.length){
        if(arri[i] < arrj[j]){
            arr.push(arri[i]);
            i++
        }else{
            arr.push(arrj[j]);
            j++
        }
    }

    while(i < arri.length){
        arr.push(arri[i]);
        i++
    }

    while(j < arrj.length){
        arr.push(arrj[j]);
        j++
    }

    return arr;

};

const quickSort = (arr) => {
    if(arr.length <= 1) return arr;
    let midPoint = Math.floor(arr.length/2);
    let left = quickSort(arr.slice(0, midPoint));
    let right = quickSort(arr.slice(midPoint));
    return merge(left, right);
};

console.log(quickSort(arr))
