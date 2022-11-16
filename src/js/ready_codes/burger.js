//=============/=============/ BURGER /=============/=============

const $burger = document.querySelector('._burger');
const $nav = document.querySelector('.nav');
const $navItems = document.querySelectorAll('.nav__item');
const $body = document.body;
// const $header = document.querySelector('.header');
// const headerHeight = $header.offsetHeight;
// console.log(headerHeight);
// document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

$burger.addEventListener('click', () => {
	$body.classList.toggle('_stop-scroll');
	$burger.classList.toggle('_burger--active');
	$nav.classList.toggle('nav--active');
});

$navItems.forEach((el) => {
	el.addEventListener('click', () => {
		$body.classList.remove('_stop-scroll');
		$burger.classList.remove('_burger--active');
		$nav.classList.remove('nav--active');
	})
});
