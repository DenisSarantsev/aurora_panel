import { fetchOrderData } from '../fetch.js'; // Получаем заявку
import { fetchUserData } from '../fetch.js'; // Получаем юзера
import { writeOrderInformationToAppPage } from './application-functions.js'; // Вписываем данные заявки на страницу
import { writeUserInformationToAppPage } from './application-functions.js'; // Вписываем данные юзера на страницу
import { removePreloaderInKindsList } from '../preloader.js'; // Функция отключения прелоадера
import { downloadResumeFile } from './application-functions.js'; // Функция зарузки файла
import { addListenerToSendMessage } from './application-functions.js'; // Функционал отправки сообщения пользователю
import { addListenerToBlockUserButton } from './application-functions.js'; // Функционал блокировки пользователя
import { unblockStatusesList } from './application-functions.js'; // Вешаем событие клика на кнопку изменения статуса
import { addStatusesToList } from './application-functions.js'; // Добавляем все нужние статусы в список

// --------------> Выводим информацию о конкретной заявке по переданному id
// Вызываем id и запускаем основную цепочку
export const addInformationToAppPage = (orderId, userTelegramId) => {
	returnPromice(orderId, userTelegramId)
	.then(data => {
		const orderId = data.userId;
		const userTelegramId = data.userTelegramId;
		const result = { orderId, userTelegramId };
		return result
	})
	.then(result => {
		fetchOrderData(result.orderId).then(data => {
			unblockStatusesList();
			addStatusesToList(data);
			writeOrderInformationToAppPage(data.order);
			downloadResumeFile(data);
		});
		fetchUserData(result.userTelegramId).then(data => writeUserInformationToAppPage(data.user));
	})
	.then(removePreloaderInKindsList());
	// .then(user => writeUserInformationToAppPage(user))
}

// --------------> Функция для запуска основной цепочки
async function returnPromice(userId, userTelegramId) {
	const data = { userId, userTelegramId };
	return data
}

document.addEventListener("DOMContentLoaded", () => {
	addListenerToSendMessage();
	addListenerToBlockUserButton();
	unblockStatusesList();
})