const lastItems = document.querySelectorAll('.button-choices ul li');
const underlineColor = document.querySelector('.underlineColor');
const seenBtn=document.querySelector('.section3-inner ul li')

lastItems.forEach(li => {
  li.addEventListener('click', function() {
    lastItems.forEach(items => {
      items.classList.remove('clicked');
    });
    this.classList.add('clicked');
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const bookmarkingDiv = document.querySelector('.bookmarking');
  const speedsearchingDiv = document.querySelector('.speedsearching');
  const easysharingDiv = document.querySelector('.easysharing');

  const bookmarkButton = document.querySelector('.book');
  const speedsearchingButton = document.querySelector('.speed');
  const easysharingButton = document.querySelector('.easy');

  bookmarkButton.addEventListener('click', function() {
      bookmarkingDiv.removeAttribute('hidden');
      speedsearchingDiv.setAttribute('hidden', true);
      easysharingDiv.setAttribute('hidden', true);
  });

  speedsearchingButton.addEventListener('click', function() {
    // if (seenBtn) {
    //   underlineColor.style.marginTop="57px"
    //   console.log("seen");
    //   alert('dcjhdbc')
    
    // }
      bookmarkingDiv.setAttribute('hidden', true);
      speedsearchingDiv.removeAttribute('hidden');
      easysharingDiv.setAttribute('hidden', true);


  });

  easysharingButton.addEventListener('click', function() {
      bookmarkingDiv.setAttribute('hidden', true);
      speedsearchingDiv.setAttribute('hidden', true);
      easysharingDiv.removeAttribute('hidden');
      // if (seenBtn.style.display==='block') {
    
      //   underlineColor.style.marginTop="115px"
      // }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const lastItem = document.querySelectorAll('.section3-inner ul li');

  function activateUnderline() {
    const firstLi = lastItem[0]; 
    const containerRect = firstLi.parentElement.getBoundingClientRect();
    const rect = firstLi.getBoundingClientRect();
    const leftPosition = rect.left - containerRect.left;

    underlineColor.style.width = rect.width + 'px';
    underlineColor.style.transform = `translateX(${leftPosition}px)`;
  }

  
  activateUnderline();

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
const con=document.querySelector(".con")
let invalid=document.querySelector('.invalid')
 const container6=document.querySelector('.container6')
submit.addEventListener('click',function(){
    if (inputBox.value.includes('@gmail.com')) { 
    window.location.href='index.html'

      }else{
        document.querySelector('.invalid').style.display='block'
        document.querySelector('.con').style.display='block'
        invalid.innerHTML='<h4 class="error"><img src="images/icon-error.svg" alt=""></h4>'
    
        inputBox.value=''
         container6.style.marginBottom='-68px'
        const res=setTimeout(() => {
        document.querySelector('.invalid').style.display='none'
        document.querySelector('.con').style.display='none'
        container6.style.marginBottom='-15px'
        clearTimeout(res)
        },2000);
      }

})
const hambouger=document.querySelector('.hambouger')
let hamHome=document.querySelector('.hambouger-menu')
let hamAppearance=document.getElementById('ham-appearance')
let cancelHome=document.querySelector('.cancel-ham')
hambouger.addEventListener('click',function(){
 hamHome.style.display='block'
//  hamAppearance.style.display='none'
 
})
cancelHome.addEventListener('click',function(){
 hamHome.style.display='none'
})







  
  

