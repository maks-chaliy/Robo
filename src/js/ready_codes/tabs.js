'use strict';

const $tabsBtns = document.querySelectorAll('._tabs__btn');
const $tabsContent = document.querySelectorAll('._tabs__content');

$tabsBtns.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener('click', (e) => {
		let currentBtn = e.currentTarget;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('_tabs__btn--active')) {

			$tabsBtns.forEach((item) => {
				item.classList.remove('_tabs__btn--active');
			});

			$tabsContent.forEach((item) => {
				item.classList.remove('_tabs__content--active');
			})

			currentBtn.classList.add('_tabs__btn--active');
			currentTab.classList.add('_tabs__content--active');
		}
	})
}

document.querySelector('._tabs__btn:nth-child(2)').click();

