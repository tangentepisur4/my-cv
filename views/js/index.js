// function eraseValues(){
//     document.getElementById("fromEmail").value = "";
//     document.getElementById("msg").value = "";
// }
function countViews(){
    fetch('https://api.countapi.xyz/update/cv-sande-loh-jonathan/7ff9855a-3ad2-425b-9cd9-ba06f9d3d9f1/?amount=1')
    .then(res => res.json())
    .then(res => {
            document.getElementById("count").innerHTML = res.value;
    });
    // Set a new value
    // "https://api.countapi.xyz/set/cv-sande-loh-jonathan/7ff9855a-3ad2-425b-9cd9-ba06f9d3d9f1?value=NEW-VALUE"
    // Get info about the key
    // "https://api.countapi.xyz/info/cv-sande-loh-jonathan/7ff9855a-3ad2-425b-9cd9-ba06f9d3d9f1/"

}
window.onload = () =>{
    // countViews();
}
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
