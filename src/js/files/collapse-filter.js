document.addEventListener("DOMContentLoaded", () => {
// ---------------------------------------------------------------------------------------------------------------- Механика свертывания и развертывания фильтра заявок
const secondIconImage = document.querySelector(".applications-filter__second-minus-icon");
const filterContainer = document.querySelector(".applications-filter");
const parametrsBlock = document.querySelector(".applications-filter__parametrs-container");
const bottomBlock = document.querySelector(".applications-filter__bottom-container");
document.querySelector(".applications-filter__filter-title-container").addEventListener("click", () => {
	if ( !filterContainer.classList.contains("open-filter") ) {
		closeBlocksAfterClick(filterContainer, secondIconImage, parametrsBlock, bottomBlock);
	} else {
		showBlocksAfterClick(filterContainer, secondIconImage, parametrsBlock, bottomBlock);
	}
})
// --------------------------------------------------------------------------------- Общие функции для работы со всеми блоками ( классы находятся в файле common.scss )
	// Функция принимает контейнер блоков, иконку, которая вращается на 90 градусов и максимум три блока, к которым мы применям высоту ноль
	const closeBlocksAfterClick = (container, rotateIcon, firstBlock, secondBlock, thirdBlock ) => {
			console.log("close")
			container.classList.remove("open-filter");
			container.classList.add("open-filter");
			container.style.gap = "0px";
			rotateIcon.classList.toggle("rotate-icon");
			if ( firstBlock ) {
				firstBlock.classList.remove("auto-height");
				firstBlock.classList.add("null-height");
			}
			if ( secondBlock ) {
				secondBlock.classList.remove("auto-height");
				secondBlock.classList.add("null-height");
			}
			if ( thirdBlock ) {
				thirdBlock.classList.remove("auto-height");
				thirdBlock.classList.add("null-height");
			}
	}
	// Функция принимает контейнер блоков, иконку, которая вращается на 90 градусов и максимум три блока, к которым мы применям высоту авто
	const showBlocksAfterClick = (container, rotateIcon, firstBlock, secondBlock, thirdBlock) => {
			console.log("show")
			container.classList.add("open-filter");
			container.classList.remove("open-filter");
			container.style.gap = "10px";
			rotateIcon.classList.toggle("rotate-icon");
			if ( firstBlock ) {
				firstBlock.classList.add("auto-height");
				firstBlock.classList.remove("null-height");
			}
			if ( secondBlock ) {
				secondBlock.classList.add("auto-height");
				secondBlock.classList.remove("null-height");
			}
			if ( thirdBlock ) {
				thirdBlock.classList.add("auto-height");
				thirdBlock.classList.remove("null-height");
			}
	}
})
