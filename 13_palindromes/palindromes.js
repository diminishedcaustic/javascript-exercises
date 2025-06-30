const palindromes = function (word) {
    word = word.toLowerCase().replace(/[\s\!\,\.]/g,"");

    let new_word = word.split("").reverse().join("");

    if(new_word === word) {
        return true;
    }

    return false;
}
// Do not edit below this line
module.exports = palindromes;
