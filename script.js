const imageContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

let photosArray = [];

// Unsplash API
const count = 10;
const query = "graffiti";
const apiKey = "ugEbsjpwNnXAv2kOXZL_avFMagB7b6JwkY5jMABUo8w";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${query}`;

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

// Create Elements for Links & Photos, Add to Dom
function displayPhotos() {
	photosArray.forEach((photo) => {
		// create <a> to link to Unsplash
		const item = document.createElement("a");

		setAttributes(item, {
			href: photo.links.html,
			target: "_blank",
		});
		// Create <img> for photo
		const img = document.createElement("img");

		setAttributes(img, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description,
		});
		// Put <img> inside <a>, then put both inside imageContainer Element
		item.appendChild(img);
		imageContainer.appendChild(item);
	});
}

//  Get photos from Unsplash API
async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		photosArray = await response.json();
		displayPhotos();
	} catch (error) {
		// Catch Error Here
	}
}

// On Load
getPhotos();
