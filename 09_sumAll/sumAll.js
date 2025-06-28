const sumAll = function(num_one,num_two) {
    let sum = 0;
    let min;
    let max;

    if((num_one < 0 || num_two < 0)||(num_one % 1 !== 0 || num_one % 1 !== 0)||(typeof num_one != 'number' || typeof num_two != 'number')){
        return 'ERROR';
    }

    if(num_one < num_two){
        min = num_one;
        max = num_two;
    }else{
        min = num_two;
        max = num_one;
    }

    for(let i = min; i <= max; i++){
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
