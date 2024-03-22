import { fetchVacancyData } from "../fetch.js" // Получение вакансии
import { writeDataToVacancyPage } from "./vacancy-functions.js"; // Запись данных на страницу
import { removePreloaderInKindsList } from '../preloader.js' // Функция отключения прелоадера

// --------------> Выводим информацию о конкретной заявке по переданному id

// Вызываем id и запускаем основную цепочку
export const addInformationToVacancyPage = (vacancyId) => {
	fetchVacancyData(vacancyId)
	.then(data => {
		writeDataToVacancyPage(data.vacancy);
		removePreloaderInKindsList(); // Отключаем прелоадер
	})
}