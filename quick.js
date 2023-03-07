const arr = [9,5,3,6,4];

const pivot = (nums) => {
    let p = nums.length-1;
    let l = 0;
    let i = l-1;

    while(l < p){
        if(nums[l] < nums[p]){
            i++;
            [nums[i], nums[l]]=[nums[l], nums[i]];
            l++;
        }else{
            l++
        }
    }
    i++;
    [nums[i], nums[p]] = [nums[p], nums[i]];
    return i;

}

const quick = (arr, l = 0, r = arr.length-1) => {
    if(l < r) {
        let p = pivot(arr);
        quick(arr, l, p-1)
        quick(arr, p+1, r)
    }
    return arr;
}

console.log(quick(arr));