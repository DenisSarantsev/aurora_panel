// Добавляем прелоадер до момента, пока не подгрузились кнопки направлений
export const addPreloaderInKindsList = () => {
	let preloaderContainer = document.querySelector(".preloader-in-widget");
	const animation = new Promise ((resolve, reject) => {
		resolve()
	})
	.then(
		preloaderContainer.classList.remove("preloader-hidden")
	)

}
addPreloaderInKindsList()

// Удаляем прелоадер после момента, когда уже подгрузились вакансии
export const removePreloaderInKindsList = () => {
	let preloaderContainer = document.querySelector(".preloader-in-widget");
	setTimeout(function() {
		preloaderContainer.classList.add("preloader-hidden");
	}, 700)
}
