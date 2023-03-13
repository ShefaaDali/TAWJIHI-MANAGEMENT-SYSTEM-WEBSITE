import React from 'react'
import './DelModel.css';
import { DeleteQuestion } from '../../Controller/manageQuiz';

function DelModel({closeModal,Item}) {
  return (
    <div className='  DelmodalBackground'>
    <div className='modalContainer'>
      <div className='body'>
      <h3>Are You Sure You Want To Delete This Question ?  </h3>
      </div>
      <div className='footer'>
      <button onClick={()=>closeModal(false)} id="cancelBtn"> Cancel </button>
      <button onClick={()=>DeleteQuestion(Item["_id"])}> Delete </button>
      </div>      
    </div>    
  </div>
  )
}

export default DelModel