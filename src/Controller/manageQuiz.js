import checkedImage from "../images/checked.png";
import cancel from "../images/cancel.png";
const url = "http://localhost:4000";
var startTime, finishTime;

async function getQuestion(CurId) {
  startTime = new Date();
  const res = await fetch(`${url}/question/${CurId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}



function submitQuiz(questionList,curId,curName) {
   finishTime=new Date();
  let rigthAnswer = 0;
  let wrongAnswer = 0;

  let correctIcon = document.createElement("img");
  correctIcon.setAttribute("src", checkedImage);
  correctIcon.setAttribute("class", "correctIcon");

  let wrongIcon = document.createElement("img");
  wrongIcon.setAttribute("src", cancel);
  wrongIcon.setAttribute("class", "wrongIcon");
  const questionElement = document.querySelector(".quizForm").children;
  //تصليح الكويز ^_^
  for (let i = 0; i < questionList.length; i++) {
    for (let j = 1; j < questionElement[i].children.length; j += 3) {
      if (j === questionElement[i].children.length - 1) {
        questionElement[i].children[0].appendChild(wrongIcon.cloneNode(true));
        wrongAnswer++;
      }
      if (
        questionElement[i].children[j].getAttribute("active") === "true" &&
        questionElement[i].children[j].value.trim() === questionList[i].correctOpt.trim()
      ) {
        rigthAnswer++;
        questionElement[i].children[0].appendChild(correctIcon.cloneNode(true));
        break;
      }
    }
  }
  //الاجزبة النموذجية
  document.querySelectorAll(".review").forEach((e, i) => {
    e.style.display = "block";
    e.innerHTML = `<hr/>Correct Answer: ${questionList[i].correctOpt}<br/>Comment: ${questionList[i].comment}`;
  });

  let period = Math.round((finishTime - startTime) / 60000);
  let grade = Math.round((rigthAnswer / questionList.length) * 100);
  //مجموع العلامات
  document.querySelector(".result").style.display = "block";
  document.querySelector(".result p").innerHTML += `
   Time period: ${period} Minute<br/>
    Number Of Rigth Answer: ${rigthAnswer} <br/>
    Number Of Wrong Answer: ${wrongAnswer} <br/>
    Grade: ${grade}%
    `;
  //save in db
  let reqDetail = {
    dateAndTime: finishTime,
    grade: grade,
    period: period,
    student:JSON.parse(window.sessionStorage.getItem("StudentInfo"))["_id"],
    curreculem: curId,
    curreculemName:curName,
    numberOfRigthAnswer:rigthAnswer,
    numberOfWrongAnswer:wrongAnswer
  };
  
  fetch(url+"/ExamDetail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqDetail),
  }).then(data=>(data)).catch(e=>(console.log(e)));

  document.getElementsByClassName("Quiz-Btn")[0].style.display = "none";
  document
    .querySelectorAll("input[type=radio]")
    .forEach((e) => (e.disabled = true));
  document.getElementsByClassName("modalBackground")[0].remove();
  
}

function ChoiceHandler(event) {
  const element = event.target;
  document
    .getElementsByName(element.name)
    .forEach((e) => e.removeAttribute("active"));
  element.setAttribute("active", true);
}


////////////
// async function giveQuestion(id) {
//   const response= await fetch(`${url}/list/${id}`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });
//   return response.json();
// }
async function postQuestion(question) {
const res= await fetch(`${url}/question`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(question)
  });
  return res.json();
}

function NewQuestion(CurId){
  
  const contentStr=document.getElementById("Content").value;
  const choicesStr=document.getElementById("Choices").value;
  const correctStr=document.getElementById("Correct").value;
  const commentStr=document.getElementById("Comment").value;
  const CuricStr=CurId;
  const choicesAray=choicesStr.split('|');

  const question={questionText:contentStr,options:choicesAray,correctOpt:correctStr,comment:commentStr,curreculem:CuricStr};
  console.log(question);
  postQuestion(question)
  .then(response=>{
    if(response.ok){
      console.log("good")
    }
    else{
      console.log(response)
    }
    document.getElementsByClassName("modalBackground")[0].style.display = "none";
    window.location.reload(false);
  }).catch(err=>{
    console.log(err);
  })
}
async function delQuestion(Id) {
  const response = await fetch(`${url}/question/${Id}`, {
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
  });
  return response.json();
}

async function putQuestion(Data) {
  const response = await fetch(`${url}/question`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(Data)
  });
  return response.json();
}

function UpdateQuestion(Id){
  const contentStr=document.getElementById("EditeContent").value;
  const choicesStr=document.getElementById("EditeChoices").value;
  const correctStr=document.getElementById("EditeCorrect").value;
  const commentStr=document.getElementById("EditeComment").value; 
  const choicesAray=choicesStr.split('|');
  const question={_id:Id,questionText:contentStr,options:choicesAray,correctOpt:correctStr,comment:commentStr}
  console.log(question)
  putQuestion(question)
  .then(response=>{
    if(response.ok){
      console.log("good")
    }
    window.location.reload(false);
  }).catch(err=>{
    console.log(err);
  });
}



function DeleteQuestion(Id){
  console.log(Id);
  delQuestion(Id).then(response=>{
    if(response.ok){
      
    }
    console.log(response)
    window.location.reload(false);
  }).catch(err=>{
    console.log(err);
  });
}

export { getQuestion, submitQuiz, ChoiceHandler ,NewQuestion,UpdateQuestion,DeleteQuestion};
