import React from 'react'
import {Link} from 'react-router-dom';
import'./Modal.css';
import { useState } from 'react';
import {getQuestion} from '../../Controller/manageQuiz';

function Modal({closeModal,CurId,CurName}) {
  const[totlNumberOfQuestion,setTotlNumberOfQuestion]=useState(0);
 getQuestion(CurId).then((data)=>{
  setTotlNumberOfQuestion (data.length);
 })
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='body'>
        <h3>Are You Sure You Want To Start Exam ?</h3>
        <label for="numberOfQuistion" >Choose the number of questions:</label>{" "}
        <select name="numberOfQuistion" id="numberOfQuistion">
  <option value={Math.floor(totlNumberOfQuestion/3)}>{Math.floor(totlNumberOfQuestion/3)}</option>
  <option value={Math.floor(totlNumberOfQuestion/3)*2}>{Math.floor(totlNumberOfQuestion/3)*2}</option>
  <option value={Math.floor(totlNumberOfQuestion/3)*3}>{Math.floor(totlNumberOfQuestion/3)*3}</option>
</select>
        </div>
        <div className='footer'>
        <button onClick={()=>closeModal(false)} id="cancelBtn"> Cancel </button>
        
        <Link to ={`/quiz/${CurId}`}><button onClick={()=>{
          window.sessionStorage["CurName"]=CurName;
          window.sessionStorage["numberOfQuistion"]=document.getElementById("numberOfQuistion").value;      
      }}> Start Attempt </button></Link>
        </div>      
      </div>    
    </div>
  )
}

export default Modal;