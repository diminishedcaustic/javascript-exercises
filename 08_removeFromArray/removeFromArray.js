const removeFromArray = function(array) {
    for(let i = 0; i < array.length; i++){
        for(j = 0; j < arguments.length; j++){
            if(array[i] === arguments[j]){
                 array.splice(i,1);
                 i--;
            }
        }
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
