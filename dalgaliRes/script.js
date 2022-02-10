const header = document.getElementById("header");
console.log(header);
var order = 0;
let strchng = order.toString()

console.log(strchng);




console.log(header.style.backgroundImage)

//const rez = document.getElementsByClassName("rez")
const rez = document.getElementsByTagName("h1");

setInterval(function () {
    header.style.backgroundImage = "url(assets/" + strchng + ".jpg)";
    order++;
    strchng = order.toString();
    

    if(order>=3){
        order = 0;
    }}, 3000);





rez[0].addEventListener("click", function(){
    order++;
    strchng = order.toString();
    header.style.backgroundImage = "url(assets/" + strchng + ".jpg)";

    if(order>=3){
        order = 0;
    }
});


console.log(rez)

