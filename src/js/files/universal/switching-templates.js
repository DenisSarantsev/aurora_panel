document.addEventListener("DOMContentLoaded", () => {
	// Получаем все шаблоны, с которыми будут проводиться манипуляции
	const allTemplates = document.querySelectorAll(".template");
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
			e.currentTarget.classList.add("menu-active-button");
			showAndHiddenTemplates(e.currentTarget);
		})
	}
	// Механика скрывания/показывания шаблонов
	const showAndHiddenTemplates = (button) => {
		let buttonTemplateAttribute = button.getAttribute("template-button");
		for ( let template of allTemplates ) {
			if ( template.getAttribute("template-name") !== buttonTemplateAttribute ) {
				template.classList.add("hidden-template");
			} else {
				template.classList.remove("hidden-template");
			}
		}
	}
	
})