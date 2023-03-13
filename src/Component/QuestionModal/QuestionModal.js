import React from 'react'
import './QuestionModal.css'
import { NewQuestion } from '../../Controller/manageQuiz'

function QuestionModal({closeModal,curId}) {
  return (
    <div className='modalBackground'>
      <div className='Container'>
        <div className='body'>
          <textarea id="Content" placeholder='Add Question here..' cols="50" rows="8"></textarea>
          <textarea id="Choices" placeholder='Add Choices Separate them by |..' cols="50" rows="8"></textarea>
          <textarea id="Correct" placeholder='Add Correct Choice here..' cols="50" rows="1"></textarea>
          <textarea id="Comment" placeholder='Add Comment here..' cols="50" rows="3"></textarea>
          </div>
          <div className='footer'>
          <button onClick={()=>closeModal(false)} id="cancelBtn">Cancel</button>
          <button onClick={()=>NewQuestion(curId)} >Add</button>
        </div>      
      </div>    
    </div>
  )
}

export default QuestionModal