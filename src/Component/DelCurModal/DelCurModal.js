import React from 'react';
import'./DelCurModal.css';
import {deleteCurreculem} from './../../Controller/manageCurreculem'

export default function DelCurModal({closeModal,IdOfDeleteCur,NameOfDeleteCur}) {
  return (
    <div className='  DelmodalBackground'>
    <div className='modalContainer'>
      <div className='body'>
      <h3>Are You Sure You Want To Delete {NameOfDeleteCur} Curreculem?  </h3>
      </div>
      <div className='footer'>
      <button onClick={()=>closeModal(false)} id="cancelBtn"> Cancel </button>
      <button onClick={()=>deleteCurreculem(IdOfDeleteCur)}> Delete </button>
      </div>      
    </div>    
  </div>
  )
}
