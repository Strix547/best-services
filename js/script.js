document.addEventListener('DOMContentLoaded', () => {
  const headerSlider = new Swiper ('#header-slider', {
    loop: true,
    navigation: {
      nextEl: '.btn-next-unique',
      prevEl: '.btn-prev-unique',
    }
  })
  const ourServicesSlider = new Swiper ('#our-services-slider', {
    loop: true,
    navigation: {
      nextEl: '.btn-next-unique',
      prevEl: '.btn-prev-unique',
    },
    slidesPerView: 3
  })

  const feedbackSlider = new Swiper ('#feedback-slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.btn-next-unique',
      prevEl: '.btn-prev-unique',
    }
  })
})