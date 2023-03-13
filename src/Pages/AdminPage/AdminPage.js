/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./AdminPage.css";
import { QuestionModal, SectionWrapper ,EditeModal,DelModel,SecoundHeader} from "../../Component/index";
import Write from "../../images/AdminPage.jpeg";
import del from "../../images/delete.png";
import edite from "../../images/edit.png";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getQuestion } from "../../Controller/manageQuiz";
import search from "../../Controller/Search";



function AdminPage() {
  const[item,setItem]= useState({});
  const[openModal,setopenModal]= useState(false);
  const[editeModal,setediteModal]= useState(false);
  const[delModal,setdelModal]=useState(false);
  const [question, setquestion] = useState([]);
  const { CurId } = useParams();
  useEffect(() => {
    getQuestion(CurId).then((data) => setquestion(data));
  }, [CurId])
  return (
    <>
    <SecoundHeader/>
      <div className="head">
        <img src={Write} alt="" width="200" />
        <input
          className="Search-input"
          type="text"
          placeholder=" Search For A Question..."
          onChange={()=>{
            if(document.getElementsByClassName("Search-input")[0].value==="") getQuestion(CurId).then((data) => setquestion(data));
            else search(CurId,document.getElementsByClassName("Search-input")[0].value).then((data)=>setquestion(data));
          }}
        />
        <button className="searchBtn" type="button" onClick={()=>{
           search(CurId,document.getElementsByClassName("Search-input")[0].value).then((data)=>setquestion(data));
        }}>
          Search For A Question
        </button>
        <button className="addBtn" type="button" onClick={()=>{setopenModal(true);}}>
          {" "}
          Add New Question
        </button>
        {openModal && <QuestionModal closeModal={setopenModal} curId={CurId} />}
      </div>
      <SectionWrapper>
        <div className="table-">
          <table id="question-table">
            <colgroup>
              <col span="1" style={{ width: "calc(35%-100px)" }}></col>
              <col span="1" style={{ width: "35%" }}></col>
              <col span="1" style={{ width: "10%" }}></col>
              <col span="1" style={{ width: "20%" }}></col>
              <col span="1" style={{ width: "100px" }}></col>
            </colgroup>
            <thead>
              <tr>
                <th>Question</th>
                <th>Choices</th>
                <th>correct Answer</th>
                <th>Comment</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {question.map((e) => {
                return (
                  <tr>
                    <th> {e["questionText"]}</th>
                    <th>{e["options"].join(" | ")}</th>
                    <th>{e["correctOpt"]}</th>
                    <th>{e["comment"]}</th>
                    <th>
                      <a className="edite" >
                        <img src={edite} alt=""  onClick={()=>{setediteModal(true); setItem(e)}} /> 
                      </a>
                      <a className="delete">
                        <img src={del} alt="" onClick={()=>{setdelModal(true); setItem(e)}}/>
                      </a>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {delModal && <DelModel closeModal={setdelModal}  Item={item} />}
          {editeModal && <EditeModal closeModal={setediteModal}  Item={item} />} 
        </div>
      </SectionWrapper>
    </>
  );
}

export default AdminPage;
