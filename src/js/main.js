const book = document.querySelector('.book');
const allPages = document.querySelectorAll('.book__page');
const btnLeft = document.querySelector('.book__btn-left');
const btnRight = document.querySelector('.book__btn-right');

const sliderBoxWidth = 25;
const sliderSpeed = 3000;

let index = 0;
let side = 1;

let activePage = allPages[index];

console.log(activePage);
console.log(activePage.firstElementChild);

btnLeft.classList.add('disable');

const handleSlider = () => {
	index++;
};

const changePage = () => {
	if (index > 0 && index < allPages.length - 1) {
		book.style.transform = 'translate(0, -50%)';
	} else if (index <= 0) {
		book.style.transform = 'translate(-50%, -50%)';
	}

	if (index == 0) {
		btnLeft.classList.toggle('disable');
		btnLeft.disabled = true;
	} else if (index == allPages.length - 1) {
		btnRight.disabled = true;
	} else {
		btnRight.disabled = false;
	}

	if (index > 0)
		setTimeout(() => {
			btnLeft.disabled = false;
			btnLeft.classList.remove('disable');
		}, 1000);

	if (side > 0) {
		activePage.firstElementChild.style.transform = `rotateY(-180deg)`;
		activePage.lastElementChild.style.transform = `rotateY(-180deg)`;

		setTimeout(() => {
			activePage.firstElementChild.classList.toggle('active');
			// activePage.firstElementChild.classList.toggle('op-off')

			activePage.lastElementChild.classList.toggle('active');
			// activePage.lastElementChild.classList.toggle('op-off')

			activePage = allPages[index];

			activePage.firstElementChild.classList.toggle('active');
		}, 400);
	} else {
		// previousPage = allPages[(index <= 0 ? 0 : index - 1)]

		activePage = allPages[index];
		console.log('previous');
		console.log(activePage);

		activePage.firstElementChild.style.transform = `rotateY(0)`;
		activePage.lastElementChild.style.transform = `rotateY(0)`;

		// activePage = allPages[index]

		setTimeout(() => {
			activePage = allPages[index + 1];

			activePage.firstElementChild.classList.toggle('active');

			activePage = allPages[index];

			activePage.lastElementChild.classList.toggle('active');

			// activePage.firstElementChild.classList.toggle('op-off')
			activePage.firstElementChild.classList.toggle('active');
		}, 400);
	}

	if (index > allPages.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = allPages.length - 1;
	}

	console.log(activePage);
};

const handleRightArrow = () => {
	if (!btnRight.disabled) {
		if (side < 0) side *= -1;
		index++;
		changePage();
		btnRight.disabled = true;
	}

	if (index >= allPages.length - 1) {
		btnRight.disabled = true;
	} else setTimeout(() => (btnRight.disabled = false), 1000);
};

const handleLeftArrow = () => {
	if (!btnLeft.disabled) {
		if (side > 0) side *= -1;
		index--;
		changePage();
		btnLeft.disabled = true;
	}

	if (index <= 0) {
		btnLeft.disabled = true;
	} else setTimeout(() => (btnLeft.disabled = false), 1000);
};

btnLeft.addEventListener('click', handleLeftArrow);
btnRight.addEventListener('click', handleRightArrow);
