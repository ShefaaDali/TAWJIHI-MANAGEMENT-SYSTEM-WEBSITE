import { Link } from 'react-router-dom';
import './SecoundHero.css';
import icon from '../../images/icon.jpg';
import printer from '../../images/printer.png';
import {SectionWrapper,SectionHeadder} from'../../Component/index';
import getExamDetail from "../../Controller/getExamDetail";
import { useEffect, useState } from 'react';
import Print from '../../Controller/print';



const SecoundHero = () => {

  const[ExamDetails,setExamDetails]=useState([]);
  const studentID=JSON.parse(window.sessionStorage.getItem("StudentInfo"))["_id"]
  useEffect(()=>{getExamDetail(studentID).then(data=>setExamDetails(data.reverse()))},[studentID])
  
  return (
  <>
    <SectionWrapper>
    
      <div className='pro'>
      <Link to='/profile' className='main-pro' > <SectionHeadder> <img className='pro-img' src={icon} width="80" alt=""/> Student Profile Information</SectionHeadder></Link>
      </div>

      <img src={printer} alt="" width="80" title='Print Table' onClick={Print} />
      <br/><h7>Print Table</h7>

      <div id='printablediv'  className='pro-table'>
      <h3> Student Name:<span id='userName'>{`  ${JSON.parse(window.sessionStorage.getItem("StudentInfo"))["studentName"]}`}</span> </h3>
    <p/>
    <div >
      <table>
      <colgroup>
              <col span="1" style={{ width: "25%" }}></col>
              <col span="1" style={{ width: "10%" }}></col>
              <col span="1" style={{ width: "25%" }}></col>
              <col span="1" style={{ width: "25%" }}></col>
              <col span="1" style={{ width: "25%" }}></col>
            </colgroup>
        <thead>
        <tr >
          <th style={{ background: "#f2d7ee" }}>Curriculums Name</th>
          <th style={{ background: "#c7cef4" }}>Grade</th>
          <th style={{ background: "#9cadce" }}>Date</th>
          <th style={{ background: "#7ec4cf" }}>Time</th>
          <th style={{ background: "#7894cf" }}>period</th>
        </tr>
        </thead>
        <tbody>
        {
          ExamDetails.length===0?(<tr><th colSpan={5}> you have an empty record</th></tr>):
          (ExamDetails.map((e,i)=>{
           let date= new Date (e["dateAndTime"]);
            return(<tr key={i}>
            <th>{e["curreculemName"]}</th>
            <th>{e["grade"]}%</th>
            <th>{`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`}</th>
            <th>{`${date.getHours()+1}:${date.getMinutes()}`}</th>
            <th>{e["period"]} Minute</th>
          </tr>)

          }))
        } 
        </tbody>                              
      </table>
    </div>
      </div>
      </SectionWrapper>
    </>
  )
  
}

export default SecoundHero;