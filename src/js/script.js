window.addEventListener('load', function () {
  // Для переключения блоков список и слайдер
  const btnSlider = document.querySelector('.switch__btn--slider');
  const btnList = document.querySelector('.switch__btn--list');
  const screenSlider = document.querySelector('.main-slider')
  const screenList = document.querySelector('.main-list')

  const removeClass = (item, cl) => {
    item.classList.remove(cl);
  }
  const addClass = (item, cl) => {
    item.classList.add(cl);
  }
  btnSlider.onclick = () => {
    removeClass(btnList, 'switch__btn--active');
    removeClass(screenList, 'screen--active');
    addClass(btnSlider, 'switch__btn--active');
    addClass(screenSlider, 'screen--active');
  }
  btnList.onclick = () => {
    removeClass(btnSlider, 'switch__btn--active');
    removeClass(screenSlider, 'screen--active');
    addClass(btnList, 'switch__btn--active');
    addClass(screenList, 'screen--active');
  }
// подключение jquery и slick slider
  $(document).ready(function () {
    const $slider = $('.slider');
    // блик на кнопке
    $slider.on('init', function (event, slick) {
      [...document.querySelectorAll('.ripple')].forEach((el) => {
        el.addEventListener("click", (e) => {
          e = e.touches ? e.touches[0] : e;
          const r = el.getBoundingClientRect(),
            d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
          el.style.cssText = `--s: 0; --o: 1;`;
          el.offsetTop;
          el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${
            e.clientX - r.left
          }; --y:${e.clientY - r.top};`;
        });
      });
    });
    $slider.slick({
      prevArrow: '<div class="ripple slick-arrow slick-prev"><</i></div>',
      nextArrow: '<div class="ripple slick-arrow slick-next">></i></div>',
      dots: true,
      infinite: true,
      centerPadding: 0,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      easing: 'ease',
      draggable: true,
      swipe: true,
      touchThreshold: 8,
      waitForAnimate: false,
      centerMode: true,

    });
  });


});
