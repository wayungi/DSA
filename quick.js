const arr = [9,5,3,6,4];

const pivot = () => {}

const quick = (arr, l = 0, r = arr.length-1) => {

    if(l != r) {
        let p = pivot();
        quick(arr, l, p-1)
        quick(arr, p+1, r)
    }

    return arr;

}