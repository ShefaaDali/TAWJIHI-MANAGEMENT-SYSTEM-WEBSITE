import { InnerSubject, SectionHeadder, SectionWrapper ,Loading } from "../../Component/index";
import getAllCurreculem from "../../Controller/getCurreculem";
import { useState } from "react";

const InnerCurriculums = () => {
  const [Curriculum, setCurriculum] = useState([]);
  getAllCurreculem().then((data)=>setCurriculum(data))
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
            <InnerSubject
              i={index}
              CurId={element["_id"]}
              image={`data:image/png;base64,${element.image}`}
              title={element.curreculemName}
              category={element.category}
            ></InnerSubject>
          );
        }))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default InnerCurriculums;
