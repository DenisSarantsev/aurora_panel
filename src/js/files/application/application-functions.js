// --------------> Запись нужной информации о заявке на странице заявки
export const writeOrderInformationToAppPage = (order) => {
	document.querySelector(".order-app-name").textContent = order.name;
	document.querySelector(".order-app-phone").textContent = order.feedback_phone;
	document.querySelector(".order-app-city").textContent = order.city;
	document.querySelector(".order-app-date").textContent = order.birthday;
	document.querySelector(".order-app-title").textContent = order.title;
	document.querySelector(".order-app-kind").textContent = order.kind;
	document.querySelector(".order-app-id").textContent = order._id;
	document.querySelector(".order-app-create").textContent = order.create_at;
	addStatusToOrderPage(order);
	addInfoAboutResume(order);
	addRatingToOrderPage(order);
}

// --------------> Запись нужной информации о пользователе на странице заявки
export const writeUserInformationToAppPage = (user) => {
	document.querySelector(".user-app-create").textContent = user.created_at;
	document.querySelector(".user-app-name").textContent = user.first_name;
	document.querySelector(".user-app-phone").textContent = user.phone_number;

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

// Запись новой информации в комментарии
const writeNewCommentToAllComments = (user) => {
	const sendButton = document.querySelector(".order__application-info-comments-button");
	sendButton.addEventListener("click", () => {
		const newText = document.querySelector(".order__application-info-comments-textarea").value;
		const oldText = user.info;
		const sendText = oldText + newText;
		console.log(sendText)
	})
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
	}
}

