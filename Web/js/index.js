var modal = document.getElementById('modal');
var header = document.getElementById('header');
var sticky = header.offsetTop+200;

window.onscroll = function() {

  if(window.pageYOffset >= sticky){
    this.header.classList.add('sticky');
    this.header.style.animation = ' appearUp 2s 1';
  } else{
    this.header.classList.remove('sticky');
  }

  if(window.pageYOffset >= 1600){
    var basic = document.getElementById('basic');
    basic.style.display = 'block';
    basic.style.animation = 'showUpOnly 6s 1';

    var pro = document.getElementById('pro');
    pro.style.display = 'block';
    pro.style.animation = 'showUpOnly 6s 1';
  }
}

function showModal(){
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    this.modal.style.display = "none";
  }
}