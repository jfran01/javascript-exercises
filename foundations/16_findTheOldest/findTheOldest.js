const getAge = function (birth, death) {
  if (!death) {
    return new Date().getFullYear() - birth;
  } else return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    if (
      getAge(current.yearOfBirth, current.yearOfDeath) >
      getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    )
      return current;
    return oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
