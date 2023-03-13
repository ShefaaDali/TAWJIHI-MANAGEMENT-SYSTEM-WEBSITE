import React from 'react'
import './AdminSubject.css';
import {Link} from 'react-router-dom';

function AdminSubject(props) {
  return (
    <div className='Curriculum-item' CurId={props.CurId} key={props.i}>
      <img className= 'subject'src={props.image} alt="" />
        <div className='curriculum-item-content'>
          <h4 className='curriculum-item-title' > 
          {props.title} <br />
          <span>{props.category}</span>
            <Link className='Btn-link' to={`/AdminPage/${props.CurId}`}>  <button className='Curriculum-Btn'> Edit Question </button>  </Link>  
              <button onClick={()=>{props.setopenDelCurModal(true);props.setIdOfDelrteCur(props.CurId);props.setNameOfDeleteCur(props.title)}} className='Delet-Curriculum-Btn'> Delete Curriculum </button>                   
          </h4>
        </div>
    </div>
  )
}

export default AdminSubject