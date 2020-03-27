//Nome do usuario - Confirmação com enter
function funcaoNome(event){
  if(event.keyCode == 13) {
    document.getElementById("intro").style.display = "none";
    const hello = document.getElementById("name").value
    document.getElementById("identification").innerHTML = (`Olá ${hello}! Você deseja responder sobre?`)
    document.getElementById("quiz").style.display = "block";
  }
}
//Nome do usuario - Botão de enviar
function buttonName() {
  document.getElementById("intro").style.display = "none";
  const hello = document.getElementById("name").value
  document.getElementById("identification").innerHTML = (`Olá ${hello}! Você deseja responder sobre?`)
  document.getElementById("quiz").style.display = "block";
}

//Botões de seleção para o quiz
function quizGeo() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("questionOne").style.display = "block";
}
function quizMat() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("questionOneMat").style.display = "block";
}

// Primeira pergunta GEOGRAFIA
function answerOneOne() {
  document.getElementById("questionOne").style.display = "none";
  const oneAnswer = document.getElementById("answerQuestionOne").innerHTML = "Que pena! Você errou!";
  document.getElementById("questionTwo").style.display = "block";
  }
  
  function answerOneTwo() {
  document.getElementById("questionOne").style.display = "none";
  const twoAnswer = document.getElementById("answerQuestionOne").innerHTML = "Sim! Você acertou!";
  document.getElementById("questionTwo").style.display = "block";
  }
  
  function answerOneThree() {
  document.getElementById("questionOne").style.display = "none";
  const threeAnswer = document.getElementById("answerQuestionOne").innerHTML = "Que pena! Você errou!";
  document.getElementById("questionTwo").style.display = "block";
  }
  
// Segunda pergunta GEOGRAFIA
function answerTwoOne() {
  document.getElementById("questionTwo").style.display = "none";
  const oneAnswer = document.getElementById("answerQuestionTwo").innerHTML = "Sim! Você acertou!";
  document.getElementById("questionThree").style.display = "block";
}

function answerTwoTwo() {
  document.getElementById("questionTwo").style.display = "none";
  const twoAnswer = document.getElementById("answerQuestionTwo").innerHTML = "Que pena! Você errou!";    
  document.getElementById("questionThree").style.display = "block";
}

function answerTwoThree() {
  document.getElementById("questionTwo").style.display = "none";
  const threeAnswer = document.getElementById("answerQuestionTwo").innerHTML = "Que pena! Você errou!";
  document.getElementById("questionThree").style.display = "block";
}

// Terceira pergunta GEOGRAFIA
function answerThreeOne() {
  document.getElementById("questionThree").style.display = "none";
  const oneAnswer = document.getElementById("answerQuestionThree").innerHTML = "Que pena! Você errou!";
  document.getElementById("bye").style.display = "block";
}

function answerThreeTwo() {
  document.getElementById("questionThree").style.display = "none";
  const twoAnswer = document.getElementById("answerQuestionThree").innerHTML = "Que pena! Você errou!";
  document.getElementById("bye").style.display = "block";
}

function answerThreeThree() {
  document.getElementById("questionThree").style.display = "none";
  const threeAnswer = document.getElementById("answerQuestionThree").innerHTML = "Sim! Você acertou!";
  document.getElementById("bye").style.display = "block";
}
//FIM

// Primeira pergunta MATEMÁTICA
function answerOneOneMat() {
  document.getElementById("questionOneMat").style.display = "none";
  const oneAnswer = document.getElementById("answerQuestionOneMat").innerHTML = "Que pena! Você errou!";
  document.getElementById("questionTwoMat").style.display = "block";
  }
  
  function answerOneTwoMat() {
  document.getElementById("questionOneMat").style.display = "none";
  const twoAnswer = document.getElementById("answerQuestionOneMat").innerHTML = "Sim! Você acertou!";
  document.getElementById("questionTwoMat").style.display = "block";
  }
  
  function answerOneThreeMat() {
  document.getElementById("questionOneMat").style.display = "none";
  const threeAnswer = document.getElementById("answerQuestionOneMat").innerHTML = "Que pena! Você errou!";
  document.getElementById("questionTwoMat").style.display = "block";
  }
  
// Segunda pergunta MATEMÁTICA
function answerTwoOneMat() {
  document.getElementById("questionTwoMat").style.display = "none";
  const oneAnswer = document.getElementById("answerQuestionTwoMat").innerHTML = "Que pena! Você errou!";
  document.getElementById("questionThreeMat").style.display = "block";
}

function answerTwoTwoMat() {
  document.getElementById("questionTwoMat").style.display = "none";
  const twoAnswer = document.getElementById("answerQuestionTwoMat").innerHTML = "Que pena! Você errou!";    
  document.getElementById("questionThreeMat").style.display = "block";
}

function answerTwoThreeMat() {
  document.getElementById("questionTwoMat").style.display = "none";
  const threeAnswer = document.getElementById("answerQuestionTwoMat").innerHTML = "Sim! Você acertou!";
  document.getElementById("questionThreeMat").style.display = "block";
}

// Terceira pergunta MATEMÁTICA
function answerThreeOneMat() {
  document.getElementById("questionThreeMat").style.display = "none";
  const oneAnswer = document.getElementById("answerQuestionThreeMat").innerHTML = "Sim! Você acertou!";
  document.getElementById("bye").style.display = "block";
}

function answerThreeTwoMat() {
  document.getElementById("questionThreeMat").style.display = "none";
  const twoAnswer = document.getElementById("answerQuestionThreeMat").innerHTML = "Que pena! Você errou!";
  document.getElementById("bye").style.display = "block";
}

function answerThreeThreeMat() {
  document.getElementById("questionThreeMat").style.display = "none";
  const threeAnswer = document.getElementById("answerQuestionThreeMat").innerHTML = "Que pena! Você errou!";
  document.getElementById("bye").style.display = "block";
}
//FIM

// Botão para jogar novamente
function buttonReturn() {
  document.getElementById("bye").style.display = "none";
  document.getElementById("geo").style.display = "none";
  document.getElementById("mat").style.display = "none";
  document.getElementById("quiz").style.display = "block";
}