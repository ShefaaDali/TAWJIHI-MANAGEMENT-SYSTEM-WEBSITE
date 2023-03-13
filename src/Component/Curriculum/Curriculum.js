import "./Curriculum.css";
import getAllCurreculem from "../../Controller/getCurreculem";
import { Subject, SectionHeadder, SectionWrapper,Loading } from "../../Component/index";
import { useState } from "react";

function Curriculum() {
  const [Curriculum, setCurriculum] = useState([]);
  getAllCurreculem().then((data)=>setCurriculum(data));
  return (
    <>
      <SectionWrapper>
        <SectionHeadder>CURRICULUMS :</SectionHeadder>
        <div className="Curriculum-items">
        {
          Curriculum.length === 0 ? (
            <Loading/>
        ) : 
        (Curriculum.map((element,index) => {
          return (
            <Subject
              i={index}
              image={`data:image/png;base64,${element.image}`}
              title={element.curreculemName}
              category={element.category}
            ></Subject>
          );
        }))}
        </div>
      </SectionWrapper>
    </>
  );
}

export default Curriculum;
