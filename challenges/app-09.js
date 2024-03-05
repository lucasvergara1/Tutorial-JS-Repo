
const updatedStudents = students.map(function(orange){
    //console.log(orange.name);
    orange.role = 'student'
    return orange;
});

//console.log(updatedStudents);


//--using filter 
const highScores = students.filter(function(student) {
   // if (student.score >= 80) { // opção 1 de solução, abaixo fizemos outra possibilidade com mesmo resultado
    //    return student;
    //}
    //if (student.score >=80) return student; // aqui opção 2 de resolução
    return student.score >= 80; // aqui opção de resolução 3
});

//console.log(highScores);

//--using find
const idSelected = students.find(function(banana){
    return banana.id === 4;

});
//console.log(idSelected);

//--using reduce

const averageScores = students.reduce(function (appleScoresTotal, student) {
  //console.log(students);
  //console.log(appleScoresTotal); --//para ver a média deve deixar essa linha comentada, se quiser ver as notas somadas basta descomentar essa linha
  return appleScoresTotal + student.score;
}, 0) / students.length;

//console.log(averageScores);


///-- next part of the challenge 

const survey1 = students.reduce(function(surveyapple, student){
  //console.log(student.favoriteSubject);
  // Obtém a disciplina favorita do estudante
  const favSubject = student.favoriteSubject;
  // Verifica se a disciplina já existe no objeto surveyapple
  if (surveyapple[favSubject]) {
    // Se existir, incrementa o contador
    surveyapple[favSubject] = surveyapple[favSubject] + 1;
  } else {
    // Se não existir, cria a disciplina no objeto com o contador igual a 1
    surveyapple[favSubject] = 1;
  }
  // Retorna o objeto atualizado
  return surveyapple;
},{});

console.log(survey1);
