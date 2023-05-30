const imagePaths = [
	'img/1.jpeg',
	'img/2.jpeg',
	'img/3.jpeg',
	'img/4.jpeg',
	'img/5.jpeg',
];

const nextButton = document.querySelector('#prevBtn')
const prevButton = document.querySelector('#nextBtn')
const imageElement = document.querySelector('#image')

let currentImageIndex = 0

const updateImage = () => {
	imageElement.src = imagePaths[currentImageIndex];
	prevButton.style.display = currentImageIndex === 0 ? 'none' : 'inline-block'
	nextButton.style.display = currentImageIndex === imagePaths.length - 1 ? 'none' : 'inline-block'
};

const showNextImage = () => {
	if (currentImageIndex < imagePaths.length - 1) {
		currentImageIndex++;
		updateImage();
	}
};

const showPreviousImage = () => {
	if (currentImageIndex > 0) {
		currentImageIndex--;
		updateImage();
	}
};


(function () {
	nextButton.addEventListener('click', showNextImage);
	prevButton.addEventListener('click', showPreviousImage);

	updateImage();
})()
