var header = document.getElementById("header");

function showSlides() {
    var slidesCollection = document.getElementsByClassName("slides");
    console.log(slidesCollection.length);
}


window.onscroll = function(){
    console.log(this.header.offsetTop);
    if(window.pageYOffset >= this.header.offsetTop)
    {
        this.header.classList.add("sticky")
    }
    else{
        this.header.classList.remove("sticky");
    }
}
