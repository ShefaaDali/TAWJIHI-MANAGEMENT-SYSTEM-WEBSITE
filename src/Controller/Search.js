const url = "http://localhost:4000";
async function search(curId,text){
   const res=await fetch(`${url}/SearchInQuestion/${curId}/${text}`,{method: "GET",
    headers: { "Content-Type": "application/json" },})
return res.json()
}

export default search;