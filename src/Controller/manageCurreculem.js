const url = "http://localhost:4000";
function addCurreculem(){
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
toBase64(document.getElementById("curImage").files[0]).then((d)=>{
    let curreculeminfo={
        curreculemName: document.getElementById("curName").value,
        category: document.getElementById("curCategory").value,
        contentType: "jpg",
        image: d.replace(RegExp("data:image/(jpeg|jpeg|png);base64,"),"")
    } 
    fetch(url+"/curreculem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(curreculeminfo),
      }).then(()=>window.location.href="http://localhost:3000/Adminprofile").catch(e=>(console.log(e)));
    
})

}

function deleteCurreculem(CurId){
    fetch(url+"/curreculem/"+CurId, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then(()=>window.location.href="http://localhost:3000/Adminprofile").catch(e=>(console.log(e)));
}

export {addCurreculem,deleteCurreculem};