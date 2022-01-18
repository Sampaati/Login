var id_arr = []
var pwd_arr =[]
function sign_in_validate()
{
    fullname = document.getElementById("fullmane").value; 
    mailid = document.getElementById("mailid").value; 
    phno = document.getElementById("phno").value; 
    createId = document.getElementById("createid").value; 
    pwd = document.getElementById("pwd").value; 
    cpwd = document.getElementById("cpwd").value;

    if(fullname ==""|| mailid =="" || phno =="" || createid =="" || pwd =="" || cpwd =="")
    {
        alert("All fields are Mandatory");
    }
    if((fullname != "" && mailid != "" && phno != "" && createid != "" && pwd !="" && cpwd !="") && (pwd==cpwd))
    {
    var details_arr = []
    details_arr.push(fullname, mailid, phno,createid,pwd) 
    console.log(details_arr)

    alert("Sign in Successfull"); 
    location.replace("./sign_in_successfull.html");
    }
    else if((fullname || mailid || phno || createid | pwd || cpwd !="") && (pwd !=cpwd)) 
    {
        alert("Incorrect Password");
    }
}