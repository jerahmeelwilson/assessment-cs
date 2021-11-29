function addToZero(array){
    for(let i = 0; i<array.length; i++){          //n
        for(let j = i+1; j<array.length;j++){       //n
            if(array[i] + array[j] === 0){
                return true;
            }
        }
    }
    return false;
}

//The time complexity is O(n^2). The first loop is O(n) but due the second looping being nested, it becomes O(n*n) or O(n^2)

//The space complexity is O(1).


console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

