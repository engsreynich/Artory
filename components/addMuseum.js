const museums = [
	{
		title: "National Museum",
		imgSrc: "/image/museum/850national5.jpg",
		alt: "National Museum",
		description:
			"Explore Cambodia's rich history through an impressive collection of ancient artifacts and traditional art.",
	},
	{
		title: "Phnom Penh Museum",
		imgSrc: "/image/museum/phnompenhMuseum.jpg",
		alt: "Phnom Penh Museum",
		description:
			"Discover the vibrant cultural heritage of Phnom Penh, showcasing modern and historical exhibits.",
	},
	{
		title: "Siem Reap Museum",
		imgSrc: "/image/museum/siemreapMuseum.jpg",
		alt: "Siem Reap Museum",
		description:
			"Delve into the golden era of Cambodia near the Angkor temples, featuring religious and cultural treasures.",
	},
	{
		title: "Sra'Art Studio",
		imgSrc: "/image/museum/Sra'Art Studio.avif",
		alt: "Sra'Art Studio",
		description:
			"Experience contemporary Cambodian art in a creative space blending tradition and innovation.",
	},
	{
		title: "Sosoro",
		imgSrc: "/image/museum/Sosoro.webp",
		alt: "Sosoro",
		description:
			"A unique museum highlighting Cambodia’s post-Angkorian art movements and cultural expressions.",
	},
	{
		title: "Panorama",
		imgSrc: "/image/museum/panorama.jpg",
		alt: "Panorama Museum",
		description:
			"Immerse yourself in panoramic views and exhibitions capturing Cambodia’s history and landscapes.",
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
          <a href="#" class="btn btn-secondary">Learn More</a>
        </div>
      </div>
    `;

	container.appendChild(card);
});
