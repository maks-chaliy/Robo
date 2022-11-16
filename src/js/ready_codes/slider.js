'use strict';

const $slider = document.querySelector('.slider');

if($slider) {
	new Swiper(".slider", {
		slideClass: 'slider__slide',
		wrapperClass: 'slider__wrapper',
		// slidesPerView: 4,
		spaceBetween: 40,
		//parallax: true,
		speed: 1500,

		navigation: {
			nextEl: '.slider__btn.slider__btn--next',
			prevEl: '.slider__btn.slider__btn--prev',
		},

		scrollbar: {
			el: '.slider__scroll',
			draggable: true,
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.4,
				spaceBetween: 20
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			// when window width is >= 640px
			1024: {
				slidesPerView: 4,
				spaceBetween: 40
			}
		}
	})
};