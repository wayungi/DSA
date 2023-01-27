var minSubArrayLen = function(target, nums) {
    let minLength = Number.MAX_VALUE;
    let sum = 0;
    let tail = 0;

    for(let head = 0; head < nums.length; head++) {
        sum += nums[head];
        while (sum >= target) {
            minLength = Math.min(minLength, (head-tail) + 1)
            sum -= nums[tail]
            tail++
        }
    }
    return minLength == Number.MAX_VALUE ? 0 : minLength;
};

const target = 7, nums = [2,3,1,2,4,3]
const t = 11, n = [1,1,1,1,1,1,1,1]
const ta = 4, nu = [1,4,4]
console.log(minSubArrayLen(target, nums))
