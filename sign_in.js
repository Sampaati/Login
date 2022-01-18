function sign_in_validate()
{
    var fullname = document.getElementById("Fullname").value;
    var mailid = document.getElementById("mailid").value;
    var phno = document.getElementById("phno").value;
    var createid = document.getElementById("createid").value; 
    var pwd = document.getElementById("pwd").value;
    var cpwd = document.getElementById("cpwd").value;

    if(fullname =="" || mailid =="" || phno=="" || createid =="" || pwd == ""|| cpwd =="")
    {
        alert("All fields are Mandatory");
    }
    if((Fullname !="" && mailid !="" && phno !="" && createid !="" && pwd !="" && cpwd !="") && (pwd == cpwd))
    {
        alert("Sign in Successfull"); 
        location.replace("./sign_in_successfull.html");
    }
    else if((fullname || mailid || phno || createid || pwd || cpwd !="") && (pwd !=cpwd)) 
    {
        alert("Incorrect Password");
    }
}