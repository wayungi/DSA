const arr = [8,3,5,2,6,4,1]

//  [2,3,8,5,6,4,1]


const insertion = arr => {

   for( let i = 1; i < arr.length; i++ ){
    let j = i-1;
    let curr = arr[i];

    while (arr[j] > curr && j >= 0){
        arr[j+1] = arr[j];
        j--;
    }

    arr[j+1] = curr;

   }


    return arr;
}