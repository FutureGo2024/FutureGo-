

function submitDetails()
{
    var u_name = document.getElementById('u-name');
    var pass = document.getElementById('pass');
    var c_pass = document.getElementById('c-pass');
    var form = document.getElementById('form');

    if(pass.value != c_pass.value || pass.value == '' || c_pass.value == '')
    {
        alert('passowrd and confirm password are not equal');
        console.log('ayyoooo');
    }
    else
    {
        localStorage.setItem('uname',u_name.value);
        localStorage.setItem('pass', c_pass.value );
        console.log('success');
        form.action = 'log.html';
    }

    
}