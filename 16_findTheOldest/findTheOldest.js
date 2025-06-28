const findTheOldest = function(people) {
    let _max = 0;
    let oldest;
    let age;
    
    for(let i = 0; i < people.length; i++){
        age = getAge(people[i].yearOfBirth,people[i].yearOfDeath);
        if(age > _max) {
            _max = age;
            oldest = people[i];
        }
    }   

    return oldest;
};

const getAge = function(birthYear,deathYear) {
    if(!deathYear){
        deathYear = new Date().getFullYear()
    }
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
