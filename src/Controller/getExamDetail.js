const url = "http://localhost:4000";

async function getExamDetail(stuId){
    let res= await fetch(`${url}/ExamDetail/${stuId}`,{method: "GET",
      headers: { "Content-Type": "application/json" },});
      return res.json();
   
  }
  
export default getExamDetail;