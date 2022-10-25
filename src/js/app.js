//=============/=============/=============/=============/=============
//========== SETTINGS ==========
import * as flsFunctions from "./settings/webp.js";
flsFunctions.isWebp();


//=============/=============/=============/=============/=============
//========== MODULES ==========



//=============/=============/=============/=============/=============
//========== READYCODES ==========
//import '../js/readyCodes/    ';




//прокрутка при клике
const $nav = document.querySelector('.nav');
const $navLinks = document.querySelectorAll('.nav__link[data-scrollsection]');

if($navLinks.length > 0) {
	$navLinks.forEach(menuLink =>{
		menuLink.addEventListener('click', onMenuLinkClick);
	})

	function onMenuLinkClick(e) {
		const navLink = e.target;
		if(navLink.dataset.scrollsection && document.querySelector(navLink.dataset.scrollsection)){
			const scrollsectionBlock = document.querySelector(navLink.dataset.scrollsection)
			const scrollsectionBlockValue = scrollsectionBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			// if($navIcon.classList.contains('_active')) {
			// 	document.body.classList.remove('_stop-scroll')
			// 	$menuIcon.classList.remove('_active');
			// 	$nav.classList.remove('_active');
			// }

			window.scrollTo({
				top: scrollsectionBlockValue,
				behavior: 'smooth'
			});
			e.preventDefault();
		}
	}
}