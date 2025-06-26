function checkemail(){
    let email= document.getElementById('email').value;
    let cemail= document.getElementById('cemail').value;
    if (email != cemail) {
        alert("These emails don't match!")
    }else {
        alert("Emails confirmed!")
    }
}