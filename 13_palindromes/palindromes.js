const palindromes = function (word) {
    let new_word = "";
    
    word = word.toLowerCase().replace(/[\s\!\,\.]/g,"");

    for(let i = word.length-1; i>=0 ; i--){
        new_word = new_word.concat(word[i]);
    }

    if(new_word == word) {
        return true;
    }

    return false;
}
// Do not edit below this line
module.exports = palindromes;
