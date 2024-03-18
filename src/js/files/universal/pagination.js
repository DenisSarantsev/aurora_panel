export const showOrHiddenPagination = (button) => {
	let buttonTemplateAttribute = button.getAttribute("template-button");
	const allPaginations = document.querySelectorAll(".pagination");
	for ( let pagination of allPaginations ) {
		pagination.style.display = "none";
	}
	if ( document.querySelector(`.pagination-${buttonTemplateAttribute}`) ) {
		const removeElement = document.querySelector(`.pagination-${buttonTemplateAttribute}`);
		removeElement.style.display = "flex";
	}
}