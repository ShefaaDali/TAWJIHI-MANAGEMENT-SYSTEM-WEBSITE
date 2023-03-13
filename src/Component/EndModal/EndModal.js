import React from 'react';
import'./EndModal.css';
import { submitQuiz } from '../../Controller/manageQuiz';


function EndModal({closeModal,questionList,curId,curName}) {

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='body'>
        <h3>Are You Sure You Want To End Exam ?</h3>
        </div>
        <div className='footer'>
        <button onClick={()=>closeModal(false)} id="cancelBtn"> Cancel </button>
        <button onClick={(e)=>{submitQuiz(questionList,curId,curName);
        }}> End Attempt </button>
        </div>      
      </div>    
    </div>
  )
}

export default EndModal;