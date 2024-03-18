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