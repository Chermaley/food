
function openModal(modalSelector, modalTimerId) {
  
  // modal.classList.toggle('show');
  const modal = document.querySelector(modalSelector);
  console.log(modal);
  modal.style.display = "block";
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  
  console.log(modalTimerId);
  if (modalTimerId){
    clearInterval(modalTimerId); // ставим для таймера, чтобы окно не открывалось дважды
  }
  
 }
 
 function closeModal(modalSelector) {
   const modal = document.querySelector(modalSelector);
  // modal.classList.toggle('show');
  modal.style.display = 'none';
  modal.classList.remove('show');
  modal.classList.add('hide');
  document.body.style.overflow = '';
 } //Перебираем через forEach для нескольких кнопок
 
function modal(triggerSelector, modalSelector, modalTimerId){
 //modal

 const modalTrigger = document.querySelectorAll(triggerSelector),
 modal = document.querySelector(modalSelector); //   modalCloseBtn = document.querySelector('[data-close]');



modalTrigger.forEach(btn => {
 btn.addEventListener('click',()=> openModal(modalSelector, modalTimerId));
}); //Чтобы закрывать модальное окно при клике вне него

modal.addEventListener('click', e => {
 if (e.target === modal || e.target.getAttribute('data-close') == '') {
   //если место клика - обертка
   closeModal(modalSelector);
 }
});
document.addEventListener('keydown', e => {
 if (e.code === "Escape" && modal.classList.contains('show')) {
   closeModal(modalSelector);
 }
}); //Таймер для открытия окна через нное время



function showModalByScroll() {
 //Открытие окна при полном скролле страницы 
 //чекаем что если высота видимой страницы + проскролленая часть равна высоте всей страницы
 if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
   openModal(modalSelector, modalTimerId);
   window.removeEventListener('scroll', showModalByScroll); //удаляем обработчик события, когда долистали один раз.Работает только при создании функции
 }
}

window.addEventListener('scroll', showModalByScroll); // Классы для карточек 

}
export default modal;
export {closeModal};
export {openModal};