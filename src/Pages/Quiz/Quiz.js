import { useEffect, useState } from 'react';
import "./Quiz.css";
import { SectionHeadder, SectionWrapper ,SecoundHeader,Question,Choice,Loading} from "../../Component/index";
import EndModal from '../../Component/EndModal/EndModal'
import {getQuestion} from '../../Controller/manageQuiz';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import backButton from '../../images/back-button.png';

function Quiz() {
  const[question,setquestion]=useState([]);
  const[openModal,setopenModal]= useState(false);
  const {CurId}=useParams();
  useEffect(()=>{
  document.querySelector(".quizForm").addEventListener("submit",(e)=>e.preventDefault());
  getQuestion(CurId).then(data=>{
    //Make the question random
   const numberOfQuestion= window.sessionStorage["numberOfQuistion"];
   let listOfQuestion=[];
   for(let i=0;i<numberOfQuestion;i++){
    let index=Math.floor(Math.random()*data.length);
    //Make the options random
    data[index]["options"]=data[index]["options"].sort(() => Math.random() - 0.5);
    //save question in array
    listOfQuestion[i]=(data[index]);
    data.splice(index,1);
   }
  setquestion(listOfQuestion);
    });
},[CurId]);
  return (
    <>
    <SecoundHeader/>
      <SectionWrapper>
        <SectionHeadder>{window.sessionStorage["CurName"]} Quiz</SectionHeadder>
        <form className="quizForm" >
          {
            question.length===0?(<Loading/>):(
              question.map((element,index)=>{
                return(<Question questionText= {element.questionText} i={index}>
                  {element.options.map((element,i)=>{
                    return(<Choice questionNumber={index} choiceText={element} i={i} />)
                  })}
                </Question>)
              })
              
            )
          }
          <button className='Quiz-Btn'onClick={()=>{
          setopenModal(true);
        }}> Submit
        </button>
        </form>
      <div>
        {openModal && <EndModal closeModal={setopenModal} questionList={question} curId={CurId} curName={window.sessionStorage["CurName"]} />}
        </div> 
        <div className='result'>
          <p></p>
        <Link to="/profile"><img src={backButton} alt="back"/></Link>
          </div>    
      </SectionWrapper>
    </>
  );
}

export default Quiz;
