// function eraseValues(){
//     document.getElementById("fromEmail").value = "";
//     document.getElementById("msg").value = "";
// }
function pushFunction(){
    alertify.alert('Votre message a bien été envoyé !');
}
function sendMail(){
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
function redirection(){
    setTimeout( function(){
            document.location.href="../index.html";
        }
    , 3000
    );
}
document.getElementById("message").addEventListener("submit", function(e) {
    e.preventDefault();
    sendMail();
    pushFunction();
    redirection();
    // alert("Votre message a bien été envoyé !");
    // eraseValues();
  });
