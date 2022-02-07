window.addEventListener("scroll",function(){
    var tut = this.document.querySelector("logo");
    tut.classList.toggle("scrolling", this.window.scrollY > 4)
})