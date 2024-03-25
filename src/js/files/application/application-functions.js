import { data } from '../data.js'; // Данные, полученные через Jinja2
import { fetchPostComment } from '../fetch.js'; // Post запрос для смены статсу и обновления комментария
import { addInformationToAppPage } from './application-main-chain.js'; // Запуск основной цепочки для перезаписи информации на странцие
import { fetchPostMessageToUser } from '../fetch.js'; // Post запрос для отправки сообщения пользователю
import { fetchPostBlockUser } from '../fetch.js'; // Post запрос для блокировки пользователя
import { fetchChangeOrderStatus } from '../fetch.js'; // Post запрос для смены статуса
import { runFetchWithMainChain } from '../applications/applications-main-chain.js' // Запуск цепочки обновления списка заявок

let hrStatus = data.hr_status;
let hrTelegramId = data.telegram_id;

// --------------> Запись нужной информации о заявке на странице заявки
export const writeOrderInformationToAppPage = (order) => {
	console.log()
	document.querySelector(".order-app-name").textContent = order.name;
	document.querySelector(".order-app-phone").textContent = order.feedback_phone;
	document.querySelector(".order-app-city").textContent = order.city;
	document.querySelector(".order-app-date").textContent = order.birthday;
	document.querySelector(".order-app-title").textContent = order.title;
	document.querySelector(".order-app-kind").textContent = order.kind;
	document.querySelector(".order-app-id").textContent = order._id;
	document.querySelector(".order-app-create").textContent = order.create_at;
	document.querySelector(".user-external-status").textContent = order.feedback;

	addStatusToOrderPage(order);
	addInfoAboutResume(order);
	addRatingToOrderPage(order);
	document.querySelector(".order__application-info-bottom-line-success-message").classList.add("_app-info-hidden");
}

// --------------> Запись нужной информации о пользователе на странице заявки
export const writeUserInformationToAppPage = (user) => {
	
	document.querySelector(".user-app-create").textContent = user.created_at;
	document.querySelector(".user-app-name").textContent = user.first_name;
	document.querySelector(".user-app-phone").textContent = user.phone_number;
	document.querySelector(".user-tg-id").textContent = user.telegram_id;
	document.querySelector(".user-app-tg-link").textContent = user.username;
	document.querySelector(".user-app-tg-href").setAttribute("href", `https://t.me/${user.username}`);

	addCommentToApplicationPage(user);
	writeNewCommentToAllComments(user);
}

// --------------> Загружаем файл на компьютер по клику
export const downloadResumeFile = (data) => {
	let resumeName = data.order.file_name;
	let resumeString = data.order.file_data;
	let downloadResumeButton = document.querySelector(".order-app-resume");
	downloadResumeButton.addEventListener("click", () => {

	// Разбираем строку Base64 в массив байтов
	let binaryString = atob(resumeString);
	// Разбиваем строку на массив чисел
	let numbers = binaryString.split(',').map(Number);
	// Создаем Uint8Array из массива чисел
	let uintArray = new Uint8Array(numbers);
	// Создаем Blob из массива Uint8Array
	let blob = new Blob([uintArray], { type: 'application/octet-stream' });
	// Создаем ссылку для скачивания файла
	let link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	console.log(link.href)
	link.download = `${resumeName}`; // Указываем имя файла для скачивания
	link.click(); // Автоматически запускаем скачивание файла
	})
}

// Вывод комментариев на странице заявки
const addCommentToApplicationPage = (user) => {
	const commentsArea = document.querySelector(".order__application-info-comments-text");
	commentsArea.innerHTML = '';
	commentsArea.insertAdjacentHTML("beforeend", `${replaceSymbolsToTags(user.info)}`)
}

// Функция, которая заменяет символы на теги для форматирования
const replaceSymbolsToTags = (text) => {
	return text
			.replace(/\r\n/g, " ")  // Заменяем символы \r\n строки на пробел
			.replace(/\n20/g, "<br><br>20")  // Заменяем символ переноса строки на HTML-тег <br>
}

