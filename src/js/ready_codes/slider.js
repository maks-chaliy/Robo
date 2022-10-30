'use strict';

const $slider = document.querySelector('.slider');

if($slider) {
	new Swiper(".slider", {
		slideClass: 'slider__slide',
		wrapperClass: 'slider__wrapper',
		slidesPerView: 4,
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
	})
};