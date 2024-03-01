

function pass()
{
    var pass = document.getElementById("pass");
    var open_eye = document.getElementById("open-eye");
    var close_eye = document.getElementById("close-eye");

    if(pass.type == "password")
    {
        pass.type = "text";
        open_eye.style = "display:none";
        close_eye.style = "display:inline-block";

    }
    else
    {
        pass.type = "password";
        open_eye.style = "display:inline-block";
        close_eye.style = "display:none";

    }
}


function logSub() {

    
    var u_name = document.getElementById("u_name");
    var pass = document.getElementById("pass");
    var form = document.getElementById("form");

    
    var c_u_name = localStorage.getItem('uname');
    var c_pass = localStorage.getItem('pass');

    if (u_name.value == c_u_name && pass.value == c_pass) {
        alert('Success');
        form.action = '../index.html';
    }
    else
    {
        alert('username and pass are wrong');
    }
    
    
}