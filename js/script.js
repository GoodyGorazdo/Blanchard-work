// анонимная функция выполняется после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.gallery-swiper',{

    roundLengths:true,
    watchSlidesProgress: true,
    autoHeight: true,
    navigation: {
      nextEl: '.gallery-swiper-button-next',
      prevEl: '.gallery-swiper-button-prev'
    },
    pagination: {
      el: '.gallery-swiper-pagination',
      type: 'fraction',
    },
    keyboard: {
      enabled: true,
    },
    slidesPerView: 1,
    // spaceBetween: 25,
    slidesPerGroup: 1,
    slidesPerColumn: 1,
    breakpoints: {
      1300: {
        autoHeight: false,
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
      },
      768: {
        autoHeight: false,
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
      },
      513: {
        autoHeight: false,
        slidesPerView: 2,
        spaceBetween: 24,
        slidesPerGroup: 2,
        slidesPerColumn: 1,
      },
    }
  });
  new Swiper('.editions-swiper',{

    roundLengths:true,

    autoHeight: false,

    navigation: {
      nextEl: '.editions-swiper-button-next',
      prevEl: '.editions-swiper-button-prev'
    },
    pagination: {
      el: '.editions-swiper-pagination',
      type: 'fraction',
    },
    // grabCursor: true,
    keyboard: {
      enabled: true,
    },
    slidesPerView: 2,
    spaceBetween: 35,
    slidesPerGroup: 2,
    breakpoints: {
      1300: {
        slidesPerView: 3,
        spaceBetween: 46,
        slidesPerGroup: 3,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 45,
        slidesPerGroup: 2,
      }
    }
  });
  new Swiper('.projects__swiper',{

    // roundLengths:true,

    autoHeight: false,

    freeMode: true,

    centerInsufficientSlides: true,

    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    slidesPerView: 2,
    spaceBetween: 50,
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      768: {
        slidesOffsetBefore: 11,
        spaceBetween: 35,
      }
    }
  });
  new Swiper('.events-swiper',{
    autoHeight: false,
    centerInsufficientSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      512: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      }
    }
  });
  document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('header-category__choices-btn')) {
      document.querySelectorAll('.header-category__genre').forEach(function(clickdel) {
        clickdel.classList.remove('header-category-choices--active')
      });
     }
  });

  //   получаем нодлист всех элементов с классом (querySelectorAll)
  //   выполняем функцию(tabsBtn) для каждого элемента из нодлиста (forEach)
  document.querySelectorAll('.header-category__choices-btn').forEach(function(tabsBtn) {

      //    в функцию(tabsBtn) для элементов нодлиста вызываем "слушатель событий" (addEventListener), который по событию клика вызывает функцию (event)
    tabsBtn.addEventListener('click', function(event) {

    //  создаем переменную path(название произвольное); currentTarget - это элемент по которому был совершен клик. dataset - набор дата атрибутов(атрибуты html, которые начинаются с "data-" попадают в dataset), path - произвольное название для атрибута
      const path = event.currentTarget.dataset.path

    //у каждого элемента, имеющего нужный класс удаляем из списка классов определенный класс(это чтобы отображался только один таб, на который был совешен клик а остальные были скрыиты)
      document.querySelectorAll('.header-category__genre').forEach(function(tabContent) {
        tabContent.classList.remove('header-category-choices--active')
      });
      //добавляем нужный класс элементу, по которому был совершен клик(ссылаемся на конкретный таб с помощью html атрибута data-произвольноеназвание)
      document.querySelector(`[data-target="${path}"]`).classList.add('header-category-choices--active')
    });
  });

  document.querySelectorAll('.catalog-header__btn').forEach(function(langBtn) {
    langBtn.addEventListener('click', function(eventBtn) {
      document.querySelectorAll('.catalog-header__btn').forEach(function(delBoard){
        delBoard.classList.remove('catalog-header__btn--active')
      });
      eventBtn.target.classList.add('catalog-header__btn--active')
      const lang = eventBtn.currentTarget.dataset.lang
      document.querySelectorAll('.catalog-accordeon-choices__list').forEach(function(langContent) {
        langContent.classList.remove('catalog-accordeon-choices__list--active')
      });
      document.querySelectorAll(`[data-target="${lang}"]`).forEach(function(langActive){
        langActive.classList.add('catalog-accordeon-choices__list--active')
      });
      // $("#accordeon").accordeon("refresh");
    });
  });
  document.querySelectorAll('.catalog-accordeon-choices__item-btn').forEach(function(choiceBtn) {
    choiceBtn.addEventListener('click', function(eventChoice) {
      document.querySelectorAll('.catalog-accordeon-choices__item-btn').forEach(function(delColor){
        delColor.classList.remove('catalog-accordeon-choices__item-btn--active')
      });
      eventChoice.target.classList.add('catalog-accordeon-choices__item-btn--active')
      const choice = eventChoice.currentTarget.dataset.choice
      document.querySelectorAll('.catalog-content-author').forEach(function(choiceContent) {
        choiceContent.classList.remove('catalog-accordeon-choices__item--active')
      });
      document.querySelectorAll(`[data-target="${choice}"]`).forEach(function(choiceActive){
        choiceActive.classList.add('catalog-accordeon-choices__item--active')
        // $("#accordeon").accordeon("refresh");
      });
    });
  });
  document.querySelectorAll('.events__btn').forEach(function(eventsBtn) {
    eventsBtn.addEventListener('click', function(eventsActive) {
      document.querySelectorAll('.events__list').forEach(function(choiceContent) {
        choiceContent.classList.toggle('events__list--active')
      });
    });
  });


  $( "#accordion" ).accordion ({
    collapsible: true,
    icons: false,
    heightStyle: "contents",
  });
  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map-1", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.76283583656739, 37.64573937816716],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 14,
          controls: ['geolocationControl', 'zoomControl'],
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                center: [55.758338081927846, 37.601089758877414]
              }
            }
          ]
      });

      var myPlacemark = new ymaps.Placemark([55.758338081927846, 37.601089758877414], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/mapdote.svg',
          iconImageSize: [20, 20],
      });

      myMap.geoObjects.add(myPlacemark);
    }
});
