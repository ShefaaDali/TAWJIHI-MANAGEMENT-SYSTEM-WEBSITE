import React from 'react'
import './AdminCurriculum.css';
import { AdminSubject, SectionHeadder, SectionWrapper ,Loading ,AddCurModal,DelCurModal } from "../../Component/index";
import getAllCurreculem from "../../Controller/getCurreculem";
import { useState } from "react";
import add from './../../images/queue.png';

function AdminCurriculum() {
  const [Curriculum, setCurriculum] = useState([]);
  getAllCurreculem().then((data)=>{ setCurriculum(data)});
  const[openAddCurModal,setopenAddCurModal]= useState(false);
  const[openDelCurModal,setopenDelCurModal]= useState(false);
  const[IdOfDeleteCur,setIdOfDelrteCur]= useState("");
  const[NameOfDeleteCur,setNameOfDeleteCur]= useState("");
  return (
    <>
      <SectionWrapper>
        <SectionHeadder>CURRICULUMS :</SectionHeadder>
        <hr></hr>
        <button className='adminButton'onClick={()=>setopenAddCurModal(true)}><img src={add} alt=''/><span>Add Curreculem</span></button>
        
        <hr></hr>
        <div className="Curriculum-items">
        {
          Curriculum.length === 0 ? (
            <Loading/>
        ) : 
        (Curriculum.map((element,index) => {
          return (
            <AdminSubject
              i={index}
              CurId={element["_id"]}
              image={`data:image/png;base64,${element.image}`}
              title={element.curreculemName}             
              category={element.category}
              setopenDelCurModal={setopenDelCurModal}
              setIdOfDelrteCur={setIdOfDelrteCur}
              setNameOfDeleteCur={setNameOfDeleteCur}
            ></AdminSubject>
          );
        }))}
        </div>
      </SectionWrapper>
      {openAddCurModal && <AddCurModal closeModal={setopenAddCurModal} />}
      {openDelCurModal && <DelCurModal closeModal={setopenDelCurModal} IdOfDeleteCur={IdOfDeleteCur} NameOfDeleteCur={NameOfDeleteCur} />}
    </>    
  )
}

export default AdminCurriculum