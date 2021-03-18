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
    // e.preventDefault();
    sendMail();
    alert("Votre message a bien été envoyé !");
  });