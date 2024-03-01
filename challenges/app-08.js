function fullName(firstName,lastName){
    const fullName = `${firstName}${lastName}`;
    return fullName.toUpperCase();
}

console.log(fullName('Coy', 'C. Mcdonald'));

//or

function fullName2({firstName2, lastName2}) {
  const fullName2 = `${firstName2}${lastName2}`;
  return fullName2.toUpperCase();
}

console.log(fullName2({lastName2: "John",firstName2:"Key"}));