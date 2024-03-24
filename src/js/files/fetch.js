import { addPreloaderInKindsList } from './preloader.js'; // Функция включения прелоадера
// ----------------------------------------------------------------------------------------------- Получаем все анкеты кандидатов
export async function fetchOrdersData() {
  const apiUrl = 'https://fastapi-avrora-hr.fly.dev/path/admin/api/super-admin/orders/210325718';  
  const requestOptions = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'password': '$2b$12$rOy4/Mc.D15d801IweWOtOQlfSLhzoYwJmxuQihKp7QT3PY66qtZm',
    },
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
		
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
		console.log(data)
    return data.orders;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error;
  }
}

// -------------------------------------------------------------------------------------------------------- Получаем все вакансии
export async function fetchVacanciesData() {
  const apiUrl = 'https://fastapi-avrora-hr.fly.dev/path/admin/api/super-admin/vacancies/210325718';
  const requestOptions = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
			'password': '$2b$12$rOy4/Mc.D15d801IweWOtOQlfSLhzoYwJmxuQihKp7QT3PY66qtZm',
    },
  };

	try {
		addPreloaderInKindsList();
		const response = await fetch(apiUrl, requestOptions);
		if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
		const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error;
  }
}

// ----------------------------------------------------------------------------------------------- Получаем конкретную вакансию
export async function fetchVacancyData(vacancyId) {
  const apiUrl = `https://fastapi-avrora-hr.fly.dev/path/admin/item/super-admin/vacancy/${vacancyId}/210325718`;
  const requestOptions = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
			'password': '$2b$12$rOy4/Mc.D15d801IweWOtOQlfSLhzoYwJmxuQihKp7QT3PY66qtZm',
    },
  };

	try {
		const response = await fetch(apiUrl, requestOptions);
		if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
		const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error;
  }
}

// ----------------------------------------------------------------------------------------------- Получаем конкретную заявку
export async function fetchOrderData(orderId) {
  const apiUrl = `https://fastapi-avrora-hr.fly.dev/path/admin/item/super-admin/order/${orderId}/210325718`;
  const requestOptions = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
			'password': '$2b$12$rOy4/Mc.D15d801IweWOtOQlfSLhzoYwJmxuQihKp7QT3PY66qtZm',
    },
  };

	try {
		const response = await fetch(apiUrl, requestOptions);
		if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
		const data = await response.json();
		console.log(data)
    return data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error;
  }
}

// ----------------------------------------------------------------------------------------------- Получаем конкретного юзера
export async function fetchUserData(userId) {
  const apiUrl = `https://fastapi-avrora-hr.fly.dev/path/admin/item/super-admin/user/${userId}/210325718`;
  const requestOptions = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
			'password': '$2b$12$rOy4/Mc.D15d801IweWOtOQlfSLhzoYwJmxuQihKp7QT3PY66qtZm',
    },
  };

	try {
		const response = await fetch(apiUrl, requestOptions);
		if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
		const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error;
  }
}

// --------------------------------------------------------------------------------- Отправляем комментарий
export async function fetchPostComment(orderId, hrStatus, telegramId, bodyFetch) {
  const apiUrl = `https://fastapi-avrora-hr.fly.dev/path/${hrStatus}/settings/order/${orderId}/add_comment/${telegramId}`;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'password': '$2b$12$rOy4/Mc.D15d801IweWOtOQlfSLhzoYwJmxuQihKp7QT3PY66qtZm'
    },
    body: JSON.stringify({text: bodyFetch})
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error;
  }
}

// --------------------------------------------------------------------------------- Отправляем сообщение пользователю
export async function fetchPostMessageToUser(orderId, hrStatus, telegramId, message) {
  const apiUrl = `https://fastapi-avrora-hr.fly.dev/path/${hrStatus}/settings/user/${orderId}/send_message/${telegramId}`;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'password': '$2b$12$rOy4/Mc.D15d801IweWOtOQlfSLhzoYwJmxuQihKp7QT3PY66qtZm'
    },
    body: JSON.stringify({text: message})
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error;
  }
}

// --------------------------------------------------------------------------------- Блокируем пользователя
export async function fetchPostBlockUser(orderId, hrStatus, telegramId, message) {
  const apiUrl = `https://fastapi-avrora-hr.fly.dev/path/${hrStatus}/settings/user/${orderId}/block_user/${telegramId}`;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'password': '$2b$12$rOy4/Mc.D15d801IweWOtOQlfSLhzoYwJmxuQihKp7QT3PY66qtZm'
    },
    body: JSON.stringify({text: message})
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error;
  }
}

// --------------------------------------------------------------------------------- Изменяем статус заявки
export async function fetchChangeOrderStatus(orderId, hrStatus, telegramId, newStatus) {
  const apiUrl = `https://fastapi-avrora-hr.fly.dev/path/${hrStatus}/settings/order/${orderId}/change_status/${telegramId}`;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'password': '$2b$12$rOy4/Mc.D15d801IweWOtOQlfSLhzoYwJmxuQihKp7QT3PY66qtZm'
    },
    body: JSON.stringify({text: newStatus})
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error;
  }
}


















