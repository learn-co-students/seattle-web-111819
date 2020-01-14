const RANDOM_QUESTION_URL = "http://jservice.io/api/random";
const RECORDS_URL = "http://localhost:3000/answers";

//YOUR CODE HERE

function getRecord() {
  fetch(RECORDS_URL)
    .then(res => res.json())
    .then(json => showRecord(json));
}

function showRecord(record) {
  document.getElementById(
    "record"
  ).textContent = `${record.correct}/${record.total}`;
}

function getQuestion() {
  fetch(RANDOM_QUESTION_URL)
    .then(res => res.json())
    .then(json => popThatSuckerInTheDOM(json));
}

function patchWrong() {
  fetch(RECORDS_URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      total:
        parseInt(document.querySelector("#record").textContent.split("/")[1]) +
        1
    })
  })
    .then(res => res.json())
    .then(data => showRecord(data));
}

function patchCorrect() {
    fetch(RECORDS_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        total:
          parseInt(
            document.querySelector("#record").textContent.split("/")[1]
          ) + 1,
        correct:
          parseInt(
            document.querySelector("#record").textContent.split("/")[0]
          ) + 1
      })
    }).then(res=>res.json()).then(data => showRecord(data));
}

function popThatSuckerInTheDOM(question) {
  console.log(question);
  const questionCard = document.getElementById("question");
  questionCard.querySelector(".card-text").textContent = question[0].question;
  questionCard.querySelector(".card-title").textContent =
    question[0].category.title;

  const answerCard = document.querySelector("#answer");
  answerCard.querySelector(".card-text").textContent = question[0].answer;
}

function showAnswerButtonActivate() {
  document
    .getElementById("answer-button")
    .addEventListener("click", function() {
      document.getElementById("answer").style.display = "block";
    });
}

function nextQuestionButtonActivate() {
  document.querySelectorAll(".answer-button").forEach(button =>
    button.addEventListener("click", function() {
      document.getElementById("answer").style.display = "none";
      getQuestion();
    })
  );
}

function answerButtonsActivate() {
  document.getElementById("wrong-button").addEventListener("click", function() {
    patchWrong();
  });
  document.getElementById("correct-button").addEventListener("click", function() {
    patchCorrect();
  });
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("page loaded");
  getQuestion();
  getRecord();
  showAnswerButtonActivate();
  nextQuestionButtonActivate();
  answerButtonsActivate();
});
