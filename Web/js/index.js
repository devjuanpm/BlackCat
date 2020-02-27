var modal = document.getElementById('modal');

window.onscroll = function() {

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