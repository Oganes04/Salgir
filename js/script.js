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
        speed: 800,
        spaceBetween: 120,
        grabCursor: true,
        centeredSlides: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
   
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

    const mistakesSwiper= new Swiper('.mistakesSwiper', {
        // effect: "fade",
        loop: true,
        speed: 800,
        spaceBetween: 120,
        grabCursor: true,
        centeredSlides: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
   
        navigation: {
            nextEl: ".mistakesSwiper-silder-next",
            prevEl: ".mistakesSwiper-silder-prev",
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