// Ставим статус для заявки (активна / не активна)
const addStatusToOrderPage = (order) => {
	const orderStatus = document.querySelector(".order__application-info-item-active-status");
	const greenCircle = document.querySelector(".application-info-item-active-green");
	const redCircle = document.querySelector(".application-info-item-active-red");
	if ( order.is_active === true ) {
		redCircle.classList.add("_hidden");
		greenCircle.classList.remove("_hidden");
		orderStatus.innerHTML = "Заявка активна";
	} else {
		redCircle.classList.remove("_hidden");
		greenCircle.classList.add("_hidden");
		orderStatus.innerHTML = "Заявка не активна";
	}
}

// Выводим информацию о резюме
const addInfoAboutResume = (order) => {
	const buttonContainer = document.querySelector(".order__application-info-resume-button-container");
	const downloadButton = document.querySelector(".order__application-download-resume");
	const resumeText = document.querySelector(".order-app-resume");
	if ( order.file_name !== null && order.file_name !== "" ) {
		resumeText.textContent = order.file_name;
		buttonContainer.classList.add("color-blue");
		downloadButton.classList.remove("_hidden");
	} else {
		resumeText.textContent = "Відсутнє";
		buttonContainer.classList.remove("color-blue");
		downloadButton.classList.add("_hidden");
	}
}

// Определяем способ оценки и вставляем оценку на страницу
const addRatingToOrderPage = (order) => {
	const ratingType = document.querySelector(".order-app-rating-type");
	const rating = document.querySelector(".order-app-rating");
	if ( order.qualities !== "" && order.qualities !== null	) {
		ratingType.textContent = "Оцінка за допомогою Chat GPT";
		rating.textContent = order.qualities;
	} else if ( order.points !== "" && order.points !== null ) {
		ratingType.textContent = "Оцінка за к-стю правильних відповідей";
		rating.textContent = order.points;
	} else {
		ratingType.textContent = "";
		rating.textContent = "";
	}
}

// -------------------------------------------------------------------------- Запись новой информации в комментарии
const writeCommentHandleClick = () => {
  const textarea = document.querySelector(".order__application-info-comments-textarea");
  if (textarea.value.length === 0) {
    textarea.classList.add("textarea-red-border");
  } else {
    textarea.classList.add("textarea-transparent-border");
    let newText = document.querySelector(".order__application-info-comments-textarea").value;
    fetchPostComment( +document.querySelector(".order-app-id").textContent, data.hr_status, data.telegram_id, newText)
      .then(data => {
        addInformationToAppPage( +document.querySelector(".order-app-id").textContent, +document.querySelector(".user-tg-id").textContent )
				textarea.value = '';
      })
  }
};

// Добавление прослушивателя события
export const writeNewCommentToAllComments = (user) => {
	removeClickListener()
  const sendButton = document.querySelector(".order__application-info-comments-button");
  sendButton.addEventListener("click", writeCommentHandleClick);
}

// Удаление прослушивателя события
const removeClickListener = () => {
  const sendButton = document.querySelector(".order__application-info-comments-button");
  sendButton.removeEventListener("click", writeCommentHandleClick);
};

