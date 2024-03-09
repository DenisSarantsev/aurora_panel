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

