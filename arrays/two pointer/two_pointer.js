const sortColors = (nums) =>  {
    let sorted_ptr = 0;
    let search_ptr = 0
    for(let i = 0; i < new Set(nums).size; i++){
        const color  = i
        search_ptr = sorted_ptr
        const n  = nums.length
        while(search_ptr < n) {
            if(nums[sorted_ptr] == i){
                sorted_ptr++
                search_ptr++
            }else{
                search_ptr++
                if(nums[search_ptr] == i) {
                    [nums[sorted_ptr], nums[search_ptr]] = [nums[search_ptr], nums[sorted_ptr]]
                    sorted_ptr++
                }
            }
        }
    }
    return nums    
};

const nums = [2,0,2,1,1,0]
console.log(sortColors(nums));