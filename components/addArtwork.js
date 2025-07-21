// Updated arts array with "type" for categorization
const arts = [
	{
		title: "Angkor Wat",
		imgSrc: "/image/artwork/angkor.webp",
		alt: "Angkor Wat",
		description:
			"Experience the grandeur of Angkor Wat, the world's largest religious monument Khmer architecture",
		type: "Angkor",
		author: "Jayavarman VII",
		link: "https://en.wikipedia.org/wiki/Angkor_Wat",
	},
	{
		title: " Carving of TaProhm",
		imgSrc: "/image/artwork/angkor-dinosour.jpg",
		alt: "Carving of Dinosaur",
		description:
			"Discover the mysterious dinosaur carving on the walls of Ta Prohm temple, a unique piece of Angkorian art ",
		type: "Angkor",
		author: "Unknown",
		link: "https://en.wikipedia.org/wiki/Dinosaur_of_Ta_Prohm",
	},
	{
		title: "Apsara Sculpture",
		imgSrc: "/image/artwork/apsara3.webp",
		alt: "Apsara Sculpture",
		description:
			"Delve into the golden era of Cambodia near the Angkor temples, featuring religious and cultural treasures.",
		type: "Angkor",
		author: "Unknown",
		link: "https://en.wikipedia.org/wiki/Apsara",
	},
	{
		title: "My Dear Apsara",
		imgSrc: "/image/artwork/con1.jpg",
		alt: "My Dear Apsara",
		description:
			"Experience contemporary Cambodian art in a creative space blending tradition and innovation.",
		type: "Contemporary",
		author: "Unknown",
		link: "#",
	},
	{
		title: "Tonlesap",
		imgSrc: "/image/artwork/con2(Tonle).jpg",
		alt: "Tonlesap",
		description:
			"A unique artwork highlighting Cambodia’s post-Angkorian art movements and cultural expressions.",
		type: "Contemporary",
		author: "Unknown",
		link: "#",
	},
	{
		title: "Colonial Architecture",
		imgSrc: "/image/artwork/fre1.jpg",
		alt: "French mansion",
		description:
			"Unveils a captivating journey through a landscape steeped in history, culture, and architectural splendor",
		type: "French",
		author: "Unknown",
		link: "https://www.gocambodia.tours/the-influence-of-french-colonial-architecture-in-cambodia/#google_vignette",
	},
	{
		title: "The Governor Residence",
		imgSrc: "/image/artwork/fre2(governResidence).jpg",
		alt: "Governor Residence",
		description:
			"Immerse yourself in panoramic views and exhibitions capturing Cambodia’s history and landscapes.",
		type: "French",
		author: "Unknown Italian Architect",
		link: "https://cambodianess.com/article/the-battambang-museum-built-for-a-governor-now-showcasing-the-regions-history",
	},
	{
		title: "Art Basel",
		imgSrc: "/image/artwork/cont3.jpg",
		alt: "Panorama Museum",
		description:
			"Immerse yourself in panoramic views and exhibitions capturing Cambodia’s history and landscapes.",
		type: "Contemporary",
		author: "Sopheap Pich",
		link: "https://aura-asia-art-project.com/en/news/overview-history-of-contemporary-art-in-cambodia/",
	},
];

// Function to categorize arts
function categorizeArts(arts) {
	const categorized = {
		angkorEra: [],
		frenchColonial: [],
		contemporary: [],
	};

	arts.forEach((art) => {
		const type = art.type.toLowerCase();
		if (type.includes("angkor")) {
			categorized.angkorEra.push(art);
		} else if (type.includes("french")) {
			categorized.frenchColonial.push(art);
		} else if (type.includes("contemporary")) {
			categorized.contemporary.push(art);
		} else {
			categorized.contemporary.push(art);
		}
	});

	return categorized;
}

// Function to render arts dynamically
function renderArts(categoryArray, containerId) {
	const container = document.getElementById(containerId);
	if (!container) return; // Prevent errors if container missing
	container.innerHTML = ""; // Clear previous

	categoryArray.forEach((art) => {
		const card = document.createElement("div");
		card.className = "col g-3";
		card.innerHTML = `
            <div class="card museum-card shadow rounded-4 overflow-hidden h-100">
                <img src="${art.imgSrc}" class="card-img-top cardImg" alt="${
			art.alt
		}" />
                <div class="card-body text-center d-flex flex-column justify-content-evenly">
                    <h5 class="card-title">${art.title}</h5>
                    <p class="card-text" style="font-size: 15px;">${
											art.description
										}</p>
                    <p class="card-text text-muted mt-2" style="font-size: 14px;">${
											art.author ? "Author: " + art.author : ""
										}</p>
                    <a href="${
											art.link
										}" class="btn btn-secondary" target="_blank">Learn More</a>
                </div>
            </div>
        `;
		container.appendChild(card);
	});
}

// Categorize arts
const categorizedArts = categorizeArts(arts);

// Render categories
renderArts(categorizedArts.angkorEra, "angkor-container");
renderArts(categorizedArts.frenchColonial, "french-container");
renderArts(categorizedArts.contemporary, "contemporary-container");
