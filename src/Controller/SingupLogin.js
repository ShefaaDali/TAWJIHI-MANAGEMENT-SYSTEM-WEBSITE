/* eslint-disable no-restricted-globals */
const url = "http://localhost:4000";


function SingupLogin(formName) {
  document.querySelectorAll(".errorSpan").forEach((ele) => {
    ele.innerHTML = "";
  });
  document.querySelectorAll(".inputField").forEach((ele) => {
    ele.style.borderColor = "var(--dark-blue)";
  });
  var StudentInfo = {};
  var AdminInfo = {};
  if (formName === "signUp") {
    let err=false;
    StudentInfo["studentName"] = document.getElementById("NameField").value;
    StudentInfo["studentEmail"] = document.getElementById("EmailField").value;
    StudentInfo["password"] = document.getElementById("PasswordField").value;
    if (StudentInfo["studentName"]==="") {
      err=true;
      document.getElementById("spanNameField").innerHTML =
        "student name is required";
      document.getElementById("NameField").style.borderColor =
        "#ff0000";
    }
    if (StudentInfo["studentEmail"]==="") {
      err=true;
      document.getElementById("spanEmailField").innerHTML =
        "student email is required";
      document.getElementById("EmailField").style.borderColor =
        "#ff0000";
    }else if(!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)+$/.test(StudentInfo["studentEmail"]))) {
      err=true;
      document.getElementById("spanEmailField").innerHTML =
      "invalide email";
      document.getElementById("EmailField").style.borderColor =
        "#ff0000";
      }
    if ( StudentInfo["password"] ==="") {
      err=true;
      document.getElementById("spanPasswordField").innerHTML =
        "password is required";
      document.getElementById("PasswordField").style.borderColor =
        "#ff0000";
    }   
    //console.log(StudentInfo);
    if(err===false){
      fetch(`${url}/signUp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(StudentInfo),
      })
        .then((res) => {
          if (res.ok) {
            res.json().then((data=>window.sessionStorage["StudentInfo"]=JSON.stringify(data)));
            window.location.href = "http://localhost:3000/Profile";
          } else {
            res.text().then((d) => {
              let text = JSON.parse(d);
              if (text["code"] === 11000) {
                document.getElementById("spanNameField").innerHTML =
                  "An account with that user name already exists. Please try another user name.";
                document.getElementById("NameField").style.borderColor =
                  "#ff0000";
              }
            });
          }
        })
        .catch((err) => {
          document.getElementById("forSeverError").innerHTML =
            "server error!!!   Please try again later.";
        });
    }
    
  }

  if (formName === "logIn") {
    StudentInfo["studentName"] = document.getElementById("NameField").value;
    StudentInfo["password"] = document.getElementById("PasswordField").value;
    AdminInfo["username"] = document.getElementById("NameField").value;
    AdminInfo["password"] = document.getElementById("PasswordField").value;
    if (StudentInfo["studentName"]==="") {
      document.getElementById("spanNameField").innerHTML =
        "Please Enter Your Name";
      document.getElementById("NameField").style.borderColor =
        "#ff0000";
    }
    if ( StudentInfo["password"] ==="") {
      document.getElementById("spanPasswordField").innerHTML =
        "You Must Enter Your Password";
      document.getElementById("PasswordField").style.borderColor =
        "#ff0000";
    } 
    
    fetch(`${url}/userLogin`,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(AdminInfo)    
    })
    .then((res) => {
      if (res.ok) {
        console.log("good");
        res.json().then((data=>window.sessionStorage["AdminInfo"]=JSON.stringify(data)));
        window.location.href = "http://localhost:3000/Adminprofile";
      }else{
        fetch(`${url}/logIn`,{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(StudentInfo)    
        })
        .then((res) => {
          console.log(res);
        if (res.ok) {
        res.json().then((data=>{window.sessionStorage["StudentInfo"]=JSON.stringify(data)
        }));
        window.location.href = "http://localhost:3000/Profile";
        }else if(res.status===404){
          document.getElementById("forSeverError").innerHTML =
          "login failed!!! please check user name and password "; 
          document.getElementById("NameField").style.borderColor =
          "#ff0000";
          document.getElementById("PasswordField").style.borderColor =
          "#ff0000";
        }
        })
      }
      })  
    .catch((err) => {
      console.log(err);
      document.getElementById("forSeverError").innerHTML =
      "server error!!!   Please try again later.";}
    );
  }
}




export default SingupLogin ;