// -------------------------------------------------------------------------- Отправка сообщения пользователю
// Навешиваем событие клика на кнопку отправки сообщения
export const addListenerToSendMessage = () => {
	const modalWindow = document.querySelector(".message-window");
	document.querySelector(".order__user-send-message-button").addEventListener("click", () => {
		modalWindow.classList.remove("_hidden");
		modalWindow.querySelector(".message-window__fields-container").classList.remove("_hidden")
	})
	document.querySelector(".message-window__close-button").addEventListener("click", () => {
		modalWindow.classList.add("_hidden");
		modalWindow.querySelector(".message-window__success").classList.add("_hidden");
	})
	modalWindow.querySelector(".message-window__send-button").addEventListener("click", () => {
		if ( modalWindow.querySelector(".message-window__textarea").value === "" ) {
			modalWindow.querySelector(".message-window__textarea").classList.add("modal-window-red-border");
		} else {
			modalWindow.querySelector(".message-window__textarea").classList.remove("modal-window-red-border");
			const orderData = document.querySelector(".order__application-info");
			const orderID = +orderData.querySelector(".order-app-id").textContent;
			const userData = document.querySelector(".order__user-info");
			const userTelegramID = +userData.querySelector(".user-tg-id").textContent;
			const messageText = modalWindow.querySelector(".message-window__textarea").value;
			const modalContentWrapper = modalWindow.querySelector(".message-window__fields-container");
			const successMessageBlock = modalWindow.querySelector(".message-window__success");
			fetchPostMessageToUser(orderID, data.hr_status, data.telegram_id, messageText)
			.then(data => {
				modalContentWrapper.classList.add("_hidden");
				successMessageBlock.classList.remove("_hidden");
				addInformationToAppPage( +document.querySelector(".order-app-id").textContent, +document.querySelector(".user-tg-id").textContent );
				document.querySelector(".message-window__textarea").value = '';
			})
		}
	})
}

// -------------------------------------------------------------------------- Блокировка пользователя
export const addListenerToBlockUserButton = () => {
	const modalWindow = document.querySelector(".user-block-window");
	document.querySelector(".order__user-black-list-button").addEventListener("click", () => {
		modalWindow.classList.remove("_hidden-window");
		modalWindow.querySelector(".user-block-window__fields-container").classList.remove("_hidden-window");
	})
	document.querySelector(".user-block-window__close-button").addEventListener("click", () => {
		modalWindow.classList.add("_hidden-window");
		modalWindow.querySelector(".user-block-window__success").classList.add("_hidden-window");
	})
	modalWindow.querySelector(".user-block-window__send-button").addEventListener("click", () => {
		if ( modalWindow.querySelector(".user-block-window__textarea").value === "" ) {
			modalWindow.querySelector(".user-block-window__textarea").classList.add("modal-block-window-red-border");
		} else {
			modalWindow.querySelector(".user-block-window__textarea").classList.remove("modal-block-window-red-border");
			const orderData = document.querySelector(".order__application-info");
			const orderID = +orderData.querySelector(".order-app-id").textContent;
			const userData = document.querySelector(".order__user-info");
			const userTelegramID = +userData.querySelector(".user-tg-id").textContent;
			const messageText = modalWindow.querySelector(".user-block-window__textarea").value;
			const modalContentWrapper = modalWindow.querySelector(".user-block-window__fields-container");
			const successMessageBlock = modalWindow.querySelector(".user-block-window__success");
			fetchPostBlockUser(orderID, data.hr_status, data.telegram_id, messageText)
			.then(data => {
				modalContentWrapper.classList.add("_hidden-window");
				successMessageBlock.classList.remove("_hidden-window");
				addInformationToAppPage( +document.querySelector(".order-app-id").textContent, +document.querySelector(".user-tg-id").textContent );
				document.querySelector(".user-block-window__textarea").value = '';
			})
		}
	})
}

