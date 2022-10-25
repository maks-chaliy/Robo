const $trainersSlider = document.querySelector('.trainers__slider');

let trainersSlider = new Swiper($trainersSlider, {

	slidesPerView: 4,
	spaceBetween: 40,
	// breakpoints: {
	// 	769: {
	// 		slidesPerView: 4,
	// 		spaceBetween: 40,
	// 	}
	// },
	scrollbar: {
		el: '.trainers__scroll',
		dragable: true,
	},
		navigation: {
		nextEl: '.trainers__slider-btn--next',
		prevEl: '.trainers__slider-btn--prev',
	},
})



/*
// const $sliderMain = document.querySelector('.slider-main');

// let sliderMain = new Swiper($sliderMain, {
// 	slideClass: 'slider-main__slide',
// 	wrapperClass: 'slider-main__wrapper',
// }); 

if (document.querySelector('.slider-main')) {
	new Swiper('.slider-main', {

		//=============/=============/=============/=============/=============
		//переименовать классы слайдера
		slideClass: 'slider-main__slide',
		wrapperClass: 'slider-main__wrapper',

		//=============/=============/=============/=============/=============
		//количество слайдов в одном блоке
		slidesPerView: 4,

		//=============/=============/=============/=============/=============
		//бесконечный цикл прокрутки по кругу
		loop: true,

		//=============/=============/=============/=============/=============
		//отступ между слайдами
		spaceBetween: 40,

		//=============/=============/=============/=============/=============
		//скорость
		// speed: 1400,

		//=============/=============/=============/=============/=============
		//эффект паралакса
		// parallax: true,

		//=============/=============/=============/=============/=============
		//сменяет слайды группой
		// slidesPerGroup: 2,

		//=============/=============/=============/=============/=============
		//arrows
		navigation: {
			nextEl: '.slider-main__arrow-next',
			prevEl: '.slider-main__arrow-prev',
		},

		//=============/=============/=============/=============/=============
		//dotts
		// pagination: {
		// 	el: '.slider-main__dotts',
		// 	type: 'bullets',
		// 	//если нужны цифры нужен другой тип пагинации
		// 	//type: 'fraction',
		// 	//чтобы точки были кликабельны
		// 	clickable: true,
		// },

		//=============/=============/=============/=============/=============
		//автоматическое переключение слайдера каждые 2 сек
		// autoplay: {
		// 	delay: 4000,
		// },

		//=============/=============/=============/=============/=============
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 10
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20
		// 	},
		// 	1024: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 30
		// 	}
		// },
	});
}
*/