// window.onload = () =>{
//     alert("page loaded !");
// }
document.getElementById("english").addEventListener("click", function(e) {
  e.preventDefault();
  document.location.href="./englishVersion.html";
});
document.getElementById("french").addEventListener("click", function(e) {
  e.preventDefault();
  document.location.href="./frenchVersion.html";
});
