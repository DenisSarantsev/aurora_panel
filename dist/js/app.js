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
    const addPreloaderInKindsList = () => {
        let preloaderContainer = document.querySelector(".preloader-in-widget");
        new Promise(((resolve, reject) => {
            resolve();
        })).then(preloaderContainer.classList.remove("preloader-hidden"));
    };
    addPreloaderInKindsList();
    const removePreloaderInKindsList = () => {
        let preloaderContainer = document.querySelector(".preloader-in-widget");
        setTimeout((function() {
            preloaderContainer.classList.add("preloader-hidden");
        }), 600);
    };
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
            console.log(data);
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
            addPreloaderInKindsList();
            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Ошибка запроса:", error);
            throw error;
        }
    }
    async function fetchVacancyData(vacancyId) {
        const apiUrl = `https://fastapi-avrora-hr.fly.dev/path/admin/item/super-admin/vacancy/${vacancyId}/210325718`;
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
            console.log(data);
            return data;
        } catch (error) {
            console.error("Ошибка запроса:", error);
            throw error;
        }
    }
    async function fetchOrderData(orderId) {
        const apiUrl = `https://fastapi-avrora-hr.fly.dev/path/admin/item/super-admin/order/${orderId}/210325718`;
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
            console.log(data);
            return data;
        } catch (error) {
            console.error("Ошибка запроса:", error);
            throw error;
        }
    }
    async function fetchUserData(userId) {
        const apiUrl = `https://fastapi-avrora-hr.fly.dev/path/admin/item/super-admin/user/${userId}/210325718`;
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
            console.log(data);
            return data;
        } catch (error) {
            console.error("Ошибка запроса:", error);
            throw error;
        }
    }
    const writeOrderInformationToAppPage = order => {
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
    };
    const writeUserInformationToAppPage = user => {
        document.querySelector(".user-app-create").textContent = user.created_at;
        document.querySelector(".user-app-name").textContent = user.first_name;
        document.querySelector(".user-app-phone").textContent = user.phone_number;
        document.querySelector(".user-app-tg-link").textContent = user.username;
        document.querySelector(".user-app-tg-href").setAttribute("href", `https://t.me/${user.username}`);
    };
    const addStatusToOrderPage = order => {
        const orderStatus = document.querySelector(".order__application-info-item-active-status");
        const greenCircle = document.querySelector(".application-info-item-active-green");
        const redCircle = document.querySelector(".application-info-item-active-red");
        if (order.is_active === true) {
            redCircle.classList.add("_hidden");
            greenCircle.classList.remove("_hidden");
            orderStatus.innerHTML = "Заявка активна";
        } else {
            redCircle.classList.remove("_hidden");
            greenCircle.classList.add("_hidden");
            orderStatus.innerHTML = "Заявка не активна";
        }
    };
    const addInfoAboutResume = order => {
        const buttonContainer = document.querySelector(".order__application-info-resume-button-container");
        const downloadButton = document.querySelector(".order__application-download-resume");
        const resumeText = document.querySelector(".order-app-resume");
        if (order.file_name !== null && order.file_name !== "") {
            resumeText.textContent = order.file_name;
            buttonContainer.classList.add("color-blue");
            downloadButton.classList.remove("_hidden");
        } else {
            resumeText.textContent = "Відсутнє";
            buttonContainer.classList.remove("color-blue");
            downloadButton.classList.add("_hidden");
        }
    };
    const addRatingToOrderPage = order => {
        const ratingType = document.querySelector(".order-app-rating-type");
        const rating = document.querySelector(".order-app-rating");
        if (order.qualities !== "" && order.qualities !== null) {
            ratingType.textContent = "Оцінка за допомогою Chat GPT";
            rating.textContent = order.qualities;
        } else if (order.points !== "" && order.points !== null) {
            ratingType.textContent = "Оцінка за к-стю правильних відповідей";
            rating.textContent = order.points;
        }
    };
    const downloadResumeFile = data => {
        let resumeName = data.order.file_name;
        let resumeString = data.order.file_data;
        let downloadResumeButton = document.querySelector(".order-app-resume");
        downloadResumeButton.addEventListener("click", (() => {
            let binaryString = atob(resumeString);
            let numbers = binaryString.split(",").map(Number);
            let uintArray = new Uint8Array(numbers);
            let blob = new Blob([ uintArray ], {
                type: "application/octet-stream"
            });
            let link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            console.log(link.href);
            link.download = `${resumeName}`;
            link.click();
        }));
    };
    const addInformationToAppPage = (userId, userTelegramId) => {
        returnPromice(userId, userTelegramId).then((data => {
            const orderId = data.userId;
            const userTelegramId = data.userTelegramId;
            const result = {
                orderId,
                userTelegramId
            };
            return result;
        })).then((result => {
            fetchOrderData(result.orderId).then((data => {
                writeOrderInformationToAppPage(data.order);
                downloadResumeFile(data);
            }));
            fetchUserData(result.userTelegramId).then((data => writeUserInformationToAppPage(data.user)));
        })).then(removePreloaderInKindsList());
    };
    async function returnPromice(userId, userTelegramId) {
        const data = {
            userId,
            userTelegramId
        };
        return data;
    }
    const writeDataToVacancyPage = vacancy => {
        console.log(vacancy._id);
        document.querySelector(".vacancy-create").textContent = vacancy.create_at;
        document.querySelector(".vacancy-edit").textContent = vacancy.change_at;
        document.querySelector(".vacancy-name").textContent = vacancy.title;
        document.querySelector(".vacancy-kind").textContent = vacancy.kind;
        document.querySelector(".vacancy-id").textContent = vacancy._id;
        document.querySelector(".vacancy-description").innerHTML = cleanTagsStylesAndAttributes(vacancy.description_html);
        addStatusToVacancy(vacancy);
    };
    const addStatusToVacancy = vacancy => {
        const vacancyStatus = document.querySelector(".vacancy__application-info-item-active-status");
        const greenCircle = document.querySelector(".vacancy-info-item-active-green");
        const redCircle = document.querySelector(".vacancy-info-item-active-red");
        if (vacancy.is_active === true) {
            redCircle.classList.add("_hidden");
            greenCircle.classList.remove("_hidden");
            vacancyStatus.innerHTML = "Вакансія активна";
        } else {
            redCircle.classList.remove("_hidden");
            greenCircle.classList.add("_hidden");
            vacancyStatus.innerHTML = "Вакансія не активна";
        }
    };
    function cleanTagsStylesAndAttributes(data) {
        let doc = (new DOMParser).parseFromString(data, "text/html");
        function removeStyles(element) {
            element.removeAttribute("style");
            element.removeAttribute("font-family");
            for (let child of element.children) removeStyles(child);
        }
        removeStyles(doc.body);
        return doc.documentElement.outerHTML;
    }
    const addInformationToVacancyPage = vacancyId => {
        fetchVacancyData(vacancyId).then((data => {
            writeDataToVacancyPage(data.vacancy);
            removePreloaderInKindsList();
        }));
    };
    const showOrHiddenPagination = button => {
        let buttonTemplateAttribute = button.getAttribute("template-button");
        const allPaginations = document.querySelectorAll(".pagination");
        for (let pagination of allPaginations) pagination.style.display = "none";
        if (document.querySelector(`.pagination-${buttonTemplateAttribute}`)) {
            const removeElement = document.querySelector(`.pagination-${buttonTemplateAttribute}`);
            removeElement.style.display = "flex";
        }
    };
    const showAndHiddenTemplates = button => {
        const allTemplates = document.querySelectorAll(".template");
        let buttonTemplateAttribute = button.getAttribute("template-button");
        for (let template of allTemplates) if (template.getAttribute("template-name") !== buttonTemplateAttribute) template.classList.add("hidden-template"); else template.classList.remove("hidden-template");
        if (button.classList.contains("menu__menu-item")) showOrHiddenPagination(button);
        if (button.classList.contains("user-application-button")) {
            addPreloaderInKindsList();
            addInformationToAppPage(button.getAttribute("order-id"), button.getAttribute("user-telegram-id"));
        }
        if (button.classList.contains("vacancy-application-button")) {
            addPreloaderInKindsList();
            addInformationToVacancyPage(button.getAttribute("vacancy-id"));
        }
        if (button.classList.contains("order__back-button")) document.querySelector(".menu-apps-button").classList.add("menu-active-button");
        if (button.classList.contains("vacancy__back-button")) document.querySelector(".menu-vacancies-button").classList.add("menu-active-button");
        if (button.classList.contains("create-vacancy__back-button")) document.querySelector(".menu-vacancies-button").classList.add("menu-active-button");
    };
    const findAllTemplates = () => {
        const allSwitchButtons = document.querySelectorAll(".template-switch-button");
        const allMenuButtons = document.querySelectorAll(".menu__menu-item");
        for (let button of allSwitchButtons) button.addEventListener("click", (e => {
            for (let item of allMenuButtons) item.classList.remove("menu-active-button");
            if (e.currentTarget.classList.contains("menu__menu-item")) e.currentTarget.classList.add("menu-active-button");
            showAndHiddenTemplates(e.currentTarget);
        }));
    };
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
        if (status) return status;
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
    const addCurrentActiveMarker = order => {
        if (order.is_active === true) return "am-green"; else return "am-red";
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
        let ordersOnPage = 50;
        let pagesCounter = Math.floor(orders.length / ordersOnPage) + 1;
        createPaginatePages(pagesCounter);
        const result = {
            orders,
            ordersOnPage
        };
        return result;
    };
    const createPaginatePages = pagesCounter => {
        const paginationContainer = document.querySelector(".pagination-applications");
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
            tableContainer.insertAdjacentHTML("beforeend", `\n\t\t\t\t\t<ul page-number="${pagesCounterValue}" class="applications__row">\n\t\t\t\t\t\t<li class="applications__item applications-create-at-item"><div class="applications-active-marker ${addCurrentActiveMarker(order)}"></div><div>${order.create_at}</div></li>\n\t\t\t\t\t\t<li class="applications__item">${order.name}</li>\n\t\t\t\t\t\t<li class="applications__item">${findAge(order.birthday)}</li>\n\t\t\t\t\t\t<li class="applications__item">${order.city}</li>\n\t\t\t\t\t\t<li class="applications__item">${order.feedback_phone}</li>\n\t\t\t\t\t\t<li class="applications__item">${order.kind}</li>\n\t\t\t\t\t\t<li class="applications__item">${order.title}</li>\n\t\t\t\t\t\t<li class="applications__item">${addStatusToTable(order.status)}</li>\n\t\t\t\t\t\t<li class="applications__item">${addResumeMarker(order.file_name)}</li>\n\t\t\t\t\t\t<li template-button="order" order-id="${order._id}" user-telegram-id="${order.telegram_id}" class="applications__item template-switch-button user-application-button">🔗</li>\n\t\t\t\t\t</ul>\n\t\t\t\t`);
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
        return true;
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
        fetchOrdersData().then((orders => orders)).then((orders => kindFilterOrders(orders))).then((orders => vacancyFilterOrders(orders))).then((orders => searchFilterOrders(orders))).then((orders => sortOrders(orders))).then((orders => divideOrdersToPages(orders))).then((result => {
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
            removePreloaderInKindsList();
        })).then((marker => {
            findAllTemplates(marker);
            removePreloaderInKindsList();
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
    function addKindCheckboxesInVacanciesFilter(fetchVacanciesData) {
        return new Promise(((resolve, reject) => {
            let allCheckboxes;
            fetchVacanciesData().then((render => {
                let vacancies = render.vacancies;
                let uniqueKinds = [];
                for (let vacancy of vacancies) if (uniqueKinds.indexOf(vacancy.kind) === -1) uniqueKinds.push(vacancy.kind);
                const checkboxesContainer = document.querySelector(".sort-vacancies__checkboxes-container");
                for (let kind of uniqueKinds) checkboxesContainer.insertAdjacentHTML("beforeend", `\n\t\t\t\t\t\t<div class="sort-vacancies__checkbox-container">\n\t\t\t\t\t\t\t<input id="vacancy-${kind}" type="checkbox" value="${kind}" class="sort-vacancies__checkbox">\n\t\t\t\t\t\t\t<label for="vacancy-${kind}" class="sort-vacancies__label">${kind.charAt(0).toUpperCase() + kind.slice(1)}</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t`);
                allCheckboxes = document.querySelectorAll(".sort-vacancies__checkbox");
                resolve(allCheckboxes);
            })).catch((error => {
                console.error("Произошла ошибка:", error);
                reject(error);
            }));
        }));
    }
    const filterVacanciesByKinds = vacancies => {
        const allKindsCheckboxes = document.querySelectorAll(".sort-vacancies__checkbox");
        const allCheckedKinds = [];
        let resultVacanciesArray = [];
        for (let checkbox of allKindsCheckboxes) if (checkbox.checked === true) allCheckedKinds.push(checkbox);
        if (allCheckedKinds.length === 0) resultVacanciesArray = vacancies.vacancies; else for (let i = 0; i < Object.keys(vacancies.vacancies).length; i++) for (let kind of allCheckedKinds) if (vacancies.vacancies[i].kind === kind.value) resultVacanciesArray.push(vacancies.vacancies[i]);
        return resultVacanciesArray;
    };
    const filterVacanciesBySearchKeywords = vacancies => {
        let searchValue = document.querySelector(".search-vacancies__input").value;
        let resultVacanciesArray = [];
        if (searchValue.length === 0) resultVacanciesArray = vacancies; else for (let vacancy of vacancies) {
            let substr = searchValue;
            let string = `${vacancy.title} ${vacancy._id}`;
            let index = string.toLowerCase().indexOf(substr.toLowerCase());
            if (index !== -1) resultVacanciesArray.push(vacancy);
        }
        return resultVacanciesArray;
    };
    const addVacanciesToTable = vacancies => {
        const vacanciesTableContainer = document.querySelector(".vacancies__table-result-container");
        vacanciesTableContainer.innerHTML = "";
        vacanciesTableContainer.insertAdjacentHTML("beforeend", `\n\t\t\t<ul class="vacancies__table-title">\n\t\t\t\t<li class="vacancies__table-title-item">Створення</li>\n\t\t\t\t<li class="vacancies__table-title-item">Назва</li>\n\t\t\t\t<li class="vacancies__table-title-item">Напрямок</li>\n\t\t\t\t<li class="vacancies__table-title-item">ID</li>\n\t\t\t\t<li class="vacancies__table-title-item">🔗</li>\n\t\t\t</ul>\n\t\t`);
        for (let vacancy of vacancies) vacanciesTableContainer.insertAdjacentHTML("beforeend", `\n\t\t\t\t<ul class="vacancies__row">\n\t\t\t\t\t<li class="vacancies__item">${vacancy.create_at}</li>\n\t\t\t\t\t<li class="vacancies__item">${vacancy.title}</li>\n\t\t\t\t\t<li class="vacancies__item">${vacancy.kind}</li>\n\t\t\t\t\t<li class="vacancies__item">${vacancy._id}</li>\n\t\t\t\t\t<li class="vacancies__item vacancy template-switch-button vacancy-application-button" template-button="vacancy" vacancy-id="${vacancy._id}"><button class="vacancies__item-button">🔗</button></li>\n\t\t\t\t</ul>\n\t\t\t`);
        return true;
    };
    const runFetchVacanciesWithMainChain = () => {
        fetchVacanciesData().then((vacancies => vacancies)).then((vacancies => filterVacanciesByKinds(vacancies))).then((vacancies => filterVacanciesBySearchKeywords(vacancies))).then((vacancies => addVacanciesToTable(vacancies))).then((marker => {
            findAllTemplates(marker);
            removePreloaderInKindsList();
        }));
    };
    runFetchVacanciesWithMainChain();
    document.addEventListener("DOMContentLoaded", (() => {
        addKindCheckboxesInVacanciesFilter(fetchVacanciesData).then((checkboxes => addListenerToVacanciesKindsCheckboxes(checkboxes)));
        const addListenerToVacanciesKindsCheckboxes = checkboxes => {
            for (let item of checkboxes) item.addEventListener("click", (() => {
                runFetchVacanciesWithMainChain();
            }));
        };
        document.querySelector(".search-vacancies__input").addEventListener("keyup", (() => {
            runFetchVacanciesWithMainChain();
        }));
    }));
    typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" && self;
    function Pe(s) {
        return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
    }
    function Te() {}
    Object.assign(Te, {
        default: Te,
        register: Te,
        revert: function() {},
        __esModule: !0
    });
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s) {
        const e = (this.document || this.ownerDocument).querySelectorAll(s);
        let t = e.length;
        for (;--t >= 0 && e.item(t) !== this; ) ;
        return t > -1;
    });
    Element.prototype.closest || (Element.prototype.closest = function(s) {
        let e = this;
        if (!document.documentElement.contains(e)) return null;
        do {
            if (e.matches(s)) return e;
            e = e.parentElement || e.parentNode;
        } while (e !== null);
        return null;
    });
    Element.prototype.prepend || (Element.prototype.prepend = function(e) {
        const t = document.createDocumentFragment();
        Array.isArray(e) || (e = [ e ]), e.forEach((o => {
            const i = o instanceof Node;
            t.appendChild(i ? o : document.createTextNode(o));
        })), this.insertBefore(t, this.firstChild);
    });
    Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(s) {
        s = arguments.length === 0 ? !0 : !!s;
        const e = this.parentNode, t = window.getComputedStyle(e, null), o = parseInt(t.getPropertyValue("border-top-width")), i = parseInt(t.getPropertyValue("border-left-width")), n = this.offsetTop - e.offsetTop < e.scrollTop, r = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, a = this.offsetLeft - e.offsetLeft < e.scrollLeft, l = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, d = n && !r;
        (n || r) && s && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), 
        (a || l) && s && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), 
        (n || r || a || l) && !s && this.scrollIntoView(d);
    });
    window.requestIdleCallback = window.requestIdleCallback || function(s) {
        const e = Date.now();
        return setTimeout((function() {
            s({
                didTimeout: !1,
                timeRemaining: function() {
                    return Math.max(0, 50 - (Date.now() - e));
                }
            });
        }), 1);
    };
    window.cancelIdleCallback = window.cancelIdleCallback || function(s) {
        clearTimeout(s);
    };
    let Dt = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce(((e, t) => (t &= 63, 
    t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", 
    e)), "");
    var at = (s => (s.VERBOSE = "VERBOSE", s.INFO = "INFO", s.WARN = "WARN", s.ERROR = "ERROR", 
    s))(at || {});
    const k = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        DOWN: 40,
        RIGHT: 39,
        DELETE: 46,
        META: 91,
        SLASH: 191
    }, Pt = {
        LEFT: 0,
        WHEEL: 1,
        RIGHT: 2,
        BACKWARD: 3,
        FORWARD: 4
    };
    function me(s, e, t = "log", o, i = "color: inherit") {
        if (!("console" in window) || !window.console[t]) return;
        const n = [ "info", "log", "warn", "error" ].includes(t), r = [];
        switch (me.logLevel) {
          case "ERROR":
            if (t !== "error") return;
            break;

          case "WARN":
            if (![ "error", "warn" ].includes(t)) return;
            break;

          case "INFO":
            if (!n || s) return;
            break;
        }
        o && r.push(o);
        const a = "Editor.js 2.29.0", l = `line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;`;
        s && (n ? (r.unshift(l, i), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
        try {
            n ? o ? console[t](`${e} %o`, ...r) : console[t](e, ...r) : console[t](e);
        } catch {}
    }
    me.logLevel = "VERBOSE";
    function Ft(s) {
        me.logLevel = s;
    }
    const T = me.bind(window, !1), Y = me.bind(window, !0);
    function oe(s) {
        return Object.prototype.toString.call(s).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }
    function M(s) {
        return oe(s) === "function" || oe(s) === "asyncfunction";
    }
    function D(s) {
        return oe(s) === "object";
    }
    function G(s) {
        return oe(s) === "string";
    }
    function Ht(s) {
        return oe(s) === "boolean";
    }
    function Je(s) {
        return oe(s) === "number";
    }
    function Qe(s) {
        return oe(s) === "undefined";
    }
    function W(s) {
        return s ? Object.keys(s).length === 0 && s.constructor === Object : !0;
    }
    function lt(s) {
        return s > 47 && s < 58 || s === 32 || s === 13 || s === 229 || s > 64 && s < 91 || s > 95 && s < 112 || s > 185 && s < 193 || s > 218 && s < 223;
    }
    async function zt(s, e = (() => {}), t = (() => {})) {
        async function o(i, n, r) {
            try {
                await i.function(i.data), await n(Qe(i.data) ? {} : i.data);
            } catch {
                r(Qe(i.data) ? {} : i.data);
            }
        }
        return s.reduce((async (i, n) => (await i, o(n, e, t))), Promise.resolve());
    }
    function ct(s) {
        return Array.prototype.slice.call(s);
    }
    function xe(s, e) {
        return function() {
            const t = this, o = arguments;
            window.setTimeout((() => s.apply(t, o)), e);
        };
    }
    function Ut(s) {
        return s.name.split(".").pop();
    }
    function jt(s) {
        return /^[-\w]+\/([-+\w]+|\*)$/.test(s);
    }
    function et(s, e, t) {
        let o;
        return (...i) => {
            const n = this, r = () => {
                o = null, t || s.apply(n, i);
            }, a = t && !o;
            window.clearTimeout(o), o = window.setTimeout(r, e), a && s.apply(n, i);
        };
    }
    function Ie(s, e, t = void 0) {
        let o, i, n, r = null, a = 0;
        t || (t = {});
        const l = function() {
            a = t.leading === !1 ? 0 : Date.now(), r = null, n = s.apply(o, i), r || (o = i = null);
        };
        return function() {
            const d = Date.now();
            !a && t.leading === !1 && (a = d);
            const u = e - (d - a);
            return o = this, i = arguments, u <= 0 || u > e ? (r && (clearTimeout(r), r = null), 
            a = d, n = s.apply(o, i), r || (o = i = null)) : !r && t.trailing !== !1 && (r = setTimeout(l, u)), 
            n;
        };
    }
    function $t() {
        const s = {
            win: !1,
            mac: !1,
            x11: !1,
            linux: !1
        }, e = Object.keys(s).find((t => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1));
        return e && (s[e] = !0), s;
    }
    function re(s) {
        return s[0].toUpperCase() + s.slice(1);
    }
    function Me(s, ...e) {
        if (!e.length) return s;
        const t = e.shift();
        if (D(s) && D(t)) for (const o in t) D(t[o]) ? (s[o] || Object.assign(s, {
            [o]: {}
        }), Me(s[o], t[o])) : Object.assign(s, {
            [o]: t[o]
        });
        return Me(s, ...e);
    }
    function ye(s) {
        const e = $t();
        return s = s.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), 
        e.mac ? s = s.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : s = s.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), 
        s;
    }
    function Wt(s) {
        try {
            return new URL(s).href;
        } catch {}
        return s.substring(0, 2) === "//" ? window.location.protocol + s : window.location.origin + s;
    }
    function Yt() {
        return Dt(10);
    }
    function Kt(s) {
        window.open(s, "_blank");
    }
    function Xt(s = "") {
        return `${s}${Math.floor(Math.random() * 1e8).toString(16)}`;
    }
    function Le(s, e, t) {
        const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
        s && Y(o, "warn");
    }
    function le(s, e, t) {
        const o = t.value ? "value" : "get", i = t[o], n = `#${e}Cache`;
        if (t[o] = function(...r) {
            return this[n] === void 0 && (this[n] = i.apply(this, ...r)), this[n];
        }, o === "get" && t.set) {
            const r = t.set;
            t.set = function(a) {
                delete s[n], r.apply(this, a);
            };
        }
        return t;
    }
    const dt = 650;
    function te() {
        return window.matchMedia(`(max-width: ${dt}px)`).matches;
    }
    const tt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
    function Vt(s, e) {
        const t = Array.isArray(s) || D(s), o = Array.isArray(e) || D(e);
        return t || o ? JSON.stringify(s) === JSON.stringify(e) : s === e;
    }
    class c {
        static isSingleTag(e) {
            return e.tagName && [ "AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR" ].includes(e.tagName);
        }
        static isLineBreakTag(e) {
            return e && e.tagName && [ "BR", "WBR" ].includes(e.tagName);
        }
        static make(e, t = null, o = {}) {
            const i = document.createElement(e);
            Array.isArray(t) ? i.classList.add(...t) : t && i.classList.add(t);
            for (const n in o) Object.prototype.hasOwnProperty.call(o, n) && (i[n] = o[n]);
            return i;
        }
        static text(e) {
            return document.createTextNode(e);
        }
        static append(e, t) {
            Array.isArray(t) ? t.forEach((o => e.appendChild(o))) : e.appendChild(t);
        }
        static prepend(e, t) {
            Array.isArray(t) ? (t = t.reverse(), t.forEach((o => e.prepend(o)))) : e.prepend(t);
        }
        static swap(e, t) {
            const o = document.createElement("div"), i = e.parentNode;
            i.insertBefore(o, e), i.insertBefore(e, t), i.insertBefore(t, o), i.removeChild(o);
        }
        static find(e = document, t) {
            return e.querySelector(t);
        }
        static get(e) {
            return document.getElementById(e);
        }
        static findAll(e = document, t) {
            return e.querySelectorAll(t);
        }
        static get allInputsSelector() {
            return "[contenteditable=true], textarea, input:not([type]), " + [ "text", "password", "email", "number", "search", "tel", "url" ].map((t => `input[type="${t}"]`)).join(", ");
        }
        static findAllInputs(e) {
            return ct(e.querySelectorAll(c.allInputsSelector)).reduce(((t, o) => c.isNativeInput(o) || c.containsOnlyInlineElements(o) ? [ ...t, o ] : [ ...t, ...c.getDeepestBlockElements(o) ]), []);
        }
        static getDeepestNode(e, t = !1) {
            const o = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
            if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
                let n = e[o];
                if (c.isSingleTag(n) && !c.isNativeInput(n) && !c.isLineBreakTag(n)) if (n[i]) n = n[i]; else if (n.parentNode[i]) n = n.parentNode[i]; else return n.parentNode;
                return this.getDeepestNode(n, t);
            }
            return e;
        }
        static isElement(e) {
            return Je(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
        }
        static isFragment(e) {
            return Je(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
        }
        static isContentEditable(e) {
            return e.contentEditable === "true";
        }
        static isNativeInput(e) {
            const t = [ "INPUT", "TEXTAREA" ];
            return e && e.tagName ? t.includes(e.tagName) : !1;
        }
        static canSetCaret(e) {
            let t = !0;
            if (c.isNativeInput(e)) switch (e.type) {
              case "file":
              case "checkbox":
              case "radio":
              case "hidden":
              case "submit":
              case "button":
              case "image":
              case "reset":
                t = !1;
                break;
            } else t = c.isContentEditable(e);
            return t;
        }
        static isNodeEmpty(e, t) {
            let o;
            return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? o = e.value : o = e.textContent.replace("​", ""), 
            t && (o = o.replace(new RegExp(t, "g"), "")), o.trim().length === 0);
        }
        static isLeaf(e) {
            return e ? e.childNodes.length === 0 : !1;
        }
        static isEmpty(e, t) {
            e.normalize();
            const o = [ e ];
            for (;o.length > 0; ) if (e = o.shift(), !!e) {
                if (this.isLeaf(e) && !this.isNodeEmpty(e, t)) return !1;
                e.childNodes && o.push(...Array.from(e.childNodes));
            }
            return !0;
        }
        static isHTMLString(e) {
            const t = c.make("div");
            return t.innerHTML = e, t.childElementCount > 0;
        }
        static getContentLength(e) {
            return c.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
        }
        static get blockElements() {
            return [ "address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tbody", "thead", "tr", "tfoot", "ul", "video" ];
        }
        static containsOnlyInlineElements(e) {
            let t;
            G(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
            const o = i => !c.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
            return Array.from(t.children).every(o);
        }
        static getDeepestBlockElements(e) {
            return c.containsOnlyInlineElements(e) ? [ e ] : Array.from(e.children).reduce(((t, o) => [ ...t, ...c.getDeepestBlockElements(o) ]), []);
        }
        static getHolder(e) {
            return G(e) ? document.getElementById(e) : e;
        }
        static isAnchor(e) {
            return e.tagName.toLowerCase() === "a";
        }
        static offset(e) {
            const t = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, n = t.top + i, r = t.left + o;
            return {
                top: n,
                left: r,
                bottom: n + t.height,
                right: r + t.width
            };
        }
    }
    const qt = {
        blockTunes: {
            toggler: {
                "Click to tune": "",
                "or drag to move": ""
            }
        },
        inlineToolbar: {
            converter: {
                "Convert to": ""
            }
        },
        toolbar: {
            toolbox: {
                Add: ""
            }
        },
        popover: {
            Filter: "",
            "Nothing found": ""
        }
    }, Zt = {
        Text: "",
        Link: "",
        Bold: "",
        Italic: ""
    }, Gt = {
        link: {
            "Add a link": ""
        },
        stub: {
            "The block can not be displayed correctly.": ""
        }
    }, Jt = {
        delete: {
            Delete: "",
            "Click to delete": ""
        },
        moveUp: {
            "Move up": ""
        },
        moveDown: {
            "Move down": ""
        }
    }, ht = {
        ui: qt,
        toolNames: Zt,
        tools: Gt,
        blockTunes: Jt
    }, ie = class {
        static ui(s, e) {
            return ie._t(s, e);
        }
        static t(s, e) {
            return ie._t(s, e);
        }
        static setDictionary(s) {
            ie.currentDictionary = s;
        }
        static _t(s, e) {
            const t = ie.getNamespace(s);
            return !t || !t[e] ? e : t[e];
        }
        static getNamespace(s) {
            return s.split(".").reduce(((t, o) => !t || !Object.keys(t).length ? {} : t[o]), ie.currentDictionary);
        }
    };
    let z = ie;
    z.currentDictionary = ht;
    class ut extends Error {}
    class Ee {
        constructor() {
            this.subscribers = {};
        }
        on(e, t) {
            e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
        }
        once(e, t) {
            e in this.subscribers || (this.subscribers[e] = []);
            const o = i => {
                const n = t(i), r = this.subscribers[e].indexOf(o);
                return r !== -1 && this.subscribers[e].splice(r, 1), n;
            };
            this.subscribers[e].push(o);
        }
        emit(e, t) {
            W(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce(((o, i) => {
                const n = i(o);
                return n !== void 0 ? n : o;
            }), t);
        }
        off(e, t) {
            if (this.subscribers[e] === void 0) {
                console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
                return;
            }
            for (let o = 0; o < this.subscribers[e].length; o++) if (this.subscribers[e][o] === t) {
                delete this.subscribers[e][o];
                break;
            }
        }
        destroy() {
            this.subscribers = {};
        }
    }
    function ee(s) {
        Object.setPrototypeOf(this, {
            get id() {
                return s.id;
            },
            get name() {
                return s.name;
            },
            get config() {
                return s.config;
            },
            get holder() {
                return s.holder;
            },
            get isEmpty() {
                return s.isEmpty;
            },
            get selected() {
                return s.selected;
            },
            set stretched(t) {
                s.stretched = t;
            },
            get stretched() {
                return s.stretched;
            },
            get focusable() {
                return s.focusable;
            },
            call(t, o) {
                return s.call(t, o);
            },
            save() {
                return s.save();
            },
            validate(t) {
                return s.validate(t);
            },
            dispatchChange() {
                s.dispatchChange();
            }
        });
    }
    class Fe {
        constructor() {
            this.allListeners = [];
        }
        on(e, t, o, i = !1) {
            const n = Xt("l"), r = {
                id: n,
                element: e,
                eventType: t,
                handler: o,
                options: i
            };
            if (!this.findOne(e, t, o)) return this.allListeners.push(r), e.addEventListener(t, o, i), 
            n;
        }
        off(e, t, o, i) {
            const n = this.findAll(e, t, o);
            n.forEach(((r, a) => {
                const l = this.allListeners.indexOf(n[a]);
                l > -1 && (this.allListeners.splice(l, 1), r.element.removeEventListener(r.eventType, r.handler, r.options));
            }));
        }
        offById(e) {
            const t = this.findById(e);
            t && t.element.removeEventListener(t.eventType, t.handler, t.options);
        }
        findOne(e, t, o) {
            const i = this.findAll(e, t, o);
            return i.length > 0 ? i[0] : null;
        }
        findAll(e, t, o) {
            let i;
            const n = e ? this.findByEventTarget(e) : [];
            return e && t && o ? i = n.filter((r => r.eventType === t && r.handler === o)) : e && t ? i = n.filter((r => r.eventType === t)) : i = n, 
            i;
        }
        removeAll() {
            this.allListeners.map((e => {
                e.element.removeEventListener(e.eventType, e.handler, e.options);
            })), this.allListeners = [];
        }
        destroy() {
            this.removeAll();
        }
        findByEventTarget(e) {
            return this.allListeners.filter((t => {
                if (t.element === e) return t;
            }));
        }
        findByType(e) {
            return this.allListeners.filter((t => {
                if (t.eventType === e) return t;
            }));
        }
        findByHandler(e) {
            return this.allListeners.filter((t => {
                if (t.handler === e) return t;
            }));
        }
        findById(e) {
            return this.allListeners.find((t => t.id === e));
        }
    }
    class y {
        constructor({config: e, eventsDispatcher: t}) {
            if (this.nodes = {}, this.listeners = new Fe, this.readOnlyMutableListeners = {
                on: (o, i, n, r = !1) => {
                    this.mutableListenerIds.push(this.listeners.on(o, i, n, r));
                },
                clearAll: () => {
                    for (const o of this.mutableListenerIds) this.listeners.offById(o);
                    this.mutableListenerIds = [];
                }
            }, this.mutableListenerIds = [], new.target === y) throw new TypeError("Constructors for abstract class Module are not allowed.");
            this.config = e, this.eventsDispatcher = t;
        }
        set state(e) {
            this.Editor = e;
        }
        removeAllNodes() {
            for (const e in this.nodes) {
                const t = this.nodes[e];
                t instanceof HTMLElement && t.remove();
            }
        }
        get isRtl() {
            return this.config.i18n.direction === "rtl";
        }
    }
    class b {
        constructor() {
            this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, 
            this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
        }
        static get CSS() {
            return {
                editorWrapper: "codex-editor",
                editorZone: "codex-editor__redactor"
            };
        }
        static get anchorNode() {
            const e = window.getSelection();
            return e ? e.anchorNode : null;
        }
        static get anchorElement() {
            const e = window.getSelection();
            if (!e) return null;
            const t = e.anchorNode;
            return t ? c.isElement(t) ? t : t.parentElement : null;
        }
        static get anchorOffset() {
            const e = window.getSelection();
            return e ? e.anchorOffset : null;
        }
        static get isCollapsed() {
            const e = window.getSelection();
            return e ? e.isCollapsed : null;
        }
        static get isAtEditor() {
            return this.isSelectionAtEditor(b.get());
        }
        static isSelectionAtEditor(e) {
            if (!e) return !1;
            let t = e.anchorNode || e.focusNode;
            t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
            let o = null;
            return t && t instanceof Element && (o = t.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
        }
        static isRangeAtEditor(e) {
            if (!e) return;
            let t = e.startContainer;
            t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
            let o = null;
            return t && t instanceof Element && (o = t.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
        }
        static get isSelectionExists() {
            return !!b.get().anchorNode;
        }
        static get range() {
            return this.getRangeFromSelection(this.get());
        }
        static getRangeFromSelection(e) {
            return e && e.rangeCount ? e.getRangeAt(0) : null;
        }
        static get rect() {
            let t, e = document.selection, o = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            if (e && e.type !== "Control") return e, t = e.createRange(), o.x = t.boundingLeft, 
            o.y = t.boundingTop, o.width = t.boundingWidth, o.height = t.boundingHeight, o;
            if (!window.getSelection) return T("Method window.getSelection is not supported", "warn"), 
            o;
            if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount)) return T("Method SelectionUtils.rangeCount is not supported", "warn"), 
            o;
            if (e.rangeCount === 0) return o;
            if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o = t.getBoundingClientRect()), 
            o.x === 0 && o.y === 0) {
                const i = document.createElement("span");
                if (i.getBoundingClientRect) {
                    i.appendChild(document.createTextNode("​")), t.insertNode(i), o = i.getBoundingClientRect();
                    const n = i.parentNode;
                    n.removeChild(i), n.normalize();
                }
            }
            return o;
        }
        static get text() {
            return window.getSelection ? window.getSelection().toString() : "";
        }
        static get() {
            return window.getSelection();
        }
        static setCursor(e, t = 0) {
            const o = document.createRange(), i = window.getSelection();
            return c.isNativeInput(e) ? c.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, 
            e.getBoundingClientRect()) : void 0 : (o.setStart(e, t), o.setEnd(e, t), i.removeAllRanges(), 
            i.addRange(o), o.getBoundingClientRect());
        }
        static isRangeInsideContainer(e) {
            const t = b.range;
            return t === null ? !1 : e.contains(t.startContainer);
        }
        static addFakeCursor() {
            const e = b.range;
            if (e === null) return;
            const t = c.make("span", "codex-editor__fake-cursor");
            t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
        }
        static isFakeCursorInsideContainer(e) {
            return c.find(e, ".codex-editor__fake-cursor") !== null;
        }
        static removeFakeCursor(e = document.body) {
            const t = c.find(e, ".codex-editor__fake-cursor");
            t && t.remove();
        }
        removeFakeBackground() {
            this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
        }
        setFakeBackground() {
            document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
        }
        save() {
            this.savedSelectionRange = b.range;
        }
        restore() {
            if (!this.savedSelectionRange) return;
            const e = window.getSelection();
            e.removeAllRanges(), e.addRange(this.savedSelectionRange);
        }
        clearSaved() {
            this.savedSelectionRange = null;
        }
        collapseToEnd() {
            const e = window.getSelection(), t = document.createRange();
            t.selectNodeContents(e.focusNode), t.collapse(!1), e.removeAllRanges(), e.addRange(t);
        }
        findParentTag(e, t, o = 10) {
            const i = window.getSelection();
            let n = null;
            return !i || !i.anchorNode || !i.focusNode ? null : ([ i.anchorNode, i.focusNode ].forEach((a => {
                let l = o;
                for (;l > 0 && a.parentNode && !(a.tagName === e && (n = a, t && a.classList && !a.classList.contains(t) && (n = null), 
                n)); ) a = a.parentNode, l--;
            })), n);
        }
        expandToTag(e) {
            const t = window.getSelection();
            t.removeAllRanges();
            const o = document.createRange();
            o.selectNodeContents(e), t.addRange(o);
        }
    }
    function Qt(s, e) {
        const {type: t, target: o, addedNodes: i, removedNodes: n} = s;
        if (o === e) return !0;
        if ([ "characterData", "attributes" ].includes(t)) {
            const l = o.nodeType === Node.TEXT_NODE ? o.parentNode : o;
            return e.contains(l);
        }
        const r = Array.from(i).some((l => e.contains(l))), a = Array.from(n).some((l => e.contains(l)));
        return r || a;
    }
    const Ae = "redactor dom changed", pt = "block changed", ft = "fake cursor is about to be toggled", gt = "fake cursor have been set";
    function ot(s, e) {
        return s.mergeable && s.name === e.name;
    }
    function eo(s, e) {
        const t = e == null ? void 0 : e.export;
        return M(t) ? t(s) : G(t) ? s[t] : (t !== void 0 && T("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), 
        "");
    }
    function to(s, e) {
        const t = e == null ? void 0 : e.import;
        return M(t) ? t(s) : G(t) ? {
            [t]: s
        } : (t !== void 0 && T("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), 
        {});
    }
    var X = (s => (s.APPEND_CALLBACK = "appendCallback", s.RENDERED = "rendered", s.MOVED = "moved", 
    s.UPDATED = "updated", s.REMOVED = "removed", s.ON_PASTE = "onPaste", s))(X || {});
    class R extends Ee {
        constructor({id: e = Yt(), data: t, tool: o, api: i, readOnly: n, tunesData: r}, a) {
            super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = new Map, 
            this.defaultTunesInstances = new Map, this.unavailableTunesData = {}, this.inputIndex = 0, 
            this.editorEventBus = null, this.handleFocus = () => {
                this.dropInputsCache(), this.updateCurrentInput();
            }, this.didMutated = (l = void 0) => {
                const d = l === void 0, u = l instanceof InputEvent;
                !d && !u && this.detectToolRootChange(l);
                let h;
                d || u ? h = !0 : h = !(l.length > 0 && l.every((x => {
                    const {addedNodes: p, removedNodes: m, target: L} = x;
                    return [ ...Array.from(p), ...Array.from(m), L ].some((S => (c.isElement(S) || (S = S.parentElement), 
                    S && S.closest('[data-mutation-free="true"]') !== null)));
                }))), h && (this.dropInputsCache(), this.updateCurrentInput(), this.call("updated"), 
                this.emit("didMutated", this));
            }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, 
            this.api = i, this.editorEventBus = a || null, this.blockAPI = new ee(this), this.tool = o, 
            this.toolInstance = o.create(t, this.blockAPI, n), this.tunes = o.tunes, this.composeTunes(r), 
            this.holder = this.compose(), window.requestIdleCallback((() => {
                this.watchBlockMutations(), this.addInputEvents();
            }));
        }
        static get CSS() {
            return {
                wrapper: "ce-block",
                wrapperStretched: "ce-block--stretched",
                content: "ce-block__content",
                selected: "ce-block--selected",
                dropTarget: "ce-block--drop-target"
            };
        }
        get inputs() {
            if (this.cachedInputs.length !== 0) return this.cachedInputs;
            const e = c.findAllInputs(this.holder);
            return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, 
            e;
        }
        get currentInput() {
            return this.inputs[this.inputIndex];
        }
        set currentInput(e) {
            const t = this.inputs.findIndex((o => o === e || o.contains(e)));
            t !== -1 && (this.inputIndex = t);
        }
        get firstInput() {
            return this.inputs[0];
        }
        get lastInput() {
            const e = this.inputs;
            return e[e.length - 1];
        }
        get nextInput() {
            return this.inputs[this.inputIndex + 1];
        }
        get previousInput() {
            return this.inputs[this.inputIndex - 1];
        }
        get data() {
            return this.save().then((e => e && !W(e.data) ? e.data : {}));
        }
        get sanitize() {
            return this.tool.sanitizeConfig;
        }
        get mergeable() {
            return M(this.toolInstance.merge);
        }
        get focusable() {
            return this.inputs.length !== 0;
        }
        get isEmpty() {
            const e = c.isEmpty(this.pluginsContent, "/"), t = !this.hasMedia;
            return e && t;
        }
        get hasMedia() {
            const e = [ "img", "iframe", "video", "audio", "source", "input", "textarea", "twitterwidget" ];
            return !!this.holder.querySelector(e.join(","));
        }
        set selected(e) {
            var i, n;
            this.holder.classList.toggle(R.CSS.selected, e);
            const t = e === !0 && b.isRangeInsideContainer(this.holder), o = e === !1 && b.isFakeCursorInsideContainer(this.holder);
            (t || o) && ((i = this.editorEventBus) == null || i.emit(ft, {
                state: e
            }), t ? b.addFakeCursor() : b.removeFakeCursor(this.holder), (n = this.editorEventBus) == null || n.emit(gt, {
                state: e
            }));
        }
        get selected() {
            return this.holder.classList.contains(R.CSS.selected);
        }
        set stretched(e) {
            this.holder.classList.toggle(R.CSS.wrapperStretched, e);
        }
        get stretched() {
            return this.holder.classList.contains(R.CSS.wrapperStretched);
        }
        set dropTarget(e) {
            this.holder.classList.toggle(R.CSS.dropTarget, e);
        }
        get pluginsContent() {
            return this.toolRenderedElement;
        }
        call(e, t) {
            if (M(this.toolInstance[e])) {
                e === "appendCallback" && T("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead", "warn");
                try {
                    this.toolInstance[e].call(this.toolInstance, t);
                } catch (o) {
                    T(`Error during '${e}' call: ${o.message}`, "error");
                }
            }
        }
        async mergeWith(e) {
            await this.toolInstance.merge(e);
        }
        async save() {
            const e = await this.toolInstance.save(this.pluginsContent), t = this.unavailableTunesData;
            [ ...this.tunesInstances.entries(), ...this.defaultTunesInstances.entries() ].forEach((([n, r]) => {
                if (M(r.save)) try {
                    t[n] = r.save();
                } catch (a) {
                    T(`Tune ${r.constructor.name} save method throws an Error %o`, "warn", a);
                }
            }));
            const o = window.performance.now();
            let i;
            return Promise.resolve(e).then((n => (i = window.performance.now(), {
                id: this.id,
                tool: this.name,
                data: n,
                tunes: t,
                time: i - o
            }))).catch((n => {
                T(`Saving process for ${this.name} tool failed due to the ${n}`, "log", "red");
            }));
        }
        async validate(e) {
            let t = !0;
            return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), 
            t;
        }
        getTunes() {
            const e = document.createElement("div"), t = [], o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [], i = [ ...this.tunesInstances.values(), ...this.defaultTunesInstances.values() ].map((n => n.render()));
            return [ o, i ].flat().forEach((n => {
                c.isElement(n) ? e.appendChild(n) : Array.isArray(n) ? t.push(...n) : t.push(n);
            })), [ t, e ];
        }
        updateCurrentInput() {
            this.currentInput = c.isNativeInput(document.activeElement) || !b.anchorNode ? document.activeElement : b.anchorNode;
        }
        dispatchChange() {
            this.didMutated();
        }
        destroy() {
            this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), M(this.toolInstance.destroy) && this.toolInstance.destroy();
        }
        async getActiveToolboxEntry() {
            const e = this.tool.toolbox;
            if (e.length === 1) return Promise.resolve(this.tool.toolbox[0]);
            const t = await this.data;
            return e.find((i => Object.entries(i.data).some((([n, r]) => t[n] && Vt(t[n], r)))));
        }
        async exportDataAsString() {
            const e = await this.data;
            return eo(e, this.tool.conversionConfig);
        }
        compose() {
            const e = c.make("div", R.CSS.wrapper), t = c.make("div", R.CSS.content), o = this.toolInstance.render();
            e.dataset.id = this.id, this.toolRenderedElement = o, t.appendChild(this.toolRenderedElement);
            let i = t;
            return [ ...this.tunesInstances.values(), ...this.defaultTunesInstances.values() ].forEach((n => {
                if (M(n.wrap)) try {
                    i = n.wrap(i);
                } catch (r) {
                    T(`Tune ${n.constructor.name} wrap method throws an Error %o`, "warn", r);
                }
            })), e.appendChild(i), e;
        }
        composeTunes(e) {
            Array.from(this.tunes.values()).forEach((t => {
                (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
            })), Object.entries(e).forEach((([t, o]) => {
                this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o);
            }));
        }
        addInputEvents() {
            this.inputs.forEach((e => {
                e.addEventListener("focus", this.handleFocus), c.isNativeInput(e) && e.addEventListener("input", this.didMutated);
            }));
        }
        removeInputEvents() {
            this.inputs.forEach((e => {
                e.removeEventListener("focus", this.handleFocus), c.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
            }));
        }
        watchBlockMutations() {
            var e;
            this.redactorDomChangedCallback = t => {
                const {mutations: o} = t;
                o.some((n => Qt(n, this.toolRenderedElement))) && this.didMutated(o);
            }, (e = this.editorEventBus) == null || e.on(Ae, this.redactorDomChangedCallback);
        }
        unwatchBlockMutations() {
            var e;
            (e = this.editorEventBus) == null || e.off(Ae, this.redactorDomChangedCallback);
        }
        detectToolRootChange(e) {
            e.forEach((t => {
                if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
                    const i = t.addedNodes[t.addedNodes.length - 1];
                    this.toolRenderedElement = i;
                }
            }));
        }
        dropInputsCache() {
            this.cachedInputs = [];
        }
    }
    class oo extends y {
        constructor() {
            super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o = {}, i, n, r, a) => {
                const l = this.Editor.BlockManager.insert({
                    id: a,
                    tool: e,
                    data: t,
                    index: i,
                    needToFocus: n,
                    replace: r
                });
                return new ee(l);
            }, this.composeBlockData = async e => {
                const t = this.Editor.Tools.blockTools.get(e);
                return new R({
                    tool: t,
                    api: this.Editor.API,
                    readOnly: !0,
                    data: {},
                    tunesData: {}
                }).data;
            }, this.update = async (e, t) => {
                const {BlockManager: o} = this.Editor, i = o.getBlockById(e);
                if (i === void 0) throw new Error(`Block with id "${e}" not found`);
                const n = await o.update(i, t);
                return new ee(n);
            }, this.convert = (e, t, o) => {
                var h, f;
                const {BlockManager: i, Tools: n} = this.Editor, r = i.getBlockById(e);
                if (!r) throw new Error(`Block with id "${e}" not found`);
                const a = n.blockTools.get(r.name), l = n.blockTools.get(t);
                if (!l) throw new Error(`Block Tool with type "${t}" not found`);
                const d = ((h = a == null ? void 0 : a.conversionConfig) == null ? void 0 : h.export) !== void 0, u = ((f = l.conversionConfig) == null ? void 0 : f.import) !== void 0;
                if (d && u) i.convert(r, t, o); else {
                    const x = [ d ? !1 : re(r.name), u ? !1 : re(t) ].filter(Boolean).join(" and ");
                    throw new Error(`Conversion from "${r.name}" to "${t}" is not possible. ${x} tool(s) should provide a "conversionConfig"`);
                }
            }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
                this.validateIndex(t);
                const o = e.map((({id: i, type: n, data: r}) => this.Editor.BlockManager.composeBlock({
                    id: i,
                    tool: n || this.config.defaultBlock,
                    data: r
                })));
                return this.Editor.BlockManager.insertMany(o, t), o.map((i => new ee(i)));
            };
        }
        get methods() {
            return {
                clear: () => this.clear(),
                render: e => this.render(e),
                renderFromHTML: e => this.renderFromHTML(e),
                delete: e => this.delete(e),
                swap: (e, t) => this.swap(e, t),
                move: (e, t) => this.move(e, t),
                getBlockByIndex: e => this.getBlockByIndex(e),
                getById: e => this.getById(e),
                getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
                getBlockIndex: e => this.getBlockIndex(e),
                getBlocksCount: () => this.getBlocksCount(),
                stretchBlock: (e, t = !0) => this.stretchBlock(e, t),
                insertNewBlock: () => this.insertNewBlock(),
                insert: this.insert,
                insertMany: this.insertMany,
                update: this.update,
                composeBlockData: this.composeBlockData,
                convert: this.convert
            };
        }
        getBlocksCount() {
            return this.Editor.BlockManager.blocks.length;
        }
        getCurrentBlockIndex() {
            return this.Editor.BlockManager.currentBlockIndex;
        }
        getBlockIndex(e) {
            const t = this.Editor.BlockManager.getBlockById(e);
            if (!t) {
                Y("There is no block with id `" + e + "`", "warn");
                return;
            }
            return this.Editor.BlockManager.getBlockIndex(t);
        }
        getBlockByIndex(e) {
            const t = this.Editor.BlockManager.getBlockByIndex(e);
            if (t === void 0) {
                Y("There is no block at index `" + e + "`", "warn");
                return;
            }
            return new ee(t);
        }
        getById(e) {
            const t = this.Editor.BlockManager.getBlockById(e);
            return t === void 0 ? (Y("There is no block with id `" + e + "`", "warn"), null) : new ee(t);
        }
        swap(e, t) {
            T("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead", "info"), 
            this.Editor.BlockManager.swap(e, t);
        }
        move(e, t) {
            this.Editor.BlockManager.move(e, t);
        }
        delete(e = this.Editor.BlockManager.currentBlockIndex) {
            try {
                const t = this.Editor.BlockManager.getBlockByIndex(e);
                this.Editor.BlockManager.removeBlock(t);
            } catch (t) {
                Y(t, "warn");
                return;
            }
            this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), 
            this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), 
            this.Editor.Toolbar.close();
        }
        async clear() {
            await this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
        }
        async render(e) {
            if (e === void 0 || e.blocks === void 0) throw new Error("Incorrect data passed to the render() method");
            this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), 
            await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
        }
        renderFromHTML(e) {
            return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
        }
        stretchBlock(e, t = !0) {
            Le(!0, "blocks.stretchBlock()", "BlockAPI");
            const o = this.Editor.BlockManager.getBlockByIndex(e);
            o && (o.stretched = t);
        }
        insertNewBlock() {
            T("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), 
            this.insert();
        }
        validateIndex(e) {
            if (typeof e != "number") throw new Error("Index should be a number");
            if (e < 0) throw new Error("Index should be greater than or equal to 0");
            if (e === null) throw new Error("Index should be greater than or equal to 0");
        }
    }
    class io extends y {
        constructor() {
            super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), 
            !0) : !1, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), 
            !0) : !1, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), 
            !0) : !1, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), 
            !0) : !1, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o = 0) => this.Editor.BlockManager.blocks[e] ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.blocks[e], t, o), 
            !0) : !1, this.focus = (e = !1) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
        }
        get methods() {
            return {
                setToFirstBlock: this.setToFirstBlock,
                setToLastBlock: this.setToLastBlock,
                setToPreviousBlock: this.setToPreviousBlock,
                setToNextBlock: this.setToNextBlock,
                setToBlock: this.setToBlock,
                focus: this.focus
            };
        }
    }
    class no extends y {
        get methods() {
            return {
                emit: (e, t) => this.emit(e, t),
                off: (e, t) => this.off(e, t),
                on: (e, t) => this.on(e, t)
            };
        }
        on(e, t) {
            this.eventsDispatcher.on(e, t);
        }
        emit(e, t) {
            this.eventsDispatcher.emit(e, t);
        }
        off(e, t) {
            this.eventsDispatcher.off(e, t);
        }
    }
    class He extends y {
        static getNamespace(e) {
            return e.isTune() ? `blockTunes.${e.name}` : `tools.${e.name}`;
        }
        get methods() {
            return {
                t: () => {
                    Y("I18n.t() method can be accessed only from Tools", "warn");
                }
            };
        }
        getMethodsForTool(e) {
            return Object.assign(this.methods, {
                t: t => z.t(He.getNamespace(e), t)
            });
        }
    }
    class so extends y {
        get methods() {
            return {
                blocks: this.Editor.BlocksAPI.methods,
                caret: this.Editor.CaretAPI.methods,
                events: this.Editor.EventsAPI.methods,
                listeners: this.Editor.ListenersAPI.methods,
                notifier: this.Editor.NotifierAPI.methods,
                sanitizer: this.Editor.SanitizerAPI.methods,
                saver: this.Editor.SaverAPI.methods,
                selection: this.Editor.SelectionAPI.methods,
                styles: this.Editor.StylesAPI.classes,
                toolbar: this.Editor.ToolbarAPI.methods,
                inlineToolbar: this.Editor.InlineToolbarAPI.methods,
                tooltip: this.Editor.TooltipAPI.methods,
                i18n: this.Editor.I18nAPI.methods,
                readOnly: this.Editor.ReadOnlyAPI.methods,
                ui: this.Editor.UiAPI.methods
            };
        }
        getMethodsForTool(e) {
            return Object.assign(this.methods, {
                i18n: this.Editor.I18nAPI.getMethodsForTool(e)
            });
        }
    }
    class ro extends y {
        get methods() {
            return {
                close: () => this.close(),
                open: () => this.open()
            };
        }
        open() {
            this.Editor.InlineToolbar.tryToShow();
        }
        close() {
            this.Editor.InlineToolbar.close();
        }
    }
    class ao extends y {
        get methods() {
            return {
                on: (e, t, o, i) => this.on(e, t, o, i),
                off: (e, t, o, i) => this.off(e, t, o, i),
                offById: e => this.offById(e)
            };
        }
        on(e, t, o, i) {
            return this.listeners.on(e, t, o, i);
        }
        off(e, t, o, i) {
            this.listeners.off(e, t, o, i);
        }
        offById(e) {
            this.listeners.offById(e);
        }
    }
    var _e = {}, lo = {
        get exports() {
            return _e;
        },
        set exports(s) {
            _e = s;
        }
    };
    (function(s, e) {
        (function(t, o) {
            s.exports = o();
        })(window, (function() {
            return function(t) {
                var o = {};
                function i(n) {
                    if (o[n]) return o[n].exports;
                    var r = o[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
                }
                return i.m = t, i.c = o, i.d = function(n, r, a) {
                    i.o(n, r) || Object.defineProperty(n, r, {
                        enumerable: !0,
                        get: a
                    });
                }, i.r = function(n) {
                    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                }, i.t = function(n, r) {
                    if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule) return n;
                    var a = Object.create(null);
                    if (i.r(a), Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: n
                    }), 2 & r && typeof n != "string") for (var l in n) i.d(a, l, function(d) {
                        return n[d];
                    }.bind(null, l));
                    return a;
                }, i.n = function(n) {
                    var r = n && n.__esModule ? function() {
                        return n.default;
                    } : function() {
                        return n;
                    };
                    return i.d(r, "a", r), r;
                }, i.o = function(n, r) {
                    return Object.prototype.hasOwnProperty.call(n, r);
                }, i.p = "/", i(i.s = 0);
            }([ function(t, o, i) {
                i(1), 
                /*!
       * Codex JavaScript Notification module
       * https://github.com/codex-team/js-notifier
       */
                t.exports = function() {
                    var n = i(6), r = "cdx-notify--bounce-in", a = null;
                    return {
                        show: function(l) {
                            if (l.message) {
                                (function() {
                                    if (a) return !0;
                                    a = n.getWrapper(), document.body.appendChild(a);
                                })();
                                var d = null, u = l.time || 8e3;
                                switch (l.type) {
                                  case "confirm":
                                    d = n.confirm(l);
                                    break;

                                  case "prompt":
                                    d = n.prompt(l);
                                    break;

                                  default:
                                    d = n.alert(l), window.setTimeout((function() {
                                        d.remove();
                                    }), u);
                                }
                                a.appendChild(d), d.classList.add(r);
                            }
                        }
                    };
                }();
            }, function(t, o, i) {
                var n = i(2);
                typeof n == "string" && (n = [ [ t.i, n, "" ] ]);
                var r = {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                };
                i(4)(n, r), n.locals && (t.exports = n.locals);
            }, function(t, o, i) {
                (t.exports = i(3)(!1)).push([ t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, "" ]);
            }, function(t, o) {
                t.exports = function(i) {
                    var n = [];
                    return n.toString = function() {
                        return this.map((function(r) {
                            var a = function(l, d) {
                                var u = l[1] || "", h = l[3];
                                if (!h) return u;
                                if (d && typeof btoa == "function") {
                                    var f = (p = h, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(p)))) + " */"), x = h.sources.map((function(m) {
                                        return "/*# sourceURL=" + h.sourceRoot + m + " */";
                                    }));
                                    return [ u ].concat(x).concat([ f ]).join(`\n`);
                                }
                                var p;
                                return [ u ].join(`\n`);
                            }(r, i);
                            return r[2] ? "@media " + r[2] + "{" + a + "}" : a;
                        })).join("");
                    }, n.i = function(r, a) {
                        typeof r == "string" && (r = [ [ null, r, "" ] ]);
                        for (var l = {}, d = 0; d < this.length; d++) {
                            var u = this[d][0];
                            typeof u == "number" && (l[u] = !0);
                        }
                        for (d = 0; d < r.length; d++) {
                            var h = r[d];
                            typeof h[0] == "number" && l[h[0]] || (a && !h[2] ? h[2] = a : a && (h[2] = "(" + h[2] + ") and (" + a + ")"), 
                            n.push(h));
                        }
                    }, n;
                };
            }, function(t, o, i) {
                var n, r, a = {}, l = (n = function() {
                    return window && document && document.all && !window.atob;
                }, function() {
                    return r === void 0 && (r = n.apply(this, arguments)), r;
                }), d = function(v) {
                    var g = {};
                    return function(w) {
                        if (typeof w == "function") return w();
                        if (g[w] === void 0) {
                            var E = function(I) {
                                return document.querySelector(I);
                            }.call(this, w);
                            if (window.HTMLIFrameElement && E instanceof window.HTMLIFrameElement) try {
                                E = E.contentDocument.head;
                            } catch {
                                E = null;
                            }
                            g[w] = E;
                        }
                        return g[w];
                    };
                }(), u = null, h = 0, f = [], x = i(5);
                function p(v, g) {
                    for (var w = 0; w < v.length; w++) {
                        var E = v[w], I = a[E.id];
                        if (I) {
                            I.refs++;
                            for (var C = 0; C < I.parts.length; C++) I.parts[C](E.parts[C]);
                            for (;C < E.parts.length; C++) I.parts.push(H(E.parts[C], g));
                        } else {
                            var O = [];
                            for (C = 0; C < E.parts.length; C++) O.push(H(E.parts[C], g));
                            a[E.id] = {
                                id: E.id,
                                refs: 1,
                                parts: O
                            };
                        }
                    }
                }
                function m(v, g) {
                    for (var w = [], E = {}, I = 0; I < v.length; I++) {
                        var C = v[I], O = g.base ? C[0] + g.base : C[0], B = {
                            css: C[1],
                            media: C[2],
                            sourceMap: C[3]
                        };
                        E[O] ? E[O].parts.push(B) : w.push(E[O] = {
                            id: O,
                            parts: [ B ]
                        });
                    }
                    return w;
                }
                function L(v, g) {
                    var w = d(v.insertInto);
                    if (!w) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                    var E = f[f.length - 1];
                    if (v.insertAt === "top") E ? E.nextSibling ? w.insertBefore(g, E.nextSibling) : w.appendChild(g) : w.insertBefore(g, w.firstChild), 
                    f.push(g); else if (v.insertAt === "bottom") w.appendChild(g); else {
                        if (typeof v.insertAt != "object" || !v.insertAt.before) throw new Error(`[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n`);
                        var I = d(v.insertInto + " " + v.insertAt.before);
                        w.insertBefore(g, I);
                    }
                }
                function A(v) {
                    if (v.parentNode === null) return !1;
                    v.parentNode.removeChild(v);
                    var g = f.indexOf(v);
                    g >= 0 && f.splice(g, 1);
                }
                function S(v) {
                    var g = document.createElement("style");
                    return v.attrs.type === void 0 && (v.attrs.type = "text/css"), Z(g, v.attrs), L(v, g), 
                    g;
                }
                function Z(v, g) {
                    Object.keys(g).forEach((function(w) {
                        v.setAttribute(w, g[w]);
                    }));
                }
                function H(v, g) {
                    var w, E, I, C;
                    if (g.transform && v.css) {
                        if (!(C = g.transform(v.css))) return function() {};
                        v.css = C;
                    }
                    if (g.singleton) {
                        var O = h++;
                        w = u || (u = S(g)), E = ce.bind(null, w, O, !1), I = ce.bind(null, w, O, !0);
                    } else v.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (w = function(B) {
                        var j = document.createElement("link");
                        return B.attrs.type === void 0 && (B.attrs.type = "text/css"), B.attrs.rel = "stylesheet", 
                        Z(j, B.attrs), L(B, j), j;
                    }(g), E = function(B, j, de) {
                        var Q = de.css, Ce = de.sourceMap, Ot = j.convertToAbsoluteUrls === void 0 && Ce;
                        (j.convertToAbsoluteUrls || Ot) && (Q = x(Q)), Ce && (Q += `\n/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(Ce)))) + " */");
                        var Nt = new Blob([ Q ], {
                            type: "text/css"
                        }), Ge = B.href;
                        B.href = URL.createObjectURL(Nt), Ge && URL.revokeObjectURL(Ge);
                    }.bind(null, w, g), I = function() {
                        A(w), w.href && URL.revokeObjectURL(w.href);
                    }) : (w = S(g), E = function(B, j) {
                        var de = j.css, Q = j.media;
                        if (Q && B.setAttribute("media", Q), B.styleSheet) B.styleSheet.cssText = de; else {
                            for (;B.firstChild; ) B.removeChild(B.firstChild);
                            B.appendChild(document.createTextNode(de));
                        }
                    }.bind(null, w), I = function() {
                        A(w);
                    });
                    return E(v), function(B) {
                        if (B) {
                            if (B.css === v.css && B.media === v.media && B.sourceMap === v.sourceMap) return;
                            E(v = B);
                        } else I();
                    };
                }
                t.exports = function(v, g) {
                    if (typeof DEBUG < "u" && DEBUG && typeof document != "object") throw new Error("The style-loader cannot be used in a non-browser environment");
                    (g = g || {}).attrs = typeof g.attrs == "object" ? g.attrs : {}, g.singleton || typeof g.singleton == "boolean" || (g.singleton = l()), 
                    g.insertInto || (g.insertInto = "head"), g.insertAt || (g.insertAt = "bottom");
                    var w = m(v, g);
                    return p(w, g), function(E) {
                        for (var I = [], C = 0; C < w.length; C++) {
                            var O = w[C];
                            (B = a[O.id]).refs--, I.push(B);
                        }
                        for (E && p(m(E, g), g), C = 0; C < I.length; C++) {
                            var B;
                            if ((B = I[C]).refs === 0) {
                                for (var j = 0; j < B.parts.length; j++) B.parts[j]();
                                delete a[B.id];
                            }
                        }
                    };
                };
                var U, J = (U = [], function(v, g) {
                    return U[v] = g, U.filter(Boolean).join(`\n`);
                });
                function ce(v, g, w, E) {
                    var I = w ? "" : E.css;
                    if (v.styleSheet) v.styleSheet.cssText = J(g, I); else {
                        var C = document.createTextNode(I), O = v.childNodes;
                        O[g] && v.removeChild(O[g]), O.length ? v.insertBefore(C, O[g]) : v.appendChild(C);
                    }
                }
            }, function(t, o) {
                t.exports = function(i) {
                    var n = typeof window < "u" && window.location;
                    if (!n) throw new Error("fixUrls requires window.location");
                    if (!i || typeof i != "string") return i;
                    var r = n.protocol + "//" + n.host, a = r + n.pathname.replace(/\/[^\/]*$/, "/");
                    return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(l, d) {
                        var u, h = d.trim().replace(/^"(.*)"$/, (function(f, x) {
                            return x;
                        })).replace(/^'(.*)'$/, (function(f, x) {
                            return x;
                        }));
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h) ? l : (u = h.indexOf("//") === 0 ? h : h.indexOf("/") === 0 ? r + h : a + h.replace(/^\.\//, ""), 
                        "url(" + JSON.stringify(u) + ")");
                    }));
                };
            }, function(t, o, i) {
                var n, r, a, l, d, u, h, f, x;
                t.exports = (n = "cdx-notifies", r = "cdx-notify", a = "cdx-notify__cross", l = "cdx-notify__button--confirm", 
                d = "cdx-notify__button--cancel", u = "cdx-notify__input", h = "cdx-notify__button", 
                f = "cdx-notify__btns-wrapper", {
                    alert: x = function(p) {
                        var m = document.createElement("DIV"), L = document.createElement("DIV"), A = p.message, S = p.style;
                        return m.classList.add(r), S && m.classList.add(r + "--" + S), m.innerHTML = A, 
                        L.classList.add(a), L.addEventListener("click", m.remove.bind(m)), m.appendChild(L), 
                        m;
                    },
                    confirm: function(p) {
                        var m = x(p), L = document.createElement("div"), A = document.createElement("button"), S = document.createElement("button"), Z = m.querySelector("." + a), H = p.cancelHandler, U = p.okHandler;
                        return L.classList.add(f), A.innerHTML = p.okText || "Confirm", S.innerHTML = p.cancelText || "Cancel", 
                        A.classList.add(h), S.classList.add(h), A.classList.add(l), S.classList.add(d), 
                        H && typeof H == "function" && (S.addEventListener("click", H), Z.addEventListener("click", H)), 
                        U && typeof U == "function" && A.addEventListener("click", U), A.addEventListener("click", m.remove.bind(m)), 
                        S.addEventListener("click", m.remove.bind(m)), L.appendChild(A), L.appendChild(S), 
                        m.appendChild(L), m;
                    },
                    prompt: function(p) {
                        var m = x(p), L = document.createElement("div"), A = document.createElement("button"), S = document.createElement("input"), Z = m.querySelector("." + a), H = p.cancelHandler, U = p.okHandler;
                        return L.classList.add(f), A.innerHTML = p.okText || "Ok", A.classList.add(h), A.classList.add(l), 
                        S.classList.add(u), p.placeholder && S.setAttribute("placeholder", p.placeholder), 
                        p.default && (S.value = p.default), p.inputType && (S.type = p.inputType), H && typeof H == "function" && Z.addEventListener("click", H), 
                        U && typeof U == "function" && A.addEventListener("click", (function() {
                            U(S.value);
                        })), A.addEventListener("click", m.remove.bind(m)), L.appendChild(S), L.appendChild(A), 
                        m.appendChild(L), m;
                    },
                    getWrapper: function() {
                        var p = document.createElement("DIV");
                        return p.classList.add(n), p;
                    }
                });
            } ]);
        }));
    })(lo);
    const co = Pe(_e);
    class ho {
        show(e) {
            co.show(e);
        }
    }
    class uo extends y {
        constructor({config: e, eventsDispatcher: t}) {
            super({
                config: e,
                eventsDispatcher: t
            }), this.notifier = new ho;
        }
        get methods() {
            return {
                show: e => this.show(e)
            };
        }
        show(e) {
            return this.notifier.show(e);
        }
    }
    class po extends y {
        get methods() {
            const e = () => this.isEnabled;
            return {
                toggle: t => this.toggle(t),
                get isEnabled() {
                    return e();
                }
            };
        }
        toggle(e) {
            return this.Editor.ReadOnly.toggle(e);
        }
        get isEnabled() {
            return this.Editor.ReadOnly.isEnabled;
        }
    }
    var Oe = {}, fo = {
        get exports() {
            return Oe;
        },
        set exports(s) {
            Oe = s;
        }
    };
    (function(s, e) {
        (function(t, o) {
            s.exports = o();
        })(0, (function() {
            function t(h) {
                var f = h.tags, x = Object.keys(f), p = x.map((function(m) {
                    return typeof f[m];
                })).every((function(m) {
                    return m === "object" || m === "boolean" || m === "function";
                }));
                if (!p) throw new Error("The configuration was invalid");
                this.config = h;
            }
            var o = [ "P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE" ];
            function i(h) {
                return o.indexOf(h.nodeName) !== -1;
            }
            var n = [ "A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE" ];
            function r(h) {
                return n.indexOf(h.nodeName) !== -1;
            }
            t.prototype.clean = function(h) {
                const f = document.implementation.createHTMLDocument(), x = f.createElement("div");
                return x.innerHTML = h, this._sanitize(f, x), x.innerHTML;
            }, t.prototype._sanitize = function(h, f) {
                var x = a(h, f), p = x.firstChild();
                if (p) do {
                    if (p.nodeType === Node.TEXT_NODE) if (p.data.trim() === "" && (p.previousElementSibling && i(p.previousElementSibling) || p.nextElementSibling && i(p.nextElementSibling))) {
                        f.removeChild(p), this._sanitize(h, f);
                        break;
                    } else continue;
                    if (p.nodeType === Node.COMMENT_NODE) {
                        f.removeChild(p), this._sanitize(h, f);
                        break;
                    }
                    var L, m = r(p);
                    m && (L = Array.prototype.some.call(p.childNodes, i));
                    var A = !!f.parentNode, S = i(f) && i(p) && A, Z = p.nodeName.toLowerCase(), H = l(this.config, Z, p), U = m && L;
                    if (U || d(p, H) || !this.config.keepNestedBlockElements && S) {
                        if (!(p.nodeName === "SCRIPT" || p.nodeName === "STYLE")) for (;p.childNodes.length > 0; ) f.insertBefore(p.childNodes[0], p);
                        f.removeChild(p), this._sanitize(h, f);
                        break;
                    }
                    for (var J = 0; J < p.attributes.length; J += 1) {
                        var ce = p.attributes[J];
                        u(ce, H, p) && (p.removeAttribute(ce.name), J -= 1);
                    }
                    this._sanitize(h, p);
                } while (p = x.nextSibling());
            };
            function a(h, f) {
                return h.createTreeWalker(f, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, !1);
            }
            function l(h, f, x) {
                return typeof h.tags[f] == "function" ? h.tags[f](x) : h.tags[f];
            }
            function d(h, f) {
                return typeof f > "u" ? !0 : typeof f == "boolean" ? !f : !1;
            }
            function u(h, f, x) {
                var p = h.name.toLowerCase();
                return f === !0 ? !1 : typeof f[p] == "function" ? !f[p](h.value, x) : typeof f[p] > "u" || f[p] === !1 ? !0 : typeof f[p] == "string" ? f[p] !== h.value : !1;
            }
            return t;
        }));
    })(fo);
    const go = Oe;
    function bt(s, e) {
        return s.map((t => {
            const o = M(e) ? e(t.tool) : e;
            return W(o) || (t.data = ze(t.data, o)), t;
        }));
    }
    function V(s, e = {}) {
        const t = {
            tags: e
        };
        return new go(t).clean(s);
    }
    function ze(s, e) {
        return Array.isArray(s) ? bo(s, e) : D(s) ? mo(s, e) : G(s) ? ko(s, e) : s;
    }
    function bo(s, e) {
        return s.map((t => ze(t, e)));
    }
    function mo(s, e) {
        const t = {};
        for (const o in s) {
            if (!Object.prototype.hasOwnProperty.call(s, o)) continue;
            const i = s[o], n = vo(e[o]) ? e[o] : e;
            t[o] = ze(i, n);
        }
        return t;
    }
    function ko(s, e) {
        return D(e) ? V(s, e) : e === !1 ? V(s, {}) : s;
    }
    function vo(s) {
        return D(s) || Ht(s) || M(s);
    }
    class xo extends y {
        get methods() {
            return {
                clean: (e, t) => this.clean(e, t)
            };
        }
        clean(e, t) {
            return V(e, t);
        }
    }
    class wo extends y {
        get methods() {
            return {
                save: () => this.save()
            };
        }
        save() {
            const e = "Editor's content can not be saved in read-only mode";
            return this.Editor.ReadOnly.isEnabled ? (Y(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
        }
    }
    class yo extends y {
        get methods() {
            return {
                findParentTag: (e, t) => this.findParentTag(e, t),
                expandToTag: e => this.expandToTag(e)
            };
        }
        findParentTag(e, t) {
            return (new b).findParentTag(e, t);
        }
        expandToTag(e) {
            (new b).expandToTag(e);
        }
    }
    class Eo extends y {
        get classes() {
            return {
                block: "cdx-block",
                inlineToolButton: "ce-inline-tool",
                inlineToolButtonActive: "ce-inline-tool--active",
                input: "cdx-input",
                loader: "cdx-loader",
                button: "cdx-button",
                settingsButton: "cdx-settings-button",
                settingsButtonActive: "cdx-settings-button--active"
            };
        }
    }
    class Bo extends y {
        get methods() {
            return {
                close: () => this.close(),
                open: () => this.open(),
                toggleBlockSettings: e => this.toggleBlockSettings(e),
                toggleToolbox: e => this.toggleToolbox(e)
            };
        }
        open() {
            this.Editor.Toolbar.moveAndOpen();
        }
        close() {
            this.Editor.Toolbar.close();
        }
        toggleBlockSettings(e) {
            if (this.Editor.BlockManager.currentBlockIndex === -1) {
                Y("Could't toggle the Toolbar because there is no block selected ", "warn");
                return;
            }
            e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
        }
        toggleToolbox(e) {
            if (this.Editor.BlockManager.currentBlockIndex === -1) {
                Y("Could't toggle the Toolbox because there is no block selected ", "warn");
                return;
            }
            e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
        }
    }
    var Ne = {}, Co = {
        get exports() {
            return Ne;
        },
        set exports(s) {
            Ne = s;
        }
    };
    /*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */    (function(s, e) {
        (function(t, o) {
            s.exports = o();
        })(window, (function() {
            return function(t) {
                var o = {};
                function i(n) {
                    if (o[n]) return o[n].exports;
                    var r = o[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
                }
                return i.m = t, i.c = o, i.d = function(n, r, a) {
                    i.o(n, r) || Object.defineProperty(n, r, {
                        enumerable: !0,
                        get: a
                    });
                }, i.r = function(n) {
                    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                }, i.t = function(n, r) {
                    if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule) return n;
                    var a = Object.create(null);
                    if (i.r(a), Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: n
                    }), 2 & r && typeof n != "string") for (var l in n) i.d(a, l, function(d) {
                        return n[d];
                    }.bind(null, l));
                    return a;
                }, i.n = function(n) {
                    var r = n && n.__esModule ? function() {
                        return n.default;
                    } : function() {
                        return n;
                    };
                    return i.d(r, "a", r), r;
                }, i.o = function(n, r) {
                    return Object.prototype.hasOwnProperty.call(n, r);
                }, i.p = "", i(i.s = 0);
            }([ function(t, o, i) {
                t.exports = i(1);
            }, function(t, o, i) {
                i.r(o), i.d(o, "default", (function() {
                    return n;
                }));
                class n {
                    constructor() {
                        this.nodes = {
                            wrapper: null,
                            content: null
                        }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, 
                        this.hidingDelay = 0, this.handleWindowScroll = () => {
                            this.showed && this.hide(!0);
                        }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, {
                            passive: !0
                        });
                    }
                    get CSS() {
                        return {
                            tooltip: "ct",
                            tooltipContent: "ct__content",
                            tooltipShown: "ct--shown",
                            placement: {
                                left: "ct--left",
                                bottom: "ct--bottom",
                                right: "ct--right",
                                top: "ct--top"
                            }
                        };
                    }
                    show(a, l, d) {
                        this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
                        const u = Object.assign({
                            placement: "bottom",
                            marginTop: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            delay: 70,
                            hidingDelay: 0
                        }, d);
                        if (u.hidingDelay && (this.hidingDelay = u.hidingDelay), this.nodes.content.innerHTML = "", 
                        typeof l == "string") this.nodes.content.appendChild(document.createTextNode(l)); else {
                            if (!(l instanceof Node)) throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof l + " given.");
                            this.nodes.content.appendChild(l);
                        }
                        switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), 
                        u.placement) {
                          case "top":
                            this.placeTop(a, u);
                            break;

                          case "left":
                            this.placeLeft(a, u);
                            break;

                          case "right":
                            this.placeRight(a, u);
                            break;

                          case "bottom":
                          default:
                            this.placeBottom(a, u);
                        }
                        u && u.delay ? this.showingTimeout = setTimeout((() => {
                            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
                        }), u.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
                    }
                    hide(a = !1) {
                        if (this.hidingDelay && !a) return this.hidingTimeout && clearTimeout(this.hidingTimeout), 
                        void (this.hidingTimeout = setTimeout((() => {
                            this.hide(!0);
                        }), this.hidingDelay));
                        this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
                    }
                    onHover(a, l, d) {
                        a.addEventListener("mouseenter", (() => {
                            this.show(a, l, d);
                        })), a.addEventListener("mouseleave", (() => {
                            this.hide();
                        }));
                    }
                    destroy() {
                        this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
                    }
                    prepare() {
                        this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), 
                        this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
                    }
                    loadStyles() {
                        const a = "codex-tooltips-style";
                        if (document.getElementById(a)) return;
                        const l = i(2), d = this.make("style", null, {
                            textContent: l.toString(),
                            id: a
                        });
                        this.prepend(document.head, d);
                    }
                    placeBottom(a, l) {
                        const d = a.getBoundingClientRect(), u = d.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = d.bottom + window.pageYOffset + this.offsetTop + l.marginTop;
                        this.applyPlacement("bottom", u, h);
                    }
                    placeTop(a, l) {
                        const d = a.getBoundingClientRect(), u = d.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = d.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
                        this.applyPlacement("top", u, h);
                    }
                    placeLeft(a, l) {
                        const d = a.getBoundingClientRect(), u = d.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - l.marginLeft, h = d.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                        this.applyPlacement("left", u, h);
                    }
                    placeRight(a, l) {
                        const d = a.getBoundingClientRect(), u = d.right + this.offsetRight + l.marginRight, h = d.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                        this.applyPlacement("right", u, h);
                    }
                    applyPlacement(a, l, d) {
                        this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = l + "px", 
                        this.nodes.wrapper.style.top = d + "px";
                    }
                    make(a, l = null, d = {}) {
                        const u = document.createElement(a);
                        Array.isArray(l) ? u.classList.add(...l) : l && u.classList.add(l);
                        for (const h in d) d.hasOwnProperty(h) && (u[h] = d[h]);
                        return u;
                    }
                    append(a, l) {
                        Array.isArray(l) ? l.forEach((d => a.appendChild(d))) : a.appendChild(l);
                    }
                    prepend(a, l) {
                        Array.isArray(l) ? (l = l.reverse()).forEach((d => a.prepend(d))) : a.prepend(l);
                    }
                }
            }, function(t, o) {
                t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
            } ]).default;
        }));
    })(Co);
    const To = Pe(Ne);
    let F = null;
    function Ue() {
        F || (F = new To);
    }
    function So(s, e, t) {
        Ue(), F == null || F.show(s, e, t);
    }
    function Re(s = !1) {
        Ue(), F == null || F.hide(s);
    }
    function ge(s, e, t) {
        Ue(), F == null || F.onHover(s, e, t);
    }
    function Io() {
        F == null || F.destroy(), F = null;
    }
    class Mo extends y {
        constructor({config: e, eventsDispatcher: t}) {
            super({
                config: e,
                eventsDispatcher: t
            });
        }
        get methods() {
            return {
                show: (e, t, o) => this.show(e, t, o),
                hide: () => this.hide(),
                onHover: (e, t, o) => this.onHover(e, t, o)
            };
        }
        show(e, t, o) {
            So(e, t, o);
        }
        hide() {
            Re();
        }
        onHover(e, t, o) {
            ge(e, t, o);
        }
    }
    class Lo extends y {
        get methods() {
            return {
                nodes: this.editorNodes
            };
        }
        get editorNodes() {
            return {
                wrapper: this.Editor.UI.nodes.wrapper,
                redactor: this.Editor.UI.nodes.redactor
            };
        }
    }
    function mt(s, e) {
        const t = {};
        return Object.entries(s).forEach((([o, i]) => {
            if (D(i)) {
                const n = e ? `${e}.${o}` : o;
                Object.values(i).every((a => G(a))) ? t[o] = n : t[o] = mt(i, n);
                return;
            }
            t[o] = i;
        })), t;
    }
    const K = mt(ht);
    function Ao(s, e) {
        const t = {};
        return Object.keys(s).forEach((o => {
            const i = e[o];
            i !== void 0 ? t[i] = s[o] : t[o] = s[o];
        })), t;
    }
    const _o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', kt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', Oo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', No = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', Ro = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', Do = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', it = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', Po = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', Fo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', Ho = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', zo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', Uo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
    class _ {
        constructor(e) {
            this.nodes = {
                root: null,
                icon: null
            }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
                this.nodes.root.classList.remove(_.CSS.noFocus);
            }, this.removeSpecialHoverBehavior = () => {
                this.nodes.root.classList.remove(_.CSS.noHover);
            }, this.onErrorAnimationEnd = () => {
                this.nodes.icon.classList.remove(_.CSS.wobbleAnimation), this.nodes.icon.removeEventListener("animationend", this.onErrorAnimationEnd);
            }, this.params = e, this.nodes.root = this.make(e);
        }
        get isDisabled() {
            return this.params.isDisabled;
        }
        get toggle() {
            return this.params.toggle;
        }
        get title() {
            return this.params.title;
        }
        get closeOnActivate() {
            return this.params.closeOnActivate;
        }
        get isConfirmationStateEnabled() {
            return this.confirmationState !== null;
        }
        get isFocused() {
            return this.nodes.root.classList.contains(_.CSS.focused);
        }
        static get CSS() {
            return {
                container: "ce-popover-item",
                title: "ce-popover-item__title",
                secondaryTitle: "ce-popover-item__secondary-title",
                icon: "ce-popover-item__icon",
                active: "ce-popover-item--active",
                disabled: "ce-popover-item--disabled",
                focused: "ce-popover-item--focused",
                hidden: "ce-popover-item--hidden",
                confirmationState: "ce-popover-item--confirmation",
                noHover: "ce-popover-item--no-hover",
                noFocus: "ce-popover-item--no-focus",
                wobbleAnimation: "wobble"
            };
        }
        getElement() {
            return this.nodes.root;
        }
        handleClick() {
            if (this.isConfirmationStateEnabled) {
                this.activateOrEnableConfirmationMode(this.confirmationState);
                return;
            }
            this.activateOrEnableConfirmationMode(this.params);
        }
        toggleActive(e) {
            this.nodes.root.classList.toggle(_.CSS.active, e);
        }
        toggleHidden(e) {
            this.nodes.root.classList.toggle(_.CSS.hidden, e);
        }
        reset() {
            this.isConfirmationStateEnabled && this.disableConfirmationMode();
        }
        onFocus() {
            this.disableSpecialHoverAndFocusBehavior();
        }
        make(e) {
            const t = c.make("div", _.CSS.container);
            return e.name && (t.dataset.itemName = e.name), this.nodes.icon = c.make("div", _.CSS.icon, {
                innerHTML: e.icon || Ro
            }), t.appendChild(this.nodes.icon), t.appendChild(c.make("div", _.CSS.title, {
                innerHTML: e.title || ""
            })), e.secondaryLabel && t.appendChild(c.make("div", _.CSS.secondaryTitle, {
                textContent: e.secondaryLabel
            })), e.isActive && t.classList.add(_.CSS.active), e.isDisabled && t.classList.add(_.CSS.disabled), 
            t;
        }
        enableConfirmationMode(e) {
            const t = {
                ...this.params,
                ...e,
                confirmation: e.confirmation
            }, o = this.make(t);
            this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(_.CSS.confirmationState), 
            this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
        }
        disableConfirmationMode() {
            const e = this.make(this.params);
            this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(_.CSS.confirmationState), 
            this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
        }
        enableSpecialHoverAndFocusBehavior() {
            this.nodes.root.classList.add(_.CSS.noHover), this.nodes.root.classList.add(_.CSS.noFocus), 
            this.nodes.root.addEventListener("mouseleave", this.removeSpecialHoverBehavior, {
                once: !0
            });
        }
        disableSpecialHoverAndFocusBehavior() {
            this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), this.nodes.root.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
        }
        activateOrEnableConfirmationMode(e) {
            if (e.confirmation === void 0) try {
                e.onActivate(e), this.disableConfirmationMode();
            } catch {
                this.animateError();
            } else this.enableConfirmationMode(e.confirmation);
        }
        animateError() {
            this.nodes.icon.classList.contains(_.CSS.wobbleAnimation) || (this.nodes.icon.classList.add(_.CSS.wobbleAnimation), 
            this.nodes.icon.addEventListener("animationend", this.onErrorAnimationEnd));
        }
    }
    const he = class {
        constructor(s, e) {
            this.cursor = -1, this.items = [], this.items = s || [], this.focusedCssClass = e;
        }
        get currentItem() {
            return this.cursor === -1 ? null : this.items[this.cursor];
        }
        setCursor(s) {
            s < this.items.length && s >= -1 && (this.dropCursor(), this.cursor = s, this.items[this.cursor].classList.add(this.focusedCssClass));
        }
        setItems(s) {
            this.items = s;
        }
        next() {
            this.cursor = this.leafNodesAndReturnIndex(he.directions.RIGHT);
        }
        previous() {
            this.cursor = this.leafNodesAndReturnIndex(he.directions.LEFT);
        }
        dropCursor() {
            this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), 
            this.cursor = -1);
        }
        leafNodesAndReturnIndex(s) {
            if (this.items.length === 0) return this.cursor;
            let e = this.cursor;
            return e === -1 ? e = s === he.directions.RIGHT ? -1 : 0 : this.items[e].classList.remove(this.focusedCssClass), 
            s === he.directions.RIGHT ? e = (e + 1) % this.items.length : e = (this.items.length + e - 1) % this.items.length, 
            c.canSetCaret(this.items[e]) && xe((() => b.setCursor(this.items[e])), 50)(), this.items[e].classList.add(this.focusedCssClass), 
            e;
        }
    };
    let ne = he;
    ne.directions = {
        RIGHT: "right",
        LEFT: "left"
    };
    class q {
        constructor(e) {
            this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = t => {
                if (this.isEventReadyForHandling(t)) switch (q.usedKeys.includes(t.keyCode) && t.preventDefault(), 
                t.keyCode) {
                  case k.TAB:
                    this.handleTabPress(t);
                    break;

                  case k.LEFT:
                  case k.UP:
                    this.flipLeft();
                    break;

                  case k.RIGHT:
                  case k.DOWN:
                    this.flipRight();
                    break;

                  case k.ENTER:
                    this.handleEnterPress(t);
                    break;
                }
            }, this.iterator = new ne(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, 
            this.allowedKeys = e.allowedKeys || q.usedKeys;
        }
        get isActivated() {
            return this.activated;
        }
        static get usedKeys() {
            return [ k.TAB, k.LEFT, k.RIGHT, k.ENTER, k.UP, k.DOWN ];
        }
        activate(e, t) {
            this.activated = !0, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), 
            document.addEventListener("keydown", this.onKeyDown, !0);
        }
        deactivate() {
            this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
        }
        focusFirst() {
            this.dropCursor(), this.flipRight();
        }
        flipLeft() {
            this.iterator.previous(), this.flipCallback();
        }
        flipRight() {
            this.iterator.next(), this.flipCallback();
        }
        hasFocus() {
            return !!this.iterator.currentItem;
        }
        onFlip(e) {
            this.flipCallbacks.push(e);
        }
        removeOnFlip(e) {
            this.flipCallbacks = this.flipCallbacks.filter((t => t !== e));
        }
        dropCursor() {
            this.iterator.dropCursor();
        }
        isEventReadyForHandling(e) {
            return this.activated && this.allowedKeys.includes(e.keyCode);
        }
        handleTabPress(e) {
            switch (e.shiftKey ? ne.directions.LEFT : ne.directions.RIGHT) {
              case ne.directions.RIGHT:
                this.flipRight();
                break;

              case ne.directions.LEFT:
                this.flipLeft();
                break;
            }
        }
        handleEnterPress(e) {
            this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), 
            this.iterator.currentItem.click()), M(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
        }
        flipCallback() {
            this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), 
            this.flipCallbacks.forEach((e => e()));
        }
    }
    class pe {
        static get CSS() {
            return {
                wrapper: "cdx-search-field",
                icon: "cdx-search-field__icon",
                input: "cdx-search-field__input"
            };
        }
        constructor({items: e, onSearch: t, placeholder: o}) {
            this.listeners = new Fe, this.items = e, this.onSearch = t, this.render(o);
        }
        getElement() {
            return this.wrapper;
        }
        focus() {
            this.input.focus();
        }
        clear() {
            this.input.value = "", this.searchQuery = "", this.onSearch("", this.foundItems);
        }
        destroy() {
            this.listeners.removeAll();
        }
        render(e) {
            this.wrapper = c.make("div", pe.CSS.wrapper);
            const t = c.make("div", pe.CSS.icon, {
                innerHTML: Ho
            });
            this.input = c.make("input", pe.CSS.input, {
                placeholder: e,
                tabIndex: -1
            }), this.wrapper.appendChild(t), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", (() => {
                this.searchQuery = this.input.value, this.onSearch(this.searchQuery, this.foundItems);
            }));
        }
        get foundItems() {
            return this.items.filter((e => this.checkItem(e)));
        }
        checkItem(e) {
            var i;
            const t = ((i = e.title) == null ? void 0 : i.toLowerCase()) || "", o = this.searchQuery.toLowerCase();
            return t.includes(o);
        }
    }
    const ue = class {
        lock() {
            tt ? this.lockHard() : document.body.classList.add(ue.CSS.scrollLocked);
        }
        unlock() {
            tt ? this.unlockHard() : document.body.classList.remove(ue.CSS.scrollLocked);
        }
        lockHard() {
            this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty("--window-scroll-offset", `${this.scrollPosition}px`), 
            document.body.classList.add(ue.CSS.scrollLockedHard);
        }
        unlockHard() {
            document.body.classList.remove(ue.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), 
            this.scrollPosition = null;
        }
    };
    let vt = ue;
    vt.CSS = {
        scrollLocked: "ce-scroll-locked",
        scrollLockedHard: "ce-scroll-locked--hard"
    };
    var jo = Object.defineProperty, $o = Object.getOwnPropertyDescriptor, Wo = (s, e, t, o) => {
        for (var r, i = o > 1 ? void 0 : o ? $o(e, t) : e, n = s.length - 1; n >= 0; n--) (r = s[n]) && (i = (o ? r(e, t, i) : r(i)) || i);
        return o && i && jo(e, t, i), i;
    }, be = (s => (s.Close = "close", s))(be || {});
    const N = class extends Ee {
        constructor(s) {
            super(), this.scopeElement = document.body, this.listeners = new Fe, this.scrollLocker = new vt, 
            this.nodes = {
                wrapper: null,
                popover: null,
                nothingFoundMessage: null,
                customContent: null,
                items: null,
                overlay: null
            }, this.messages = {
                nothingFound: "Nothing found",
                search: "Search"
            }, this.onFlip = () => {
                this.items.find((t => t.isFocused)).onFocus();
            }, this.items = s.items.map((e => new _(e))), s.scopeElement !== void 0 && (this.scopeElement = s.scopeElement), 
            s.messages && (this.messages = {
                ...this.messages,
                ...s.messages
            }), s.customContentFlippableItems && (this.customContentFlippableItems = s.customContentFlippableItems), 
            this.make(), s.customContent && this.addCustomContent(s.customContent), s.searchable && this.addSearch(), 
            this.initializeFlipper();
        }
        static get CSS() {
            return {
                popover: "ce-popover",
                popoverOpenTop: "ce-popover--open-top",
                popoverOpened: "ce-popover--opened",
                search: "ce-popover__search",
                nothingFoundMessage: "ce-popover__nothing-found-message",
                nothingFoundMessageDisplayed: "ce-popover__nothing-found-message--displayed",
                customContent: "ce-popover__custom-content",
                customContentHidden: "ce-popover__custom-content--hidden",
                items: "ce-popover__items",
                overlay: "ce-popover__overlay",
                overlayHidden: "ce-popover__overlay--hidden"
            };
        }
        getElement() {
            return this.nodes.wrapper;
        }
        hasFocus() {
            return this.flipper.hasFocus();
        }
        show() {
            this.shouldOpenBottom || (this.nodes.popover.style.setProperty("--popover-height", this.height + "px"), 
            this.nodes.popover.classList.add(N.CSS.popoverOpenTop)), this.nodes.overlay.classList.remove(N.CSS.overlayHidden), 
            this.nodes.popover.classList.add(N.CSS.popoverOpened), this.flipper.activate(this.flippableElements), 
            this.search !== void 0 && requestAnimationFrame((() => {
                var s;
                (s = this.search) == null || s.focus();
            })), te() && this.scrollLocker.lock();
        }
        hide() {
            this.nodes.popover.classList.remove(N.CSS.popoverOpened), this.nodes.popover.classList.remove(N.CSS.popoverOpenTop), 
            this.nodes.overlay.classList.add(N.CSS.overlayHidden), this.flipper.deactivate(), 
            this.items.forEach((s => s.reset())), this.search !== void 0 && this.search.clear(), 
            te() && this.scrollLocker.unlock(), this.emit("close");
        }
        destroy() {
            this.flipper.deactivate(), this.listeners.removeAll(), te() && this.scrollLocker.unlock();
        }
        make() {
            this.nodes.popover = c.make("div", [ N.CSS.popover ]), this.nodes.nothingFoundMessage = c.make("div", [ N.CSS.nothingFoundMessage ], {
                textContent: this.messages.nothingFound
            }), this.nodes.popover.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = c.make("div", [ N.CSS.items ]), 
            this.items.forEach((s => {
                this.nodes.items.appendChild(s.getElement());
            })), this.nodes.popover.appendChild(this.nodes.items), this.listeners.on(this.nodes.popover, "click", (s => {
                const e = this.getTargetItem(s);
                e !== void 0 && this.handleItemClick(e);
            })), this.nodes.wrapper = c.make("div"), this.nodes.overlay = c.make("div", [ N.CSS.overlay, N.CSS.overlayHidden ]), 
            this.listeners.on(this.nodes.overlay, "click", (() => {
                this.hide();
            })), this.nodes.wrapper.appendChild(this.nodes.overlay), this.nodes.wrapper.appendChild(this.nodes.popover);
        }
        addSearch() {
            this.search = new pe({
                items: this.items,
                placeholder: this.messages.search,
                onSearch: (e, t) => {
                    this.items.forEach((i => {
                        const n = !t.includes(i);
                        i.toggleHidden(n);
                    })), this.toggleNothingFoundMessage(t.length === 0), this.toggleCustomContent(e !== "");
                    const o = e === "" ? this.flippableElements : t.map((i => i.getElement()));
                    this.flipper.isActivated && (this.flipper.deactivate(), this.flipper.activate(o));
                }
            });
            const s = this.search.getElement();
            s.classList.add(N.CSS.search), this.nodes.popover.insertBefore(s, this.nodes.popover.firstChild);
        }
        addCustomContent(s) {
            this.nodes.customContent = s, this.nodes.customContent.classList.add(N.CSS.customContent), 
            this.nodes.popover.insertBefore(s, this.nodes.popover.firstChild);
        }
        getTargetItem(s) {
            return this.items.find((e => s.composedPath().includes(e.getElement())));
        }
        handleItemClick(s) {
            s.isDisabled || (this.items.filter((e => e !== s)).forEach((e => e.reset())), s.handleClick(), 
            this.toggleItemActivenessIfNeeded(s), s.closeOnActivate && this.hide());
        }
        initializeFlipper() {
            this.flipper = new q({
                items: this.flippableElements,
                focusedItemClass: _.CSS.focused,
                allowedKeys: [ k.TAB, k.UP, k.DOWN, k.ENTER ]
            }), this.flipper.onFlip(this.onFlip);
        }
        get flippableElements() {
            const s = this.items.map((t => t.getElement()));
            return (this.customContentFlippableItems || []).concat(s);
        }
        get height() {
            let s = 0;
            if (this.nodes.popover === null) return s;
            const e = this.nodes.popover.cloneNode(!0);
            return e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-1000px", 
            e.classList.add(N.CSS.popoverOpened), document.body.appendChild(e), s = e.offsetHeight, 
            e.remove(), s;
        }
        get shouldOpenBottom() {
            const s = this.nodes.popover.getBoundingClientRect(), e = this.scopeElement.getBoundingClientRect(), t = this.height, o = s.top + t, i = s.top - t, n = Math.min(window.innerHeight, e.bottom);
            return i < e.top || o <= n;
        }
        toggleNothingFoundMessage(s) {
            this.nodes.nothingFoundMessage.classList.toggle(N.CSS.nothingFoundMessageDisplayed, s);
        }
        toggleCustomContent(s) {
            var e;
            (e = this.nodes.customContent) == null || e.classList.toggle(N.CSS.customContentHidden, s);
        }
        toggleItemActivenessIfNeeded(s) {
            if (s.toggle === !0 && s.toggleActive(), typeof s.toggle == "string") {
                const e = this.items.filter((t => t.toggle === s.toggle));
                if (e.length === 1) {
                    s.toggleActive();
                    return;
                }
                e.forEach((t => {
                    t.toggleActive(t === s);
                }));
            }
        }
    };
    let je = N;
    Wo([ le ], je.prototype, "height", 1);
    class Yo extends y {
        constructor() {
            super(...arguments), this.opened = !1, this.selection = new b, this.onPopoverClose = () => {
                this.close();
            };
        }
        get events() {
            return {
                opened: "block-settings-opened",
                closed: "block-settings-closed"
            };
        }
        get CSS() {
            return {
                settings: "ce-settings"
            };
        }
        get flipper() {
            var e;
            return (e = this.popover) == null ? void 0 : e.flipper;
        }
        make() {
            this.nodes.wrapper = c.make("div", [ this.CSS.settings ]);
        }
        destroy() {
            this.removeAllNodes();
        }
        open(e = this.Editor.BlockManager.currentBlock) {
            this.opened = !0, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), 
            this.Editor.BlockSelection.clearCache();
            const [t, o] = e.getTunes();
            this.eventsDispatcher.emit(this.events.opened), this.popover = new je({
                searchable: !0,
                items: t.map((i => this.resolveTuneAliases(i))),
                customContent: o,
                customContentFlippableItems: this.getControls(o),
                scopeElement: this.Editor.API.methods.ui.nodes.redactor,
                messages: {
                    nothingFound: z.ui(K.ui.popover, "Nothing found"),
                    search: z.ui(K.ui.popover, "Filter")
                }
            }), this.popover.on(be.Close, this.onPopoverClose), this.nodes.wrapper.append(this.popover.getElement()), 
            this.popover.show();
        }
        getElement() {
            return this.nodes.wrapper;
        }
        close() {
            this.opened && (this.opened = !1, b.isAtEditor || this.selection.restore(), this.selection.clearSaved(), 
            !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), 
            this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(be.Close, this.onPopoverClose), 
            this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
        }
        getControls(e) {
            const {StylesAPI: t} = this.Editor, o = e.querySelectorAll(`.${t.classes.settingsButton}, ${c.allInputsSelector}`);
            return Array.from(o);
        }
        resolveTuneAliases(e) {
            const t = Ao(e, {
                label: "title"
            });
            return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), 
            t;
        }
    }
    class $ extends y {
        constructor() {
            super(...arguments), this.opened = !1, this.tools = [], this.flipper = null, this.togglingCallback = null;
        }
        static get CSS() {
            return {
                conversionToolbarWrapper: "ce-conversion-toolbar",
                conversionToolbarShowed: "ce-conversion-toolbar--showed",
                conversionToolbarTools: "ce-conversion-toolbar__tools",
                conversionToolbarLabel: "ce-conversion-toolbar__label",
                conversionTool: "ce-conversion-tool",
                conversionToolHidden: "ce-conversion-tool--hidden",
                conversionToolIcon: "ce-conversion-tool__icon",
                conversionToolSecondaryLabel: "ce-conversion-tool__secondary-label",
                conversionToolFocused: "ce-conversion-tool--focused",
                conversionToolActive: "ce-conversion-tool--active"
            };
        }
        make() {
            this.nodes.wrapper = c.make("div", [ $.CSS.conversionToolbarWrapper, ...this.isRtl ? [ this.Editor.UI.CSS.editorRtlFix ] : [] ]), 
            this.nodes.tools = c.make("div", $.CSS.conversionToolbarTools);
            const e = c.make("div", $.CSS.conversionToolbarLabel, {
                textContent: z.ui(K.ui.inlineToolbar.converter, "Convert to")
            });
            return this.addTools(), this.enableFlipper(), c.append(this.nodes.wrapper, e), c.append(this.nodes.wrapper, this.nodes.tools), 
            this.nodes.wrapper;
        }
        destroy() {
            this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
        }
        toggle(e) {
            this.opened ? this.close() : this.open(), M(e) && (this.togglingCallback = e);
        }
        open() {
            this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add($.CSS.conversionToolbarShowed), 
            window.requestAnimationFrame((() => {
                this.flipper.activate(this.tools.map((e => e.button)).filter((e => !e.classList.contains($.CSS.conversionToolHidden)))), 
                this.flipper.focusFirst(), M(this.togglingCallback) && this.togglingCallback(!0);
            }));
        }
        close() {
            this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove($.CSS.conversionToolbarShowed), 
            M(this.togglingCallback) && this.togglingCallback(!1);
        }
        hasTools() {
            return this.tools.length === 1 ? this.tools[0].name !== this.config.defaultBlock : !0;
        }
        async replaceWithBlock(e, t) {
            const {BlockManager: o, BlockSelection: i, InlineToolbar: n, Caret: r} = this.Editor;
            o.convert(this.Editor.BlockManager.currentBlock, e, t), i.clearSelection(), this.close(), 
            n.close(), window.requestAnimationFrame((() => {
                r.setToBlock(this.Editor.BlockManager.currentBlock, r.positions.END);
            }));
        }
        addTools() {
            const e = this.Editor.Tools.blockTools;
            Array.from(e.entries()).forEach((([t, o]) => {
                var n;
                const i = o.conversionConfig;
                !i || !i.import || (n = o.toolbox) == null || n.forEach((r => this.addToolIfValid(t, r)));
            }));
        }
        addToolIfValid(e, t) {
            W(t) || !t.icon || this.addTool(e, t);
        }
        addTool(e, t) {
            var r;
            const o = c.make("div", [ $.CSS.conversionTool ]), i = c.make("div", [ $.CSS.conversionToolIcon ]);
            o.dataset.tool = e, i.innerHTML = t.icon, c.append(o, i), c.append(o, c.text(z.t(K.toolNames, t.title || re(e))));
            const n = (r = this.Editor.Tools.blockTools.get(e)) == null ? void 0 : r.shortcut;
            if (n) {
                const a = c.make("span", $.CSS.conversionToolSecondaryLabel, {
                    innerText: ye(n)
                });
                c.append(o, a);
            }
            c.append(this.nodes.tools, o), this.tools.push({
                name: e,
                button: o,
                toolboxItem: t
            }), this.listeners.on(o, "click", (async () => {
                await this.replaceWithBlock(e, t.data);
            }));
        }
        async filterTools() {
            const {currentBlock: e} = this.Editor.BlockManager, t = await e.getActiveToolboxEntry();
            function o(i, n) {
                return i.icon === n.icon && i.title === n.title;
            }
            this.tools.forEach((i => {
                let n = !1;
                if (t) {
                    const r = o(t, i.toolboxItem);
                    n = i.button.dataset.tool === e.name && r;
                }
                i.button.hidden = n, i.button.classList.toggle($.CSS.conversionToolHidden, n);
            }));
        }
        enableFlipper() {
            this.flipper = new q({
                focusedItemClass: $.CSS.conversionToolFocused
            });
        }
    }
    var De = {}, Ko = {
        get exports() {
            return De;
        },
        set exports(s) {
            De = s;
        }
    };
    /*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */    (function(s, e) {
        (function(t, o) {
            s.exports = o();
        })(window, (function() {
            return function(t) {
                var o = {};
                function i(n) {
                    if (o[n]) return o[n].exports;
                    var r = o[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
                }
                return i.m = t, i.c = o, i.d = function(n, r, a) {
                    i.o(n, r) || Object.defineProperty(n, r, {
                        enumerable: !0,
                        get: a
                    });
                }, i.r = function(n) {
                    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                }, i.t = function(n, r) {
                    if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule) return n;
                    var a = Object.create(null);
                    if (i.r(a), Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: n
                    }), 2 & r && typeof n != "string") for (var l in n) i.d(a, l, function(d) {
                        return n[d];
                    }.bind(null, l));
                    return a;
                }, i.n = function(n) {
                    var r = n && n.__esModule ? function() {
                        return n.default;
                    } : function() {
                        return n;
                    };
                    return i.d(r, "a", r), r;
                }, i.o = function(n, r) {
                    return Object.prototype.hasOwnProperty.call(n, r);
                }, i.p = "", i(i.s = 0);
            }([ function(t, o, i) {
                function n(l, d) {
                    for (var u = 0; u < d.length; u++) {
                        var h = d[u];
                        h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), 
                        Object.defineProperty(l, h.key, h);
                    }
                }
                function r(l, d, u) {
                    return d && n(l.prototype, d), u && n(l, u), l;
                }
                i.r(o);
                var a = function() {
                    function l(d) {
                        var u = this;
                        (function(h, f) {
                            if (!(h instanceof f)) throw new TypeError("Cannot call a class as a function");
                        })(this, l), this.commands = {}, this.keys = {}, this.name = d.name, this.parseShortcutName(d.name), 
                        this.element = d.on, this.callback = d.callback, this.executeShortcut = function(h) {
                            u.execute(h);
                        }, this.element.addEventListener("keydown", this.executeShortcut, !1);
                    }
                    return r(l, null, [ {
                        key: "supportedCommands",
                        get: function() {
                            return {
                                SHIFT: [ "SHIFT" ],
                                CMD: [ "CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL" ],
                                ALT: [ "ALT", "OPTION" ]
                            };
                        }
                    }, {
                        key: "keyCodes",
                        get: function() {
                            return {
                                0: 48,
                                1: 49,
                                2: 50,
                                3: 51,
                                4: 52,
                                5: 53,
                                6: 54,
                                7: 55,
                                8: 56,
                                9: 57,
                                A: 65,
                                B: 66,
                                C: 67,
                                D: 68,
                                E: 69,
                                F: 70,
                                G: 71,
                                H: 72,
                                I: 73,
                                J: 74,
                                K: 75,
                                L: 76,
                                M: 77,
                                N: 78,
                                O: 79,
                                P: 80,
                                Q: 81,
                                R: 82,
                                S: 83,
                                T: 84,
                                U: 85,
                                V: 86,
                                W: 87,
                                X: 88,
                                Y: 89,
                                Z: 90,
                                BACKSPACE: 8,
                                ENTER: 13,
                                ESCAPE: 27,
                                LEFT: 37,
                                UP: 38,
                                RIGHT: 39,
                                DOWN: 40,
                                INSERT: 45,
                                DELETE: 46,
                                ".": 190
                            };
                        }
                    } ]), r(l, [ {
                        key: "parseShortcutName",
                        value: function(d) {
                            d = d.split("+");
                            for (var u = 0; u < d.length; u++) {
                                d[u] = d[u].toUpperCase();
                                var h = !1;
                                for (var f in l.supportedCommands) if (l.supportedCommands[f].includes(d[u])) {
                                    h = this.commands[f] = !0;
                                    break;
                                }
                                h || (this.keys[d[u]] = !0);
                            }
                            for (var x in l.supportedCommands) this.commands[x] || (this.commands[x] = !1);
                        }
                    }, {
                        key: "execute",
                        value: function(d) {
                            var u, h = {
                                CMD: d.ctrlKey || d.metaKey,
                                SHIFT: d.shiftKey,
                                ALT: d.altKey
                            }, f = !0;
                            for (u in this.commands) this.commands[u] !== h[u] && (f = !1);
                            var x, p = !0;
                            for (x in this.keys) p = p && d.keyCode === l.keyCodes[x];
                            f && p && this.callback(d);
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this.element.removeEventListener("keydown", this.executeShortcut);
                        }
                    } ]), l;
                }();
                o.default = a;
            } ]).default;
        }));
    })(Ko);
    const Xo = Pe(De);
    class Vo {
        constructor() {
            this.registeredShortcuts = new Map;
        }
        add(e) {
            if (this.findShortcut(e.on, e.name)) throw Error(`Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`);
            const o = new Xo({
                name: e.name,
                on: e.on,
                callback: e.handler
            }), i = this.registeredShortcuts.get(e.on) || [];
            this.registeredShortcuts.set(e.on, [ ...i, o ]);
        }
        remove(e, t) {
            const o = this.findShortcut(e, t);
            if (!o) return;
            o.remove();
            const i = this.registeredShortcuts.get(e);
            this.registeredShortcuts.set(e, i.filter((n => n !== o)));
        }
        findShortcut(e, t) {
            return (this.registeredShortcuts.get(e) || []).find((({name: i}) => i === t));
        }
    }
    const ae = new Vo;
    var qo = Object.defineProperty, Zo = Object.getOwnPropertyDescriptor, xt = (s, e, t, o) => {
        for (var r, i = o > 1 ? void 0 : o ? Zo(e, t) : e, n = s.length - 1; n >= 0; n--) (r = s[n]) && (i = (o ? r(e, t, i) : r(i)) || i);
        return o && i && qo(e, t, i), i;
    }, ke = (s => (s.Opened = "toolbox-opened", s.Closed = "toolbox-closed", s.BlockAdded = "toolbox-block-added", 
    s))(ke || {});
    const wt = class extends Ee {
        constructor({api: s, tools: e, i18nLabels: t}) {
            super(), this.opened = !1, this.nodes = {
                toolbox: null
            }, this.onPopoverClose = () => {
                this.opened = !1, this.emit("toolbox-closed");
            }, this.api = s, this.tools = e, this.i18nLabels = t;
        }
        get isEmpty() {
            return this.toolsToBeDisplayed.length === 0;
        }
        static get CSS() {
            return {
                toolbox: "ce-toolbox"
            };
        }
        make() {
            return this.popover = new je({
                scopeElement: this.api.ui.nodes.redactor,
                searchable: !0,
                messages: {
                    nothingFound: this.i18nLabels.nothingFound,
                    search: this.i18nLabels.filter
                },
                items: this.toolboxItemsToBeDisplayed
            }), this.popover.on(be.Close, this.onPopoverClose), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), 
            this.nodes.toolbox.classList.add(wt.CSS.toolbox), this.nodes.toolbox;
        }
        hasFocus() {
            var s;
            return (s = this.popover) == null ? void 0 : s.hasFocus();
        }
        destroy() {
            var s;
            super.destroy(), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), 
            this.nodes.toolbox = null), this.removeAllShortcuts(), (s = this.popover) == null || s.off(be.Close, this.onPopoverClose);
        }
        toolButtonActivated(s, e) {
            this.insertNewBlock(s, e);
        }
        open() {
            var s;
            this.isEmpty || ((s = this.popover) == null || s.show(), this.opened = !0, this.emit("toolbox-opened"));
        }
        close() {
            var s;
            (s = this.popover) == null || s.hide(), this.opened = !1, this.emit("toolbox-closed");
        }
        toggle() {
            this.opened ? this.close() : this.open();
        }
        get toolsToBeDisplayed() {
            const s = [];
            return this.tools.forEach((e => {
                e.toolbox && s.push(e);
            })), s;
        }
        get toolboxItemsToBeDisplayed() {
            const s = (e, t) => ({
                icon: e.icon,
                title: z.t(K.toolNames, e.title || re(t.name)),
                name: t.name,
                onActivate: () => {
                    this.toolButtonActivated(t.name, e.data);
                },
                secondaryLabel: t.shortcut ? ye(t.shortcut) : ""
            });
            return this.toolsToBeDisplayed.reduce(((e, t) => (Array.isArray(t.toolbox) ? t.toolbox.forEach((o => {
                e.push(s(o, t));
            })) : t.toolbox !== void 0 && e.push(s(t.toolbox, t)), e)), []);
        }
        enableShortcuts() {
            this.toolsToBeDisplayed.forEach((s => {
                const e = s.shortcut;
                e && this.enableShortcutForTool(s.name, e);
            }));
        }
        enableShortcutForTool(s, e) {
            ae.add({
                name: e,
                on: this.api.ui.nodes.redactor,
                handler: t => {
                    t.preventDefault();
                    const o = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o);
                    if (i) try {
                        this.api.blocks.convert(i.id, s), window.requestAnimationFrame((() => {
                            this.api.caret.setToBlock(o, "end");
                        }));
                        return;
                    } catch {}
                    this.insertNewBlock(s);
                }
            });
        }
        removeAllShortcuts() {
            this.toolsToBeDisplayed.forEach((s => {
                const e = s.shortcut;
                e && ae.remove(this.api.ui.nodes.redactor, e);
            }));
        }
        async insertNewBlock(s, e) {
            const t = this.api.blocks.getCurrentBlockIndex(), o = this.api.blocks.getBlockByIndex(t);
            if (!o) return;
            const i = o.isEmpty ? t : t + 1;
            let n;
            if (e) {
                const a = await this.api.blocks.composeBlockData(s);
                n = Object.assign(a, e);
            }
            const r = this.api.blocks.insert(s, n, void 0, i, void 0, o.isEmpty);
            r.call(X.APPEND_CALLBACK), this.api.caret.setToBlock(i), this.emit("toolbox-block-added", {
                block: r
            }), this.api.toolbar.close();
        }
    };
    let $e = wt;
    xt([ le ], $e.prototype, "toolsToBeDisplayed", 1);
    xt([ le ], $e.prototype, "toolboxItemsToBeDisplayed", 1);
    const yt = "block hovered";
    class Go extends y {
        constructor({config: e, eventsDispatcher: t}) {
            super({
                config: e,
                eventsDispatcher: t
            }), this.toolboxInstance = null;
        }
        get CSS() {
            return {
                toolbar: "ce-toolbar",
                content: "ce-toolbar__content",
                actions: "ce-toolbar__actions",
                actionsOpened: "ce-toolbar__actions--opened",
                toolbarOpened: "ce-toolbar--opened",
                openedToolboxHolderModifier: "codex-editor--toolbox-opened",
                plusButton: "ce-toolbar__plus",
                plusButtonShortcut: "ce-toolbar__plus-shortcut",
                settingsToggler: "ce-toolbar__settings-btn",
                settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
            };
        }
        get opened() {
            return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
        }
        get toolbox() {
            var e;
            return {
                opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
                close: () => {
                    var t;
                    (t = this.toolboxInstance) == null || t.close();
                },
                open: () => {
                    if (this.toolboxInstance === null) {
                        T("toolbox.open() called before initialization is finished", "warn");
                        return;
                    }
                    this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
                },
                toggle: () => {
                    if (this.toolboxInstance === null) {
                        T("toolbox.toggle() called before initialization is finished", "warn");
                        return;
                    }
                    this.toolboxInstance.toggle();
                },
                hasFocus: () => {
                    var t;
                    return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
                }
            };
        }
        get blockActions() {
            return {
                hide: () => {
                    this.nodes.actions.classList.remove(this.CSS.actionsOpened);
                },
                show: () => {
                    this.nodes.actions.classList.add(this.CSS.actionsOpened);
                }
            };
        }
        get blockTunesToggler() {
            return {
                hide: () => this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
                show: () => this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
            };
        }
        toggleReadOnly(e) {
            e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback((() => {
                this.drawUI(), this.enableModuleBindings();
            }), {
                timeout: 2e3
            });
        }
        moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
            if (this.toolboxInstance === null) {
                T("Can't open Toolbar since Editor initialization is not finished yet", "warn");
                return;
            }
            if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), 
            !e) return;
            this.hoveredBlock = e;
            const t = e.holder, {isMobile: o} = this.Editor.UI, i = e.pluginsContent, n = window.getComputedStyle(i), r = parseInt(n.paddingTop, 10), a = t.offsetHeight;
            let l;
            o ? l = t.offsetTop + a : l = t.offsetTop + r, this.nodes.wrapper.style.top = `${Math.floor(l)}px`, 
            this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), 
            this.open();
        }
        close() {
            var e, t;
            this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), 
            this.blockActions.hide(), (t = this.toolboxInstance) == null || t.close(), this.Editor.BlockSettings.close(), 
            this.reset());
        }
        reset() {
            this.nodes.wrapper.style.top = "unset";
        }
        open(e = !0) {
            this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
        }
        make() {
            this.nodes.wrapper = c.make("div", this.CSS.toolbar), [ "content", "actions" ].forEach((i => {
                this.nodes[i] = c.make("div", this.CSS[i]);
            })), c.append(this.nodes.wrapper, this.nodes.content), c.append(this.nodes.content, this.nodes.actions), 
            this.nodes.plusButton = c.make("div", this.CSS.plusButton, {
                innerHTML: Fo
            }), c.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", (() => {
                Re(!0), this.plusButtonClicked();
            }), !1);
            const e = c.make("div");
            e.appendChild(document.createTextNode(z.ui(K.ui.toolbar.toolbox, "Add"))), e.appendChild(c.make("div", this.CSS.plusButtonShortcut, {
                textContent: "/"
            })), ge(this.nodes.plusButton, e, {
                hidingDelay: 400
            }), this.nodes.settingsToggler = c.make("span", this.CSS.settingsToggler, {
                innerHTML: Po
            }), c.append(this.nodes.actions, this.nodes.settingsToggler);
            const t = c.make("div"), o = c.text(z.ui(K.ui.blockTunes.toggler, "Click to tune"));
            t.appendChild(o), t.appendChild(c.make("div", this.CSS.plusButtonShortcut, {
                textContent: ye("CMD + /")
            })), ge(this.nodes.settingsToggler, t, {
                hidingDelay: 400
            }), c.append(this.nodes.actions, this.makeToolbox()), c.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), 
            c.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
        }
        makeToolbox() {
            return this.toolboxInstance = new $e({
                api: this.Editor.API.methods,
                tools: this.Editor.Tools.blockTools,
                i18nLabels: {
                    filter: z.ui(K.ui.popover, "Filter"),
                    nothingFound: z.ui(K.ui.popover, "Nothing found")
                }
            }), this.toolboxInstance.on(ke.Opened, (() => {
                this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
            })), this.toolboxInstance.on(ke.Closed, (() => {
                this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
            })), this.toolboxInstance.on(ke.BlockAdded, (({block: e}) => {
                const {BlockManager: t, Caret: o} = this.Editor, i = t.getBlockById(e.id);
                i.inputs.length === 0 && (i === t.lastBlock ? (t.insertAtEnd(), o.setToBlock(t.lastBlock)) : o.setToBlock(t.nextBlock));
            })), this.toolboxInstance.make();
        }
        plusButtonClicked() {
            var e;
            this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
        }
        enableModuleBindings() {
            this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e => {
                var t;
                e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), 
                Re(!0);
            }), !0), te() || this.eventsDispatcher.on(yt, (e => {
                var t;
                this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
            }));
        }
        disableModuleBindings() {
            this.readOnlyMutableListeners.clearAll();
        }
        settingsTogglerClicked() {
            this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
        }
        drawUI() {
            this.Editor.BlockSettings.make(), this.make();
        }
        destroy() {
            this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
        }
    }
    var Be = (s => (s[s.Block = 0] = "Block", s[s.Inline = 1] = "Inline", s[s.Tune = 2] = "Tune", 
    s))(Be || {}), ve = (s => (s.Shortcut = "shortcut", s.Toolbox = "toolbox", s.EnabledInlineTools = "inlineToolbar", 
    s.EnabledBlockTunes = "tunes", s.Config = "config", s))(ve || {}), Et = (s => (s.Shortcut = "shortcut", 
    s.SanitizeConfig = "sanitize", s))(Et || {}), se = (s => (s.IsEnabledLineBreaks = "enableLineBreaks", 
    s.Toolbox = "toolbox", s.ConversionConfig = "conversionConfig", s.IsReadOnlySupported = "isReadOnlySupported", 
    s.PasteConfig = "pasteConfig", s))(se || {}), We = (s => (s.IsInline = "isInline", 
    s.Title = "title", s))(We || {}), Bt = (s => (s.IsTune = "isTune", s))(Bt || {});
    class Ye {
        constructor({name: e, constructable: t, config: o, api: i, isDefault: n, isInternal: r = !1, defaultPlaceholder: a}) {
            this.api = i, this.name = e, this.constructable = t, this.config = o, this.isDefault = n, 
            this.isInternal = r, this.defaultPlaceholder = a;
        }
        get settings() {
            const e = this.config.config || {};
            return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), 
            e;
        }
        reset() {
            if (M(this.constructable.reset)) return this.constructable.reset();
        }
        prepare() {
            if (M(this.constructable.prepare)) return this.constructable.prepare({
                toolName: this.name,
                config: this.settings
            });
        }
        get shortcut() {
            const e = this.constructable.shortcut;
            return this.config.shortcut || e;
        }
        get sanitizeConfig() {
            return this.constructable.sanitize || {};
        }
        isInline() {
            return this.type === 1;
        }
        isBlock() {
            return this.type === 0;
        }
        isTune() {
            return this.type === 2;
        }
    }
    class Jo extends y {
        constructor({config: e, eventsDispatcher: t}) {
            super({
                config: e,
                eventsDispatcher: t
            }), this.CSS = {
                inlineToolbar: "ce-inline-toolbar",
                inlineToolbarShowed: "ce-inline-toolbar--showed",
                inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
                inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
                inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
                buttonsWrapper: "ce-inline-toolbar__buttons",
                actionsWrapper: "ce-inline-toolbar__actions",
                inlineToolButton: "ce-inline-tool",
                inputField: "cdx-input",
                focusedButton: "ce-inline-tool--focused",
                conversionToggler: "ce-inline-toolbar__dropdown",
                conversionTogglerArrow: "ce-inline-toolbar__dropdown-arrow",
                conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
                conversionTogglerContent: "ce-inline-toolbar__dropdown-content",
                togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper"
            }, this.opened = !1, this.toolbarVerticalMargin = te() ? 20 : 6, this.buttonsList = null, 
            this.width = 0, this.flipper = null;
        }
        toggleReadOnly(e) {
            e ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : window.requestIdleCallback((() => {
                this.make();
            }), {
                timeout: 2e3
            });
        }
        async tryToShow(e = !1, t = !0) {
            e && this.close(), this.allowedToShow() && (await this.addToolsFiltered(t), this.move(), 
            this.open(t), this.Editor.Toolbar.close());
        }
        close() {
            this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), 
            Array.from(this.toolsInstances.entries()).forEach((([e, t]) => {
                const o = this.getToolShortcut(e);
                o && ae.remove(this.Editor.UI.nodes.redactor, o), M(t.clear) && t.clear();
            })), this.reset(), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
        }
        containsNode(e) {
            return this.nodes.wrapper === void 0 ? !1 : this.nodes.wrapper.contains(e);
        }
        destroy() {
            this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
        }
        make() {
            this.nodes.wrapper = c.make("div", [ this.CSS.inlineToolbar, ...this.isRtl ? [ this.Editor.UI.CSS.editorRtlFix ] : [] ]), 
            this.nodes.togglerAndButtonsWrapper = c.make("div", this.CSS.togglerAndButtonsWrapper), 
            this.nodes.buttons = c.make("div", this.CSS.buttonsWrapper), this.nodes.actions = c.make("div", this.CSS.actionsWrapper), 
            this.listeners.on(this.nodes.wrapper, "mousedown", (e => {
                e.target.closest(`.${this.CSS.actionsWrapper}`) || e.preventDefault();
            })), c.append(this.nodes.wrapper, [ this.nodes.togglerAndButtonsWrapper, this.nodes.actions ]), 
            c.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), 
            c.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), 
            window.requestAnimationFrame((() => {
                this.recalculateWidth();
            })), this.enableFlipper();
        }
        open() {
            if (this.opened) return;
            this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(`.${this.CSS.inlineToolButton}`), 
            this.opened = !0;
            let e = Array.from(this.buttonsList);
            e.unshift(this.nodes.conversionToggler), e = e.filter((t => !t.hidden)), this.flipper.activate(e);
        }
        move() {
            const e = b.rect, t = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), o = {
                x: e.x - t.x,
                y: e.y + e.height - t.top + this.toolbarVerticalMargin
            };
            o.x + this.width + t.x > this.Editor.UI.contentRect.right && (o.x = this.Editor.UI.contentRect.right - this.width - t.x), 
            this.nodes.wrapper.style.left = Math.floor(o.x) + "px", this.nodes.wrapper.style.top = Math.floor(o.y) + "px";
        }
        reset() {
            this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarLeftOriented, this.CSS.inlineToolbarRightOriented), 
            this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
        }
        allowedToShow() {
            const e = [ "IMG", "INPUT" ], t = b.get(), o = b.text;
            if (!t || !t.anchorNode || t.isCollapsed || o.length < 1) return !1;
            const i = c.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
            if (t && e.includes(i.tagName) || i.closest('[contenteditable="true"]') === null) return !1;
            const r = this.Editor.BlockManager.getBlock(t.anchorNode);
            return r ? r.tool.inlineTools.size !== 0 : !1;
        }
        recalculateWidth() {
            this.width = this.nodes.wrapper.offsetWidth;
        }
        addConversionToggler() {
            this.nodes.conversionToggler = c.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = c.make("div", this.CSS.conversionTogglerContent);
            const e = c.make("div", this.CSS.conversionTogglerArrow, {
                innerHTML: kt
            });
            this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e), 
            this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", (() => {
                this.Editor.ConversionToolbar.toggle((t => {
                    !t && this.opened ? this.flipper.activate() : this.opened && this.flipper.deactivate();
                }));
            })), te() === !1 && ge(this.nodes.conversionToggler, z.ui(K.ui.inlineToolbar.converter, "Convert to"), {
                placement: "top",
                hidingDelay: 100
            });
        }
        async setConversionTogglerContent() {
            const {BlockManager: e} = this.Editor, {currentBlock: t} = e, o = t.name, i = t.tool.conversionConfig, n = i && i.export;
            this.nodes.conversionToggler.hidden = !n, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !n);
            const r = await t.getActiveToolboxEntry() || {};
            this.nodes.conversionTogglerContent.innerHTML = r.icon || r.title || re(o);
        }
        prepareConversionToolbar() {
            const e = this.Editor.ConversionToolbar.make();
            c.append(this.nodes.wrapper, e);
        }
        async addToolsFiltered(e = !0) {
            const t = b.get(), o = this.Editor.BlockManager.getBlock(t.anchorNode);
            this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = new Map, 
            Array.from(o.tool.inlineTools.values()).forEach((i => {
                this.addTool(i);
            })), e && this.Editor.ConversionToolbar.hasTools() ? await this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0, 
            this.recalculateWidth();
        }
        addTool(e) {
            const t = e.create(), o = t.render();
            if (!o) {
                T("Render method must return an instance of Node", "warn", e.name);
                return;
            }
            if (o.dataset.tool = e.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(e.name, t), 
            M(t.renderActions)) {
                const a = t.renderActions();
                this.nodes.actions.appendChild(a);
            }
            this.listeners.on(o, "click", (a => {
                this.toolClicked(t), a.preventDefault();
            }));
            const i = this.getToolShortcut(e.name);
            if (i) try {
                this.enableShortcuts(t, i);
            } catch {}
            const n = c.make("div"), r = z.t(K.toolNames, e.title || re(e.name));
            n.appendChild(c.text(r)), i && n.appendChild(c.make("div", this.CSS.inlineToolbarShortcut, {
                textContent: ye(i)
            })), te() === !1 && ge(o, n, {
                placement: "top",
                hidingDelay: 100
            }), t.checkState(b.get());
        }
        getToolShortcut(e) {
            const {Tools: t} = this.Editor, o = t.inlineTools.get(e), i = t.internal.inlineTools;
            return Array.from(i.keys()).includes(e) ? this.inlineTools[e][Et.Shortcut] : o.shortcut;
        }
        enableShortcuts(e, t) {
            ae.add({
                name: t,
                handler: o => {
                    const {currentBlock: i} = this.Editor.BlockManager;
                    i && i.tool.enabledInlineTools && (o.preventDefault(), this.toolClicked(e));
                },
                on: this.Editor.UI.nodes.redactor
            });
        }
        toolClicked(e) {
            const t = b.range;
            e.surround(t), this.checkToolsState(), e.renderActions !== void 0 && this.flipper.deactivate();
        }
        checkToolsState() {
            this.toolsInstances.forEach((e => {
                e.checkState(b.get());
            }));
        }
        get inlineTools() {
            const e = {};
            return Array.from(this.Editor.Tools.inlineTools.entries()).forEach((([t, o]) => {
                e[t] = o.create();
            })), e;
        }
        enableFlipper() {
            this.flipper = new q({
                focusedItemClass: this.CSS.focusedButton,
                allowedKeys: [ k.ENTER, k.TAB ]
            });
        }
    }
    class Qo extends y {
        keydown(e) {
            switch (this.beforeKeydownProcessing(e), e.keyCode) {
              case k.BACKSPACE:
                this.backspace(e);
                break;

              case k.DELETE:
                this.delete(e);
                break;

              case k.ENTER:
                this.enter(e);
                break;

              case k.DOWN:
              case k.RIGHT:
                this.arrowRightAndDown(e);
                break;

              case k.UP:
              case k.LEFT:
                this.arrowLeftAndUp(e);
                break;

              case k.TAB:
                this.tabPressed(e);
                break;

              case k.SLASH:
                e.ctrlKey || e.metaKey ? this.commandSlashPressed() : this.slashPressed();
                break;
            }
        }
        beforeKeydownProcessing(e) {
            this.needToolbarClosing(e) && lt(e.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), 
            e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
        }
        keyup(e) {
            e.shiftKey || this.Editor.UI.checkEmptiness();
        }
        dragOver(e) {
            const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
            t.dropTarget = !0;
        }
        dragLeave(e) {
            const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
            t.dropTarget = !1;
        }
        handleCommandC(e) {
            const {BlockSelection: t} = this.Editor;
            t.anyBlockSelected && t.copySelectedBlocks(e);
        }
        handleCommandX(e) {
            const {BlockSelection: t, BlockManager: o, Caret: i} = this.Editor;
            t.anyBlockSelected && t.copySelectedBlocks(e).then((() => {
                const n = o.removeSelectedBlocks(), r = o.insertDefaultBlockAtIndex(n, !0);
                i.setToBlock(r, i.positions.START), t.clearSelection(e);
            }));
        }
        tabPressed(e) {
            const {InlineToolbar: t, ConversionToolbar: o, Caret: i} = this.Editor;
            if (o.opened || t.opened) return;
            (e.shiftKey ? i.navigatePrevious(!0) : i.navigateNext(!0)) && e.preventDefault();
        }
        commandSlashPressed() {
            this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
        }
        slashPressed() {
            this.Editor.BlockManager.currentBlock.isEmpty && this.activateToolbox();
        }
        enter(e) {
            const {BlockManager: t, UI: o} = this.Editor;
            if (t.currentBlock.tool.isLineBreaksEnabled || o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey) return;
            let n = this.Editor.BlockManager.currentBlock;
            this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : this.Editor.Caret.isAtEnd ? n = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : n = this.Editor.BlockManager.split(), 
            this.Editor.Caret.setToBlock(n), this.Editor.Toolbar.moveAndOpen(n), e.preventDefault();
        }
        backspace(e) {
            const {BlockManager: t, Caret: o} = this.Editor, {currentBlock: i, previousBlock: n} = t;
            if (!b.isCollapsed || !o.isAtStart) return;
            if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.firstInput)) {
                o.navigatePrevious();
                return;
            }
            if (n === null) return;
            if (n.isEmpty) {
                t.removeBlock(n);
                return;
            }
            if (i.isEmpty) {
                t.removeBlock(i);
                const l = t.currentBlock;
                o.setToBlock(l, o.positions.END);
                return;
            }
            ot(i, n) ? this.mergeBlocks(n, i) : o.setToBlock(n, o.positions.END);
        }
        delete(e) {
            const {BlockManager: t, Caret: o} = this.Editor, {currentBlock: i, nextBlock: n} = t;
            if (!b.isCollapsed || !o.isAtEnd) return;
            if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.lastInput)) {
                o.navigateNext();
                return;
            }
            if (n === null) return;
            if (n.isEmpty) {
                t.removeBlock(n);
                return;
            }
            if (i.isEmpty) {
                t.removeBlock(i), o.setToBlock(n, o.positions.START);
                return;
            }
            ot(i, n) ? this.mergeBlocks(i, n) : o.setToBlock(n, o.positions.START);
        }
        mergeBlocks(e, t) {
            const {BlockManager: o, Caret: i, Toolbar: n} = this.Editor;
            i.createShadow(e.pluginsContent), o.mergeBlocks(e, t).then((() => {
                window.requestAnimationFrame((() => {
                    i.restoreCaret(e.pluginsContent), e.pluginsContent.normalize(), n.close();
                }));
            }));
        }
        arrowRightAndDown(e) {
            const t = q.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === k.TAB);
            if (this.Editor.UI.someToolbarOpened && t) return;
            this.Editor.Toolbar.close();
            const o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
            if (e.shiftKey && e.keyCode === k.DOWN && o) {
                this.Editor.CrossBlockSelection.toggleBlockSelectedState();
                return;
            }
            if (e.keyCode === k.DOWN || e.keyCode === k.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
                e.preventDefault();
                return;
            }
            xe((() => {
                this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
            }), 20)(), this.Editor.BlockSelection.clearSelection(e);
        }
        arrowLeftAndUp(e) {
            if (this.Editor.UI.someToolbarOpened) {
                if (q.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === k.TAB)) return;
                this.Editor.UI.closeAllToolbars();
            }
            this.Editor.Toolbar.close();
            const t = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
            if (e.shiftKey && e.keyCode === k.UP && t) {
                this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
                return;
            }
            if (e.keyCode === k.UP || e.keyCode === k.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
                e.preventDefault();
                return;
            }
            xe((() => {
                this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
            }), 20)(), this.Editor.BlockSelection.clearSelection(e);
        }
        needToolbarClosing(e) {
            const t = e.keyCode === k.ENTER && this.Editor.Toolbar.toolbox.opened, o = e.keyCode === k.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === k.ENTER && this.Editor.InlineToolbar.opened, n = e.keyCode === k.ENTER && this.Editor.ConversionToolbar.opened, r = e.keyCode === k.TAB;
            return !(e.shiftKey || r || t || o || i || n);
        }
        activateToolbox() {
            this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
        }
        activateBlockSettings() {
            this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
        }
    }
    class Se {
        constructor(e) {
            this.blocks = [], this.workingArea = e;
        }
        get length() {
            return this.blocks.length;
        }
        get array() {
            return this.blocks;
        }
        get nodes() {
            return ct(this.workingArea.children);
        }
        static set(e, t, o) {
            return isNaN(Number(t)) ? (Reflect.set(e, t, o), !0) : (e.insert(+t, o), !0);
        }
        static get(e, t) {
            return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
        }
        push(e) {
            this.blocks.push(e), this.insertToDOM(e);
        }
        swap(e, t) {
            const o = this.blocks[t];
            c.swap(this.blocks[e].holder, o.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o;
        }
        move(e, t) {
            const o = this.blocks.splice(t, 1)[0], i = e - 1, n = Math.max(0, i), r = this.blocks[n];
            e > 0 ? this.insertToDOM(o, "afterend", r) : this.insertToDOM(o, "beforebegin", r), 
            this.blocks.splice(e, 0, o);
            const a = this.composeBlockEvent("move", {
                fromIndex: t,
                toIndex: e
            });
            o.call(X.MOVED, a);
        }
        insert(e, t, o = !1) {
            if (!this.length) {
                this.push(t);
                return;
            }
            e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(X.REMOVED));
            const i = o ? 1 : 0;
            if (this.blocks.splice(e, i, t), e > 0) {
                const n = this.blocks[e - 1];
                this.insertToDOM(t, "afterend", n);
            } else {
                const n = this.blocks[e + 1];
                n ? this.insertToDOM(t, "beforebegin", n) : this.insertToDOM(t);
            }
        }
        replace(e, t) {
            if (this.blocks[e] === void 0) throw Error("Incorrect index");
            this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
        }
        insertMany(e, t) {
            const o = new DocumentFragment;
            for (const i of e) o.appendChild(i.holder);
            if (this.length > 0) {
                if (t > 0) {
                    const i = Math.min(t - 1, this.length - 1);
                    this.blocks[i].holder.after(o);
                } else t === 0 && this.workingArea.prepend(o);
                this.blocks.splice(t, 0, ...e);
            } else this.blocks.push(...e), this.workingArea.appendChild(o);
            e.forEach((i => i.call(X.RENDERED)));
        }
        remove(e) {
            isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(X.REMOVED), 
            this.blocks.splice(e, 1);
        }
        removeAll() {
            this.workingArea.innerHTML = "", this.blocks.forEach((e => e.call(X.REMOVED))), 
            this.blocks.length = 0;
        }
        insertAfter(e, t) {
            const o = this.blocks.indexOf(e);
            this.insert(o + 1, t);
        }
        get(e) {
            return this.blocks[e];
        }
        indexOf(e) {
            return this.blocks.indexOf(e);
        }
        insertToDOM(e, t, o) {
            t ? o.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), 
            e.call(X.RENDERED);
        }
        composeBlockEvent(e, t) {
            return new CustomEvent(e, {
                detail: t
            });
        }
    }
    const nt = "block-removed", st = "block-added", ei = "block-moved", rt = "block-changed";
    class ti {
        constructor() {
            this.completed = Promise.resolve();
        }
        add(e) {
            return new Promise(((t, o) => {
                this.completed = this.completed.then(e).then(t).catch(o);
            }));
        }
    }
    class oi extends y {
        constructor() {
            super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
        }
        get currentBlockIndex() {
            return this._currentBlockIndex;
        }
        set currentBlockIndex(e) {
            this._currentBlockIndex = e;
        }
        get firstBlock() {
            return this._blocks[0];
        }
        get lastBlock() {
            return this._blocks[this._blocks.length - 1];
        }
        get currentBlock() {
            return this._blocks[this.currentBlockIndex];
        }
        set currentBlock(e) {
            this.currentBlockIndex = this.getBlockIndex(e);
        }
        get nextBlock() {
            return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
        }
        get nextContentfulBlock() {
            return this.blocks.slice(this.currentBlockIndex + 1).find((t => !!t.inputs.length));
        }
        get previousContentfulBlock() {
            return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t => !!t.inputs.length));
        }
        get previousBlock() {
            return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
        }
        get blocks() {
            return this._blocks.array;
        }
        get isEditorEmpty() {
            return this.blocks.every((e => e.isEmpty));
        }
        prepare() {
            const e = new Se(this.Editor.UI.nodes.redactor);
            this._blocks = new Proxy(e, {
                set: Se.set,
                get: Se.get
            }), this.listeners.on(document, "copy", (t => this.Editor.BlockEvents.handleCommandC(t)));
        }
        toggleReadOnly(e) {
            e ? this.disableModuleBindings() : this.enableModuleBindings();
        }
        composeBlock({tool: e, data: t = {}, id: o = void 0, tunes: i = {}}) {
            const n = this.Editor.ReadOnly.isEnabled, r = this.Editor.Tools.blockTools.get(e), a = new R({
                id: o,
                data: t,
                tool: r,
                api: this.Editor.API,
                readOnly: n,
                tunesData: i
            }, this.eventsDispatcher);
            return n || window.requestIdleCallback((() => {
                this.bindBlockEvents(a);
            }), {
                timeout: 2e3
            }), a;
        }
        insert({id: e = void 0, tool: t = this.config.defaultBlock, data: o = {}, index: i, needToFocus: n = !0, replace: r = !1, tunes: a = {}} = {}) {
            let l = i;
            l === void 0 && (l = this.currentBlockIndex + (r ? 0 : 1));
            const d = this.composeBlock({
                id: e,
                tool: t,
                data: o,
                tunes: a
            });
            return r && this.blockDidMutated(nt, this.getBlockByIndex(l), {
                index: l
            }), this._blocks.insert(l, d, r), this.blockDidMutated(st, d, {
                index: l
            }), n ? this.currentBlockIndex = l : l <= this.currentBlockIndex && this.currentBlockIndex++, 
            d;
        }
        insertMany(e, t = 0) {
            this._blocks.insertMany(e, t);
        }
        async update(e, t) {
            const o = await e.data, i = this.composeBlock({
                id: e.id,
                tool: e.name,
                data: Object.assign({}, o, t),
                tunes: e.tunes
            }), n = this.getBlockIndex(e);
            return this._blocks.replace(n, i), this.blockDidMutated(rt, i, {
                index: n
            }), i;
        }
        replace(e, t, o) {
            const i = this.getBlockIndex(e);
            this.insert({
                tool: t,
                data: o,
                index: i,
                replace: !0
            });
        }
        paste(e, t, o = !1) {
            const i = this.insert({
                tool: e,
                replace: o
            });
            try {
                window.requestIdleCallback((() => {
                    i.call(X.ON_PASTE, t);
                }));
            } catch (n) {
                T(`${e}: onPaste callback call is failed`, "error", n);
            }
            return i;
        }
        insertDefaultBlockAtIndex(e, t = !1) {
            const o = this.composeBlock({
                tool: this.config.defaultBlock
            });
            return this._blocks[e] = o, this.blockDidMutated(st, o, {
                index: e
            }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, 
            o;
        }
        insertAtEnd() {
            return this.currentBlockIndex = this.blocks.length - 1, this.insert();
        }
        async mergeBlocks(e, t) {
            const o = await t.data;
            W(o) || await e.mergeWith(o), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e);
        }
        removeBlock(e, t = !0) {
            return new Promise((o => {
                const i = this._blocks.indexOf(e);
                if (!this.validateIndex(i)) throw new Error("Can't find a Block to remove");
                e.destroy(), this._blocks.remove(i), this.blockDidMutated(nt, e, {
                    index: i
                }), this.currentBlockIndex >= i && this.currentBlockIndex--, this.blocks.length ? i === 0 && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, 
                t && this.insert()), o();
            }));
        }
        removeSelectedBlocks() {
            let e;
            for (let t = this.blocks.length - 1; t >= 0; t--) this.blocks[t].selected && (this.removeBlock(this.blocks[t]), 
            e = t);
            return e;
        }
        removeAllBlocks() {
            for (let e = this.blocks.length - 1; e >= 0; e--) this._blocks.remove(e);
            this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
        }
        split() {
            const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = c.make("div");
            t.appendChild(e);
            const o = {
                text: c.isEmpty(t) ? "" : t.innerHTML
            };
            return this.insert({
                data: o
            });
        }
        getBlockByIndex(e) {
            return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
        }
        getBlockIndex(e) {
            return this._blocks.indexOf(e);
        }
        getBlockById(e) {
            return this._blocks.array.find((t => t.id === e));
        }
        getBlock(e) {
            c.isElement(e) || (e = e.parentNode);
            const t = this._blocks.nodes, o = e.closest(`.${R.CSS.wrapper}`), i = t.indexOf(o);
            if (i >= 0) return this._blocks[i];
        }
        setCurrentBlockByChildNode(e) {
            c.isElement(e) || (e = e.parentNode);
            const t = e.closest(`.${R.CSS.wrapper}`);
            if (!t) return;
            const o = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
            if (o != null && o.isEqualNode(this.Editor.UI.nodes.wrapper)) return this.currentBlockIndex = this._blocks.nodes.indexOf(t), 
            this.currentBlock.updateCurrentInput(), this.currentBlock;
        }
        getBlockByChildNode(e) {
            if (!e || !(e instanceof Node)) return;
            c.isElement(e) || (e = e.parentNode);
            const t = e.closest(`.${R.CSS.wrapper}`);
            return this.blocks.find((o => o.holder === t));
        }
        swap(e, t) {
            this._blocks.swap(e, t), this.currentBlockIndex = t;
        }
        move(e, t = this.currentBlockIndex) {
            if (isNaN(e) || isNaN(t)) {
                T("Warning during 'move' call: incorrect indices provided.", "warn");
                return;
            }
            if (!this.validateIndex(e) || !this.validateIndex(t)) {
                T("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
                return;
            }
            this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(ei, this.currentBlock, {
                fromIndex: t,
                toIndex: e
            });
        }
        async convert(e, t, o) {
            if (!await e.save()) throw new Error("Could not convert Block. Failed to extract original Block data.");
            const n = this.Editor.Tools.blockTools.get(t);
            if (!n) throw new Error(`Could not convert Block. Tool «${t}» not found.`);
            const r = await e.exportDataAsString(), a = V(r, n.sanitizeConfig);
            let l = to(a, n.conversionConfig);
            o && (l = Object.assign(l, o)), this.replace(e, n.name, l);
        }
        dropPointer() {
            this.currentBlockIndex = -1;
        }
        async clear(e = !1) {
            const t = new ti;
            this.blocks.forEach((o => {
                t.add((async () => {
                    await this.removeBlock(o, !1);
                }));
            })), await t.completed, this.dropPointer(), e && this.insert(), this.Editor.UI.checkEmptiness();
        }
        async destroy() {
            await Promise.all(this.blocks.map((e => e.destroy())));
        }
        bindBlockEvents(e) {
            const {BlockEvents: t} = this.Editor;
            this.readOnlyMutableListeners.on(e.holder, "keydown", (o => {
                t.keydown(o);
            })), this.readOnlyMutableListeners.on(e.holder, "keyup", (o => {
                t.keyup(o);
            })), this.readOnlyMutableListeners.on(e.holder, "dragover", (o => {
                t.dragOver(o);
            })), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o => {
                t.dragLeave(o);
            })), e.on("didMutated", (o => this.blockDidMutated(rt, o, {
                index: this.getBlockIndex(o)
            })));
        }
        disableModuleBindings() {
            this.readOnlyMutableListeners.clearAll();
        }
        enableModuleBindings() {
            this.readOnlyMutableListeners.on(document, "cut", (e => this.Editor.BlockEvents.handleCommandX(e))), 
            this.blocks.forEach((e => {
                this.bindBlockEvents(e);
            }));
        }
        validateIndex(e) {
            return !(e < 0 || e >= this._blocks.length);
        }
        blockDidMutated(e, t, o) {
            const i = new CustomEvent(e, {
                detail: {
                    target: new ee(t),
                    ...o
                }
            });
            return this.eventsDispatcher.emit(pt, {
                event: i
            }), t;
        }
    }
    class ii extends y {
        constructor() {
            super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = !1, 
            this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
        }
        get sanitizerConfig() {
            return {
                p: {},
                h1: {},
                h2: {},
                h3: {},
                h4: {},
                h5: {},
                h6: {},
                ol: {},
                ul: {},
                li: {},
                br: !0,
                img: {
                    src: !0,
                    width: !0,
                    height: !0
                },
                a: {
                    href: !0
                },
                b: {},
                i: {},
                u: {}
            };
        }
        get allBlocksSelected() {
            const {BlockManager: e} = this.Editor;
            return e.blocks.every((t => t.selected === !0));
        }
        set allBlocksSelected(e) {
            const {BlockManager: t} = this.Editor;
            t.blocks.forEach((o => {
                o.selected = e;
            })), this.clearCache();
        }
        get anyBlockSelected() {
            const {BlockManager: e} = this.Editor;
            return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t => t.selected === !0))), 
            this.anyBlockSelectedCache;
        }
        get selectedBlocks() {
            return this.Editor.BlockManager.blocks.filter((e => e.selected));
        }
        prepare() {
            this.selection = new b, ae.add({
                name: "CMD+A",
                handler: e => {
                    const {BlockManager: t, ReadOnly: o} = this.Editor;
                    if (o.isEnabled) {
                        e.preventDefault(), this.selectAllBlocks();
                        return;
                    }
                    t.currentBlock && this.handleCommandA(e);
                },
                on: this.Editor.UI.nodes.redactor
            });
        }
        toggleReadOnly() {
            b.get().removeAllRanges(), this.allBlocksSelected = !1;
        }
        unSelectBlockByIndex(e) {
            const {BlockManager: t} = this.Editor;
            let o;
            isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), o.selected = !1, this.clearCache();
        }
        clearSelection(e, t = !1) {
            const {BlockManager: o, Caret: i, RectangleSelection: n} = this.Editor;
            this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
            const r = e && e instanceof KeyboardEvent, a = r && lt(e.keyCode);
            if (this.anyBlockSelected && r && a && !b.isSelectionExists) {
                const l = o.removeSelectedBlocks();
                o.insertDefaultBlockAtIndex(l, !0), i.setToBlock(o.currentBlock), xe((() => {
                    const d = e.key;
                    i.insertContentAtCaretPosition(d.length > 1 ? "" : d);
                }), 20)();
            }
            if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || n.isRectActivated()) {
                this.Editor.RectangleSelection.clearSelection();
                return;
            }
            t && this.selection.restore(), this.allBlocksSelected = !1;
        }
        copySelectedBlocks(e) {
            e.preventDefault();
            const t = c.make("div");
            this.selectedBlocks.forEach((n => {
                const r = V(n.holder.innerHTML, this.sanitizerConfig), a = c.make("p");
                a.innerHTML = r, t.appendChild(a);
            }));
            const o = Array.from(t.childNodes).map((n => n.textContent)).join(`\n\n`), i = t.innerHTML;
            return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", i), 
            Promise.all(this.selectedBlocks.map((n => n.save()))).then((n => {
                try {
                    e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(n));
                } catch {}
            }));
        }
        selectBlockByIndex(e) {
            const {BlockManager: t} = this.Editor, o = t.getBlockByIndex(e);
            o !== void 0 && this.selectBlock(o);
        }
        selectBlock(e) {
            this.selection.save(), b.get().removeAllRanges(), e.selected = !0, this.clearCache(), 
            this.Editor.InlineToolbar.close();
        }
        unselectBlock(e) {
            e.selected = !1, this.clearCache();
        }
        clearCache() {
            this.anyBlockSelectedCache = null;
        }
        destroy() {
            ae.remove(this.Editor.UI.nodes.redactor, "CMD+A");
        }
        handleCommandA(e) {
            if (this.Editor.RectangleSelection.clearSelection(), c.isNativeInput(e.target) && !this.readyToBlockSelection) {
                this.readyToBlockSelection = !0;
                return;
            }
            const t = this.Editor.BlockManager.getBlock(e.target), o = t.inputs;
            if (o.length > 1 && !this.readyToBlockSelection) {
                this.readyToBlockSelection = !0;
                return;
            }
            if (o.length === 1 && !this.needToSelectAll) {
                this.needToSelectAll = !0;
                return;
            }
            this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, 
            this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (e.preventDefault(), 
            this.selectBlock(t), this.needToSelectAll = !0);
        }
        selectAllBlocks() {
            this.selection.save(), b.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
        }
    }
    class we extends y {
        get positions() {
            return {
                START: "start",
                END: "end",
                DEFAULT: "default"
            };
        }
        static get CSS() {
            return {
                shadowCaret: "cdx-shadow-caret"
            };
        }
        get isAtStart() {
            const {currentBlock: e} = this.Editor.BlockManager;
            if (!e.focusable) return !0;
            const t = b.get(), o = c.getDeepestNode(e.currentInput);
            let i = t.focusNode;
            if (c.isNativeInput(o)) return o.selectionEnd === 0;
            if (!t.anchorNode) return !1;
            let n = i.textContent.search(/\S/);
            n === -1 && (n = 0);
            let r = t.focusOffset;
            return i.nodeType !== Node.TEXT_NODE && i.childNodes.length && (i.childNodes[r] ? (i = i.childNodes[r], 
            r = 0) : (i = i.childNodes[r - 1], r = i.textContent.length)), (c.isLineBreakTag(o) || c.isEmpty(o)) && this.getHigherLevelSiblings(i, "left").every((d => {
                const u = c.isLineBreakTag(d), h = d.children.length === 1 && c.isLineBreakTag(d.children[0]), f = u || h;
                return c.isEmpty(d) && !f;
            })) && r === n ? !0 : o === null || i === o && r <= n;
        }
        get isAtEnd() {
            const {currentBlock: e} = this.Editor.BlockManager;
            if (!e.focusable) return !0;
            const t = b.get();
            let o = t.focusNode;
            const i = c.getDeepestNode(e.currentInput, !0);
            if (c.isNativeInput(i)) return i.selectionEnd === i.value.length;
            if (!t.focusNode) return !1;
            let n = t.focusOffset;
            if (o.nodeType !== Node.TEXT_NODE && o.childNodes.length && (o.childNodes[n - 1] ? (o = o.childNodes[n - 1], 
            n = o.textContent.length) : (o = o.childNodes[0], n = 0)), c.isLineBreakTag(i) || c.isEmpty(i)) {
                const a = this.getHigherLevelSiblings(o, "right");
                if (a.every(((d, u) => u === a.length - 1 && c.isLineBreakTag(d) || c.isEmpty(d) && !c.isLineBreakTag(d))) && n === o.textContent.length) return !0;
            }
            const r = i.textContent.replace(/\s+$/, "");
            return o === i && n >= r.length;
        }
        setToBlock(e, t = this.positions.DEFAULT, o = 0) {
            var d;
            const {BlockManager: i, BlockSelection: n} = this.Editor;
            if (n.clearSelection(), !e.focusable) {
                (d = window.getSelection()) == null || d.removeAllRanges(), n.selectBlock(e), i.currentBlock = e;
                return;
            }
            let r;
            switch (t) {
              case this.positions.START:
                r = e.firstInput;
                break;

              case this.positions.END:
                r = e.lastInput;
                break;

              default:
                r = e.currentInput;
            }
            if (!r) return;
            const a = c.getDeepestNode(r, t === this.positions.END), l = c.getContentLength(a);
            switch (!0) {
              case t === this.positions.START:
                o = 0;
                break;

              case t === this.positions.END:
              case o > l:
                o = l;
                break;
            }
            this.set(a, o), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = r;
        }
        setToInput(e, t = this.positions.DEFAULT, o = 0) {
            const {currentBlock: i} = this.Editor.BlockManager, n = c.getDeepestNode(e);
            switch (t) {
              case this.positions.START:
                this.set(n, 0);
                break;

              case this.positions.END:
                this.set(n, c.getContentLength(n));
                break;

              default:
                o && this.set(n, o);
            }
            i.currentInput = e;
        }
        set(e, t = 0) {
            const {top: i, bottom: n} = b.setCursor(e, t), {innerHeight: r} = window;
            i < 0 ? window.scrollBy(0, i - 30) : n > r && window.scrollBy(0, n - r + 30);
        }
        setToTheLastBlock() {
            const e = this.Editor.BlockManager.lastBlock;
            if (e) if (e.tool.isDefault && e.isEmpty) this.setToBlock(e); else {
                const t = this.Editor.BlockManager.insertAtEnd();
                this.setToBlock(t);
            }
        }
        extractFragmentFromCaretPosition() {
            const e = b.get();
            if (e.rangeCount) {
                const t = e.getRangeAt(0), o = this.Editor.BlockManager.currentBlock.currentInput;
                if (t.deleteContents(), o) if (c.isNativeInput(o)) {
                    const i = o, n = document.createDocumentFragment(), r = i.value.substring(0, i.selectionStart), a = i.value.substring(i.selectionStart);
                    return n.textContent = a, i.value = r, n;
                } else {
                    const i = t.cloneRange();
                    return i.selectNodeContents(o), i.setStart(t.endContainer, t.endOffset), i.extractContents();
                }
            }
        }
        navigateNext(e = !1) {
            const {BlockManager: t} = this.Editor, {currentBlock: o, nextBlock: i} = t, {nextInput: n} = o, r = this.isAtEnd;
            let a = i;
            const l = e || r;
            if (n && l) return this.setToInput(n, this.positions.START), !0;
            if (a === null) {
                if (o.tool.isDefault || !l) return !1;
                a = t.insertAtEnd();
            }
            return l ? (this.setToBlock(a, this.positions.START), !0) : !1;
        }
        navigatePrevious(e = !1) {
            const {currentBlock: t, previousBlock: o} = this.Editor.BlockManager;
            if (!t) return !1;
            const {previousInput: i} = t, n = e || this.isAtStart;
            return i && n ? (this.setToInput(i, this.positions.END), !0) : o !== null && n ? (this.setToBlock(o, this.positions.END), 
            !0) : !1;
        }
        createShadow(e) {
            const t = document.createElement("span");
            t.classList.add(we.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
        }
        restoreCaret(e) {
            const t = e.querySelector(`.${we.CSS.shadowCaret}`);
            if (!t) return;
            (new b).expandToTag(t);
            const i = document.createRange();
            i.selectNode(t), i.extractContents();
        }
        insertContentAtCaretPosition(e) {
            const t = document.createDocumentFragment(), o = document.createElement("div"), i = b.get(), n = b.range;
            o.innerHTML = e, Array.from(o.childNodes).forEach((d => t.appendChild(d))), t.childNodes.length === 0 && t.appendChild(new Text);
            const r = t.lastChild;
            n.deleteContents(), n.insertNode(t);
            const a = document.createRange(), l = r.nodeType === Node.TEXT_NODE ? r : r.firstChild;
            l !== null && l.textContent !== null && a.setStart(l, l.textContent.length), i.removeAllRanges(), 
            i.addRange(a);
        }
        getHigherLevelSiblings(e, t) {
            let o = e;
            const i = [];
            for (;o.parentNode && o.parentNode.contentEditable !== "true"; ) o = o.parentNode;
            const n = t === "left" ? "previousSibling" : "nextSibling";
            for (;o[n]; ) o = o[n], i.push(o);
            return i;
        }
    }
    class ni extends y {
        constructor() {
            super(...arguments), this.onMouseUp = () => {
                this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
            }, this.onMouseOver = e => {
                const {BlockManager: t, BlockSelection: o} = this.Editor;
                if (e.relatedTarget === null && e.target === null) return;
                const i = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, n = t.getBlockByChildNode(e.target);
                if (!(!i || !n) && n !== i) {
                    if (i === this.firstSelectedBlock) {
                        b.get().removeAllRanges(), i.selected = !0, n.selected = !0, o.clearCache();
                        return;
                    }
                    if (n === this.firstSelectedBlock) {
                        i.selected = !1, n.selected = !1, o.clearCache();
                        return;
                    }
                    this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, n), this.lastSelectedBlock = n;
                }
            };
        }
        async prepare() {
            this.listeners.on(document, "mousedown", (e => {
                this.enableCrossBlockSelection(e);
            }));
        }
        watchSelection(e) {
            if (e.button !== Pt.LEFT) return;
            const {BlockManager: t} = this.Editor;
            this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, 
            this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
        }
        get isCrossBlockSelectionStarted() {
            return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
        }
        toggleBlockSelectedState(e = !0) {
            const {BlockManager: t, BlockSelection: o} = this.Editor;
            this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), 
            this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, 
            o.clearCache(), b.get().removeAllRanges());
            const i = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), n = t.blocks[i];
            n && (this.lastSelectedBlock.selected !== n.selected ? (n.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, 
            o.clearCache()), this.lastSelectedBlock = n, this.Editor.InlineToolbar.close(), 
            n.holder.scrollIntoView({
                block: "nearest"
            }));
        }
        clear(e) {
            const {BlockManager: t, BlockSelection: o, Caret: i} = this.Editor, n = t.blocks.indexOf(this.firstSelectedBlock), r = t.blocks.indexOf(this.lastSelectedBlock);
            if (o.anyBlockSelected && n > -1 && r > -1 && e && e instanceof KeyboardEvent) switch (e.keyCode) {
              case k.DOWN:
              case k.RIGHT:
                i.setToBlock(t.blocks[Math.max(n, r)], i.positions.END);
                break;

              case k.UP:
              case k.LEFT:
                i.setToBlock(t.blocks[Math.min(n, r)], i.positions.START);
                break;

              default:
                i.setToBlock(t.blocks[Math.max(n, r)], i.positions.END);
            }
            this.firstSelectedBlock = this.lastSelectedBlock = null;
        }
        enableCrossBlockSelection(e) {
            const {UI: t} = this.Editor;
            b.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
        }
        toggleBlocksSelectedState(e, t) {
            const {BlockManager: o, BlockSelection: i} = this.Editor, n = o.blocks.indexOf(e), r = o.blocks.indexOf(t), a = e.selected !== t.selected;
            for (let l = Math.min(n, r); l <= Math.max(n, r); l++) {
                const d = o.blocks[l];
                d !== this.firstSelectedBlock && d !== (a ? e : t) && (o.blocks[l].selected = !o.blocks[l].selected, 
                i.clearCache());
            }
        }
    }
    class si extends y {
        constructor() {
            super(...arguments), this.isStartedAtEditor = !1;
        }
        toggleReadOnly(e) {
            e ? this.disableModuleBindings() : this.enableModuleBindings();
        }
        enableModuleBindings() {
            const {UI: e} = this.Editor;
            this.readOnlyMutableListeners.on(e.nodes.holder, "drop", (async t => {
                await this.processDrop(t);
            }), !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", (() => {
                this.processDragStart();
            })), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t => {
                this.processDragOver(t);
            }), !0);
        }
        disableModuleBindings() {
            this.readOnlyMutableListeners.clearAll();
        }
        async processDrop(e) {
            const {BlockManager: t, Caret: o, Paste: i} = this.Editor;
            e.preventDefault(), t.blocks.forEach((r => {
                r.dropTarget = !1;
            })), b.isAtEditor && !b.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), 
            this.isStartedAtEditor = !1;
            const n = t.setCurrentBlockByChildNode(e.target);
            if (n) this.Editor.Caret.setToBlock(n, o.positions.END); else {
                const r = t.setCurrentBlockByChildNode(t.lastBlock.holder);
                this.Editor.Caret.setToBlock(r, o.positions.END);
            }
            await i.processDataTransfer(e.dataTransfer, !0);
        }
        processDragStart() {
            b.isAtEditor && !b.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
        }
        processDragOver(e) {
            e.preventDefault();
        }
    }
    class ri extends y {
        constructor({config: e, eventsDispatcher: t}) {
            super({
                config: e,
                eventsDispatcher: t
            }), this.disabled = !1, this.batchingTimeout = null, this.batchingOnChangeQueue = new Map, 
            this.batchTime = 400, this.mutationObserver = new MutationObserver((o => {
                this.redactorChanged(o);
            })), this.eventsDispatcher.on(pt, (o => {
                this.particularBlockChanged(o.event);
            })), this.eventsDispatcher.on(ft, (() => {
                this.disable();
            })), this.eventsDispatcher.on(gt, (() => {
                this.enable();
            }));
        }
        enable() {
            this.mutationObserver.observe(this.Editor.UI.nodes.redactor, {
                childList: !0,
                subtree: !0,
                characterData: !0,
                attributes: !0
            }), this.disabled = !1;
        }
        disable() {
            this.mutationObserver.disconnect(), this.disabled = !0;
        }
        particularBlockChanged(e) {
            this.disabled || !M(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), 
            this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout((() => {
                let t;
                this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), 
                this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
            }), this.batchTime));
        }
        redactorChanged(e) {
            this.eventsDispatcher.emit(Ae, {
                mutations: e
            });
        }
    }
    const Ct = class extends y {
        constructor() {
            super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, 
            this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], 
            this.processTool = s => {
                try {
                    const e = s.create({}, {}, !1);
                    if (s.pasteConfig === !1) {
                        this.exceptionList.push(s.name);
                        return;
                    }
                    if (!M(e.onPaste)) return;
                    this.getTagsConfig(s), this.getFilesConfig(s), this.getPatternsConfig(s);
                } catch (e) {
                    T(`Paste handling for «${s.name}» Tool hasn't been set up because of the error`, "warn", e);
                }
            }, this.handlePasteEvent = async s => {
                const {BlockManager: e, Toolbar: t} = this.Editor, o = e.setCurrentBlockByChildNode(s.target);
                !o || this.isNativeBehaviour(s.target) && !s.clipboardData.types.includes("Files") || o && this.exceptionList.includes(o.name) || (s.preventDefault(), 
                this.processDataTransfer(s.clipboardData), t.close());
            };
        }
        async prepare() {
            this.processTools();
        }
        toggleReadOnly(s) {
            s ? this.unsetCallback() : this.setCallback();
        }
        async processDataTransfer(s, e = !1) {
            const {Tools: t} = this.Editor, o = s.types;
            if ((o.includes ? o.includes("Files") : o.contains("Files")) && !W(this.toolsFiles)) {
                await this.processFiles(s.files);
                return;
            }
            const n = s.getData(this.MIME_TYPE), r = s.getData("text/plain");
            let a = s.getData("text/html");
            if (n) try {
                this.insertEditorJSData(JSON.parse(n));
                return;
            } catch {}
            e && r.trim() && a.trim() && (a = "<p>" + (a.trim() ? a : r) + "</p>");
            const l = Object.keys(this.toolsTags).reduce(((h, f) => (h[f.toLowerCase()] = this.toolsTags[f].sanitizationConfig ?? {}, 
            h)), {}), d = Object.assign({}, l, t.getAllInlineToolsSanitizeConfig(), {
                br: {}
            }), u = V(a, d);
            !u.trim() || u.trim() === r || !c.isHTMLString(u) ? await this.processText(r) : await this.processText(u, !0);
        }
        async processText(s, e = !1) {
            const {Caret: t, BlockManager: o} = this.Editor, i = e ? this.processHTML(s) : this.processPlain(s);
            if (!i.length) return;
            if (i.length === 1) {
                i[0].isBlock ? this.processSingleBlock(i.pop()) : this.processInlinePaste(i.pop());
                return;
            }
            const r = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty;
            i.map((async (a, l) => this.insertBlock(a, l === 0 && r))), o.currentBlock && t.setToBlock(o.currentBlock, t.positions.END);
        }
        setCallback() {
            this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
        }
        unsetCallback() {
            this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
        }
        processTools() {
            const s = this.Editor.Tools.blockTools;
            Array.from(s.values()).forEach(this.processTool);
        }
        collectTagNames(s) {
            return G(s) ? [ s ] : D(s) ? Object.keys(s) : [];
        }
        getTagsConfig(s) {
            if (s.pasteConfig === !1) return;
            const e = s.pasteConfig.tags || [], t = [];
            e.forEach((o => {
                const i = this.collectTagNames(o);
                t.push(...i), i.forEach((n => {
                    if (Object.prototype.hasOwnProperty.call(this.toolsTags, n)) {
                        T(`Paste handler for «${s.name}» Tool on «${n}» tag is skipped because it is already used by «${this.toolsTags[n].tool.name}» Tool.`, "warn");
                        return;
                    }
                    const r = D(o) ? o[n] : null;
                    this.toolsTags[n.toUpperCase()] = {
                        tool: s,
                        sanitizationConfig: r
                    };
                }));
            })), this.tagsByTool[s.name] = t.map((o => o.toUpperCase()));
        }
        getFilesConfig(s) {
            if (s.pasteConfig === !1) return;
            const {files: e = {}} = s.pasteConfig;
            let {extensions: t, mimeTypes: o} = e;
            !t && !o || (t && !Array.isArray(t) && (T(`«extensions» property of the onDrop config for «${s.name}» Tool should be an array`), 
            t = []), o && !Array.isArray(o) && (T(`«mimeTypes» property of the onDrop config for «${s.name}» Tool should be an array`), 
            o = []), o && (o = o.filter((i => jt(i) ? !0 : (T(`MIME type value «${i}» for the «${s.name}» Tool is not a valid MIME type`, "warn"), 
            !1)))), this.toolsFiles[s.name] = {
                extensions: t || [],
                mimeTypes: o || []
            });
        }
        getPatternsConfig(s) {
            s.pasteConfig === !1 || !s.pasteConfig.patterns || W(s.pasteConfig.patterns) || Object.entries(s.pasteConfig.patterns).forEach((([e, t]) => {
                t instanceof RegExp || T(`Pattern ${t} for «${s.name}» Tool is skipped because it should be a Regexp instance.`, "warn"), 
                this.toolsPatterns.push({
                    key: e,
                    pattern: t,
                    tool: s
                });
            }));
        }
        isNativeBehaviour(s) {
            return c.isNativeInput(s);
        }
        async processFiles(s) {
            const {BlockManager: e} = this.Editor;
            let t;
            t = await Promise.all(Array.from(s).map((n => this.processFile(n)))), t = t.filter((n => !!n));
            const i = e.currentBlock.tool.isDefault && e.currentBlock.isEmpty;
            t.forEach(((n, r) => {
                e.paste(n.type, n.event, r === 0 && i);
            }));
        }
        async processFile(s) {
            const e = Ut(s), t = Object.entries(this.toolsFiles).find((([n, {mimeTypes: r, extensions: a}]) => {
                const [l, d] = s.type.split("/"), u = a.find((f => f.toLowerCase() === e.toLowerCase())), h = r.find((f => {
                    const [x, p] = f.split("/");
                    return x === l && (p === d || p === "*");
                }));
                return !!u || !!h;
            }));
            if (!t) return;
            const [o] = t;
            return {
                event: this.composePasteEvent("file", {
                    file: s
                }),
                type: o
            };
        }
        processHTML(s) {
            const {Tools: e} = this.Editor, t = c.make("DIV");
            return t.innerHTML = s, this.getNodes(t).map((i => {
                let n, r = e.defaultTool, a = !1;
                switch (i.nodeType) {
                  case Node.DOCUMENT_FRAGMENT_NODE:
                    n = c.make("div"), n.appendChild(i);
                    break;

                  case Node.ELEMENT_NODE:
                    n = i, a = !0, this.toolsTags[n.tagName] && (r = this.toolsTags[n.tagName].tool);
                    break;
                }
                const {tags: l} = r.pasteConfig || {
                    tags: []
                }, d = l.reduce(((f, x) => (this.collectTagNames(x).forEach((m => {
                    const L = D(x) ? x[m] : null;
                    f[m.toLowerCase()] = L || {};
                })), f)), {}), u = Object.assign({}, d, r.baseSanitizeConfig);
                if (n.tagName.toLowerCase() === "table") {
                    const f = V(n.outerHTML, u);
                    n = c.make("div", void 0, {
                        innerHTML: f
                    }).firstChild;
                } else n.innerHTML = V(n.innerHTML, u);
                const h = this.composePasteEvent("tag", {
                    data: n
                });
                return {
                    content: n,
                    isBlock: a,
                    tool: r.name,
                    event: h
                };
            })).filter((i => {
                const n = c.isEmpty(i.content), r = c.isSingleTag(i.content);
                return !n || r;
            }));
        }
        processPlain(s) {
            const {defaultBlock: e} = this.config;
            if (!s) return [];
            const t = e;
            return s.split(/\r?\n/).filter((o => o.trim())).map((o => {
                const i = c.make("div");
                i.textContent = o;
                const n = this.composePasteEvent("tag", {
                    data: i
                });
                return {
                    content: i,
                    tool: t,
                    isBlock: !1,
                    event: n
                };
            }));
        }
        async processSingleBlock(s) {
            const {Caret: e, BlockManager: t} = this.Editor, {currentBlock: o} = t;
            if (!o || s.tool !== o.name || !c.containsOnlyInlineElements(s.content.innerHTML)) {
                this.insertBlock(s, (o == null ? void 0 : o.tool.isDefault) && o.isEmpty);
                return;
            }
            e.insertContentAtCaretPosition(s.content.innerHTML);
        }
        async processInlinePaste(s) {
            const {BlockManager: e, Caret: t} = this.Editor, {content: o} = s;
            if (e.currentBlock && e.currentBlock.tool.isDefault && o.textContent.length < Ct.PATTERN_PROCESSING_MAX_LENGTH) {
                const n = await this.processPattern(o.textContent);
                if (n) {
                    const r = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty, a = e.paste(n.tool, n.event, r);
                    t.setToBlock(a, t.positions.END);
                    return;
                }
            }
            if (e.currentBlock && e.currentBlock.currentInput) {
                const n = e.currentBlock.tool.baseSanitizeConfig;
                document.execCommand("insertHTML", !1, V(o.innerHTML, n));
            } else this.insertBlock(s);
        }
        async processPattern(s) {
            const e = this.toolsPatterns.find((o => {
                const i = o.pattern.exec(s);
                return i ? s === i.shift() : !1;
            }));
            return e ? {
                event: this.composePasteEvent("pattern", {
                    key: e.key,
                    data: s
                }),
                tool: e.tool.name
            } : void 0;
        }
        insertBlock(s, e = !1) {
            const {BlockManager: t, Caret: o} = this.Editor, {currentBlock: i} = t;
            let n;
            if (e && i && i.isEmpty) {
                n = t.paste(s.tool, s.event, !0), o.setToBlock(n, o.positions.END);
                return;
            }
            n = t.paste(s.tool, s.event), o.setToBlock(n, o.positions.END);
        }
        insertEditorJSData(s) {
            const {BlockManager: e, Caret: t, Tools: o} = this.Editor;
            bt(s, (n => o.blockTools.get(n).sanitizeConfig)).forEach((({tool: n, data: r}, a) => {
                let l = !1;
                a === 0 && (l = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty);
                const d = e.insert({
                    tool: n,
                    data: r,
                    replace: l
                });
                t.setToBlock(d, t.positions.END);
            }));
        }
        processElementNode(s, e, t) {
            const o = Object.keys(this.toolsTags), i = s, {tool: n} = this.toolsTags[i.tagName] || {}, r = this.tagsByTool[n == null ? void 0 : n.name] || [], a = o.includes(i.tagName), l = c.blockElements.includes(i.tagName.toLowerCase()), d = Array.from(i.children).some((({tagName: h}) => o.includes(h) && !r.includes(h))), u = Array.from(i.children).some((({tagName: h}) => c.blockElements.includes(h.toLowerCase())));
            if (!l && !a && !d) return t.appendChild(i), [ ...e, t ];
            if (a && !d || l && !u && !d) return [ ...e, t, i ];
        }
        getNodes(s) {
            const e = Array.from(s.childNodes);
            let t;
            const o = (i, n) => {
                if (c.isEmpty(n) && !c.isSingleTag(n)) return i;
                const r = i[i.length - 1];
                let a = new DocumentFragment;
                switch (r && c.isFragment(r) && (a = i.pop()), n.nodeType) {
                  case Node.ELEMENT_NODE:
                    if (t = this.processElementNode(n, i, a), t) return t;
                    break;

                  case Node.TEXT_NODE:
                    return a.appendChild(n), [ ...i, a ];

                  default:
                    return [ ...i, a ];
                }
                return [ ...i, ...Array.from(n.childNodes).reduce(o, []) ];
            };
            return e.reduce(o, []);
        }
        composePasteEvent(s, e) {
            return new CustomEvent(s, {
                detail: e
            });
        }
    };
    let Tt = Ct;
    Tt.PATTERN_PROCESSING_MAX_LENGTH = 450;
    class ai extends y {
        constructor() {
            super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = !1;
        }
        get isEnabled() {
            return this.readOnlyEnabled;
        }
        async prepare() {
            const {Tools: e} = this.Editor, {blockTools: t} = e, o = [];
            Array.from(t.entries()).forEach((([i, n]) => {
                n.isReadOnlySupported || o.push(i);
            })), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), 
            this.toggle(this.config.readOnly);
        }
        async toggle(e = !this.readOnlyEnabled) {
            e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
            const t = this.readOnlyEnabled;
            this.readOnlyEnabled = e;
            for (const i in this.Editor) this.Editor[i].toggleReadOnly && this.Editor[i].toggleReadOnly(e);
            if (t === e) return this.readOnlyEnabled;
            const o = await this.Editor.Saver.save();
            return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(o.blocks), 
            this.readOnlyEnabled;
        }
        throwCriticalError() {
            throw new ut(`To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`);
        }
    }
    class fe extends y {
        constructor() {
            super(...arguments), this.isRectSelectionActivated = !1, this.SCROLL_SPEED = 3, 
            this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, 
            this.MAIN_MOUSE_BUTTON = 0, this.mousedown = !1, this.isScrolling = !1, this.inScrollZone = null, 
            this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], 
            this.listenerIds = [];
        }
        static get CSS() {
            return {
                overlay: "codex-editor-overlay",
                overlayContainer: "codex-editor-overlay__container",
                rect: "codex-editor-overlay__rectangle",
                topScrollZone: "codex-editor-overlay__scroll-zone--top",
                bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
            };
        }
        prepare() {
            this.enableModuleBindings();
        }
        startSelection(e, t) {
            const o = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
            o.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = !1, 
            this.clearSelection(), this.stackOfSelected = []);
            const n = [ `.${R.CSS.content}`, `.${this.Editor.Toolbar.CSS.toolbar}`, `.${this.Editor.InlineToolbar.CSS.inlineToolbar}` ], r = o.closest("." + this.Editor.UI.CSS.editorWrapper), a = n.some((l => !!o.closest(l)));
            !r || a || (this.mousedown = !0, this.startX = e, this.startY = t);
        }
        endSelection() {
            this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
        }
        isRectActivated() {
            return this.isRectSelectionActivated;
        }
        clearSelection() {
            this.isRectSelectionActivated = !1;
        }
        enableModuleBindings() {
            const {container: e} = this.genHTML();
            this.listeners.on(e, "mousedown", (t => {
                this.processMouseDown(t);
            }), !1), this.listeners.on(document.body, "mousemove", Ie((t => {
                this.processMouseMove(t);
            }), 10), {
                passive: !0
            }), this.listeners.on(document.body, "mouseleave", (() => {
                this.processMouseLeave();
            })), this.listeners.on(window, "scroll", Ie((t => {
                this.processScroll(t);
            }), 10), {
                passive: !0
            }), this.listeners.on(document.body, "mouseup", (() => {
                this.processMouseUp();
            }), !1);
        }
        processMouseDown(e) {
            if (e.button !== this.MAIN_MOUSE_BUTTON) return;
            e.target.closest(c.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
        }
        processMouseMove(e) {
            this.changingRectangle(e), this.scrollByZones(e.clientY);
        }
        processMouseLeave() {
            this.clearSelection(), this.endSelection();
        }
        processScroll(e) {
            this.changingRectangle(e);
        }
        processMouseUp() {
            this.clearSelection(), this.endSelection();
        }
        scrollByZones(e) {
            if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), 
            document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), 
            !this.inScrollZone) {
                this.isScrolling = !1;
                return;
            }
            this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), 
            this.isScrolling = !0);
        }
        genHTML() {
            const {UI: e} = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = c.make("div", fe.CSS.overlay, {}), i = c.make("div", fe.CSS.overlayContainer, {}), n = c.make("div", fe.CSS.rect, {});
            return i.appendChild(n), o.appendChild(i), t.appendChild(o), this.overlayRectangle = n, 
            {
                container: t,
                overlay: o
            };
        }
        scrollVertical(e) {
            if (!(this.inScrollZone && this.mousedown)) return;
            const t = window.pageYOffset;
            window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout((() => {
                this.scrollVertical(e);
            }), 0);
        }
        changingRectangle(e) {
            if (!this.mousedown) return;
            e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
            const {rightPos: t, leftPos: o, index: i} = this.genInfoForMouseSelection(), n = this.startX > t && this.mouseX > t, r = this.startX < o && this.mouseX < o;
            this.rectCrossesBlocks = !(n || r), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, 
            this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), 
            this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), 
            this.inverseSelection(), b.get().removeAllRanges());
        }
        shrinkRectangleToPoint() {
            this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, 
            this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, 
            this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
        }
        inverseSelection() {
            const t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
            if (this.rectCrossesBlocks && !t) for (const o of this.stackOfSelected) this.Editor.BlockSelection.selectBlockByIndex(o);
            if (!this.rectCrossesBlocks && t) for (const o of this.stackOfSelected) this.Editor.BlockSelection.unSelectBlockByIndex(o);
        }
        updateRectangleSize() {
            this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, 
            this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, 
            this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, 
            this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, 
            this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
        }
        genInfoForMouseSelection() {
            const t = document.body.offsetWidth / 2, o = this.mouseY - window.pageYOffset, i = document.elementFromPoint(t, o), n = this.Editor.BlockManager.getBlockByChildNode(i);
            let r;
            n !== void 0 && (r = this.Editor.BlockManager.blocks.findIndex((h => h.holder === n.holder)));
            const a = this.Editor.BlockManager.lastBlock.holder.querySelector("." + R.CSS.content), l = Number.parseInt(window.getComputedStyle(a).width, 10) / 2, d = t - l, u = t + l;
            return {
                index: r,
                leftPos: d,
                rightPos: u
            };
        }
        addBlockInSelection(e) {
            this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
        }
        trySelectNextBlock(e) {
            const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length, i = 1, n = -1, r = 0;
            if (t) return;
            const a = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
            let l = r;
            o > 1 && (l = a ? i : n);
            const d = e > this.stackOfSelected[o - 1] && l === i, u = e < this.stackOfSelected[o - 1] && l === n, f = !(d || u || l === r);
            if (!f && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
                let m = this.stackOfSelected[o - 1] + 1 || e;
                for (m; m <= e; m++) this.addBlockInSelection(m);
                return;
            }
            if (!f && e < this.stackOfSelected[o - 1]) {
                for (let m = this.stackOfSelected[o - 1] - 1; m >= e; m--) this.addBlockInSelection(m);
                return;
            }
            if (!f) return;
            let p, x = o - 1;
            for (e > this.stackOfSelected[o - 1] ? p = () => e > this.stackOfSelected[x] : p = () => e < this.stackOfSelected[x]; p(); ) this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[x]), 
            this.stackOfSelected.pop(), x--;
        }
    }
    class li extends y {
        async render(e) {
            return new Promise((t => {
                const {Tools: o, BlockManager: i} = this.Editor;
                if (e.length === 0) i.insert(); else {
                    const n = e.map((({type: r, data: a, tunes: l, id: d}) => {
                        o.available.has(r) === !1 && (Y(`Tool «${r}» is not found. Check 'tools' property at the Editor.js config.`, "warn"), 
                        a = this.composeStubDataForTool(r, a, d), r = o.stubTool);
                        let u;
                        try {
                            u = i.composeBlock({
                                id: d,
                                tool: r,
                                data: a,
                                tunes: l
                            });
                        } catch (h) {
                            T(`Block «${r}» skipped because of plugins error`, "error", {
                                data: a,
                                error: h
                            }), a = this.composeStubDataForTool(r, a, d), r = o.stubTool, u = i.composeBlock({
                                id: d,
                                tool: r,
                                data: a,
                                tunes: l
                            });
                        }
                        return u;
                    }));
                    i.insertMany(n);
                }
                window.requestIdleCallback((() => {
                    t();
                }), {
                    timeout: 2e3
                });
            }));
        }
        composeStubDataForTool(e, t, o) {
            const {Tools: i} = this.Editor;
            let n = e;
            if (i.unavailable.has(e)) {
                const r = i.unavailable.get(e).toolbox;
                r !== void 0 && r[0].title !== void 0 && (n = r[0].title);
            }
            return {
                savedData: {
                    id: o,
                    type: e,
                    data: t
                },
                title: n
            };
        }
    }
    class ci extends y {
        async save() {
            const {BlockManager: e, Tools: t} = this.Editor, o = e.blocks, i = [];
            try {
                o.forEach((a => {
                    i.push(this.getSavedData(a));
                }));
                const n = await Promise.all(i), r = await bt(n, (a => t.blockTools.get(a).sanitizeConfig));
                return this.makeOutput(r);
            } catch (n) {
                Y("Saving failed due to the Error %o", "error", n);
            }
        }
        async getSavedData(e) {
            const t = await e.save(), o = t && await e.validate(t.data);
            return {
                ...t,
                isValid: o
            };
        }
        makeOutput(e) {
            const t = [];
            return e.forEach((({id: o, tool: i, data: n, tunes: r, isValid: a}) => {
                if (!a) {
                    T(`Block «${i}» skipped because saved data is invalid`);
                    return;
                }
                if (i === this.Editor.Tools.stubTool) {
                    t.push(n);
                    return;
                }
                const l = {
                    id: o,
                    type: i,
                    data: n,
                    ...!W(r) && {
                        tunes: r
                    }
                };
                t.push(l);
            })), {
                time: +new Date,
                blocks: t,
                version: "2.29.0"
            };
        }
    }
    (function() {
        try {
            if (typeof document < "u") {
                var s = document.createElement("style");
                s.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-paragraph[data-placeholder]:empty:before{content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before{opacity:1}.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before,.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus:before{opacity:0}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), 
                document.head.appendChild(s);
            }
        } catch (e) {
            console.error("vite-plugin-css-injected-by-js", e);
        }
    })();
    const di = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
    /**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */    class Ke {
        static get DEFAULT_PLACEHOLDER() {
            return "";
        }
        constructor({data: e, config: t, api: o, readOnly: i}) {
            this.api = o, this.readOnly = i, this._CSS = {
                block: this.api.styles.block,
                wrapper: "ce-paragraph"
            }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : Ke.DEFAULT_PLACEHOLDER, 
            this._data = {}, this._element = null, this._preserveBlank = t.preserveBlank !== void 0 ? t.preserveBlank : !1, 
            this.data = e;
        }
        onKeyUp(e) {
            if (e.code !== "Backspace" && e.code !== "Delete") return;
            const {textContent: t} = this._element;
            t === "" && (this._element.innerHTML = "");
        }
        drawView() {
            const e = document.createElement("DIV");
            return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = !1, 
            e.dataset.placeholder = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), 
            this.readOnly || (e.contentEditable = !0, e.addEventListener("keyup", this.onKeyUp)), 
            e;
        }
        render() {
            return this._element = this.drawView(), this._element;
        }
        merge(e) {
            const t = {
                text: this.data.text + e.text
            };
            this.data = t;
        }
        validate(e) {
            return !(e.text.trim() === "" && !this._preserveBlank);
        }
        save(e) {
            return {
                text: e.innerHTML
            };
        }
        onPaste(e) {
            const t = {
                text: e.detail.data.innerHTML
            };
            this.data = t;
        }
        static get conversionConfig() {
            return {
                export: "text",
                import: "text"
            };
        }
        static get sanitize() {
            return {
                text: {
                    br: !0
                }
            };
        }
        static get isReadOnlySupported() {
            return !0;
        }
        get data() {
            if (this._element !== null) {
                const e = this._element.innerHTML;
                this._data.text = e;
            }
            return this._data;
        }
        set data(e) {
            this._data = e || {}, this._element !== null && this.hydrate();
        }
        hydrate() {
            window.requestAnimationFrame((() => {
                this._element.innerHTML = this._data.text || "";
            }));
        }
        static get pasteConfig() {
            return {
                tags: [ "P" ]
            };
        }
        static get toolbox() {
            return {
                icon: di,
                title: "Text"
            };
        }
    }
    class Xe {
        constructor() {
            this.commandName = "bold", this.CSS = {
                button: "ce-inline-tool",
                buttonActive: "ce-inline-tool--active",
                buttonModifier: "ce-inline-tool--bold"
            }, this.nodes = {
                button: void 0
            };
        }
        static get sanitize() {
            return {
                b: {}
            };
        }
        render() {
            return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", 
            this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = _o, 
            this.nodes.button;
        }
        surround() {
            document.execCommand(this.commandName);
        }
        checkState() {
            const e = document.queryCommandState(this.commandName);
            return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
        }
        get shortcut() {
            return "CMD+B";
        }
    }
    Xe.isInline = !0;
    Xe.title = "Bold";
    class Ve {
        constructor() {
            this.commandName = "italic", this.CSS = {
                button: "ce-inline-tool",
                buttonActive: "ce-inline-tool--active",
                buttonModifier: "ce-inline-tool--italic"
            }, this.nodes = {
                button: null
            };
        }
        static get sanitize() {
            return {
                i: {}
            };
        }
        render() {
            return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", 
            this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Do, 
            this.nodes.button;
        }
        surround() {
            document.execCommand(this.commandName);
        }
        checkState() {
            const e = document.queryCommandState(this.commandName);
            return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
        }
        get shortcut() {
            return "CMD+I";
        }
    }
    Ve.isInline = !0;
    Ve.title = "Italic";
    class qe {
        constructor({api: e}) {
            this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, 
            this.CSS = {
                button: "ce-inline-tool",
                buttonActive: "ce-inline-tool--active",
                buttonModifier: "ce-inline-tool--link",
                buttonUnlink: "ce-inline-tool--unlink",
                input: "ce-inline-tool-input",
                inputShowed: "ce-inline-tool-input--showed"
            }, this.nodes = {
                button: null,
                input: null
            }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, 
            this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new b;
        }
        static get sanitize() {
            return {
                a: {
                    href: !0,
                    target: "_blank",
                    rel: "nofollow"
                }
            };
        }
        render() {
            return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", 
            this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = it, 
            this.nodes.button;
        }
        renderActions() {
            return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), 
            this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e => {
                e.keyCode === this.ENTER_KEY && this.enterPressed(e);
            })), this.nodes.input;
        }
        surround(e) {
            if (e) {
                this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), 
                this.selection.save());
                const t = this.selection.findParentTag("A");
                if (t) {
                    this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), 
                    this.toolbar.close();
                    return;
                }
            }
            this.toggleActions();
        }
        checkState() {
            const e = this.selection.findParentTag("A");
            if (e) {
                this.nodes.button.innerHTML = zo, this.nodes.button.classList.add(this.CSS.buttonUnlink), 
                this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
                const t = e.getAttribute("href");
                this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
            } else this.nodes.button.innerHTML = it, this.nodes.button.classList.remove(this.CSS.buttonUnlink), 
            this.nodes.button.classList.remove(this.CSS.buttonActive);
            return !!e;
        }
        clear() {
            this.closeActions();
        }
        get shortcut() {
            return "CMD+K";
        }
        toggleActions() {
            this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
        }
        openActions(e = !1) {
            this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), 
            this.inputOpened = !0;
        }
        closeActions(e = !0) {
            if (this.selection.isFakeBackgroundEnabled) {
                const t = new b;
                t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
            }
            this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", 
            e && this.selection.clearSaved(), this.inputOpened = !1;
        }
        enterPressed(e) {
            let t = this.nodes.input.value || "";
            if (!t.trim()) {
                this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
                return;
            }
            if (!this.validateURL(t)) {
                this.notifier.show({
                    message: "Pasted link is not valid.",
                    style: "error"
                }), T("Incorrect Link pasted", "warn", t);
                return;
            }
            t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), 
            this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), 
            this.selection.collapseToEnd(), this.inlineToolbar.close();
        }
        validateURL(e) {
            return !/\s/.test(e);
        }
        prepareLink(e) {
            return e = e.trim(), e = this.addProtocol(e), e;
        }
        addProtocol(e) {
            if (/^(\w+):(\/\/)?/.test(e)) return e;
            const t = /^\/[^/\s]/.test(e), o = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
            return !t && !o && !i && (e = "http://" + e), e;
        }
        insertLink(e) {
            const t = this.selection.findParentTag("A");
            t && this.selection.expandToTag(t), document.execCommand(this.commandLink, !1, e);
        }
        unlink() {
            document.execCommand(this.commandUnlink);
        }
    }
    qe.isInline = !0;
    qe.title = "Link";
    class St {
        constructor({data: e, api: t}) {
            this.CSS = {
                wrapper: "ce-stub",
                info: "ce-stub__info",
                title: "ce-stub__title",
                subtitle: "ce-stub__subtitle"
            }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), 
            this.savedData = e.savedData, this.wrapper = this.make();
        }
        render() {
            return this.wrapper;
        }
        save() {
            return this.savedData;
        }
        make() {
            const e = c.make("div", this.CSS.wrapper), t = Uo, o = c.make("div", this.CSS.info), i = c.make("div", this.CSS.title, {
                textContent: this.title
            }), n = c.make("div", this.CSS.subtitle, {
                textContent: this.subtitle
            });
            return e.innerHTML = t, o.appendChild(i), o.appendChild(n), e.appendChild(o), e;
        }
    }
    St.isReadOnlySupported = !0;
    class hi extends Ye {
        constructor() {
            super(...arguments), this.type = Be.Inline;
        }
        get title() {
            return this.constructable[We.Title];
        }
        create() {
            return new this.constructable({
                api: this.api.getMethodsForTool(this),
                config: this.settings
            });
        }
    }
    class ui extends Ye {
        constructor() {
            super(...arguments), this.type = Be.Tune;
        }
        create(e, t) {
            return new this.constructable({
                api: this.api.getMethodsForTool(this),
                config: this.settings,
                block: t,
                data: e
            });
        }
    }
    class P extends Map {
        get blockTools() {
            const e = Array.from(this.entries()).filter((([, t]) => t.isBlock()));
            return new P(e);
        }
        get inlineTools() {
            const e = Array.from(this.entries()).filter((([, t]) => t.isInline()));
            return new P(e);
        }
        get blockTunes() {
            const e = Array.from(this.entries()).filter((([, t]) => t.isTune()));
            return new P(e);
        }
        get internalTools() {
            const e = Array.from(this.entries()).filter((([, t]) => t.isInternal));
            return new P(e);
        }
        get externalTools() {
            const e = Array.from(this.entries()).filter((([, t]) => !t.isInternal));
            return new P(e);
        }
    }
    var pi = Object.defineProperty, fi = Object.getOwnPropertyDescriptor, It = (s, e, t, o) => {
        for (var r, i = o > 1 ? void 0 : o ? fi(e, t) : e, n = s.length - 1; n >= 0; n--) (r = s[n]) && (i = (o ? r(e, t, i) : r(i)) || i);
        return o && i && pi(e, t, i), i;
    };
    class Ze extends Ye {
        constructor() {
            super(...arguments), this.type = Be.Block, this.inlineTools = new P, this.tunes = new P;
        }
        create(e, t, o) {
            return new this.constructable({
                data: e,
                block: t,
                readOnly: o,
                api: this.api.getMethodsForTool(this),
                config: this.settings
            });
        }
        get isReadOnlySupported() {
            return this.constructable[se.IsReadOnlySupported] === !0;
        }
        get isLineBreaksEnabled() {
            return this.constructable[se.IsEnabledLineBreaks];
        }
        get toolbox() {
            const e = this.constructable[se.Toolbox], t = this.config[ve.Toolbox];
            if (!W(e) && t !== !1) return t ? Array.isArray(e) ? Array.isArray(t) ? t.map(((o, i) => {
                const n = e[i];
                return n ? {
                    ...n,
                    ...o
                } : o;
            })) : [ t ] : Array.isArray(t) ? t : [ {
                ...e,
                ...t
            } ] : Array.isArray(e) ? e : [ e ];
        }
        get conversionConfig() {
            return this.constructable[se.ConversionConfig];
        }
        get enabledInlineTools() {
            return this.config[ve.EnabledInlineTools] || !1;
        }
        get enabledBlockTunes() {
            return this.config[ve.EnabledBlockTunes];
        }
        get pasteConfig() {
            return this.constructable[se.PasteConfig] ?? {};
        }
        get sanitizeConfig() {
            const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
            if (W(e)) return t;
            const o = {};
            for (const i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
                const n = e[i];
                D(n) ? o[i] = Object.assign({}, t, n) : o[i] = n;
            }
            return o;
        }
        get baseSanitizeConfig() {
            const e = {};
            return Array.from(this.inlineTools.values()).forEach((t => Object.assign(e, t.sanitizeConfig))), 
            Array.from(this.tunes.values()).forEach((t => Object.assign(e, t.sanitizeConfig))), 
            e;
        }
    }
    It([ le ], Ze.prototype, "sanitizeConfig", 1);
    It([ le ], Ze.prototype, "baseSanitizeConfig", 1);
    class gi {
        constructor(e, t, o) {
            this.api = o, this.config = e, this.editorConfig = t;
        }
        get(e) {
            const {class: t, isInternal: o = !1, ...i} = this.config[e], n = this.getConstructor(t);
            return new n({
                name: e,
                constructable: t,
                config: i,
                api: this.api,
                isDefault: e === this.editorConfig.defaultBlock,
                defaultPlaceholder: this.editorConfig.placeholder,
                isInternal: o
            });
        }
        getConstructor(e) {
            switch (!0) {
              case e[We.IsInline]:
                return hi;

              case e[Bt.IsTune]:
                return ui;

              default:
                return Ze;
            }
        }
    }
    class Mt {
        constructor({api: e}) {
            this.CSS = {
                animation: "wobble"
            }, this.api = e;
        }
        render() {
            return {
                icon: kt,
                title: this.api.i18n.t("Move down"),
                onActivate: () => this.handleClick(),
                name: "move-down"
            };
        }
        handleClick() {
            const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
            if (!t) throw new Error("Unable to move Block down since it is already the last");
            const o = t.holder, i = o.getBoundingClientRect();
            let n = Math.abs(window.innerHeight - o.offsetHeight);
            i.top < window.innerHeight && (n = window.scrollY + o.offsetHeight), window.scrollTo(0, n), 
            this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
        }
    }
    Mt.isTune = !0;
    class Lt {
        constructor({api: e}) {
            this.api = e;
        }
        render() {
            return {
                icon: No,
                title: this.api.i18n.t("Delete"),
                name: "delete",
                confirmation: {
                    title: this.api.i18n.t("Click to delete"),
                    onActivate: () => this.handleClick()
                }
            };
        }
        handleClick() {
            this.api.blocks.delete();
        }
    }
    Lt.isTune = !0;
    class At {
        constructor({api: e}) {
            this.CSS = {
                animation: "wobble"
            }, this.api = e;
        }
        render() {
            return {
                icon: Oo,
                title: this.api.i18n.t("Move up"),
                onActivate: () => this.handleClick(),
                name: "move-up"
            };
        }
        handleClick() {
            const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o = this.api.blocks.getBlockByIndex(e - 1);
            if (e === 0 || !t || !o) throw new Error("Unable to move Block up since it is already the first");
            const i = t.holder, n = o.holder, r = i.getBoundingClientRect(), a = n.getBoundingClientRect();
            let l;
            a.top > 0 ? l = Math.abs(r.top) - Math.abs(a.top) : l = Math.abs(r.top) + a.height, 
            window.scrollBy(0, -1 * l), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
        }
    }
    At.isTune = !0;
    var bi = Object.defineProperty, mi = Object.getOwnPropertyDescriptor, ki = (s, e, t, o) => {
        for (var r, i = o > 1 ? void 0 : o ? mi(e, t) : e, n = s.length - 1; n >= 0; n--) (r = s[n]) && (i = (o ? r(e, t, i) : r(i)) || i);
        return o && i && bi(e, t, i), i;
    };
    class _t extends y {
        constructor() {
            super(...arguments), this.stubTool = "stub", this.toolsAvailable = new P, this.toolsUnavailable = new P;
        }
        get available() {
            return this.toolsAvailable;
        }
        get unavailable() {
            return this.toolsUnavailable;
        }
        get inlineTools() {
            return this.available.inlineTools;
        }
        get blockTools() {
            return this.available.blockTools;
        }
        get blockTunes() {
            return this.available.blockTunes;
        }
        get defaultTool() {
            return this.blockTools.get(this.config.defaultBlock);
        }
        get internal() {
            return this.available.internalTools;
        }
        async prepare() {
            if (this.validateTools(), this.config.tools = Me({}, this.internalTools, this.config.tools), 
            !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0) throw Error("Can't start without tools");
            const e = this.prepareConfig();
            this.factory = new gi(e, this.config, this.Editor.API);
            const t = this.getListOfPrepareFunctions(e);
            if (t.length === 0) return Promise.resolve();
            await zt(t, (o => {
                this.toolPrepareMethodSuccess(o);
            }), (o => {
                this.toolPrepareMethodFallback(o);
            })), this.prepareBlockTools();
        }
        getAllInlineToolsSanitizeConfig() {
            const e = {};
            return Array.from(this.inlineTools.values()).forEach((t => {
                Object.assign(e, t.sanitizeConfig);
            })), e;
        }
        destroy() {
            Object.values(this.available).forEach((async e => {
                M(e.reset) && await e.reset();
            }));
        }
        get internalTools() {
            return {
                bold: {
                    class: Xe,
                    isInternal: !0
                },
                italic: {
                    class: Ve,
                    isInternal: !0
                },
                link: {
                    class: qe,
                    isInternal: !0
                },
                paragraph: {
                    class: Ke,
                    inlineToolbar: !0,
                    isInternal: !0
                },
                stub: {
                    class: St,
                    isInternal: !0
                },
                moveUp: {
                    class: At,
                    isInternal: !0
                },
                delete: {
                    class: Lt,
                    isInternal: !0
                },
                moveDown: {
                    class: Mt,
                    isInternal: !0
                }
            };
        }
        toolPrepareMethodSuccess(e) {
            const t = this.factory.get(e.toolName);
            if (t.isInline()) {
                const i = [ "render", "surround", "checkState" ].filter((n => !t.create()[n]));
                if (i.length) {
                    T(`Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`, "warn", i), 
                    this.toolsUnavailable.set(t.name, t);
                    return;
                }
            }
            this.toolsAvailable.set(t.name, t);
        }
        toolPrepareMethodFallback(e) {
            this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
        }
        getListOfPrepareFunctions(e) {
            const t = [];
            return Object.entries(e).forEach((([o, i]) => {
                t.push({
                    function: M(i.class.prepare) ? i.class.prepare : () => {},
                    data: {
                        toolName: o,
                        config: i.config
                    }
                });
            })), t;
        }
        prepareBlockTools() {
            Array.from(this.blockTools.values()).forEach((e => {
                this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
            }));
        }
        assignInlineToolsToBlockTool(e) {
            if (this.config.inlineToolbar !== !1) {
                if (e.enabledInlineTools === !0) {
                    e.inlineTools = new P(Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t => [ t, this.inlineTools.get(t) ])) : Array.from(this.inlineTools.entries()));
                    return;
                }
                Array.isArray(e.enabledInlineTools) && (e.inlineTools = new P(e.enabledInlineTools.map((t => [ t, this.inlineTools.get(t) ]))));
            }
        }
        assignBlockTunesToBlockTool(e) {
            if (e.enabledBlockTunes !== !1) {
                if (Array.isArray(e.enabledBlockTunes)) {
                    const t = new P(e.enabledBlockTunes.map((o => [ o, this.blockTunes.get(o) ])));
                    e.tunes = new P([ ...t, ...this.blockTunes.internalTools ]);
                    return;
                }
                if (Array.isArray(this.config.tunes)) {
                    const t = new P(this.config.tunes.map((o => [ o, this.blockTunes.get(o) ])));
                    e.tunes = new P([ ...t, ...this.blockTunes.internalTools ]);
                    return;
                }
                e.tunes = this.blockTunes.internalTools;
            }
        }
        validateTools() {
            for (const e in this.config.tools) if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
                if (e in this.internalTools) return;
                const t = this.config.tools[e];
                if (!M(t) && !M(t.class)) throw Error(`Tool «${e}» must be a constructor function or an object with function in the «class» property`);
            }
        }
        prepareConfig() {
            const e = {};
            for (const t in this.config.tools) D(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = {
                class: this.config.tools[t]
            };
            return e;
        }
    }
    ki([ le ], _t.prototype, "getAllInlineToolsSanitizeConfig", 1);
    const vi = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;border-radius:0;line-height:normal}.ce-inline-tool svg{width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#eff2f5}}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48);-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:190px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px #c9c9cc7a;border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-conversion-tool__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-conversion-tool__icon{width:36px;height:36px;border-radius:8px}.ce-conversion-tool__icon svg{width:28px;height:28px}}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important}.ce-conversion-tool--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-conversion-tool__secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-conversion-tool__secondary-label{display:none}}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;line-height:32px}.ce-settings__button svg{width:20px;height:20px}@media (max-width: 650px){.ce-settings__button svg{width:28px;height:28px}}@media (hover: hover){.ce-settings__button:hover{background-color:#eff2f5}}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{background:rgba(34,186,255,.08)!important}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button--disabled{cursor:not-allowed!important}.ce-settings__button--disabled{opacity:.3}.ce-settings__button--selected{color:#388ae5}@media (min-width: 651px){.codex-editor--narrow .ce-settings .ce-popover{right:0;left:auto;left:initial}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button svg{width:20px;height:20px}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0px;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #e8e8eb;--color-shadow: rgba(13,20,33,.13);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #eff2f5;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:0;top:calc(100% + var(--offset-from-target));background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}.ce-popover--open-top{top:calc(-1 * (var(--offset-from-target) + var(--popover-height)))}@media (max-width: 650px){.ce-popover{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}.ce-popover .ce-popover__search{display:none}}.ce-popover__search,.ce-popover__custom-content:not(:empty){margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover__custom-content:not(:empty){padding:4px}@media (min-width: 651px){.ce-popover__custom-content:not(:empty){padding:0}}.ce-popover__custom-content--hidden{display:none}.ce-popover-item{--border-radius: 6px;--icon-size: 20px;--icon-size-mobile: 28px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px;color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{border-radius:5px;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px var(--color-border-icon);box-shadow:0 0 0 1px var(--color-border-icon);background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:var(--icon-size-mobile);height:var(--icon-size-mobile)}}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--active .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--disabled .ce-popover-item__icon{-webkit-box-shadow:0 0 0 1px var(--color-border-icon-disabled);box-shadow:0 0 0 1px var(--color-border-icon-disabled)}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--focused:not(.ce-popover-item--no-focus){-webkit-box-shadow:inset 0 0 0px 1px var(--color-shadow-item-focus);box-shadow:inset 0 0 0 1px var(--color-shadow-item-focus)}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}.ce-popover-item:hover .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__icon{color:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}.ce-popover-item--confirmation .ce-popover-item__icon,.ce-popover-item--active .ce-popover-item__icon,.ce-popover-item--focused .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}\n`;
    class xi extends y {
        constructor() {
            super(...arguments), this.isMobile = !1, this.contentRectCache = void 0, this.resizeDebouncer = et((() => {
                this.windowResize();
            }), 200);
        }
        get CSS() {
            return {
                editorWrapper: "codex-editor",
                editorWrapperNarrow: "codex-editor--narrow",
                editorZone: "codex-editor__redactor",
                editorZoneHidden: "codex-editor__redactor--hidden",
                editorEmpty: "codex-editor--empty",
                editorRtlFix: "codex-editor--rtl"
            };
        }
        get contentRect() {
            if (this.contentRectCache) return this.contentRectCache;
            const e = this.nodes.wrapper.querySelector(`.${R.CSS.content}`);
            return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
                width: 650,
                left: 0,
                right: 0
            };
        }
        async prepare() {
            this.checkIsMobile(), this.make(), this.loadStyles();
        }
        toggleReadOnly(e) {
            e ? this.disableModuleBindings() : window.requestIdleCallback((() => {
                this.enableModuleBindings();
            }), {
                timeout: 2e3
            });
        }
        checkEmptiness() {
            const {BlockManager: e} = this.Editor;
            this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
        }
        get someToolbarOpened() {
            const {Toolbar: e, BlockSettings: t, InlineToolbar: o, ConversionToolbar: i} = this.Editor;
            return t.opened || o.opened || i.opened || e.toolbox.opened;
        }
        get someFlipperButtonFocused() {
            return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter((([e, t]) => t.flipper instanceof q)).some((([e, t]) => t.flipper.hasFocus()));
        }
        destroy() {
            this.nodes.holder.innerHTML = "";
        }
        closeAllToolbars() {
            const {Toolbar: e, BlockSettings: t, InlineToolbar: o, ConversionToolbar: i} = this.Editor;
            t.close(), o.close(), i.close(), e.toolbox.close();
        }
        checkIsMobile() {
            this.isMobile = window.innerWidth < dt;
        }
        make() {
            this.nodes.holder = c.getHolder(this.config.holder), this.nodes.wrapper = c.make("div", [ this.CSS.editorWrapper, ...this.isRtl ? [ this.CSS.editorRtlFix ] : [] ]), 
            this.nodes.redactor = c.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), 
            this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), 
            this.nodes.holder.appendChild(this.nodes.wrapper);
        }
        loadStyles() {
            const e = "editor-js-styles";
            if (c.get(e)) return;
            const t = c.make("style", null, {
                id: e,
                textContent: vi.toString()
            });
            this.config.style && !W(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), 
            c.prepend(document.head, t);
        }
        enableModuleBindings() {
            this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (o => {
                this.redactorClicked(o);
            }), !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (o => {
                this.documentTouched(o);
            }), {
                capture: !0,
                passive: !0
            }), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (o => {
                this.documentTouched(o);
            }), {
                capture: !0,
                passive: !0
            }), this.readOnlyMutableListeners.on(document, "keydown", (o => {
                this.documentKeydown(o);
            }), !0), this.readOnlyMutableListeners.on(document, "mousedown", (o => {
                this.documentClicked(o);
            }), !0);
            const t = et((() => {
                this.selectionChanged();
            }), 180);
            this.readOnlyMutableListeners.on(document, "selectionchange", t, !0), this.readOnlyMutableListeners.on(window, "resize", (() => {
                this.resizeDebouncer();
            }), {
                passive: !0
            }), this.watchBlockHoveredEvents();
        }
        watchBlockHoveredEvents() {
            let e;
            this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", Ie((t => {
                const o = t.target.closest(".ce-block");
                this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(yt, {
                    block: this.Editor.BlockManager.getBlockByChildNode(o)
                }));
            }), 20), {
                passive: !0
            });
        }
        disableModuleBindings() {
            this.readOnlyMutableListeners.clearAll();
        }
        windowResize() {
            this.contentRectCache = null, this.checkIsMobile();
        }
        documentKeydown(e) {
            switch (e.keyCode) {
              case k.ENTER:
                this.enterPressed(e);
                break;

              case k.BACKSPACE:
              case k.DELETE:
                this.backspacePressed(e);
                break;

              case k.ESC:
                this.escapePressed(e);
                break;

              default:
                this.defaultBehaviour(e);
                break;
            }
        }
        defaultBehaviour(e) {
            const {currentBlock: t} = this.Editor.BlockManager, o = e.target.closest(`.${this.CSS.editorWrapper}`), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
            if (t !== void 0 && o === null) {
                this.Editor.BlockEvents.keydown(e);
                return;
            }
            o || t && i || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
        }
        backspacePressed(e) {
            const {BlockManager: t, BlockSelection: o, Caret: i} = this.Editor;
            if (o.anyBlockSelected && !b.isSelectionExists) {
                const n = t.removeSelectedBlocks(), r = t.insertDefaultBlockAtIndex(n, !0);
                i.setToBlock(r, i.positions.START), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), 
                e.stopImmediatePropagation();
            }
        }
        escapePressed(e) {
            this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), 
            this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
        }
        enterPressed(e) {
            const {BlockManager: t, BlockSelection: o} = this.Editor, i = t.currentBlockIndex >= 0;
            if (o.anyBlockSelected && !b.isSelectionExists) {
                o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
                return;
            }
            if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
                const n = this.Editor.BlockManager.insert();
                this.Editor.Caret.setToBlock(n), this.Editor.Toolbar.moveAndOpen(n);
            }
            this.Editor.BlockSelection.clearSelection(e);
        }
        documentClicked(e) {
            var a, l;
            if (!e.isTrusted) return;
            const t = e.target;
            this.nodes.holder.contains(t) || b.isAtEditor || (this.Editor.BlockManager.dropPointer(), 
            this.Editor.Toolbar.close());
            const i = (a = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : a.contains(t), n = (l = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : l.contains(t), r = i || n;
            if (this.Editor.BlockSettings.opened && !r) {
                this.Editor.BlockSettings.close();
                const d = this.Editor.BlockManager.getBlockByChildNode(t);
                this.Editor.Toolbar.moveAndOpen(d);
            }
            this.Editor.BlockSelection.clearSelection(e);
        }
        documentTouched(e) {
            let t = e.target;
            if (t === this.nodes.redactor) {
                const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
                t = document.elementFromPoint(o, i);
            }
            try {
                this.Editor.BlockManager.setCurrentBlockByChildNode(t);
            } catch {
                this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
            }
            this.Editor.Toolbar.moveAndOpen();
        }
        redactorClicked(e) {
            if (!b.isCollapsed) return;
            const t = e.target, o = e.metaKey || e.ctrlKey;
            if (c.isAnchor(t) && o) {
                e.stopImmediatePropagation(), e.stopPropagation();
                const i = t.getAttribute("href"), n = Wt(i);
                Kt(n);
                return;
            }
            this.processBottomZoneClick(e);
        }
        processBottomZoneClick(e) {
            const t = this.Editor.BlockManager.getBlockByIndex(-1), o = c.offset(t.holder).bottom, i = e.pageY, {BlockSelection: n} = this.Editor;
            if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && !n.anyBlockSelected && o < i) {
                e.stopImmediatePropagation(), e.stopPropagation();
                const {BlockManager: a, Caret: l, Toolbar: d} = this.Editor;
                (!a.lastBlock.tool.isDefault || !a.lastBlock.isEmpty) && a.insertAtEnd(), l.setToTheLastBlock(), 
                d.moveAndOpen(a.lastBlock);
            }
        }
        selectionChanged() {
            const {CrossBlockSelection: e, BlockSelection: t} = this.Editor, o = b.anchorElement;
            if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && b.get().removeAllRanges(), 
            !o) {
                b.range || this.Editor.InlineToolbar.close();
                return;
            }
            const i = o.closest(`.${R.CSS.content}`) === null;
            if (i && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), 
            !(o.dataset.inlineToolbar === "true"))) return;
            this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o);
            const n = i !== !0;
            this.Editor.InlineToolbar.tryToShow(!0, n);
        }
    }
    const wi = {
        BlocksAPI: oo,
        CaretAPI: io,
        EventsAPI: no,
        I18nAPI: He,
        API: so,
        InlineToolbarAPI: ro,
        ListenersAPI: ao,
        NotifierAPI: uo,
        ReadOnlyAPI: po,
        SanitizerAPI: xo,
        SaverAPI: wo,
        SelectionAPI: yo,
        StylesAPI: Eo,
        ToolbarAPI: Bo,
        TooltipAPI: Mo,
        UiAPI: Lo,
        BlockSettings: Yo,
        ConversionToolbar: $,
        Toolbar: Go,
        InlineToolbar: Jo,
        BlockEvents: Qo,
        BlockManager: oi,
        BlockSelection: ii,
        Caret: we,
        CrossBlockSelection: ni,
        DragNDrop: si,
        ModificationsObserver: ri,
        Paste: Tt,
        ReadOnly: ai,
        RectangleSelection: fe,
        Renderer: li,
        Saver: ci,
        Tools: _t,
        UI: xi
    };
    class yi {
        constructor(e) {
            this.moduleInstances = {}, this.eventsDispatcher = new Ee;
            let t, o;
            this.isReady = new Promise(((i, n) => {
                t = i, o = n;
            })), Promise.resolve().then((async () => {
                this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
                const {BlockManager: i, Caret: n, UI: r, ModificationsObserver: a} = this.moduleInstances;
                r.checkEmptiness(), a.enable(), this.configuration.autofocus && n.setToBlock(i.blocks[0], n.positions.START), 
                t();
            })).catch((i => {
                T(`Editor.js is not ready because of ${i}`, "error"), o(i);
            }));
        }
        set configuration(e) {
            var o, i;
            D(e) ? this.config = {
                ...e
            } : this.config = {
                holder: e
            }, Le(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, 
            this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), 
            this.config.logLevel || (this.config.logLevel = at.VERBOSE), Ft(this.config.logLevel), 
            Le(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", 
            this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
            const t = {
                type: this.config.defaultBlock,
                data: {}
            };
            this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
                p: !0,
                b: !0,
                a: !0
            }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, 
            this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, 
            this.config.data = this.config.data || {
                blocks: []
            }, this.config.onReady = this.config.onReady || (() => {}), this.config.onChange = this.config.onChange || (() => {}), 
            this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, 
            (W(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = {
                blocks: [ t ]
            }), this.config.readOnly = this.config.readOnly || !1, (o = this.config.i18n) != null && o.messages && z.setDictionary(this.config.i18n.messages), 
            this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
        }
        get configuration() {
            return this.config;
        }
        validate() {
            const {holderId: e, holder: t} = this.config;
            if (e && t) throw Error("«holderId» and «holder» param can't assign at the same time.");
            if (G(t) && !c.get(t)) throw Error(`element with ID «${t}» is missing. Pass correct holder's ID.`);
            if (t && D(t) && !c.isElement(t)) throw Error("«holder» value must be an Element node");
        }
        init() {
            this.constructModules(), this.configureModules();
        }
        async start() {
            await [ "Tools", "UI", "BlockManager", "Paste", "BlockSelection", "RectangleSelection", "CrossBlockSelection", "ReadOnly" ].reduce(((t, o) => t.then((async () => {
                try {
                    await this.moduleInstances[o].prepare();
                } catch (i) {
                    if (i instanceof ut) throw new Error(i.message);
                    T(`Module ${o} was skipped because of %o`, "warn", i);
                }
            }))), Promise.resolve());
        }
        render() {
            return this.moduleInstances.Renderer.render(this.config.data.blocks);
        }
        constructModules() {
            Object.entries(wi).forEach((([e, t]) => {
                try {
                    this.moduleInstances[e] = new t({
                        config: this.configuration,
                        eventsDispatcher: this.eventsDispatcher
                    });
                } catch (o) {
                    T("[constructModules]", `Module ${e} skipped because`, "error", o);
                }
            }));
        }
        configureModules() {
            for (const e in this.moduleInstances) Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
        }
        getModulesDiff(e) {
            const t = {};
            for (const o in this.moduleInstances) o !== e && (t[o] = this.moduleInstances[o]);
            return t;
        }
    }
    /**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */    class Ei {
        static get version() {
            return "2.29.0";
        }
        constructor(e) {
            let t = () => {};
            D(e) && M(e.onReady) && (t = e.onReady);
            const o = new yi(e);
            this.isReady = o.isReady.then((() => {
                this.exportAPI(o), t();
            }));
        }
        exportAPI(e) {
            const t = [ "configuration" ], o = () => {
                Object.values(e.moduleInstances).forEach((n => {
                    M(n.destroy) && n.destroy(), n.listeners.removeAll();
                })), Io(), e = null;
                for (const n in this) Object.prototype.hasOwnProperty.call(this, n) && delete this[n];
                Object.setPrototypeOf(this, null);
            };
            t.forEach((n => {
                this[n] = e[n];
            })), this.destroy = o, Object.setPrototypeOf(this, e.moduleInstances.API.methods), 
            delete this.exportAPI, Object.entries({
                blocks: {
                    clear: "clear",
                    render: "render"
                },
                caret: {
                    focus: "focus"
                },
                events: {
                    on: "on",
                    off: "off",
                    emit: "emit"
                },
                saver: {
                    save: "save"
                }
            }).forEach((([n, r]) => {
                Object.entries(r).forEach((([a, l]) => {
                    this[l] = e.moduleInstances.API.methods[n][a];
                }));
            }));
        }
    }
    (function() {
        "use strict";
        try {
            if (typeof document < "u") {
                var e = document.createElement("style");
                e.appendChild(document.createTextNode(".ce-rawtool__textarea{min-height:200px;resize:vertical;border-radius:8px;border:0;background-color:#1e2128;font-family:Menlo,Monaco,Consolas,Courier New,monospace;font-size:12px;line-height:1.6;letter-spacing:-.2px;color:#a1a7b6;overscroll-behavior:contain}")), 
                document.head.appendChild(e);
            }
        } catch (o) {
            console.error("vite-plugin-css-injected-by-js", o);
        }
    })();
    const a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>';
    /**
 * Raw HTML Tool for CodeX Editor
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */    class r {
        static get isReadOnlySupported() {
            return !0;
        }
        static get displayInToolbox() {
            return !0;
        }
        static get enableLineBreaks() {
            return !0;
        }
        static get toolbox() {
            return {
                icon: a,
                title: "Raw HTML"
            };
        }
        constructor({data: t, config: e, api: s, readOnly: i}) {
            this.api = s, this.readOnly = i, this.placeholder = e.placeholder || r.DEFAULT_PLACEHOLDER, 
            this.CSS = {
                baseClass: this.api.styles.block,
                input: this.api.styles.input,
                wrapper: "ce-rawtool",
                textarea: "ce-rawtool__textarea"
            }, this.data = {
                html: t.html || ""
            }, this.textarea = null, this.resizeDebounce = null;
        }
        render() {
            const t = document.createElement("div"), e = 100;
            return this.textarea = document.createElement("textarea"), t.classList.add(this.CSS.baseClass, this.CSS.wrapper), 
            this.textarea.classList.add(this.CSS.textarea, this.CSS.input), this.textarea.textContent = this.data.html, 
            this.textarea.placeholder = this.placeholder, this.readOnly ? this.textarea.disabled = !0 : this.textarea.addEventListener("input", (() => {
                this.onInput();
            })), t.appendChild(this.textarea), setTimeout((() => {
                this.resize();
            }), e), t;
        }
        save(t) {
            return {
                html: t.querySelector("textarea").value
            };
        }
        static get DEFAULT_PLACEHOLDER() {
            return "Enter HTML code";
        }
        static get sanitize() {
            return {
                html: !0
            };
        }
        onInput() {
            this.resizeDebounce && clearTimeout(this.resizeDebounce), this.resizeDebounce = setTimeout((() => {
                this.resize();
            }), 200);
        }
        resize() {
            this.textarea.style.height = "auto", this.textarea.style.height = this.textarea.scrollHeight + "px";
        }
    }
    (function() {
        "use strict";
        try {
            if (typeof document < "u") {
                var e = document.createElement("style");
                e.appendChild(document.createTextNode(".cdx-simple-image .cdx-loader{min-height:200px}.cdx-simple-image .cdx-input{margin-top:10px}.cdx-simple-image img{max-width:100%;vertical-align:bottom}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-simple-image__picture--with-background{background:#eff2f5;padding:10px}.cdx-simple-image__picture--with-background img{display:block;max-width:60%;margin:0 auto}.cdx-simple-image__picture--with-border{border:1px solid #e8e8eb;padding:1px}.cdx-simple-image__picture--stretched img{max-width:none;width:100%}")), 
                document.head.appendChild(e);
            }
        } catch (t) {
            console.error("vite-plugin-css-injected-by-js", t);
        }
    })();
    const s = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', simple_image_a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
    class h {
        constructor({data: t, config: e, api: r, readOnly: o}) {
            this.api = r, this.readOnly = o, this.blockIndex = this.api.blocks.getCurrentBlockIndex() + 1, 
            this.CSS = {
                baseClass: this.api.styles.block,
                loading: this.api.styles.loader,
                input: this.api.styles.input,
                wrapper: "cdx-simple-image",
                imageHolder: "cdx-simple-image__picture",
                caption: "cdx-simple-image__caption"
            }, this.nodes = {
                wrapper: null,
                imageHolder: null,
                image: null,
                caption: null
            }, this.data = {
                url: t.url || "",
                caption: t.caption || "",
                withBorder: t.withBorder !== void 0 ? t.withBorder : !1,
                withBackground: t.withBackground !== void 0 ? t.withBackground : !1,
                stretched: t.stretched !== void 0 ? t.stretched : !1
            }, this.tunes = [ {
                name: "withBorder",
                label: "Add Border",
                icon: simple_image_a
            }, {
                name: "stretched",
                label: "Stretch Image",
                icon: d
            }, {
                name: "withBackground",
                label: "Add Background",
                icon: s
            } ];
        }
        render() {
            const t = this._make("div", [ this.CSS.baseClass, this.CSS.wrapper ]), e = this._make("div", this.CSS.loading), r = this._make("div", this.CSS.imageHolder), o = this._make("img"), i = this._make("div", [ this.CSS.input, this.CSS.caption ], {
                contentEditable: !this.readOnly,
                innerHTML: this.data.caption || ""
            });
            return i.dataset.placeholder = "Enter a caption", t.appendChild(e), this.data.url && (o.src = this.data.url), 
            o.onload = () => {
                t.classList.remove(this.CSS.loading), r.appendChild(o), t.appendChild(r), t.appendChild(i), 
                e.remove(), this._acceptTuneView();
            }, o.onerror = n => {
                console.log("Failed to load an image", n);
            }, this.nodes.imageHolder = r, this.nodes.wrapper = t, this.nodes.image = o, this.nodes.caption = i, 
            t;
        }
        save(t) {
            const e = t.querySelector("img"), r = t.querySelector("." + this.CSS.input);
            return e ? Object.assign(this.data, {
                url: e.src,
                caption: r.innerHTML
            }) : this.data;
        }
        static get sanitize() {
            return {
                url: {},
                withBorder: {},
                withBackground: {},
                stretched: {},
                caption: {
                    br: !0
                }
            };
        }
        static get isReadOnlySupported() {
            return !0;
        }
        onDropHandler(t) {
            const e = new FileReader;
            return e.readAsDataURL(t), new Promise((r => {
                e.onload = o => {
                    r({
                        url: o.target.result,
                        caption: t.name
                    });
                };
            }));
        }
        onPaste(t) {
            switch (t.type) {
              case "tag":
                {
                    const e = t.detail.data;
                    this.data = {
                        url: e.src
                    };
                    break;
                }

              case "pattern":
                {
                    const {data: e} = t.detail;
                    this.data = {
                        url: e
                    };
                    break;
                }

              case "file":
                {
                    const {file: e} = t.detail;
                    this.onDropHandler(e).then((r => {
                        this.data = r;
                    }));
                    break;
                }
            }
        }
        get data() {
            return this._data;
        }
        set data(t) {
            this._data = Object.assign({}, this.data, t), this.nodes.image && (this.nodes.image.src = this.data.url), 
            this.nodes.caption && (this.nodes.caption.innerHTML = this.data.caption);
        }
        static get pasteConfig() {
            return {
                patterns: {
                    image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|webp)$/i
                },
                tags: [ {
                    img: {
                        src: !0
                    }
                } ],
                files: {
                    mimeTypes: [ "image/*" ]
                }
            };
        }
        renderSettings() {
            return this.tunes.map((t => ({
                ...t,
                label: this.api.i18n.t(t.label),
                toggle: !0,
                onActivate: () => this._toggleTune(t.name),
                isActive: !!this.data[t.name]
            })));
        }
        _make(t, e = null, r = {}) {
            const o = document.createElement(t);
            Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
            for (const i in r) o[i] = r[i];
            return o;
        }
        _toggleTune(t) {
            this.data[t] = !this.data[t], this._acceptTuneView();
        }
        _acceptTuneView() {
            this.tunes.forEach((t => {
                this.nodes.imageHolder.classList.toggle(this.CSS.imageHolder + "--" + t.name.replace(/([A-Z])/g, (e => `-${e[0].toLowerCase()}`)), !!this.data[t.name]), 
                t.name === "stretched" && this.api.blocks.stretchBlock(this.blockIndex, !!this.data.stretched);
            }));
        }
    }
    (function() {
        "use strict";
        try {
            if (typeof document < "u") {
                var e = document.createElement("style");
                e.appendChild(document.createTextNode('.cdx-nested-list{margin:0;padding:0;outline:none;counter-reset:item;list-style:none}.cdx-nested-list__item{line-height:1.6em;display:flex;margin:2px 0}.cdx-nested-list__item [contenteditable]{outline:none}.cdx-nested-list__item-body{flex-grow:2}.cdx-nested-list__item-content,.cdx-nested-list__item-children{flex-basis:100%}.cdx-nested-list__item-content{word-break:break-word;white-space:pre-wrap}.cdx-nested-list__item:before{counter-increment:item;margin-right:5px;white-space:nowrap}.cdx-nested-list--ordered>.cdx-nested-list__item:before{content:counters(item,".") ". "}.cdx-nested-list--unordered>.cdx-nested-list__item:before{content:"•"}.cdx-nested-list__settings{display:flex}.cdx-nested-list__settings .cdx-settings-button{width:50%}')), 
                document.head.appendChild(e);
            }
        } catch (t) {
            console.error("vite-plugin-css-injected-by-js", t);
        }
    })();
    function p(d, e = null, t = {}) {
        const r = document.createElement(d);
        Array.isArray(e) ? r.classList.add(...e) : e && r.classList.add(e);
        for (const s in t) r[s] = t[s];
        return r;
    }
    function g(d) {
        const e = p("div");
        return e.appendChild(d), e.innerHTML;
    }
    function C(d) {
        let e;
        return d.nodeType !== Node.ELEMENT_NODE ? e = d.textContent : (e = d.innerHTML, 
        e = e.replaceAll("<br>", "")), e.trim().length === 0;
    }
    class nested_list_c {
        constructor() {
            this.savedFakeCaret = void 0;
        }
        save() {
            const e = nested_list_c.range, t = p("span");
            t.hidden = !0, e.insertNode(t), this.savedFakeCaret = t;
        }
        restore() {
            if (!this.savedFakeCaret) return;
            const e = window.getSelection(), t = new Range;
            t.setStartAfter(this.savedFakeCaret), t.setEndAfter(this.savedFakeCaret), e.removeAllRanges(), 
            e.addRange(t), setTimeout((() => {
                this.savedFakeCaret.remove();
            }), 150);
        }
        static get range() {
            const e = window.getSelection();
            return e && e.rangeCount ? e.getRangeAt(0) : null;
        }
        static extractFragmentFromCaretPositionTillTheEnd() {
            const e = window.getSelection();
            if (!e.rangeCount) return;
            const t = e.getRangeAt(0);
            let r = t.startContainer;
            r.nodeType !== Node.ELEMENT_NODE && (r = r.parentNode);
            const s = r.closest("[contenteditable]");
            t.deleteContents();
            const n = t.cloneRange();
            return n.selectNodeContents(s), n.setStart(t.endContainer, t.endOffset), n.extractContents();
        }
        static focus(e, t = !0) {
            const r = document.createRange(), s = window.getSelection();
            r.selectNodeContents(e), r.collapse(t), s.removeAllRanges(), s.addRange(r);
        }
        static isAtStart() {
            const e = window.getSelection();
            if (e.focusOffset > 0) return !1;
            const t = e.focusNode;
            return nested_list_c.getHigherLevelSiblings(t, "left").every((n => C(n)));
        }
        static getHigherLevelSiblings(e, t = "left") {
            let r = e;
            const s = [];
            for (;r.parentNode && r.parentNode.contentEditable !== "true"; ) r = r.parentNode;
            const n = t === "left" ? "previousSibling" : "nextSibling";
            for (;r[n]; ) r = r[n], s.push(r);
            return s;
        }
    }
    const nested_list_y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
    class u {
        static get isReadOnlySupported() {
            return !0;
        }
        static get enableLineBreaks() {
            return !0;
        }
        static get toolbox() {
            return {
                icon: S,
                title: "List"
            };
        }
        constructor({data: e, config: t, api: r, readOnly: s}) {
            this.nodes = {
                wrapper: null
            }, this.api = r, this.readOnly = s, this.config = t, this.defaultListStyle = this.config.defaultStyle === "ordered" ? "ordered" : "unordered";
            const n = {
                style: this.defaultListStyle,
                items: []
            };
            this.data = e && Object.keys(e).length ? e : n, this.caret = new nested_list_c;
        }
        render() {
            return this.nodes.wrapper = this.makeListWrapper(this.data.style, [ this.CSS.baseBlock ]), 
            this.data.items.length ? this.appendItems(this.data.items, this.nodes.wrapper) : this.appendItems([ {
                content: "",
                items: []
            } ], this.nodes.wrapper), this.readOnly || this.nodes.wrapper.addEventListener("keydown", (e => {
                switch (e.key) {
                  case "Enter":
                    this.enterPressed(e);
                    break;

                  case "Backspace":
                    this.backspace(e);
                    break;

                  case "Tab":
                    e.shiftKey ? this.shiftTab(e) : this.addTab(e);
                    break;
                }
            }), !1), this.nodes.wrapper;
        }
        renderSettings() {
            return [ {
                name: "unordered",
                label: this.api.i18n.t("Unordered"),
                icon: nested_list_y
            }, {
                name: "ordered",
                label: this.api.i18n.t("Ordered"),
                icon: S
            } ].map((t => ({
                name: t.name,
                icon: t.icon,
                label: t.label,
                isActive: this.data.style === t.name,
                closeOnActivate: !0,
                onActivate: () => {
                    this.listStyle = t.name;
                }
            })));
        }
        static get pasteConfig() {
            return {
                tags: [ "OL", "UL", "LI" ]
            };
        }
        onPaste(e) {
            const t = e.detail.data;
            this.data = this.pasteHandler(t);
            const r = this.nodes.wrapper;
            r && r.parentNode.replaceChild(this.render(), r);
        }
        pasteHandler(e) {
            const {tagName: t} = e;
            let r, s;
            switch (t) {
              case "OL":
                r = "ordered", s = "ol";
                break;

              case "UL":
              case "LI":
                r = "unordered", s = "ul";
            }
            const n = {
                style: r,
                items: []
            }, o = l => Array.from(l.querySelectorAll(":scope > li")).map((i => {
                var m;
                const a = i.querySelector(`:scope > ${s}`), f = a ? o(a) : [];
                return {
                    content: ((m = i == null ? void 0 : i.firstChild) == null ? void 0 : m.textContent) || "",
                    items: f
                };
            }));
            return n.items = o(e), n;
        }
        appendItems(e, t) {
            e.forEach((r => {
                const s = this.createItem(r.content, r.items);
                t.appendChild(s);
            }));
        }
        createItem(e, t = []) {
            const r = p("li", this.CSS.item), s = p("div", this.CSS.itemBody), n = p("div", this.CSS.itemContent, {
                innerHTML: e,
                contentEditable: !this.readOnly
            });
            return s.appendChild(n), r.appendChild(s), t && t.length > 0 && this.addChildrenList(r, t), 
            r;
        }
        save() {
            const e = t => Array.from(t.querySelectorAll(`:scope > .${this.CSS.item}`)).map((s => {
                const n = s.querySelector(`.${this.CSS.itemChildren}`), o = this.getItemContent(s), l = n ? e(n) : [];
                return {
                    content: o,
                    items: l
                };
            }));
            return {
                style: this.data.style,
                items: e(this.nodes.wrapper)
            };
        }
        addChildrenList(e, t) {
            const r = e.querySelector(`.${this.CSS.itemBody}`), s = this.makeListWrapper(void 0, [ this.CSS.itemChildren ]);
            this.appendItems(t, s), r.appendChild(s);
        }
        makeListWrapper(e = this.listStyle, t = []) {
            const r = e === "ordered" ? "ol" : "ul", s = e === "ordered" ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered;
            return t.push(s), p(r, [ this.CSS.wrapper, ...t ]);
        }
        get CSS() {
            return {
                baseBlock: this.api.styles.block,
                wrapper: "cdx-nested-list",
                wrapperOrdered: "cdx-nested-list--ordered",
                wrapperUnordered: "cdx-nested-list--unordered",
                item: "cdx-nested-list__item",
                itemBody: "cdx-nested-list__item-body",
                itemContent: "cdx-nested-list__item-content",
                itemChildren: "cdx-nested-list__item-children",
                settingsWrapper: "cdx-nested-list__settings",
                settingsButton: this.api.styles.settingsButton,
                settingsButtonActive: this.api.styles.settingsButtonActive
            };
        }
        get listStyle() {
            return this.data.style || this.defaultListStyle;
        }
        set listStyle(e) {
            const t = Array.from(this.nodes.wrapper.querySelectorAll(`.${this.CSS.wrapper}`));
            t.push(this.nodes.wrapper), t.forEach((r => {
                r.classList.toggle(this.CSS.wrapperUnordered, e === "unordered"), r.classList.toggle(this.CSS.wrapperOrdered, e === "ordered");
            })), this.data.style = e;
        }
        get currentItem() {
            let e = window.getSelection().anchorNode;
            return e.nodeType !== Node.ELEMENT_NODE && (e = e.parentNode), e.closest(`.${this.CSS.item}`);
        }
        enterPressed(e) {
            const t = this.currentItem;
            if (e.stopPropagation(), e.preventDefault(), e.isComposing) return;
            const r = this.getItemContent(t).trim().length === 0, s = t.parentNode === this.nodes.wrapper, n = t.nextElementSibling === null;
            if (s && n && r) {
                this.getOutOfList();
                return;
            } else if (n && r) {
                this.unshiftItem();
                return;
            }
            const o = nested_list_c.extractFragmentFromCaretPositionTillTheEnd(), l = g(o), h = t.querySelector(`.${this.CSS.itemChildren}`), i = this.createItem(l, void 0);
            h && Array.from(h.querySelectorAll(`.${this.CSS.item}`)).length > 0 ? h.prepend(i) : t.after(i), 
            this.focusItem(i);
        }
        unshiftItem() {
            const e = this.currentItem, t = e.parentNode.closest(`.${this.CSS.item}`);
            if (!t) return;
            this.caret.save(), t.after(e), this.caret.restore();
            const r = t.querySelector(`.${this.CSS.itemChildren}`);
            r.children.length === 0 && r.remove();
        }
        getItemContent(e) {
            const t = e.querySelector(`.${this.CSS.itemContent}`);
            return C(t) ? "" : t.innerHTML;
        }
        focusItem(e, t = !0) {
            const r = e.querySelector(`.${this.CSS.itemContent}`);
            nested_list_c.focus(r, t);
        }
        getOutOfList() {
            this.currentItem.remove(), this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
        }
        backspace(e) {
            if (!nested_list_c.isAtStart()) return;
            e.preventDefault();
            const t = this.currentItem, r = t.previousSibling, s = t.parentNode.closest(`.${this.CSS.item}`);
            if (!r && !s) return;
            e.stopPropagation();
            let n;
            if (r) {
                const a = r.querySelectorAll(`.${this.CSS.item}`);
                n = Array.from(a).pop() || r;
            } else n = s;
            const o = nested_list_c.extractFragmentFromCaretPositionTillTheEnd(), l = g(o), h = n.querySelector(`.${this.CSS.itemContent}`);
            nested_list_c.focus(h, !1), this.caret.save(), h.insertAdjacentHTML("beforeend", l);
            let i = t.querySelectorAll(`.${this.CSS.itemChildren} > .${this.CSS.item}`);
            i = Array.from(i), i = i.filter((a => a.parentNode.closest(`.${this.CSS.item}`) === t)), 
            i.reverse().forEach((a => {
                r ? n.after(a) : t.after(a);
            })), t.remove(), this.caret.restore();
        }
        addTab(e) {
            e.stopPropagation(), e.preventDefault();
            const t = this.currentItem, r = t.previousSibling;
            if (!r) return;
            const n = r.querySelector(`.${this.CSS.itemChildren}`);
            if (this.caret.save(), n) n.appendChild(t); else {
                const o = this.makeListWrapper(void 0, [ this.CSS.itemChildren ]), l = r.querySelector(`.${this.CSS.itemBody}`);
                o.appendChild(t), l.appendChild(o);
            }
            this.caret.restore();
        }
        shiftTab(e) {
            e.stopPropagation(), e.preventDefault(), this.unshiftItem();
        }
        static joinRecursive(e) {
            return e.items.map((t => `${t.content} ${u.joinRecursive(t)}`)).join("");
        }
        static get conversionConfig() {
            return {
                export: e => u.joinRecursive(e),
                import: e => ({
                    items: [ {
                        content: e,
                        items: []
                    } ],
                    style: "unordered"
                })
            };
        }
    }
    new Ei({
        holderId: "editorjs",
        tools: {
            raw: r,
            image: h,
            list: {
                class: u,
                inlineToolbar: true,
                config: {
                    defaultStyle: "unordered"
                }
            }
        },
        i18n: {
            messages: {
                ui: {
                    blockTunes: {
                        toggler: {
                            "Click to tune": "Натисніть, щоб налаштувати",
                            "or drag to move": "Або перетягніть"
                        }
                    },
                    inlineToolbar: {
                        converter: {
                            "Convert to": "Конвертувати в"
                        }
                    },
                    toolbar: {
                        toolbox: {
                            Add: "Додати"
                        }
                    }
                },
                toolNames: {
                    Text: "Параграф",
                    Heading: "Заголовок",
                    List: "Список",
                    Warning: "Примітка",
                    Checklist: "Чеклист",
                    Quote: "Цитата",
                    Code: "Код",
                    Delimiter: "Розділювач",
                    "Raw HTML": "HTML-фрагмент",
                    Table: "Таблиця",
                    Link: "Посилання",
                    Marker: "Маркер",
                    Bold: "Напівжирний",
                    Italic: "Курсив",
                    InlineCode: "Моноширинный"
                },
                tools: {
                    warning: {
                        Title: "Назва",
                        Message: "Повідомлення"
                    },
                    link: {
                        "Add a link": "Вставте посилання"
                    },
                    stub: {
                        "The block can not be displayed correctly.": "Блок не може бути відображений"
                    }
                },
                blockTunes: {
                    delete: {
                        Delete: "Видалити"
                    },
                    moveUp: {
                        "Move up": "Перемістити вверх"
                    },
                    moveDown: {
                        "Move down": "Перемістити вниз"
                    }
                }
            }
        }
    });
    window["FLS"] = true;
    isWebp();
})();