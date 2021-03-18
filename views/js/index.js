function pushFunction(){
    alertify.alert('Votre message a bien été envoyé !');
}
function eraseValues(){
    document.getElementById("fromEmail").nodeValue = "test";
    document.getElementById("msg").nodeValue = "test";
}
function sendMail (){
    var tempParams = {
        to_name: document.getElementById("toName").value,
        from_name: document.getElementById("fromEmail").value,
        message: document.getElementById("msg").value
    }
    emailjs.send('service_ihzpfwl','template_rrcgmml',tempParams)
    .then(function(res){
        console.log("success",res.status);
    })
}

document.getElementById("message").addEventListener("submit", function(e) {
    sendMail();
    pushFunction();
    // eraseValues();
    e.preventDefault();
    // alert("Votre message a bien été envoyé !");
  });