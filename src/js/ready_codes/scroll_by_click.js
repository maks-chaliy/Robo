//=============/=============/ SCROLL-BY-CLICK /=============/=============

//прокрутка при клике
const $nav = document.querySelector('.nav');
const $navLinks = document.querySelectorAll('.nav__link[data-scroll_by_click]');

if($navLinks.length > 0) {
	$navLinks.forEach(menuLink =>{
		menuLink.addEventListener('click', onMenuLinkClick);
	})

	function onMenuLinkClick(e) {
		const navLink = e.target;
		if(navLink.dataset.scroll_by_click && document.querySelector(navLink.dataset.scroll_by_click)){
			const scrollsectionBlock = document.querySelector(navLink.dataset.scroll_by_click)
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