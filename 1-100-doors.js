function getFinalOpenedDoors(numDoors) {
  let doors = [];
  let ii = 1;
  for (let i = 1;ii<=numDoors;) {
    doors.push(ii);
    i++;
    ii = i*i;
  }
  return doors;
}

console.log(getFinalOpenedDoors(100));