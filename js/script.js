$(".check-label").on("click", function () {
    let isChecked = $(this).children("input").prop("checked");
    if (isChecked) {
        $(this).find(".fakecheck").addClass("checked");
    } else {
        $(this).find(".fakecheck").removeClass("checked");
    }
});


if (document.querySelectorAll('.gallerySwiper').length) {

    const gallerySwiper= new Swiper('.gallerySwiper', {
        loop: true,
        slidesPerView: 1,
        speed: 600,
        centeredSlides: true,
        effect: "coverflow",
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    
        keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
        coverflowEffect: {       
            rotate: 0,            
            depth: 230,         
            stretch: 200,         
            modifier: 1,        
            scale: 0.9,              
            slideShadows: true,   
        },                         
    
        navigation: {
            nextEl: ".gallerySwiper-silder-next",
            prevEl: ".gallerySwiper-silder-prev",
        },
        pagination: {
            el: ".gallerySwiper-pagination",
            clickable: true,
          },
    })
}




if (document.querySelectorAll('.mistakesSwiper').length) {
    const mistakesSwiper = new Swiper('.mistakesSwiper', {
      effect: "creative",
      loop: true,
      speed: 800,
      spaceBetween: 120,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
      
      creativeEffect: {
        prev: {
          translate: ["-100%", 0, 0],
          opacity: 0
        },
        next: {
          translate: ["100%", 0, 0],
          opacity: 0
        }
      },
  
      navigation: {
        nextEl: ".mistakesSwiper-silder-next",
        prevEl: ".mistakesSwiper-silder-prev",
      },
      
      on: {
        init: function() {
          this.slides.forEach(slide => {
            // slide.querySelector('.swiper-slide-inner').style.transition = 'opacity 0.8s ease-in-out';
          });
        }
      }
    })
}



if (document.querySelectorAll('.partnersSwiper').length) {

  const partnersSwiper= new Swiper('.partnersSwiper', {
      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 4,
      speed: 600,
   
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
      },
  })
}

if (document.querySelectorAll('.videoReviewsSwiper').length) {

  const videoReviewsSwiper= new Swiper('.videoReviewsSwiper', {
      loop: true,
      slidesPerView: 2,
      speed: 800,
      spaceBetween: 40,
      grabCursor: true,
   
      // autoplay: {
      //     delay: 4000,
      //     disableOnInteraction: false,
      // },

      navigation: {
        nextEl: ".videoReviewsSwiper-silder-next",
        prevEl: ".videoReviewsSwiper-silder-prev",
      },

      breakpoints: {
        1200: {
          slidesPerView: 2,
        },

        900: {
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
        }
      }
  })
}

if (document.querySelectorAll('.textReviewsSwiper').length) {

  const textReviewsSwiper= new Swiper('.textReviewsSwiper', {
      loop: true,
      slidesPerView: 1,
      speed: 800,
      spaceBetween: 40,
      grabCursor: true,
   
      // autoplay: {
      //     delay: 4000,
      //     disableOnInteraction: false,
      // },

      navigation: {
        nextEl: ".textReviewsSwiper-silder-next",
        prevEl: ".textReviewsSwiper-silder-prev",
      },
  })
}

$(".faq__item").on("click", function () {
    $(".faq__item").find('.faq__item-content').slideUp();
    $(".faq__item").find('.faq__item-header').removeClass('open');

    $(this).find('.faq__item-header').toggleClass('open');
    $(this).find('.faq__item-content').slideToggle();
});


$("#burger_menu").click(function() {
    $(this).toggleClass('open');
    $("#catalogContentAdaptive").toggleClass("open");
    $("html").toggleClass("hidden");
    // $("body").toggleClass("site__fixed");
});


$(".home__catalog-card--pagination img").click(function() {
    $(this).parent().find('img').removeClass('active');
    $(this).addClass('active');

    let currentLink = $(this).attr('src');
    $(this).parent().parent().find('.home__catalog-card--main').attr('src', currentLink);
  
});


$(".why__selects button").click(function() {
    $(".why__selects button").removeClass('active');
    $(this).addClass('active');

    let currentSection = $(this).attr('data-why-btn');

    $('.why__content').removeClass('active');
    $('.why__content[data-why-content="' + currentSection + '"]').addClass('active');
});


$("li.step").click(function() {
    $("li.step").removeClass('active');
    $(this).addClass('active');

    let currentSection = $(this).attr('data-step-btn');

    $('.step__content').removeClass('active');
    $('.step__content[data-step-content="' + currentSection + '"]').addClass('active');
});


//=================== Слайдр галереи ============

    const productSlider = new Swiper('.product-silder', {
      
      speed: 600,
        // scrollbar: {
        //   el: ".product-silder-scrollbar",
        // },
        pagination: {
          el: ".product-silder-scrollbar",
          clickable: true,
        },
    });

    function sliderMouseSlideInit() {
        document.addEventListener("mousemove", function (e) {
            const targetElement = e.target;
            if (targetElement.closest("[data-mousemove-swipe]")) {
                const sliderElement = targetElement.closest(
                    "[data-mousemove-swipe]"
                );
                const sliderItem =
                    sliderElement.swiper.slides[getIndex(sliderElement)];
                const sliderLength = sliderElement.swiper.slides.length;

                if (sliderLength > 1) {
                    const sliderWidth = sliderItem.offsetWidth;
                    const sliderPath = Math.round(sliderWidth / sliderLength);
                    const sliderMousePos =
                        e.clientX - $(sliderElement).offset().left;
                    const sliderSlide = Math.floor(sliderMousePos / sliderPath);
                    sliderElement.swiper.slideTo(sliderSlide);
                }
            }
        });


      // Добавляем событие для отслеживания ухода мыши с элемента слайдера
      document.querySelectorAll('[data-mousemove-swipe]').forEach(function(sliderElement) {
          sliderElement.addEventListener("mouseleave", function() {
              sliderElement.swiper.slideTo(0); // Возвращаем на первый слайд
          });
      });
  
      function getIndex(el) {
          return Array.from(el.parentNode.children).indexOf(el);
      }
  }
  
  if (document.querySelector('[data-mousemove-swipe]')) {
      sliderMouseSlideInit();
  }


  