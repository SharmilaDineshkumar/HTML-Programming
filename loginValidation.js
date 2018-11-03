function validateUser()
{
    var uname=document.getElementById("uname").value;
    var pass=document.getElementById("pswd").value;
    var userName=uname.split("@");
    if(uname=="sharmi@gmail.com" && pass=="Sharmi")
    {
        document.getElementById("welcomebar").innerHTML="Welcome "+userName[0]+"\n";
        alert("Welcome "+userName[0]);
    }
    else{
        alert("Invalid User")
    }
}