// Записываем данные на страницу вакансии
export const writeDataToVacancyPage = (vacancy) => {
	console.log(vacancy._id)
	document.querySelector(".vacancy-create").textContent = vacancy.create_at;
	document.querySelector(".vacancy-edit").textContent = vacancy.change_at;
	document.querySelector(".vacancy-name").textContent = vacancy.title;
	document.querySelector(".vacancy-kind").textContent = vacancy.kind;
	document.querySelector(".vacancy-id").textContent = vacancy._id;
	document.querySelector(".vacancy-description").innerHTML = cleanTagsStylesAndAttributes(vacancy.description_html);
	addStatusToVacancy(vacancy);
}

// Устанавливаем правильный статус вакансии
const addStatusToVacancy = (vacancy) => {
	const vacancyStatus = document.querySelector(".vacancy__application-info-item-active-status");
	const greenCircle = document.querySelector(".vacancy-info-item-active-green");
	const redCircle = document.querySelector(".vacancy-info-item-active-red");
	if ( vacancy.is_active === true ) {
		redCircle.classList.add("_hidden");
		greenCircle.classList.remove("_hidden");
		vacancyStatus.innerHTML = "Вакансія активна";
	} else {
		redCircle.classList.remove("_hidden");
		greenCircle.classList.add("_hidden");
		vacancyStatus.innerHTML = "Вакансія не активна";
	}
}

// Удаляем из тегов все атрибуты со стандартными стилями
function cleanTagsStylesAndAttributes(data) {
	let doc = new DOMParser().parseFromString(data, 'text/html');
	function removeStyles(element) {
			element.removeAttribute('style');
			element.removeAttribute('font-family');
			for (let child of element.children) {
					removeStyles(child);
			}
	}
	removeStyles(doc.body);
	return doc.documentElement.outerHTML;
}