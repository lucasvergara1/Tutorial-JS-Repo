
const updatedStudents = students.map(function(orange){
    //console.log(orange.name);
    orange.role = 'student'
    return orange;
});

console.log(updatedStudents);