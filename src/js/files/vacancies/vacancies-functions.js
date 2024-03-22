// ------------------------------------------------------------------------------ Функции для отображения вакансий
// ----------> Возвращаем текущий статус активности (цвет маркера)
const addCurrentActiveVacanciesMarker = (vacancy) => {
	if ( vacancy.is_active === true ) {
		return "va-green"
	} else {
		return "va-red"
	}
}
// ----------> Отображаем чекбоксы в шаблоне вакансий
export function addKindCheckboxesInVacanciesFilter(fetchVacanciesData) {
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
			const checkboxesContainer = document.querySelector(".sort-vacancies__checkboxes-container");
			for ( let kind of uniqueKinds ) {
				checkboxesContainer.insertAdjacentHTML("beforeend", 
					`
						<div class="sort-vacancies__checkbox-container">
							<input id="vacancy-${kind}" type="checkbox" value="${kind}" class="sort-vacancies__checkbox">
							<label for="vacancy-${kind}" class="sort-vacancies__label">${kind.charAt(0).toUpperCase() + kind.slice(1)}</label>
						</div>
					`
				)
			}
			allCheckboxes = document.querySelectorAll(".sort-vacancies__checkbox");
			resolve(allCheckboxes);
		})
		.catch(error => {
			console.error('Произошла ошибка:', error);
			reject(error);
		});
	})
}
// ----------> Фильтруем вакансии через чекбоксы ( по направлениям )
export const filterVacanciesByKinds = (vacancies) => {
	const allKindsCheckboxes = document.querySelectorAll(".sort-vacancies__checkbox");
	const allCheckedKinds = [];
	let resultVacanciesArray = [];
	for ( let checkbox of allKindsCheckboxes ) {
		if ( checkbox.checked === true ) {
			allCheckedKinds.push(checkbox);
		}
	}
	if ( allCheckedKinds.length === 0 ) {
		resultVacanciesArray = vacancies.vacancies;
	} else {
		for ( let i = 0; i < Object.keys(vacancies.vacancies).length; i++ ) {
			for ( let kind of allCheckedKinds ) {
				if ( vacancies.vacancies[i].kind === kind.value ) {
					resultVacanciesArray.push(vacancies.vacancies[i])
				}
			}
		}
	}
	return resultVacanciesArray
}
// ----------> Фильтруем вакансии через поиск
export const filterVacanciesBySearchKeywords = (vacancies) => {
	let searchValue = document.querySelector(".search-vacancies__input").value;
	let resultVacanciesArray = [];
	if ( searchValue.length === 0 ) {
		resultVacanciesArray = vacancies;
	} else {
		for ( let vacancy of vacancies ) {
			let substr = searchValue;
			let string = `${vacancy.title} ${vacancy._id}`;
			let index = string.toLowerCase().indexOf(substr.toLowerCase());
			if ( index !== -1 ) {
				resultVacanciesArray.push(vacancy)
			} else {}
		}
	}
	return resultVacanciesArray
}
// ----------> Выводим вакансии в таблице
export const addVacanciesToTable = (vacancies) => {
	const vacanciesTableContainer = document.querySelector(".vacancies__table-result-container");
	vacanciesTableContainer.innerHTML = "";
	vacanciesTableContainer.insertAdjacentHTML("beforeend",
		`
			<ul class="vacancies__table-title">
				<li class="vacancies__table-title-item">Створення</li>
				<li class="vacancies__table-title-item">Назва</li>
				<li class="vacancies__table-title-item">Напрямок</li>
				<li class="vacancies__table-title-item">ID</li>
				<li class="vacancies__table-title-item">🔗</li>
			</ul>
		`
	)
	for ( let vacancy of vacancies ) {

		vacanciesTableContainer.insertAdjacentHTML("beforeend", 
			`
				<ul class="vacancies__row">
					<li class="vacancies__item vacancies-create-at-item"><div class="vacancies-active-marker ${addCurrentActiveVacanciesMarker(vacancy)}"></div><div>${vacancy.create_at}</div></li>
					<li class="vacancies__item">${vacancy.title}</li>
					<li class="vacancies__item">${vacancy.kind}</li>
					<li class="vacancies__item">${vacancy._id}</li>
					<li class="vacancies__item vacancy template-switch-button vacancy-application-button" template-button="vacancy" vacancy-id="${vacancy._id}"><button class="vacancies__item-button">🔗</button></li>
				</ul>
			`
		)
	}
	return true
}