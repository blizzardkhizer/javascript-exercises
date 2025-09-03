function getAge (birth, death) {
    if (!(death)) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        return oldestAge < currentAge ? current : oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
