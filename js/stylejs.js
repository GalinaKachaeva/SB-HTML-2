document.querySelector(".header__search").addEventListener("click", function() {
  document.querySelector(".form").classList.add("form__active");
  this.classList.add("active");
})

document.querySelector(".form__close").addEventListener("click", function() {
  document.querySelector(".form").classList.remove("form__active");
  this.classList.remove("active");
})

document.querySelector(".form__close").addEventListener("click", function() {
  document.querySelector(".header__search").classList.remove("active")
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form");
  if (!target.closest(".form__container")) {
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".header__search").classList.remove("active")
  }
})

$( function() {
  $( "#accordion" ).accordion({
     icons: false,
     heightStyle: "content",
     collapsible: true,
     active: false
   });

 } );

 document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
})


  document.querySelectorAll('.work__item').forEach(function(workItem){
    workItem.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.work__item').forEach(function(btn){
        btn.classList.remove('work__item--active')
      });
      e.currentTarget.classList.add('work__item--active');
      document.querySelectorAll('.work__top').forEach(function(tabsBtn){
    tabsBtn.classList.remove('work__text-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work__text-active');
    });
    });
