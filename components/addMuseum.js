const museums = [
	{
		title: "National Museum",
		imgSrc: "/image/museum/850national5.jpg",
		alt: "National Museum",
		description:
			"Explore Cambodia's rich history through an impressive collection of ancient artifacts and traditional art.",
		link: "https://www.tripadvisor.com/Attraction_Review-g293940-d324624-Reviews-National_Museum-Phnom_Penh.html",
	},
	{
		title: "Phnom Penh Museum",
		imgSrc: "/image/museum/phnompenhMuseum.jpg",
		alt: "Phnom Penh Museum",
		description:
			"Discover the vibrant cultural heritage of Phnom Penh, showcasing modern and historical exhibits.",
		link: "https://en.wikipedia.org/wiki/National_Museum_of_Cambodia",
	},
	{
		title: "Siem Reap Museum",
		imgSrc: "/image/museum/siemreapMuseum.jpg",
		alt: "Siem Reap Museum",
		description:
			"Delve into the golden era of Cambodia near the Angkor temples, featuring religious and cultural treasures.",

		link: "https://www.google.com/search?q=siem+reap+museums&oq=siemreap+mu&gs_lcrp=EgZjaHJvbWUqCQgBEAAYDRiABDIGCAAQRRg5MgkIARAAGA0YgAQyBggCEEUYOzIJCAMQLhgNGIAEMgkIBBAAGA0YgAQyDwgFEC4YDRivARjHARiABDIPCAYQLhgNGK8BGMcBGIAEMgkIBxAAGA0YgAQyCQgIEAAYDRiABDIJCAkQABgNGIAE0gEJMTI0NTVqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8&lqi=ChFzaWVtIHJlYXAgbXVzZXVtc0i_ybraA1obEAIYABgBGAIiEXNpZW0gcmVhcCBtdXNldW1zkgEVYXJjaGFlb2xvZ2ljYWxfbXVzZXVtmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJmZVRsUFlUQm5SUkFCqgFHEAEqCyIHbXVzZXVtcygAMh8QASIbonlWKLq5E9m59fUG_RcZNnU4feEtqPvmvTEVMhUQAiIRc2llbSByZWFwIG11c2V1bXP6AQQIWBAw#rlimm=11476865357577564131",
	},
	{
		title: "Sra'Art Studio",
		imgSrc: "/image/museum/Sra'Art Studio.avif",
		alt: "Sra'Art Studio",
		description:
			"Experience contemporary Cambodian art in a creative space blending tradition and innovation.",

		link: "https://www.tripadvisor.com/Attraction_Review-g293940-d24864668-Reviews-Sra_art_Gallery-Phnom_Penh.html",
	},
	{
		title: "Sosoro",
		imgSrc: "/image/museum/Sosoro.webp",
		alt: "Sosoro",
		description:
			"A unique museum highlighting Cambodia’s post-Angkorian art movements and cultural expressions.",
		link: "https://www.tripadvisor.com/Attraction_Review-g293940-d17622404-Reviews-Sosoro_Museum-Phnom_Penh.html",
	},
	{
		title: "Panorama",
		imgSrc: "/image/museum/panorama.jpg",
		alt: "Panorama Museum",
		description:
			"Immerse yourself in panoramic views and exhibitions capturing Cambodia’s history and landscapes.",
		link: "https://www.tripadvisor.com/Attraction_Review-g297390-d9864662-Reviews-Angkor_Panorama_Museum-Siem_Reap_Siem_Reap_Province.html",
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
