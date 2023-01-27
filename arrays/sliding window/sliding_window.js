// find  the max sum subarray of a fixed size k

const arr = [4,2,1,7,8,1,2,8,1,0]

const maxSumSubarry = (arr, k) => {
    let maxValue = Number.MIN_VALUE;
    let currentMaxSum = 0;
    for(let i = 0; i < arr.length; i++){
        currentMaxSum += arr[i]
        if(i >= (k-1)){
            maxValue = Math.max(maxValue, currentMaxSum)
            currentMaxSum -= arr[i-(k-1)]
        }
    }
    return maxValue;
};


// dynamic variant: Smallest subarray with sum >= 8

// [4,2,1,7,8,1,2,8,1,0]
const smallestSubarray = (arr, targetSum) => {
    let windowSize = Number.MAX_VALUE
    let windowStart = 0;
    let windowEnd = 0;
    let windowSum = 0

    for(windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]
        while(windowSum >= targetSum){
            windowSize = Math.min(windowSize, (windowEnd-windowStart)+1)
            windowSum -= arr[windowStart]
            windowStart++
        }
    }
    return windowSize
}

//Longest substring length with k distinct characters

// [4,2,1,7,8,1,2,8,1,0]

const longestSub = (arr, k) => {
    let windStart = 0;
    let windowEnd = 0;
    let lngstString = Number.MIN_VALUE
    let currLength = 0

    for(windEnd; windEnd < arr.length; windEnd++) {
        currLength ++

    }

}

//console.log(longestSub(arr, 2))

//Given a string s, find the length of the longest substring without repeating characters.
const lengthOfLongestSubstring = (s) => {
    let start = 0;
    let end = 0;
    let maxLength =  Number.MIN_VALUE
    
    for(end; end < s.length; end++) {
        if(s.substring(start, end).includes(s[end])) {
            while(s.substring(start, end).includes(s[end])) {
                maxLength = Math.max(maxLength, end - start)
                console.log(`${start}, ${end}`)
                start++
            }
        }
    }
    return Math.max(maxLength, end-start)
};

// s = "abcabcbb"

