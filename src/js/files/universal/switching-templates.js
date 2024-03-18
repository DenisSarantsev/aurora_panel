
import { addInformationToAppPage } from '../application/application-main-chain.js'; // Вывод информации о заявке в случае захода на страницу заявки
import { addInformationToVacancyPage } from '../vacancy/vacancy-main-chain.js'; // Вывод информации о вакансии на странице вакансии
import { showOrHiddenPagination } from './pagination.js'; // показываем или скрываем пагинацию в зависимости от шиблона

// Механика скрывания/показывания шаблонов
const showAndHiddenTemplates = (button) => {
	const allTemplates = document.querySelectorAll(".template");
	let buttonTemplateAttribute = button.getAttribute("template-button");
	for ( let template of allTemplates ) {

		if ( template.getAttribute("template-name") !== buttonTemplateAttribute ) {
			template.classList.add("hidden-template");
		} else {
			template.classList.remove("hidden-template");
		}
	}
	if ( button.classList.contains("menu__menu-item") ) {
		showOrHiddenPagination(button);
	}
	if ( button.classList.contains("user-application-button") ) {
		addInformationToAppPage(button.getAttribute("order-id"), button.getAttribute("user-telegram-id"));
	}
	if ( button.classList.contains("vacancy-application-button") ) {
		addInformationToVacancyPage(button.getAttribute("vacancy-id"));
	}
	if ( button.classList.contains("order__back-button") ) {
		document.querySelector(".menu-apps-button").classList.add("menu-active-button");
	}
	if ( button.classList.contains("vacancy__back-button") ) {
		document.querySelector(".menu-vacancies-button").classList.add("menu-active-button");
	}
	if ( button.classList.contains("create-vacancy__back-button") ) {
		document.querySelector(".menu-vacancies-button").classList.add("menu-active-button");
	}
}

export const findAllTemplates = () => {
	// Получаем кнопки Переключения шаблонов
	const allSwitchButtons = document.querySelectorAll(".template-switch-button");
	// Получаем только кнопки верхнего меню
	const allMenuButtons = document.querySelectorAll(".menu__menu-item");
	// Навешиваем прослушиватели на все кнопки переключения шаблонов
	for ( let button of allSwitchButtons ) {
		button.addEventListener("click", (e) => {
			for ( let item of allMenuButtons ) { 
				item.classList.remove("menu-active-button"); 
			}
			if ( e.currentTarget.classList.contains("menu__menu-item") ) {
				e.currentTarget.classList.add("menu-active-button");
			}
			showAndHiddenTemplates(e.currentTarget);
		})
	}
}
