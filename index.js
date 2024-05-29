const lastItems = document.querySelectorAll('.button-choices ul li');

lastItems.forEach(li => {
  li.addEventListener('click', function() {

    lastItems.forEach(items => {
      items.classList.remove('clicked');
     
    });
    this.classList.add('clicked');
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const lastItem = document.querySelectorAll('.container3-inner ul li');
    const underlineColor = document.querySelector('.underlineColor');
 
    // lastItem[0].classList.add('clicked');
  
    lastItem.forEach(li => {
      li.addEventListener('click', function() {
        lastItem.forEach(item => {
          item.classList.remove('clicked');
        });
        this.classList.add('clicked');
  
        const containerRect = this.parentElement.getBoundingClientRect();
        const rect = this.getBoundingClientRect();
        const leftPosition = rect.left - containerRect.left;
  
        underlineColor.style.width = rect.width + 'px';
        underlineColor.style.transform = `translateX(${leftPosition}px)`;
      });
    });
  });
//           FAQ ACCORDION
let imgBoxes = document.querySelectorAll('.img-box img');
let accordion = document.getElementsByClassName('accordion');

for (let index = 0; index < accordion.length; index++) {
  accordion[index].addEventListener('click', function() {
    let panel = this.nextElementSibling;

    imgBoxes[index].classList.toggle('rotate180');

    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
const submit=document.getElementById('submit')
const inputBox=document.querySelector('.input-box')
let invalid=document.querySelector('.invalid')
submit.addEventListener('click',function(){
    if (inputBox.value.includes('@gmail.com')) {
    window.location.href='index.html'

      }else{
        document.querySelector('.invalid').style.display='block'
        invalid.innerHTML='invalid details <img src="images/icon-error.svg" alt="" class="error">'
        inputBox.value=''
        const res=setTimeout(() => {
        document.querySelector('.invalid').style.display='none'
        clearTimeout(res)
        },2000);
      }

})






  
  

