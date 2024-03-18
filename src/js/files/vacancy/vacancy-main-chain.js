import { fetchVacancyData } from "../fetch.js" // Получение вакансии
import { writeDataToVacancyPage } from "./vacancy-functions.js"; // Запись данных на страницу

// --------------> Выводим информацию о конкретной заявке по переданному id

// Вызываем id и запускаем основную цепочку
export const addInformationToVacancyPage = (vacancyId) => {
	fetchVacancyData(vacancyId)
	.then(data => writeDataToVacancyPage(data.vacancy))
}