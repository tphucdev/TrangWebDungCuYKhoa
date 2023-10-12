 // Slider
 const imgItem = document.querySelector('.slider-img-item-img')
 const btnPrev = document.querySelector('.slider-img-number-prev')
 const btnNext = document.querySelector('.slider-img-number-next')
 const sliderMain = document.querySelector('.slider-main');
 const numberPage = document.querySelector('.slider-img-number-number-span');


 var img =[
     './IMG/slider1.webp',
     './IMG/slider2.webp',
     './IMG/slider3.webp',
     './IMG/slider4.webp',
     './IMG/slider5.webp',
     './IMG/slider6.webp'
 ]

 var newImg =[
     './IMG/slider6.webp',
     './IMG/slider5.webp',
     './IMG/slider4.webp',
     './IMG/slider3.webp',
     './IMG/slider2.webp',
     './IMG/slider1.webp'
 ]
 var i = 1;
 var num = 1;
 btnNext.onclick = function() {
     imgItem.src = img[i];
     i++;
     if(i == img.length){
         i = 0;
     }
     sliderMain.style = `animation: slipSlider linear 0.3s;`
     ++num;
     if(num > 6 ){
         num = 1;
     }
     numberPage.innerText = num;
     
 }

 btnPrev.onclick = function() {
     imgItem.src = newImg[i];
     i++;
     if(i == img.length){
         i = 0;
     }
     sliderMain.style = `animation: slipSlider linear 0.3s;`
     num --
     if(num ==  0){
         num = 6;
     }
     numberPage.innerText = num;

 }