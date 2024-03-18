// Импорт fetch функций
import { fetchVacanciesData } from '../fetch.js';
// Импорт функций для фильтра
import { addKindCheckboxesInVacanciesFilter } from './vacancies-functions.js';
import { filterVacanciesByKinds } from './vacancies-functions.js';
import { filterVacanciesBySearchKeywords } from './vacancies-functions.js';
import { addVacanciesToTable } from './vacancies-functions.js';
// Функция для обновления всех шаблонов
import { findAllTemplates } from '../universal/switching-templates.js';

// ------------------------------------------------> Функция вызова fetch запроса с цепочкой промисов, отвечающих за фильтрацию
const runFetchVacanciesWithMainChain = () => {
	fetchVacanciesData()
	.then(vacancies => {
		return vacancies
	})
	.then(vacancies => filterVacanciesByKinds(vacancies))
	.then(vacancies => filterVacanciesBySearchKeywords(vacancies))
	.then(vacancies => addVacanciesToTable(vacancies))
	.then(marker => findAllTemplates(marker))
}

runFetchVacanciesWithMainChain()

document.addEventListener("DOMContentLoaded", () => {
// ------------------------------------------------> Запускаем цепочку создания полей в фильтре после загрузки документа
// Создаем чекбоксы
addKindCheckboxesInVacanciesFilter(fetchVacanciesData)
.then(checkboxes => addListenerToVacanciesKindsCheckboxes(checkboxes))

// Навешиваем прослушиватели на чекбоксы
const addListenerToVacanciesKindsCheckboxes = (checkboxes) => {
	for ( let item of checkboxes ) {
		item.addEventListener("click", () => {
			runFetchVacanciesWithMainChain()
		})
	}
}

// Навешиваем прослушиватель на строку поиска
document.querySelector(".search-vacancies__input").addEventListener("keyup", () => {
	runFetchVacanciesWithMainChain()
})
})