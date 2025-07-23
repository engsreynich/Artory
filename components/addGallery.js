const museums = [
	{
		title: "Human Gallery",
		imgSrc: "/image/Gallery/human-gallery.jpg",
		alt: "Human Gallery",
		description:
			"Explore Cambodia's rich history through an impressive collection of ancient artifacts and traditional art.",
		location: "Battambang",
		link: "https://www.tripadvisor.com/Attraction_Review-g303666-d12524046-Reviews-Human_Gallery_Joseba_Etxebarria_Photography-Battambang_Battambang_Province.html",
	},
	{
		title: "Theam's Gallery",
		imgSrc: "/image/Gallery/theam-gallery.jpg",
		alt: "Theam's Gallery",
		description:
			"Discover the vibrant cultural heritage of Phnom Penh, showcasing modern and historical exhibits.",
		location: "Siem Reap",
		link: "https://www.tripadvisor.com/Attraction_Review-g297390-d2100150-Reviews-Theam_s_Gallery-Siem_Reap_Siem_Reap_Province.html",
	},
	{
		title: "Romcheik 5 Art Space & Cafe",
		imgSrc: "/image/Gallery/romcheik-gallery.jpg",
		alt: "Romcheik 5 Art Space & Cafe",
		description:
			"Delve into the golden era of Cambodia near the Angkor temples, featuring religious and cultural treasures.",
		location: "Battambang",
		link: "https://www.tripadvisor.com/Attraction_Review-g303666-d7802351-Reviews-Romcheik_5_Art_Space_Cafe-Battambang_Battambang_Province.html",
	},
	{
		title: "Sra'Art Studio",
		imgSrc: "/image/museum/Sra'Art Studio.avif",
		alt: "Sra'Art Studio",
		description:
			"Experience contemporary Cambodian art in a creative space blending tradition and innovation.",
	},
	{
		title: "Artbox",
		imgSrc: "/image/Gallery/artbox-gallery.jpg",
		alt: "Artbox",
		description:
			"A unique museum highlighting Cambodia’s post-Angkorian art movements and cultural expressions.",
		location: "Siemreap",
		link: "https://www.tripadvisor.com/Attraction_Review-g297390-d12173760-Reviews-ArtBox-Siem_Reap_Siem_Reap_Province.html",
	},
	{
		title: "Angkor Artwork E&T Stocker",
		imgSrc: "/image/Gallery/e&t-gallery.jpg",
		alt: "Angkor Artwork E&T Stocker Museum",
		description:
			"Immerse yourself in panoramic views and exhibitions capturing Cambodia’s history and landscapes.",
		location: "Siemreap",
		link: "https://www.tripadvisor.com/Attraction_Review-g297390-d3841386-Reviews-Angkor_Artwork_E_T_Stocker-Siem_Reap_Siem_Reap_Province.html",
	},
	{
		title: "Factory Phnom Penh",
		imgSrc: "/image/Gallery/factory-gallery.jpg",
		alt: "Factory Phnom Penh",
		description:
			"A unique museum highlighting Cambodia’s post-Angkorian art movements and cultural expressions.",
		location: "Phnom Penh",
		link: "https://www.tripadvisor.com/Attraction_Review-g293940-d14013440-Reviews-Factory_Phnom_Penh-Phnom_Penh.html",
	},
	{
		title: "The Gallerist - Phnom Penh Art Gallery",
		imgSrc: "/image/Gallery/gallerist-galler.jpg",
		alt: "The Gallerist - Phnom Penh Art Gallery",
		description:
			"A unique museum highlighting Cambodia’s post-Angkorian art movements and cultural expressions.",
		location: "Phnom Penh",
		link: "https://www.tripadvisor.com/Attraction_Review-g293940-d32227507-Reviews-The_Gallerist_Phnom_Penh_Art_Gallery-Phnom_Penh.html",
	},
];

// Get container
const container = document.getElementById("museum-list");

// Generate cards dynamically
museums.forEach((museum) => {
	const card = document.createElement("div");
	card.className = "col g-3";

	card.innerHTML = `
      <div class="card museum-card shadow rounded-4 overflow-hidden h-100">
        <img src="${museum.imgSrc}" class="card-img-top cardImg" alt="${museum.alt}" />
        <div class="card-body text-center d-flex flex-column justify-content-evenly">
          <h5 class="card-title">${museum.title}</h5>
          <p class="card-text">${museum.description}</p>
          <a href="${museum.link}" class="btn btn-secondary">Learn More</a>
        </div>
      </div>
    `;

	container.appendChild(card);
});
