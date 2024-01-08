function solve24 (numStr) {
  let myCallc = "";
  if ((numStr[2]-numStr[1]/numStr[3])*numStr[0] == 24) {
    myCallc = `(${numStr[2]}-${numStr[1]}/${numStr[3]})*${numStr[0]}`
  }
  if ((numStr[2]*numStr[0]*numStr[3])*numStr[1] == 24) {
    myCallc = `(${numStr[0]}*${numStr[1]}*${numStr[2]})*${numStr[3]}`
  }
  if ((numStr[0]*numStr[2])/(numStr[3]-numStr[1]) == 24) {
    myCallc = `(${numStr[0]}*${numStr[2]})/(${numStr[3]}-${numStr[1]})`;
  }
  if ((+numStr[1] + +numStr[3])*(+numStr[0] + +numStr[2]) == 24) {
    myCallc = `(${+numStr[1]}+${+numStr[3]})*(${+numStr[0]}+${+numStr[2]})`
  }
  return myCallc;
}

console.log(solve24("4878"));
console.log(solve24("1234"));
console.log(solve24("6789"));
console.log(solve24("1127"));
