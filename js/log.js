

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