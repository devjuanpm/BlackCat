window.onload = function() {
  var sliders = document.getElementsByClassName('sliders');
  console.log(sliders.length);
};

window.onscroll = function() {

  var header = document.getElementById('header');
  console.log(window.pageYOffset);
  console.log(header.offsetTop);

  if(window.pageYOffset >= 1600){
    var basic = document.getElementById('basic');
    basic.style.display = 'block';
    basic.style.animation = 'showUpOnly 6s 1';

    var pro = document.getElementById('pro');
    pro.style.display = 'block';
    pro.style.animation = 'showUpOnly 6s 1';
  }

  if (window.pageYOffset > header.offsetTop) {
    header.classList.add("sticky")
    document.querySelectorAll("menu-bar li a").classList.add('sticky-white-font');
  } else {
    header.classList.remove("sticky");
  }
}

function slideShow(){

}