// -------------------------------------------------------------------------- Изменение статуса
// Добавление статусов в список
export const addStatusesToList = (orderData) => {
	
	const allStatuses = orderData.statuses;
	const currentKind = orderData.order.kind;
	const currentStatus = orderData.order.status;
	const currentStatuses = [];
	const statusesList = document.querySelector(".order__application-statuses-list");
	const cancelStatusButton = document.querySelector(".order__application-info-bottom-line-cancel-button");
	const saveStatusButton = document.querySelector(".order__application-info-bottom-line-save-button");

	// Находим все статусы, которые соответсвтуют напправлению текущей заявки
	for ( let i = 0; i < Object.keys(allStatuses).length; i++ ) {
		if ( allStatuses[i].kind === currentKind ) {
			currentStatuses.push(allStatuses[i].internal_status);
		}
	}
	
	// Добавляем статусы в список и устанавливаем текущий статус как selected
	statusesList.innerHTML = '';
	for ( let item of currentStatuses ) {
		if ( item === currentStatus ) {
			statusesList.insertAdjacentHTML("beforeend", `<option selected value="${item}" class="order__application-statuses-list-item">${item}</option>`)
		} else {
			statusesList.insertAdjacentHTML("beforeend", `<option value="${item}" class="order__application-statuses-list-item">${item}</option>`)
		}
	}

	// Переключаем статус selected

	let temporaryStatus = currentStatus;
	statusesList.addEventListener("change", (event) => {
		const selectedOption = event.target.options[event.target.selectedIndex];
		const selectedValue = selectedOption.value;
    temporaryStatus = selectedValue;

	})

	cancelStatusButton.addEventListener("click", () => {
		addMainStatusAndHiddenButtons(currentStatus, statusesList)
	})
	saveStatusButton.addEventListener("click", () => {
		installNewStatus(orderData.order._id, hrStatus, hrTelegramId, temporaryStatus, statusesList);
	})

}

// Убираем кнопки сохранения и отмены по дефолту и показываем при изменении
export const unblockStatusesList = () => {
	const statusesList = document.querySelector(".order__application-statuses-list");
	statusesList.disabled = true;
	const changeStatusButton = document.querySelector(".order__application-info-bottom-line-active-button");
	const saveStatusButton = document.querySelector(".order__application-info-bottom-line-save-button");
	const cancelStatusButton = document.querySelector(".order__application-info-bottom-line-cancel-button");

	changeStatusButton.classList.remove("_app-info-hidden");
	saveStatusButton.classList.add("_app-info-hidden");
	cancelStatusButton.classList.add("_app-info-hidden");

	changeStatusButton.addEventListener("click", () => {
		statusesList.disabled = false;
		changeStatusButton.classList.add("_app-info-hidden");
		saveStatusButton.classList.remove("_app-info-hidden");
		cancelStatusButton.classList.remove("_app-info-hidden");
		document.querySelector(".order__application-info-bottom-line-success-message").classList.add("_app-info-hidden");
	})
}

// Устанавливаем текущий option после отмены
const addMainStatusAndHiddenButtons = (currentStatus, statusesList) => {
	const changeStatusButton = document.querySelector(".order__application-info-bottom-line-active-button");
	const saveStatusButton = document.querySelector(".order__application-info-bottom-line-save-button");
	const cancelStatusButton = document.querySelector(".order__application-info-bottom-line-cancel-button");
	statusesList.disabled = true;
	changeStatusButton.classList.remove("_app-info-hidden");
	saveStatusButton.classList.add("_app-info-hidden");
	cancelStatusButton.classList.add("_app-info-hidden");
	for ( let item of statusesList.children ) {
		item.removeAttribute("selected")
		if ( item.value === currentStatus ) {
			item.selected = true;
		}
	}
}

// Записываем новый статус и обновляем контент на странице
const installNewStatus = ( orderId, hrStatus, telegramId, temporaryStatus, statusesList ) => {
	fetchChangeOrderStatus( orderId, hrStatus, telegramId, temporaryStatus )
	.then(data => {
		if ( data.change_status === true ) {
			// addInformationToAppPage( +document.querySelector(".order-app-id").textContent, +document.querySelector(".user-tg-id").textContent );
			document.querySelector(".order__application-info-bottom-line-success-message").classList.remove("_app-info-hidden");
			// addInformationToAppPage(orderId, telegramId);
			// runFetchWithMainChain();
		}
	})
	const changeStatusButton = document.querySelector(".order__application-info-bottom-line-active-button");
	const saveStatusButton = document.querySelector(".order__application-info-bottom-line-save-button");
	const cancelStatusButton = document.querySelector(".order__application-info-bottom-line-cancel-button");
	statusesList.disabled = true;
	changeStatusButton.classList.remove("_app-info-hidden");
	saveStatusButton.classList.add("_app-info-hidden");
	cancelStatusButton.classList.add("_app-info-hidden");
}