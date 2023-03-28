const book = document.querySelector('.book');
const allPages = document.querySelectorAll('.book__page');
const btnLeft = document.querySelector('.book__btn-left');
const btnRight = document.querySelector('.book__btn-right');
const btnOpen = document.querySelector('.book__open');
const btnsWorks = document.querySelectorAll('.book__work-btn')
const works = document.querySelectorAll('.book__work')

let index = 0;
let side = 1;

let activePage = allPages[index];

const handleSlider = () => {
	index++;
};

const showButtons = (isActive) => {
	btnLeft.disabled = !isActive;
	btnRight.disabled = !isActive;

	btnLeft.classList.toggle('active');
	btnRight.classList.toggle('active');

	btnOpen.disabled = isActive;
	btnOpen.classList.toggle('active');
};

const changeNextPage = () => {
	activePage.style.transform = 'rotateY(-180deg)'

	activePage.previousElementSibling.classList.toggle('active')
	activePage.previousElementSibling.lastElementChild.classList.toggle('active')

	activePage.firstElementChild.classList.toggle('active')
	activePage.lastElementChild.classList.toggle('active')

	activePage.firstElementChild.classList.remove('opacity-delay')

	activePage = allPages[index]

	activePage.classList.toggle('active')
	activePage.firstElementChild.classList.toggle('active')

	activePage.firstElementChild.classList.remove('opacity-delay')


}

const handleRightArrow = () => {
	index++;
	
	changeNextPage()

	console.log(index);
	
	if(index >= allPages.length - 1){
		btnRight.disabled = true
		btnRight.classList.toggle('active')
	}
};

const changePagePrevious = () => {
	activePage.previousElementSibling.style.transform = 'rotateY(0)'

	activePage.classList.toggle('active')
	activePage.firstElementChild.classList.toggle('active')

	activePage = allPages[index]

	activePage.lastElementChild.classList.toggle('active')
	activePage.firstElementChild.classList.toggle('active')

	activePage.firstElementChild.classList.add('opacity-delay')

	activePage.previousElementSibling.classList.toggle('active')
	activePage.previousElementSibling.lastElementChild.classList.toggle('active')
};

const handleLeftArrow = () => {

	console.log(--index);

	if(index < allPages.length - 1){
		btnRight.disabled = false
		btnRight.classList.add('active')
	}

	if (index <= 0) {
		btnLeft.classList.add('on-first-page-btn');
		btnRight.classList.add('on-first-page-btn');
		btnOpen.classList.add('opacity-delay-open-btn')
		activePage.previousElementSibling.classList.add('on-first-page');
		console.log(activePage.previousElementSibling);
		activePage.classList.add('on-first-page');
		activePage.previousElementSibling.firstElementChild.classList.add(
			'on-first-page'
		);
		showButtons(false);
		activePage.classList.toggle('active')
		activePage.firstElementChild.classList.toggle('active')

		activePage = allPages[index]

		activePage.style.transform = 'rotateY(0)'

		activePage.lastElementChild.classList.toggle('active')
		activePage.firstElementChild.classList.toggle('active')

		setTimeout(() => {
			book.style.transform = 'translate(-50%, -50%)';
		}, 1000);
	}else{
		
		changePagePrevious();
	}

};

const handleOpenBtn = () => {
	btnLeft.classList.remove('on-first-page-btn');
	btnRight.classList.remove('on-first-page-btn');
	btnOpen.classList.remove('opacity-delay-open-btn')
	activePage.classList.remove('on-first-page');
	activePage.firstElementChild.classList.remove('on-first-page');
	activePage.nextElementSibling.classList.remove('on-first-page');

	index++;
	activePage.style.transform = 'rotateY(-180deg)';
	book.style.transform = 'translate(0 , -50%)';

	showButtons(true);

	console.log(activePage);

	setTimeout(() => {

		activePage.firstElementChild.classList.toggle('active')
		activePage.lastElementChild.classList.toggle('active')

		activePage = allPages[index]

		activePage.classList.toggle('active')
		activePage.firstElementChild.classList.toggle('active')
	}, 500);
};

const handleWorkBtn = e => {

	works.forEach(work => work.classList.remove('active'))
	works[e.target.value].classList.add('active')
}

btnLeft.addEventListener('click', handleLeftArrow);
btnRight.addEventListener('click', handleRightArrow);
btnOpen.addEventListener('click', handleOpenBtn);
btnsWorks.forEach(btn => btn.addEventListener('click', handleWorkBtn))
