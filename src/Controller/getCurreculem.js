const url = "http://localhost:4000";

async function getAllCurreculem(){
  let res= await fetch(`${url}/curreculem`,{method: "GET",
    headers: { "Content-Type": "application/json" },});
    return res.json();
}

export default getAllCurreculem;