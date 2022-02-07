window.addEventListener("scroll",function(){
    var tut = this.document.querySelector("header");
    tut.classList.toggle("kuculme", this.window.scrollY > 5)
})