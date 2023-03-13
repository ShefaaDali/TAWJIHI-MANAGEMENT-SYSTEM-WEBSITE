
import { useState } from 'react';
import './InnerSubject.css';
//import {Link} from 'react-router-dom';
import Modal from '../Modal/Modal'


function InnerSubject(props) {
  const[openModal,setopenModal]= useState(false);
  return (
    <div className='Curriculum-item' CurId={props.CurId} key={props.i}>
      <img className= 'subject'src={props.image} alt="" />
        <div className='curriculum-item-content'>
          <h4 className='curriculum-item-title'> 
          {props.title} <br />
          <span>{props.category}</span>
          <div>
            <button className='Curriculum-Btn' onClick={()=>{
              setopenModal(true);
            }} > Start Attempt </button>                       
          </div>
          {openModal && <Modal closeModal={setopenModal} CurId={props.CurId} CurName={props.title}></Modal>}
          </h4>
        </div>
    </div>
  )
}

export default InnerSubject;