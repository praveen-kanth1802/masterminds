const navUl = document.querySelector('ul');
const navBar = document.getElementById('nav-bar');

window.addEventListener('resize',()=>{
  let w = window.innerWidth;
  if(w>=800){
    navUl.style.display = 'flex';
  }
})

navBar.addEventListener('click',()=>{
  if(navUl.classList.value === 'show'){
    navUl.style.display = 'none';
    navUl.classList.remove('show')
  }else{
    navUl.style.display = 'flex';
    navUl.classList.add('show')
  }
})
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("load", reveal);


  // service_9ht49mp

//   Hello {{to_name}},

// You got a new message from {{from_name}}:

// {{message}}

// Best wishes,
// EmailJS team