import React from 'react'
import './EditeModal.css';
import { UpdateQuestion} from '../../Controller/manageQuiz';

function EditeModal({closeModal,Item}){
  console.log(Item);
  return (
    <div className='EditemodalBackground'>
      <div className='Container'>
        <div className='body'>
              <textarea id="EditeContent" placeholder='Edite Question here..' cols="50" rows="8" defaultValue={Item["questionText"]} ></textarea>
              <textarea id="EditeChoices" placeholder='Edite Choices here..' cols="50" rows="8" defaultValue={Item["options"].join("|")}></textarea>
              <textarea id="EditeCorrect" placeholder='Edite Correct Choice here..' cols="50" rows="1" defaultValue={Item["correctOpt"]}></textarea>
              <textarea id="EditeComment" placeholder='Edite Comment here..' cols="50" rows="3" defaultValue={Item["comment"]}>{}</textarea>            
          </div>
          <div className='footer'>
          <button onClick={()=>closeModal(false)} id="cancelBtn">Cancel</button>
          <button  onClick={()=>UpdateQuestion(Item["_id"])}>Edit</button>
        </div>      
      </div>    
    </div>
  )
}

export default EditeModal