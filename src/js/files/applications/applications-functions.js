// ------------------------------------------------------------------------ Функции для локального использования
const getCheckedKinds = () => {
	const allKindsCheckboxes = document.querySelectorAll(".kinds-app__checkbox-input");
	// Получаем актуальные (отмеченные) направления
	let actualKind = [];
	for ( let checkbox of allKindsCheckboxes ) {
		if ( checkbox.checked ) {
			actualKind.push(checkbox.value);
		}
	}
	return actualKind
}
// ----------> Рассчитываем возраст
const findAge = (birthdate) => {
	const [day, month, year] = birthdate.split('.');
	const birthDateObj = new Date(`${year}-${month}-${day}`);
	const currentDate = new Date();
	const ageInMillis = currentDate - birthDateObj;
	const ageInYears = Math.floor(ageInMillis / (365.25 * 24 * 60 * 60 * 1000));
	return ageInYears
}
// ----------> Определяем статус и выводим значение
const addStatusToTable = (status) => {
	if ( status ) {
		return status;
	}
}
// ----------> Добавляем галочку, если есть резюме
const addResumeMarker = (data) => {
	if ( data === null ) {
		return ""
	} else {
		return "📎"
	}
}
// ----------> Сравнение обьектов по дате создания (от новых к старым)
const comparisonOrdersByDate = (a, b) => {
	let dateA = new Date(a.create_at);
	let dateB = new Date(b.create_at);
	return dateB - dateA;
}
// ----------> Сравнение обьектов по позрасту кандидатов ( от меньшего к большему )
const comparsionOrdersByOldAge = (a, b) => {
	let ageA = findAge(a.birthday);
	let ageB = findAge(b.birthday);
	return ageB - ageA;
}
// ----------> Сравнение обьектов по позрасту кандидатов ( от большего к меньшему )
const comparsionOrdersByYoungAge = (a, b) => {
	let ageA = findAge(a.birthday);
	let ageB = findAge(b.birthday);
	return ageA - ageB;
}
// -------------------------------------------------------------------------- Определяем, активна ли заявка и включаем нужный маркер
const addCurrentActiveMarker = (order) => {
	if ( order.is_active === true ) {
		return "am-green"
	} else {
		return "am-red"
	}
}
// ------------------------------------------------------------------------ Функции для создания полей фильтра
// ----------> Создаем галочки выбора чекбоксов в фильтре кандидатов
export async function addKindCheckboxesInApplicationsFilter(fetchVacanciesData) {
	return new Promise((resolve, reject) => {
		let allCheckboxes;
		fetchVacanciesData().then(render => {
			let vacancies = render.vacancies;
			let uniqueKinds = [];
			for ( let vacancy of vacancies ) {
				if ( uniqueKinds.indexOf(vacancy.kind) === -1 ) {
					uniqueKinds.push(vacancy.kind)
				}
			}
			const checkboxesContainer = document.querySelector(".kinds-app__checkboxes-container");
			for ( let kind of uniqueKinds ) {
				checkboxesContainer.insertAdjacentHTML("beforeend", 
					`
						<div class="kinds-app__checkbox-container">
							<input id="${kind}" type="checkbox" value="${kind}" class="kinds-app__checkbox-input">
							<label for="${kind}" class="kinds-app__checkbox-label">${kind.charAt(0).toUpperCase() + kind.slice(1)}</label>
						</div>
					`
				)
			}
			allCheckboxes = document.querySelectorAll(".kinds-app__checkbox-input");
			resolve(allCheckboxes);
		})
		.catch(error => {
			console.error('Произошла ошибка:', error);
			reject(error);
		});
	})
}
// ----------> Записываем вакансии в select с вакансиями
export const writeVacanciesInSelectList = (fetchVacanciesData) => {
	// Ждем результат промиса по запросу на вакансии
	fetchVacanciesData().then(render => {
		let vacancies = render.vacancies;
		const vacanciesSelect = document.querySelector(".search-app__select");
		// Предварительно очищаем список
		vacanciesSelect.innerHTML = "";
		// Записываем элемент с выбором всех вакансий
		vacanciesSelect.insertAdjacentHTML("beforeend", 
			`
				<option value="Всі вакансії з обраних напрямів" class="search-app__option">Всі вакансії з обраних напрямів</option>
			`
		)
		// Если выбраны направления, то записываем соответствующие вакансии
		if ( getCheckedKinds().length !== 0 ) {
			for ( let vacancy of vacancies ) {
				for ( let kind of getCheckedKinds() ) {
					if ( vacancy.kind === kind ) {
						vacanciesSelect.insertAdjacentHTML("beforeend", 
							`
								<option value="${vacancy.title}" class="search-app__option">${vacancy.title}</option>
							`
						)
					}
				}
			}
		// Если направления не выбрано, то записываем все вакансии
		} else {
			for ( let vacancy of vacancies ) { 
				vacanciesSelect.insertAdjacentHTML("beforeend", 
					`
						<option value="${vacancy.title}" class="search-app__option">${vacancy.title}</option>
					`
				)
			}
		}
	}).catch(err => {
		console.error("Не удалось получить вакансии по запросу");
	});
}
// -------------------------------------------------------------------------- Функции для фильтрации данных ( пошагово )
// ----------> Отбираем только те данные, у которых присутствует нужное направление, отмеченное в чекбоксе
export const kindFilterOrders = (orders) => {
	// Сравниваем и записываем в массив анкеты с отмеченными направлениями
	let resultOrdersArray = orders;
	if ( getCheckedKinds().length !== 0 ) {
		resultOrdersArray = [];
		for ( let order of orders ) {
			for ( let kind of getCheckedKinds() ) {
				if ( order.kind === kind ) {
					resultOrdersArray.push(order);
				}
			}
		}
	} else {}
	return resultOrdersArray;
}
// ----------> Фильтруем заявки кандидатов по выбранной из списка вакансии
export const vacancyFilterOrders = (orders) => {
	const selectElement = document.querySelector(".search-app__select")
	var selectedOption = selectElement.options[selectElement.selectedIndex];
	let selectedOptionText;
	if ( selectedOption ) {
		selectedOptionText = selectedOption.textContent;
	}
	let filterOrders = [];
	if ( selectedOptionText === "Всі вакансії з обраних напрямів" || selectedOptionText === undefined ) {
		filterOrders = orders;
	} else {
		for ( let order of orders ) {
			if ( order.title === selectedOptionText ) {
				filterOrders.push(order);
			}
		}
	}
	return filterOrders
}
// ----------> Фильтруем заявки 
export const searchFilterOrders = (orders) => {
	const searchInputValue = document.querySelector(".applications-filter__search-input").value
	let resultOrders = [];
	if ( searchInputValue.length === 0 ) {
		resultOrders = orders;
	} else {
		for ( let order of orders ) {
			let substr = searchInputValue;
			let string = `Ім'я: ${order.name}, Вакансія: ${order.title}, Місто: ${order.city}, Телефон: ${order.feedback_phone}`;
			let index = string.toLowerCase().indexOf(substr.toLowerCase());
			if ( index !== -1 ) {
				resultOrders.push(order)
			} else {}
		}
	}
	return resultOrders;
}
// ----------> Сортируем заявки
export const sortOrders = (orders) => {
	const sortSelect = document.querySelector(".applications-filter__sort-select");
	const currentOption = sortSelect.options[sortSelect.selectedIndex];
	let resultOrders = orders;
	if ( currentOption.value === "new" ) {
		resultOrders = resultOrders.sort(comparisonOrdersByDate)
	} else if ( currentOption.value === "old" ) {
		resultOrders = resultOrders.sort(comparsionOrdersByOldAge)
	} else if ( currentOption.value === "young" ) {
		resultOrders = resultOrders.sort(comparsionOrdersByYoungAge)
	}
return resultOrders
}
// -------------------------------------------------------------------------- Функции разбивки и создания пагинации
// ----------> Разбиваем заявки на страницы
export const divideOrdersToPages = (orders) => {
	let ordersOnPage = 50; // Количество заявок на странице
	let pagesCounter = Math.floor(orders.length/ordersOnPage) + 1;
	createPaginatePages(pagesCounter);
	const result = {orders, ordersOnPage};
	return result
}
// ----------> Создание кнопок пагинации в зависимости от количества заявок
const createPaginatePages = (pagesCounter) => {
	const paginationContainer = document.querySelector(".pagination-applications");
	paginationContainer.innerHTML = "";
	if ( pagesCounter > 1 ) {
		// paginationContainer.insertAdjacentHTML("beforeend", 
		// 	`
		// 		<button class="pagination__left pagination-button">
		// 			←
		// 		</button>
				
		// 	`
		// )
		paginationContainer.insertAdjacentHTML("beforeend", 
		`
			<div class="pagination__pages"></div>
		`)
		let paginationPagesContainer = document.querySelector(".pagination__pages");
		for ( let i = 1; i <= pagesCounter; i++ ) {
			paginationPagesContainer.insertAdjacentHTML("beforeend", 
			`
				<button page-number-button="${i}" class="pagination__page pagination-button">${i}</button>
			`)
		}
		// paginationContainer.insertAdjacentHTML("beforeend", 
		// 	`
		// 		<button class="pagination__right pagination-button">
		// 			→
		// 		</button>
		// 	`
		// )
	}
}
// -------------------------------------------------------------------------- Загружаем в контейнер все заявки и задаем им номер страницы
export const addOrdersToTable = (orders, ordersOnPage) => {
	const tableContainer = document.querySelector(".applications__table-result-container");
	tableContainer.innerHTML = "";
	tableContainer.insertAdjacentHTML("beforeend", 
		`
		<ul class="applications__table-title">
			<li class="applications__table-title-item">Створення</li>
			<li class="applications__table-title-item">П.І.Б.</li>
			<li class="applications__table-title-item">Вік</li>
			<li class="applications__table-title-item">Місто</li>
			<li class="applications__table-title-item">Контакти</li>
			<li class="applications__table-title-item">Напрямок</li>
			<li class="applications__table-title-item">Вакансія</li>
			<li class="applications__table-title-item">Статус</li>
			<li class="applications__table-title-item">📎</li>
			<li class="applications__table-title-item">🔗</li>
		</ul>
		`
	)
	let ordersOnPageCounter = 0; // Считает количество заявок, добавленное на страницу
	let pagesCounterValue = 1; // Считает кол-во страниц и отвечает за добавление индентификатора страницы в строку заявки
	for ( let order of orders ) {
		if ( ordersOnPageCounter < ordersOnPage ) {

			// Определяем цвет заявки в списке в зависимости от статуса
			let orderColorClass = "new-order-status";
			if ( order.status === "Новий" ) {
				orderColorClass = "new-order-status";
			} else if ( order.status === "Погоджено рекрутингом" || order.status === "Потребує додаткового розгляду" || order.status === "Запрошено на співбесіду" ) {
				orderColorClass = "process-order-status";
			} else if ( order.status === "Відхилено рекрутингом" || order.status === "Відхилено керівником в задачі" || 
									order.status === "Відмова керівника після співбесіди" || order.status === "Відмова кандидата" || 
									order.status === "Відмова після розгляду заявки рекрутером" || order.status === "Відмова після співбесіди" ) {
				orderColorClass = "failed-order-status";
			} else if ( order.status === "Прийняв offer" || order.status === "Резерв" || 
									order.status === "Запрошено на працевлаштування" || order.status === "Завершений" ) {
				orderColorClass = "success-order-status";
			}


			tableContainer.insertAdjacentHTML("beforeend", 
				`
					<ul page-number="${pagesCounterValue}" class="applications__row">
						<li class="applications__item applications-create-at-item"><div class="applications-active-marker ${addCurrentActiveMarker(order)}"></div><div>${order.create_at}</div></li>
						<li class="applications__item">${order.name}</li>
						<li class="applications__item">${findAge(order.birthday)}</li>
						<li class="applications__item">${order.city}</li>
						<li class="applications__item">${order.feedback_phone}</li>
						<li class="applications__item">${order.kind}</li>
						<li class="applications__item">${order.title}</li>
						<li class="applications__item applications-item-current-status ${orderColorClass}">${addStatusToTable(order.status)}</li>
						<li class="applications__item">${addResumeMarker(order.file_name)}</li>
						<li template-button="order" order-id="${order._id}" user-telegram-id="${order.telegram_id}" class="applications__item template-switch-button user-application-button">🔗</li>
					</ul>
				`
			)
			ordersOnPageCounter++;
		}
		else if ( ordersOnPageCounter === ordersOnPage ) {
			pagesCounterValue++;
			ordersOnPageCounter = 0;
		}
	}
	const result = { orders, ordersOnPage }
	return result
}
// -------------------------------------------------------------------------- Проходимся по кнопкам пагинации и вешаем а них функционал
export const addListenersToPaginationButtons = (orders, ordersOnPage) => {
	const allPaginationButtons = document.querySelectorAll(".pagination-button");
	let currentPage = 1;
	for ( let button of allPaginationButtons ) {
		button.addEventListener("click", (e) => {
			currentPage = e.target.getAttribute("page-number-button")
			showCurrentPageOrders( orders, currentPage, ordersOnPage );
		})
	}
	const result = { orders, currentPage, ordersOnPage }
	return result
}
// ----------> Запускаем прослушиватель, считываем текущую кнопку и показываем заявки, соответствующие этой кнопке
export const showCurrentPageOrders = ( orders, currentPage, ordersOnPage ) => {
	const allOrderRows = document.querySelectorAll(".applications__row");
	for ( let row of allOrderRows ) {
		if ( +row.getAttribute("page-number") === +currentPage ) {
			row.classList.remove("_hidden");
			row.classList.add("display-grid");
		} else {
			row.classList.remove("display-grid");
			row.classList.add("_hidden");
		}
	}
	return true
}
// -------------------------------------------------------------------------- Глаза в строке поиска
export const showOrHiddenEyes = () => {
	if ( document.querySelector(".applications-filter__search-input").value.length > 0 ) {
		document.querySelector(".search__input-eyes").classList.remove("_hidden");
	} else {
		document.querySelector(".search__input-eyes").classList.add("_hidden");
	}
}
// -------------------------------------------------------------------------- Сброс настроек фильтра, поиска и сортировки
export const clearOrdersFilter = () => {
	// Сбрасываем список сортировки
	const sortSelect = document.querySelector(".applications-filter__sort-select");
	sortSelect.selectedIndex = 0;

	// Обнуляем поле поиска
	const searchField = document.querySelector(".applications-filter__search-input");
	searchField.value = "";
	searchField.textContent = "";
	showOrHiddenEyes();

	// Обнуляем чекбоксы выбора направления
	const allCheckboxes = document.querySelectorAll(".kinds-app__checkbox-container");
	for ( let checkbox of allCheckboxes ) {
		checkbox.firstElementChild.checked = false;
	}

	// Сбрасываем список с вакансиями
	const vacancySelect = document.querySelector(".search-app__select");
	vacancySelect.selectedIndex = 0;
}