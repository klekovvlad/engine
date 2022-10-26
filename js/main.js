const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    speed: 400,
    spaceBetween: 50,
    slidesPerView: 3,
    breakpoints: {
      320: {
          slidesPerView: 1,
      },
      760: {
        slidesPerView: 2,
      },
      1000: {
          slidesPerView: 3,
      },
  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

new WOW().init();

const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupOpen = document.querySelectorAll('.popup__open');

popupOpen.forEach(popupOpenItem => {
  popupOpenItem.addEventListener('click', () => {
    popup.classList.add('popup__show');
  })
});
popupClose.addEventListener('click', () => {
  popup.classList.remove('popup__show');
});

const formBody = document.querySelector('.form__body');
const formMessage = document.querySelector('.form__message');
document.addEventListener("DOMContentLoaded", () => {

  const ajaxSend = async (formData) => {
      const response = await fetch("mail.php", {
          method: "POST",
          body: formData
      });
      if (!response.ok) {
          throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
      }
      return await response.text();
  };

  if (document.querySelector("form")) {
      const forms = document.querySelectorAll("form");

      forms.forEach(form => {
          form.addEventListener("submit", function (e) {
              e.preventDefault();
              const formData = new FormData(this);

              ajaxSend(formData)
                  .then((response) => {
                      console.log(response);
                      form.reset(); // очищаем поля формы
                      formBody.classList.add('close');
                      formMessage.classList.add('show');
                  })
                  .catch((err) => console.error(err))
          });
      });
  }
});

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 17 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 17)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});

