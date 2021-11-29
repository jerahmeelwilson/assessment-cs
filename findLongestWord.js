function findLongestWord(arr){
    let max = 0;
    for(let i =0; i<arr.length;i++){
        if(arr[i].length > max){
            max = arr[i].length;
        }
    }
    return max;
}

//Time complexity is O(n). We need to loop through the arr so time dependent on size of the array;

//space complexity is O(1).

console.log(findLongestWord(["hi", "hello"]))

console.log(findLongestWord(["hi", "hello",'bye','alphabet']))