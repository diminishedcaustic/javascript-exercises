const reverseString = function(word) {
    let new_word = ""

    for(i = (word.length - 1) ; i >= 0; i--){
        new_word = new_word + word[i];
    }

    return new_word
};

// Do not edit below this line
module.exports = reverseString;
