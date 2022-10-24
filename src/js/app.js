//=============/=============/=============/=============/=============
//========== SETTINGS ==========
import * as flsFunctions from "./settings/webp.js";
flsFunctions.isWebp();


//=============/=============/=============/=============/=============
//========== MODULES ==========



//=============/=============/=============/=============/=============
//========== READYCODES ==========
//import '../js/readyCodes/    ';




// //прокрутка при клике
// const $menuBody = document.querySelector('.nav');
// const $menuLinks = document.querySelectorAll('.nav__link[data-goto]');

// if($menuLinks.length > 0) {
// 	$menuLinks.forEach(menuLink =>{
// 		menuLink.addEventListener('click', onMenuLinkClick);
// 	})

// 	function onMenuLinkClick(e) {
// 		const menuLink = e.target;
// 		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto)
// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

// 			if($menuIcon.classList.contains('_active')) {
// 				document.body.classList.remove('_stop-scroll')
// 				$menuIcon.classList.remove('_active');
// 				$menuBody.classList.remove('_active');
// 			}

// 			window.scrollTo({
// 				top:gotoBlockValue,
// 				behavior: 'smooth'
// 			});
// 			e.preventDefault();
// 		}
// 	}
// }