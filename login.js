//id & Password
function validate(){
    var id = document.getElementById("id").value; 
    var pwd = document.getElementById("pwd").value;
    if(id=="sharath"&&pwd=="sharath")
    { 
        alert("Login successfull");
        //document.location.href="./login_successfull.html"; 
        location.replace('./login_successfull.html') 
        console.log("logined sucessfully")
    } 
    else if (id="")
    {
        alert("ID cannot be empty");   
    }
    else if(pwd=="")
    {
    alert("Password cannot be empty")
    }
    else{ 
        alert("login failed");
        // document.location.href="./login.html"; 
        location.replace('./index.html')
        console.log("login failed")
        }
    }