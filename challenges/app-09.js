
const updatedStudents = students.map(function(orange){
    //console.log(orange.name);
    orange.role = 'student'
    return orange;
});

//console.log(updatedStudents);

const highScores = students.filter(function(student) {
   // if (student.score >= 80) { // opção 1 de solução, abaixo fizemos outra possibilidade com mesmo resultado
    //    return student;
    //}
    //if (student.score >=80) return student; // aqui opção 2 de resolução
    return student.score >= 80; // aqui opção de resolução 3
});

console.log(highScores);
