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
		console.log(data)
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


// ---- Нерабочие камеры вокруг входных групп
/*
	Р7: 94, 40
	Р4: 85, 402, 115, 107, 69
	Р6: 84
	Р5: 315, 122
	Р3: 335, 72
*/

// ---- Нерабочие камеры на рампах
/*
	13: 114
*/

// ---- Нерабочие камеры в других важных зонах:
/*
	Центральный проезд: 251, 247, 6, 11, 701, 402, 728, 
*/









