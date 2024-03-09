(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (() => {
        const secondIconImage = document.querySelector(".applications-filter__second-minus-icon");
        const filterContainer = document.querySelector(".applications-filter");
        const parametrsBlock = document.querySelector(".applications-filter__parametrs-container");
        const bottomBlock = document.querySelector(".applications-filter__bottom-container");
        document.querySelector(".applications-filter__filter-title-container").addEventListener("click", (() => {
            if (!filterContainer.classList.contains("open-filter")) closeBlocksAfterClick(filterContainer, secondIconImage, parametrsBlock, bottomBlock); else showBlocksAfterClick(filterContainer, secondIconImage, parametrsBlock, bottomBlock);
        }));
    }));
    const closeBlocksAfterClick = (container, rotateIcon, firstBlock, secondBlock, thirdBlock) => {
        container.classList.remove("open-filter");
        container.classList.add("open-filter");
        container.style.gap = "0px";
        rotateIcon.classList.toggle("rotate-icon");
        if (firstBlock) {
            firstBlock.classList.remove("auto-height");
            firstBlock.classList.add("null-height");
        }
        if (secondBlock) {
            secondBlock.classList.remove("auto-height");
            secondBlock.classList.add("null-height");
        }
        if (thirdBlock) {
            thirdBlock.classList.remove("auto-height");
            thirdBlock.classList.add("null-height");
        }
    };
    const showBlocksAfterClick = (container, rotateIcon, firstBlock, secondBlock, thirdBlock) => {
        container.classList.add("open-filter");
        container.classList.remove("open-filter");
        container.style.gap = "10px";
        rotateIcon.classList.toggle("rotate-icon");
        if (firstBlock) {
            firstBlock.classList.add("auto-height");
            firstBlock.classList.remove("null-height");
        }
        if (secondBlock) {
            secondBlock.classList.add("auto-height");
            secondBlock.classList.remove("null-height");
        }
        if (thirdBlock) {
            thirdBlock.classList.add("auto-height");
            thirdBlock.classList.remove("null-height");
        }
    };
    document.addEventListener("DOMContentLoaded", (() => {
        const allTemplates = document.querySelectorAll(".template");
        const allSwitchButtons = document.querySelectorAll(".template-switch-button");
        const allMenuButtons = document.querySelectorAll(".menu__menu-item");
        for (let button of allSwitchButtons) button.addEventListener("click", (e => {
            for (let item of allMenuButtons) item.classList.remove("menu-active-button");
            e.currentTarget.classList.add("menu-active-button");
            showAndHiddenTemplates(e.currentTarget);
        }));
        const showAndHiddenTemplates = button => {
            let buttonTemplateAttribute = button.getAttribute("template-button");
            for (let template of allTemplates) if (template.getAttribute("template-name") !== buttonTemplateAttribute) template.classList.add("hidden-template"); else template.classList.remove("hidden-template");
        };
    }));
    async function fetchOrdersData() {
        const apiUrl = "https://fastapi-avrora-hr.fly.dev/path/admin/api/super-admin/orders/210325718";
        const requestOptions = {
            method: "GET",
            headers: {
                accept: "application/json",
                password: "$2b$12$rOy4/Mc.D15d801IweWOtOQlfSLhzoYwJmxuQihKp7QT3PY66qtZm"
            }
        };
        try {
            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
            const data = await response.json();
            return data.orders;
        } catch (error) {
            console.error("Ошибка запроса:", error);
            throw error;
        }
    }
    async function fetchVacanciesData() {
        const apiUrl = "https://fastapi-avrora-hr.fly.dev/path/admin/api/super-admin/vacancies/210325718";
        const requestOptions = {
            method: "GET",
            headers: {
                accept: "application/json",
                password: "$2b$12$rOy4/Mc.D15d801IweWOtOQlfSLhzoYwJmxuQihKp7QT3PY66qtZm"
            }
        };
        try {
            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Ошибка запроса:", error);
            throw error;
        }
    }
    const getCheckedKinds = () => {
        const allKindsCheckboxes = document.querySelectorAll(".kinds-app__checkbox-input");
        let actualKind = [];
        for (let checkbox of allKindsCheckboxes) if (checkbox.checked) actualKind.push(checkbox.value);
        return actualKind;
    };
    const findAge = birthdate => {
        const [day, month, year] = birthdate.split(".");
        const birthDateObj = new Date(`${year}-${month}-${day}`);
        const currentDate = new Date;
        const ageInMillis = currentDate - birthDateObj;
        const ageInYears = Math.floor(ageInMillis / (365.25 * 24 * 60 * 60 * 1e3));
        return ageInYears;
    };
    const addStatusToTable = status => {
        if (status === null) return "Новий";
    };
    const addResumeMarker = data => {
        if (data === null) return ""; else return "📎";
    };
    const comparisonOrdersByDate = (a, b) => {
        let dateA = new Date(a.create_at);
        let dateB = new Date(b.create_at);
        return dateB - dateA;
    };
    const comparsionOrdersByOldAge = (a, b) => {
        let ageA = findAge(a.birthday);
        let ageB = findAge(b.birthday);
        return ageB - ageA;
    };
    const comparsionOrdersByYoungAge = (a, b) => {
        let ageA = findAge(a.birthday);
        let ageB = findAge(b.birthday);
        return ageA - ageB;
    };
    async function addKindCheckboxesInApplicationsFilter(fetchVacanciesData) {
        return new Promise(((resolve, reject) => {
            let allCheckboxes;
            fetchVacanciesData().then((render => {
                let vacancies = render.vacancies;
                let uniqueKinds = [];
                for (let vacancy of vacancies) if (uniqueKinds.indexOf(vacancy.kind) === -1) uniqueKinds.push(vacancy.kind);
                const checkboxesContainer = document.querySelector(".kinds-app__checkboxes-container");
                for (let kind of uniqueKinds) checkboxesContainer.insertAdjacentHTML("beforeend", `\n\t\t\t\t\t\t<div class="kinds-app__checkbox-container">\n\t\t\t\t\t\t\t<input id="${kind}" type="checkbox" value="${kind}" class="kinds-app__checkbox-input">\n\t\t\t\t\t\t\t<label for="${kind}" class="kinds-app__checkbox-label">${kind.charAt(0).toUpperCase() + kind.slice(1)}</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t`);
                allCheckboxes = document.querySelectorAll(".kinds-app__checkbox-input");
                resolve(allCheckboxes);
            })).catch((error => {
                console.error("Произошла ошибка:", error);
                reject(error);
            }));
        }));
    }
    const writeVacanciesInSelectList = fetchVacanciesData => {
        fetchVacanciesData().then((render => {
            let vacancies = render.vacancies;
            const vacanciesSelect = document.querySelector(".search-app__select");
            vacanciesSelect.innerHTML = "";
            vacanciesSelect.insertAdjacentHTML("beforeend", `\n\t\t\t\t<option value="Всі вакансії з обраних напрямів" class="search-app__option">Всі вакансії з обраних напрямів</option>\n\t\t\t`);
            if (getCheckedKinds().length !== 0) {
                for (let vacancy of vacancies) for (let kind of getCheckedKinds()) if (vacancy.kind === kind) vacanciesSelect.insertAdjacentHTML("beforeend", `\n\t\t\t\t\t\t\t\t<option value="${vacancy.title}" class="search-app__option">${vacancy.title}</option>\n\t\t\t\t\t\t\t`);
            } else for (let vacancy of vacancies) vacanciesSelect.insertAdjacentHTML("beforeend", `\n\t\t\t\t\t\t<option value="${vacancy.title}" class="search-app__option">${vacancy.title}</option>\n\t\t\t\t\t`);
        })).catch((err => {
            console.error("Не удалось получить вакансии по запросу");
        }));
    };
    const kindFilterOrders = orders => {
        let resultOrdersArray = orders;
        if (getCheckedKinds().length !== 0) {
            resultOrdersArray = [];
            for (let order of orders) for (let kind of getCheckedKinds()) if (order.kind === kind) resultOrdersArray.push(order);
        }
        return resultOrdersArray;
    };
    const vacancyFilterOrders = orders => {
        const selectElement = document.querySelector(".search-app__select");
        var selectedOption = selectElement.options[selectElement.selectedIndex];
        let selectedOptionText;
        if (selectedOption) selectedOptionText = selectedOption.textContent;
        let filterOrders = [];
        if (selectedOptionText === "Всі вакансії з обраних напрямів" || selectedOptionText === void 0) filterOrders = orders; else for (let order of orders) if (order.title === selectedOptionText) filterOrders.push(order);
        return filterOrders;
    };
    const searchFilterOrders = orders => {
        const searchInputValue = document.querySelector(".applications-filter__search-input").value;
        let resultOrders = [];
        if (searchInputValue.length === 0) resultOrders = orders; else for (let order of orders) {
            let substr = searchInputValue;
            let string = `Ім'я: ${order.name}, Вакансія: ${order.title}, Місто: ${order.city}, Телефон: ${order.feedback_phone}`;
            let index = string.toLowerCase().indexOf(substr.toLowerCase());
            if (index !== -1) resultOrders.push(order);
        }
        return resultOrders;
    };
    const sortOrders = orders => {
        const sortSelect = document.querySelector(".applications-filter__sort-select");
        const currentOption = sortSelect.options[sortSelect.selectedIndex];
        let resultOrders = orders;
        if (currentOption.value === "new") resultOrders = resultOrders.sort(comparisonOrdersByDate); else if (currentOption.value === "old") resultOrders = resultOrders.sort(comparsionOrdersByOldAge); else if (currentOption.value === "young") resultOrders = resultOrders.sort(comparsionOrdersByYoungAge);
        return resultOrders;
    };
    const divideOrdersToPages = orders => {
        let ordersOnPage = 20;
        let pagesCounter = Math.floor(orders.length / ordersOnPage) + 1;
        createPaginatePages(pagesCounter);
        const result = {
            orders,
            ordersOnPage
        };
        return result;
    };
    const createPaginatePages = pagesCounter => {
        const paginationContainer = document.querySelector(".footer__pagination");
        paginationContainer.innerHTML = "";
        if (pagesCounter > 1) {
            paginationContainer.insertAdjacentHTML("beforeend", `\n\t\t\t<div class="pagination__pages"></div>\n\t\t`);
            let paginationPagesContainer = document.querySelector(".pagination__pages");
            for (let i = 1; i <= pagesCounter; i++) paginationPagesContainer.insertAdjacentHTML("beforeend", `\n\t\t\t\t<button page-number-button="${i}" class="pagination__page pagination-button">${i}</button>\n\t\t\t`);
        }
    };
    const addOrdersToTable = (orders, ordersOnPage) => {
        const tableContainer = document.querySelector(".applications__table-result-container");
        tableContainer.innerHTML = "";
        tableContainer.insertAdjacentHTML("beforeend", `\n\t\t<ul class="applications__table-title">\n\t\t\t<li class="applications__table-title-item">Створення</li>\n\t\t\t<li class="applications__table-title-item">П.І.Б.</li>\n\t\t\t<li class="applications__table-title-item">Вік</li>\n\t\t\t<li class="applications__table-title-item">Місто</li>\n\t\t\t<li class="applications__table-title-item">Контакти</li>\n\t\t\t<li class="applications__table-title-item">Напрямок</li>\n\t\t\t<li class="applications__table-title-item">Вакансія</li>\n\t\t\t<li class="applications__table-title-item">Статус</li>\n\t\t\t<li class="applications__table-title-item">📎</li>\n\t\t\t<li class="applications__table-title-item">🔗</li>\n\t\t</ul>\n\t\t`);
        let ordersOnPageCounter = 0;
        let pagesCounterValue = 1;
        for (let order of orders) if (ordersOnPageCounter < ordersOnPage) {
            tableContainer.insertAdjacentHTML("beforeend", `\n\t\t\t\t\t<ul page-number="${pagesCounterValue}" class="applications__row">\n\t\t\t\t\t\t<li class="applications__item">${order.create_at}</li>\n\t\t\t\t\t\t<li class="applications__item">${order.name}</li>\n\t\t\t\t\t\t<li class="applications__item">${findAge(order.birthday)}</li>\n\t\t\t\t\t\t<li class="applications__item">${order.city}</li>\n\t\t\t\t\t\t<li class="applications__item">${order.feedback_phone}</li>\n\t\t\t\t\t\t<li class="applications__item">${order.kind}</li>\n\t\t\t\t\t\t<li class="applications__item">${order.title}</li>\n\t\t\t\t\t\t<li class="applications__item">${addStatusToTable(order.status)}</li>\n\t\t\t\t\t\t<li class="applications__item">${addResumeMarker(order.file_name)}</li>\n\t\t\t\t\t\t<li class="applications__item">🔗</li>\n\t\t\t\t\t</ul>\n\t\t\t\t`);
            ordersOnPageCounter++;
        } else if (ordersOnPageCounter === ordersOnPage) {
            pagesCounterValue++;
            ordersOnPageCounter = 0;
        }
        const result = {
            orders,
            ordersOnPage
        };
        return result;
    };
    const addListenersToPaginationButtons = (orders, ordersOnPage) => {
        const allPaginationButtons = document.querySelectorAll(".pagination-button");
        let currentPage = 1;
        for (let button of allPaginationButtons) button.addEventListener("click", (e => {
            currentPage = e.target.getAttribute("page-number-button");
            showCurrentPageOrders(orders, currentPage, ordersOnPage);
        }));
        const result = {
            orders,
            currentPage,
            ordersOnPage
        };
        return result;
    };
    const showCurrentPageOrders = (orders, currentPage, ordersOnPage) => {
        const allOrderRows = document.querySelectorAll(".applications__row");
        for (let row of allOrderRows) if (+row.getAttribute("page-number") === +currentPage) {
            row.classList.remove("_hidden");
            row.classList.add("display-grid");
        } else {
            row.classList.remove("display-grid");
            row.classList.add("_hidden");
        }
    };
    const showOrHiddenEyes = () => {
        if (document.querySelector(".applications-filter__search-input").value.length > 0) document.querySelector(".search__input-eyes").classList.remove("_hidden"); else document.querySelector(".search__input-eyes").classList.add("_hidden");
    };
    const clearOrdersFilter = () => {
        const sortSelect = document.querySelector(".applications-filter__sort-select");
        sortSelect.selectedIndex = 0;
        const searchField = document.querySelector(".applications-filter__search-input");
        searchField.value = "";
        searchField.textContent = "";
        showOrHiddenEyes();
        const allCheckboxes = document.querySelectorAll(".kinds-app__checkbox-container");
        for (let checkbox of allCheckboxes) checkbox.firstElementChild.checked = false;
        const vacancySelect = document.querySelector(".search-app__select");
        vacancySelect.selectedIndex = 0;
    };
    const runFetchWithMainChain = () => {
        fetchOrdersData().then((orders => {
            orders = [ {
                _id: 1,
                telegram_id: 620527199,
                kind: "офіс",
                title: "Обліковець з реєстрації бухгалтерських даних",
                name: "Sergii",
                feedback_phone: "380675478881",
                city: "Odesa",
                birthday: "15.05.1982",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-02-06 00:40:38",
                feedback: false
            }, {
                _id: 2,
                telegram_id: 620527181,
                kind: "офіс",
                title: "Менеджер/ка з комунікацій у відділ корпоративної соціальної відповідальності (КСВ)",
                name: "Денис",
                feedback_phone: "380675478882",
                city: "Київ",
                birthday: "15.05.1986",
                file_name: "name",
                status: null,
                is_active: true,
                create_at: "2024-01-16 01:40:38",
                feedback: false
            }, {
                _id: 3,
                telegram_id: 620527112,
                kind: "склад",
                title: "Товарознавець з якості м.Полтава",
                name: "Іван",
                feedback_phone: "380675478883",
                city: "Житомир",
                birthday: "15.05.1995",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-02-15 15:30:38",
                feedback: false
            }, {
                _id: 4,
                telegram_id: 620527113,
                kind: "склад",
                title: "Товарознавець з якості м.Полтава",
                name: "Олександр",
                feedback_phone: "380675478884",
                city: "Миколаїв",
                birthday: "15.05.1999",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-02-06 11:22:32",
                feedback: false
            }, {
                _id: 5,
                telegram_id: 620527114,
                kind: "офіс",
                title: "Прибиральниця в офіс",
                name: "Петро",
                feedback_phone: "380675478885",
                city: "Севастополь",
                birthday: "15.05.1979",
                file_name: "name",
                status: null,
                is_active: true,
                create_at: "2024-03-26 00:33:33",
                feedback: false
            }, {
                _id: 6,
                telegram_id: 620527115,
                kind: "офіс",
                title: "Аналітик",
                name: "Андрій",
                feedback_phone: "380675478886",
                city: "Львів",
                birthday: "15.05.1989",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-27 12:46:26",
                feedback: false
            }, {
                _id: 7,
                telegram_id: 620527116,
                kind: "офіс",
                title: "Бекенд розробник",
                name: "Гліб",
                feedback_phone: "380675478887",
                city: "Херсон",
                birthday: "15.05.1980",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-03-11 05:34:11",
                feedback: false
            }, {
                _id: 8,
                telegram_id: 620527121,
                kind: "склад",
                title: "Комірник",
                name: "Василь",
                feedback_phone: "380675478888",
                city: "Коростень",
                birthday: "15.05.1998",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-02-18 04:15:45",
                feedback: false
            }, {
                _id: 9,
                telegram_id: 620527122,
                kind: "магазин",
                title: "Водій",
                name: "Іван",
                feedback_phone: "380675478889",
                city: "Рівне",
                birthday: "15.05.2001",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-11 01:28:34",
                feedback: false
            }, {
                _id: 10,
                telegram_id: 620527123,
                kind: "магазин",
                title: "Кур'єр",
                name: "Олександр",
                feedback_phone: "380675478810",
                city: "Запоріжжя",
                birthday: "15.05.2004",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-11 02:35:55",
                feedback: false
            }, {
                _id: 11,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 11,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 12,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 11,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 13,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 14,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 15,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 16,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 17,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 18,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 19,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 20,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 21,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 22,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 23,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 24,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 25,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Запорізька область, село Коцюбинське",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            }, {
                _id: 26,
                telegram_id: 620527124,
                kind: "магазин",
                title: "Продавець",
                name: "Сергій",
                feedback_phone: "380675478834",
                city: "Київська область, с. Бобриця, вул. Оранжерейна 8, буд. 15",
                birthday: "15.05.2000",
                file_name: null,
                status: null,
                is_active: true,
                create_at: "2024-01-02 18:45:32",
                feedback: false
            } ];
            return orders;
        })).then((orders => kindFilterOrders(orders))).then((orders => vacancyFilterOrders(orders))).then((orders => searchFilterOrders(orders))).then((orders => sortOrders(orders))).then((orders => divideOrdersToPages(orders))).then((result => {
            const orders = result.orders;
            const ordersOnPage = result.ordersOnPage;
            return addOrdersToTable(orders, ordersOnPage);
        })).then((result => {
            const orders = result.orders;
            const ordersOnPage = result.ordersOnPage;
            return addListenersToPaginationButtons(orders, ordersOnPage);
        })).then((result => {
            const orders = result.orders;
            const ordersOnPage = result.ordersOnPage;
            const currentPage = result.currentPage;
            showCurrentPageOrders(orders, currentPage, ordersOnPage);
        })).catch((error => {
            console.error("Ошибка:", error);
        }));
    };
    document.addEventListener("DOMContentLoaded", (() => {
        addKindCheckboxesInApplicationsFilter(fetchVacanciesData).then((checkboxes => {
            for (let checkbox of checkboxes) checkbox.addEventListener("change", (() => {
                writeVacanciesInSelectList(fetchVacanciesData);
            }));
        })).then(writeVacanciesInSelectList(fetchVacanciesData)).then(runFetchWithMainChain());
        const secondIconImage = document.querySelector(".applications-filter__second-minus-icon");
        const filterContainer = document.querySelector(".applications-filter");
        const parametrsBlock = document.querySelector(".applications-filter__parametrs-container");
        const bottomBlock = document.querySelector(".applications-filter__bottom-container");
        document.querySelector(".applications-filter__result-button").addEventListener("click", (() => {
            runFetchWithMainChain();
            showOrHiddenEyes();
            closeBlocksAfterClick(filterContainer, secondIconImage, parametrsBlock, bottomBlock);
        }));
        document.querySelector(".applications-filter__search-input").addEventListener("keyup", (e => {
            runFetchWithMainChain();
            showOrHiddenEyes();
        }));
        document.querySelector(".applications-filter__sort").addEventListener("change", (() => {
            runFetchWithMainChain();
            showOrHiddenEyes();
        }));
        document.querySelector(".applications-filter__reset-button").addEventListener("click", (() => {
            clearOrdersFilter();
            runFetchWithMainChain();
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();