function sumOfTripledEvens(array) {
    return array
    .filter(isEven)
    .map((num) => 
        num * 3)
    .reduce((total,current) => 
        total + current
);
}

function isEven(num) {
    return num % 2 === 0;
}

console.log(sumOfTripledEvens([1,2,1,4,2,2,2,2,2]));