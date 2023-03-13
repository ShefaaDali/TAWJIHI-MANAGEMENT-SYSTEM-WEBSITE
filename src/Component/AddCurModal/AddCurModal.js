import React from 'react';
import './AddCurModal.css';
import { addCurreculem } from '../../Controller/manageCurreculem';

function AddCurModal({closeModal}) {
  return (
    <div className='  AddCurmodalBackground'>
    <div className='modalContainer'>
      <div className='body'>
        <form>
        <p>Select curreculem image:</p>
      <input type="file" id="curImage" accept="image/png, image/jpeg"/>
      <p>curreculem name:</p>
      <input type="text" id="curName" />
      <p>curreculem category:</p>
      <select id='curCategory'>
        <option value="Literary">Literary</option>
        <option value="scientific">scientific</option>
      </select>
    </form>      
      </div>
      <div className='footer'>
      <button onClick={()=>closeModal(false)} id="cancelBtn"> Cancel </button>
      <button onClick={()=>addCurreculem()}> Add </button>
      </div>      
    </div>    
  </div>
  )
}

export default AddCurModal