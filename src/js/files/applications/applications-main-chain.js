// Импорт fetch функций
import { fetchOrdersData } from '../fetch.js';
import { fetchVacanciesData } from '../fetch.js';
// Импорт функций для фильтра
import { kindFilterOrders } from './applications-functions.js';
import { writeVacanciesInSelectList } from './applications-functions.js';
import { addKindCheckboxesInApplicationsFilter } from './applications-functions.js';
import { vacancyFilterOrders } from './applications-functions.js';
import { searchFilterOrders } from './applications-functions.js';
import { sortOrders } from './applications-functions.js';
import { divideOrdersToPages } from './applications-functions.js';
import { addOrdersToTable } from './applications-functions.js';
import { addListenersToPaginationButtons } from './applications-functions.js';
import { showCurrentPageOrders } from './applications-functions.js';
// Другие функции
import { showOrHiddenEyes } from './applications-functions.js';
import { closeBlocksAfterClick } from '../universal/collapse-filter.js';
import { clearOrdersFilter } from './applications-functions.js';

// ------------------------------------------------> Функция вызова fetch запроса с цепочкой промисов, отвечающих за фильтрацию
const runFetchWithMainChain = () => {
	fetchOrdersData()
  .then(orders => {
    orders = [
    {
			"_id": 1,
			"telegram_id": 620527199,
			"kind": "офіс",
			"title": "Обліковець з реєстрації бухгалтерських даних",
			"name": "Sergii",
			"feedback_phone": "380675478881",
			"city": "Odesa",
			"birthday": "15.05.1982",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-02-06 00:40:38",
			"feedback": false
    },
		{
			"_id": 2,
			"telegram_id": 620527181,
			"kind": "офіс",
			"title": "Менеджер/ка з комунікацій у відділ корпоративної соціальної відповідальності (КСВ)",
			"name": "Денис",
			"feedback_phone": "380675478882",
			"city": "Київ",
			"birthday": "15.05.1986",
			"file_name": "name",
			"status": null,
			"is_active": true,
			"create_at": "2024-01-16 01:40:38",
			"feedback": false
    },
		{
			"_id": 3,
			"telegram_id": 620527112,
			"kind": "склад",
			"title": "Товарознавець з якості м.Полтава",
			"name": "Іван",
			"feedback_phone": "380675478883",
			"city": "Житомир",
			"birthday": "15.05.1995",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-02-15 15:30:38",
			"feedback": false
    },
		{
			"_id": 4,
			"telegram_id": 620527113,
			"kind": "склад",
			"title": "Товарознавець з якості м.Полтава",
			"name": "Олександр",
			"feedback_phone": "380675478884",
			"city": "Миколаїв",
			"birthday": "15.05.1999",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-02-06 11:22:32",
			"feedback": false
    },
		{
			"_id": 5,
			"telegram_id": 620527114,
			"kind": "офіс",
			"title": "Прибиральниця в офіс",
			"name": "Петро",
			"feedback_phone": "380675478885",
			"city": "Севастополь",
			"birthday": "15.05.1979",
			"file_name": "name",
			"status": null,
			"is_active": true,
			"create_at": "2024-03-26 00:33:33",
			"feedback": false
    },
		{
			"_id": 6,
			"telegram_id": 620527115,
			"kind": "офіс",
			"title": "Аналітик",
			"name": "Андрій",
			"feedback_phone": "380675478886",
			"city": "Львів",
			"birthday": "15.05.1989",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-27 12:46:26",
			"feedback": false
    },
		{
			"_id": 7,
			"telegram_id": 620527116,
			"kind": "офіс",
			"title": "Бекенд розробник",
			"name": "Гліб",
			"feedback_phone": "380675478887",
			"city": "Херсон",
			"birthday": "15.05.1980",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-03-11 05:34:11",
			"feedback": false
    },
		{
			"_id": 8,
			"telegram_id": 620527121,
			"kind": "склад",
			"title": "Комірник",
			"name": "Василь",
			"feedback_phone": "380675478888",
			"city": "Коростень",
			"birthday": "15.05.1998",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-02-18 04:15:45",
			"feedback": false
    },
		{
			"_id": 9,
			"telegram_id": 620527122,
			"kind": "магазин",
			"title": "Водій",
			"name": "Іван",
			"feedback_phone": "380675478889",
			"city": "Рівне",
			"birthday": "15.05.2001",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-11 01:28:34",
			"feedback": false
    },
		{
			"_id": 10,
			"telegram_id": 620527123,
			"kind": "магазин",
			"title": "Кур'єр",
			"name": "Олександр",
			"feedback_phone": "380675478810",
			"city": "Запоріжжя",
			"birthday": "15.05.2004",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-11 02:35:55",
			"feedback": false
    },
		{
			"_id": 11,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 11,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 12,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 11,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 13,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 14,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 15,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 16,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 17,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 18,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 19,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 20,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 21,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 22,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 23,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 24,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 25,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Запорізька область, село Коцюбинське",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    },
		{
			"_id": 26,
			"telegram_id": 620527124,
			"kind": "магазин",
			"title": "Продавець",
			"name": "Сергій",
			"feedback_phone": "380675478834",
			"city": "Київська область, с. Бобриця, вул. Оранжерейна 8, буд. 15",
			"birthday": "15.05.2000",
			"file_name": null,
			"status": null,
			"is_active": true,
			"create_at": "2024-01-02 18:45:32",
			"feedback": false
    }
	]
	return orders;
  })
	.then(orders => kindFilterOrders(orders))
	.then(orders => vacancyFilterOrders(orders))
	.then(orders => searchFilterOrders(orders))
	.then(orders => sortOrders(orders))
	.then(orders => divideOrdersToPages(orders))
	.then(result => {
		const orders = result.orders;
		const ordersOnPage = result.ordersOnPage;
		return addOrdersToTable(orders, ordersOnPage)
	})
	.then(result => {
		const orders = result.orders;
		const ordersOnPage = result.ordersOnPage;
		return addListenersToPaginationButtons(orders, ordersOnPage)
	})
	.then(result => {
		const orders = result.orders;
		const ordersOnPage = result.ordersOnPage;
		const currentPage = result.currentPage;
		showCurrentPageOrders( orders, currentPage, ordersOnPage );
	})
  .catch(error => {
    console.error('Ошибка:', error);
    // Обработка ошибок при выполнении запроса
  });
}

document.addEventListener("DOMContentLoaded", () => {
// ------------------------------------------------> Запускаем цепочку создания полей в фильтре после загрузки документа
// Создаем чекбоксы
addKindCheckboxesInApplicationsFilter(fetchVacanciesData)
.then(checkboxes => {
	for ( let checkbox of checkboxes ) {
		checkbox.addEventListener("change", () => {
			writeVacanciesInSelectList(fetchVacanciesData);
		})
	}
})
.then(writeVacanciesInSelectList(fetchVacanciesData)) // Заполняем список с вакансиями
.then(runFetchWithMainChain())

// ------------------------------------------------> Навешиваем события для вызова цепочки фильтрации данных
// Получаем необходимые элементы для скрытия фильтра
const secondIconImage = document.querySelector(".applications-filter__second-minus-icon");
const filterContainer = document.querySelector(".applications-filter");
const parametrsBlock = document.querySelector(".applications-filter__parametrs-container");
const bottomBlock = document.querySelector(".applications-filter__bottom-container");
// При клике на кнопку "Фильтровать"
document.querySelector(".applications-filter__result-button").addEventListener("click", () => {
	runFetchWithMainChain();
	showOrHiddenEyes();
	closeBlocksAfterClick(filterContainer, secondIconImage, parametrsBlock, bottomBlock);
})
// При клике на кнопку "Поиск"
// document.querySelector(".applications-filter__search-button").addEventListener("click", () => {
// 	runFetchWithMainChain();
// })
// При нажатии в поле поиска
document.querySelector(".applications-filter__search-input").addEventListener("keyup", (e) => {
	runFetchWithMainChain();
	showOrHiddenEyes();
})
// При выборе любого option из списка select (сортировка)
document.querySelector(".applications-filter__sort").addEventListener("change", () => {
	runFetchWithMainChain();
	showOrHiddenEyes();
})
// Сборс фильтра при клике на кнопку "Скинути" и вывод всех (неотфильтрованных) заявок
document.querySelector(".applications-filter__reset-button").addEventListener("click", () => {
	clearOrdersFilter();
	runFetchWithMainChain();
})

})