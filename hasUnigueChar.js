function hasUniqueChars(word){
    for(let i = 0; i < word.length;i++){
        if(charMatch(word[i],word) > 1){    //n
            return false;
        }
    }
    return true;
}

//The time complexity is O(n) because we need to loop through every character in the string. The time to complete is dependent upon string length.

//Space complexity is O(1);

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
