const fibonacci = function(n) {
    
    n = Number(n);

    if(n<0){
        return 'OOPS';
    }

    // base case
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }

    // recursive case
    return fibonacci(n-1) + fibonacci(n-2)
};

// Do not edit below this line
module.exports = fibonacci;
