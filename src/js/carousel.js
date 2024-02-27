function setActiveItems(items, activeItemCount) {
	items.forEach((item, index) => {
		if (!item.classList.contains('arrow')) {
			if (index < activeItemCount) {
				item.classList.add('active');
				item.style.filter = 'blur(0px)';
			} else {
				item.classList.remove('active');
				item.style.filter = 'blur(4px)';
			}
		}
	});
}

function determineActiveItemCount(width) {
	if (width <= 425) {
		return 1;
	} else if (width <= 766) {
		return 3;
	} else if (width >= 1024) {
		return 2;
	} else {
		return 2; // Valor padrão para telas maiores que 1200px
	}
}

function updateCarousel() {
	const caroussel = document.querySelector('.slider');
	const items = caroussel.querySelectorAll('.item');
	const width = screen.width;
	const activeItemCount = determineActiveItemCount(width);

	setActiveItems(items, activeItemCount);

	if (items.length >= activeItemCount) {
		caroussel.appendChild(items[0].cloneNode(true));
		caroussel.removeChild(items[0]);
	}
}

// Chame a função updateCarousel ao carregar a página e quando o tamanho da tela for alterado
window.addEventListener('DOMContentLoaded', updateCarousel);
window.addEventListener('resize', updateCarousel);

function prevSlide() {
	const caroussel = document.querySelector('.slider');
	const items = caroussel.querySelectorAll('.item');
	const width = screen.width;
	const activeItemCount = determineActiveItemCount(width);

	if (items.length >= activeItemCount + 1) {
		const activeItems = Array.from(items).slice(0, activeItemCount + 1);
		const prevItem = items[activeItemCount - 1].previousElementSibling;

		activeItems.forEach((item, index) => {
			if (!item.classList.contains('arrow')) {
				item.classList.remove('active');
				item.style.filter = 'blur(4px)';
			}
		});

		activeItems[activeItemCount - 1].classList.add('active');
		activeItems[activeItemCount - 1].style.filter = 'blur(0px)';

		// Mover o último item ativo para a posição após o primeiro item
		caroussel.insertBefore(activeItems[activeItemCount - 1].cloneNode(true), items[0].nextSibling);
		caroussel.removeChild(activeItems[activeItemCount - 1]);

		// Verificar se há um item anterior ao primeiro item ativo
		if (prevItem && !prevItem.classList.contains('arrow')) {
			prevItem.classList.add('active');
			prevItem.style.filter = 'blur(0px)';
		}

	}
	updateCarousel(); // Atualizar o carrossel após a ação da seta
}

function nextSlide() {
	const caroussel = document.querySelector('.slider');
	const items = caroussel.querySelectorAll('.item');
	const width = screen.width;
	const activeItemCount = determineActiveItemCount(width);

	if (items.length >= activeItemCount + 1) {
		const activeItems = Array.from(items).slice(0, activeItemCount + 1);
		const nextItem = items[activeItemCount].nextElementSibling;

		activeItems.forEach((item, index) => {
			if (!item.classList.contains('arrow')) {
				item.classList.remove('active');
				item.style.filter = 'blur(4px)';
			}
		});

		activeItems[activeItemCount].classList.add('active');
		activeItems[activeItemCount].style.filter = 'blur(0px)';

		// Mover apenas o último item ativo para a posição após o primeiro item
		caroussel.insertBefore(activeItems[activeItemCount].cloneNode(true), items[0].nextSibling);
		caroussel.removeChild(activeItems[activeItemCount]);

		// Verificar se há um próximo item além do último item ativo
		if (nextItem && !nextItem.classList.contains('arrow')) {
			nextItem.classList.add('active');
			nextItem.style.filter = 'blur(0px)';
		}

	}
	updateCarousel(); // Atualizar o carrossel após a ação da seta
}

// --------------------
// FEEDBACK CAROUSEL
// --------------------

function setActiveFeedbacks(items, activeFeedbackCount) {
	items.forEach((item, index) => {
		if (!item.classList.contains('arrow')) {
			if (index < activeFeedbackCount) {
				item.classList.add('active');
				item.style.display = 'flex';
			} else {
				item.classList.remove('active');
				item.style.display = 'none';
			}
		}
	});
}

function determineActiveFeedbackCount(width) {
	if (width <= 768) {
		return 1;
	} else if (width >= 768) {
		return 2;
	} else {
		return 2; // Valor padrão para telas maiores que 1200px
	}
}

function updateFeedback() {
	const feedback = document.querySelector('.feedbacks');
	const items = feedback.querySelectorAll('.item');
	const width = screen.width;
	const activeFeedbackCount = determineActiveFeedbackCount(width);

	setActiveFeedbacks(items, activeFeedbackCount);

	if (items.length >= activeFeedbackCount) {
		feedback.appendChild(items[0].cloneNode(true));
		feedback.removeChild(items[0]);
	}
}

// Chame a função updateCarousel ao carregar a página e quando o tamanho da tela for alterado
window.addEventListener('DOMContentLoaded', updateFeedback);
window.addEventListener('resize', updateFeedback);

function prevFeedBack() {
	const feedback = document.querySelector('.feedbacks');
	const items = feedback.querySelectorAll('.item');
	const width = screen.width;
	const activeItemCount = determineActiveFeedbackCount(width);

	if (items.length >= activeItemCount + 1) {
		const activeItems = Array.from(items).slice(0, activeItemCount + 1);
		const prevItem = items[activeItemCount - 1].previousElementSibling;

		activeItems.forEach((item, index) => {
			if (!item.classList.contains('arrow')) {
				item.style.display = 'none';
			}
		});

		activeItems[activeItemCount - 1].style.display = 'flex';

		// Mover o último item ativo para a posição após o primeiro item
		feedback.insertBefore(activeItems[activeItemCount - 1].cloneNode(true), items[0].nextSibling);
		feedback.removeChild(activeItems[activeItemCount - 1]);

		// Verificar se há um item anterior ao primeiro item ativo
		if (prevItem && !prevItem.classList.contains('arrow')) {
			prevItem.style.display = 'flex';
		}

	}
	updateFeedback(); // Atualizar o carrossel após a ação da seta
}

function nextFeedBack() {
	const feedback = document.querySelector('.feedbacks');
	const items = feedback.querySelectorAll('.item');
	const width = screen.width;
	const activeItemCount = determineActiveFeedbackCount(width);

	if (items.length >= activeItemCount + 1) {
		const activeItems = Array.from(items).slice(0, activeItemCount + 1);
		const nextItem = items[activeItemCount].nextElementSibling;

		activeItems.forEach((item, index) => {
			if (!item.classList.contains('arrow')) {
				item.style.display = 'none';
			}
		});

		activeItems[activeItemCount].style.display = 'flex';

		// Mover apenas o último item ativo para a posição após o primeiro item
		feedback.insertBefore(activeItems[activeItemCount].cloneNode(true), items[0].nextSibling);
		feedback.removeChild(activeItems[activeItemCount]);

		// Verificar se há um próximo item além do último item ativo
		if (nextItem && !nextItem.classList.contains('arrow')) {
			nextItem.style.display = 'flex';
		}

	}
	updateFeedback(); // Atualizar o carrossel após a ação da seta
}