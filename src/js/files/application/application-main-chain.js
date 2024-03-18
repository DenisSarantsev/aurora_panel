import { fetchOrderData } from '../fetch.js'; // Получаем заявку
import { fetchUserData } from '../fetch.js'; // Получаем юзера
import { writeOrderInformationToAppPage } from './application-functions.js'; // Вписываем данные заявки на страницу
import { writeUserInformationToAppPage } from './application-functions.js'; // Вписываем данные юзера на страницу

// --------------> Выводим информацию о конкретной заявке по переданному id
// Вызываем id и запускаем основную цепочку
export const addInformationToAppPage = (userId, userTelegramId) => {
	returnPromice(userId, userTelegramId)
	.then(data => {
		const orderId = data.userId;
		const userTelegramId = data.userTelegramId;
		const result = { orderId, userTelegramId };
		return result
	})
	.then(result => {
		fetchOrderData(result.orderId).then(data => writeOrderInformationToAppPage(data.order));
		fetchUserData(result.userTelegramId).then(data => writeUserInformationToAppPage(data.user));
	})
	// .then(user => writeUserInformationToAppPage(user))
}

// --------------> Функция для запуска основной цепочки
async function returnPromice(userId, userTelegramId) {
	const data = { userId, userTelegramId };
	return data
}

