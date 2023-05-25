const files = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]

function showImages() {
	const imageContainerDiv = document.getElementById("image__container__div")
	const imageElement = document.createElement("img")
	imageElement.src = Math.floor(Math.random() * files.length)  
	imageContainerDiv.appendChild(imageElement)
}

showImages();