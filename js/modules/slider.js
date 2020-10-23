

function slider({
  container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field
}){
// slider

const slides = document.querySelectorAll(slide),
      slider = document.querySelector(container),
      prev = document.querySelector(prevArrow),
      next = document.querySelector(nextArrow),
      currentSlide = document.querySelector(currentCounter),
      totalSlides = document.querySelector(totalCounter),
      slidesWrapper = document.querySelector(wrapper),
      slidesField = document.querySelector(field),
      width = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;
  let offset = 0; 

  if (slides.length < 10 ){
  totalSlides.innerHTML = '0' + slides.length;
    currentSlide.innerHTML = '0' + slideIndex;
  }else{
    totalSlides.innerHTML = slides.length;
    currentSlide.innerHTML =slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';  //задаем всю ширину окна, учитывая все слайды 
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide =>{ //устанавливаем на каждый слайд одинаковый размер.
    slide.style.width = width;
  });

  slider.style.position = 'relative';  //создаем контейнер для индикаторов 
  const indicators = document.createElement('ol'),
        dots = [];
  indicators.classList.add('carousel-indicators');
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++ ){ //Создаем точки для каждого слайда 
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    if (i==0){
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  function currentDot (){ //Функция для подсвечивания выбранной точки 
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
  }
  function addZero (){
    if(slides.length< 10){
      currentSlide.innerHTML = '0' + slideIndex;
    }else{
      currentSlide.innerHTML = slideIndex;
    }
  }
  function toNumber(text){
    text.replace(/\D/g, '');
  }
  next.addEventListener('click', () => {
    if (offset == +width.replace(/\D/g, '') * (slides.length - 1)){
      offset = 0;
    }else{
      offset += +width.replace(/\D/g, '');
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if(slideIndex == slides.length){
      slideIndex =1;
    }else{
      slideIndex++;
    }
    if(slides.length< 10){
      currentSlide.innerHTML = '0' + slideIndex;
    }else{
      currentSlide.innerHTML = slideIndex;
    }
    currentDot();
  });

  prev.addEventListener('click', () => {
    if (offset == 0){
      offset = +toNumber(width) * (slides.length - 1);
    }else{
      offset -= +toNumber(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if(slideIndex == 1){
      slideIndex =slides.length;
    }else{
      slideIndex--;
    }
    addZero();
    currentDot();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) =>{
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;

      offset = +width.slice(0, width.length-2) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      addZero();

      currentDot();
    });
  });

//   Простой вариант

// showSlides(slideIndex);

//   slider.style.position = 'relative';  //создаем контейнер для индикаторов 
//   const indicators = document.createElement('ol'),
//         dots = [];
//   indicators.classList.add('carousel-indicators');
//   slider.append(indicators);

//   for (let i = 0; i < slides.length; i++ ){ //Создаем точки для каждого слайда 
//     const dot = document.createElement('li');
//     dot.setAttribute('data-slide-to', i + 1);
//     dot.classList.add('dot');
//     if (i==0){
//       dot.style.opacity = 1;
//     }
//     indicators.append(dot);
//     dots.push(dot);
//   }

// if (slides.length < 10 ){
//   totalSlides.innerHTML = '0' + slides.length;
// }else{
//   totalSlides.innerHTML = slides.length;
// }

// function showSlides(n){
//   currentSlide.innerHTML = '0' + slideIndex;
//   if (n > slides.length){
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   slides.forEach(slides => slides.style.display = 'none');
//   slides[slideIndex - 1].style.display = "block";

//   if (slideIndex < 10){
//     currentSlide.innerHTML = '0' + slideIndex;
//   }else{
//     currentSlide.innerHTML = slideIndex;
//   }

// }
// function plusSlide(n) {
//   showSlides(slideIndex +=n);
// }
// prev.addEventListener('click', () =>{
//     plusSlide(-1);
//     currentDot();
// });
// next.addEventListener('click', () =>{
//   plusSlide(1);
//   currentDot();
// });
//  dots.forEach(dot => {
//     dot.addEventListener('click', (e) =>{
//       const slideTo = +e.target.getAttribute('data-slide-to');
//       slideIndex = slideTo;
//       currentSlide.innerHTML = '0' + slideIndex;
      
//       slides.forEach(slides => slides.style.display = 'none');
      
//       slides[slideTo - 1].style.display = "block";
    
//       currentDot();
      
//     });
    
//   });

}
export default slider;