function isPangram(phrase){
    let aplhabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for(let i = 0; i < aplhabet.length; i++){       //26
        if(!phrase.includes(aplhabet[i])){          //n
            return false;
        }
    }
    return true;
}

//The time complexity is O(n), for every letter in aplhabet we check if that letter is included in the string. To do that we need to possibly look at every character in the string for a match. Time to complete is dependent upon length of string.

//Space complexity is O(1). We create space for an aplhabet array time but we are not adding anything to it so it is always of size 26. 


console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));