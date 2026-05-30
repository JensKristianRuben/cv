export const translations = {
	da: {
		seo: {
			homeTitle: 'Jens Kristian Ruben | Datamatiker med fokus på automatisering, udvikling og devops',
			homeDesc: 'Portfolio for Jens Kristian Ruben. Datamatiker med fokus på automatisering, udvikling og devops. Se mine projekter og erhvervserfaring her.',
			cvTitle: 'CV & Erfaring | Jens Kristian Ruben',
			cvDesc: 'Se min erhvervserfaring og uddannelse. Fra tegnsprogstolkning til softwareudvikling og IT-automatisering.',
			projectsTitle: 'Projekter | Portfolio',
			projectsDesc: 'Udforsk mine softwareprojekter, herunder Weeks Left, Clockwise og simulationer udviklet med Svelte og WebSockets.',
			contactTitle: 'Kontakt | Jens Kristian Ruben',
			contactDesc: 'Kontakt mig for samarbejde eller spørgsmål. Find mine sociale profiler og direkte mail her.'
		},
		nav: {
			cv: 'CV',
			projects: 'Projekter',
			contact: 'Kontakt'
		},
		cv: {
			workHeader: 'Erhverv',
			eduHeader: 'Uddannelse',
			footer: 'End of Line',
			milestones: [
				{
					y: 400,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: 'Jun. 2025 — Nu',
					title: 'Studentermedhjælper',
					summary: 'KOPL',
					details: 'Migration fra WordPress til Svelte 5. Udvikling af interne værktøjer til at understøtte processen samt implementering af AI-agenter.'
				},
				{
					y: 700,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: 'Maj 2025 — Nu',
					title: 'Studentermedhjælper',
					summary: 'DGI Byen',
					details: 'Automatisering af medarbejdercyklussen fra preboarding til on- og offboarding. Integration af HR- og IDP-systemer. Arbejde med Microsoft Azure-suiten, SSO-implementering og udrulning af phishing-simuleringer.'
				},
				{
					y: 950,
					x: 75,
					alignment: 'left',
					type: 'education',
					date: 'Jan. 2024 — Jun. 2026',
					title: 'Datamatiker',
					summary: 'Erhvervsakademi København',
					details: 'Praktisk uddannelse i softwareudvikling og IT-verdenen. Mit primære fokus og interesse under studiet har været filosofien bag samt den tekniske implementering af DevOps-tankegangen. Jeg har arbejdet med flere programmeringssprog og fundet glæde ved både frontend- og backendudvikling. Min største motivation er at løse problemer.'
				},
				{
					y: 1200,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: 'Mar. 2025 — Aug. 2025',
					title: 'Kundeserviceassistent',
					summary: 'føtex, Salling Group',
					details: 'Klassisk kundeservice. Masser af sure kunder. Masser af glade.'
				},
				{
					y: 1500,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: 'Feb. 2023 — Jul. 2024',
					title: 'Tegnsprogstolk',
					summary: 'Tegnsprogstolken.dk',
					details: 'Tolket alt fra lægebesøg og uddannelse til VM i gokart.'
				},
				{
					y: 1750,
					x: 75,
					alignment: 'left',
					type: 'education',
					date: 'Sep. 2019 — Jan. 2023',
					title: 'Tegnsprogstolk og Oversætter',
					summary: 'Københavns Professionshøjskole',
					details: 'Bachelorgrad i tegnsprogstolkning og oversættelse. Uddannelsen handler meget om at lære tegnsprog, men endnu mere om hvordan man tolker et budskab godt. Tegnsprog er ikke internationalt – selvom det ville være smart..'
				},
				{
					y: 2050,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: 'Jun. 2021 — Jan. 2023',
					title: 'Lageransat',
					summary: 'Bilka, Salling Group',
					details: 'Lagerstyring, masser af SAP, masser af POS. Godt sted at arbejde.'
				},
				{
					y: 2400,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: '2018 — 2019',
					title: 'Festival Manager',
					summary: 'Volt',
					details: 'Tour rundt til forskellige europæiske festivaler. Opsætning og nedtagning af produktionen.'
				},
				{
					y: 2750,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: '2018 — 2019',
					title: 'Hotelmedarbejder',
					summary: 'Skinetworks (Frankrig)',
					details: 'Hoteldrift, bararbejde, morgen- og aftenservice. Rekord for hurtigste klargøring af værelse.'
				}
			]
		},
		contact: {
			title: 'Kontakt',
			mailLabel: 'Mail',
			socials: [
				{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/jenskrh/' },
				{ name: 'GitHub', href: 'https://github.com/JensKristianRuben' }
			]
		},
		projects: {
			viewProject: 'Se Projekt',
			viewCaseStudy: 'Se Case Study',
			items: [
				{
					title: 'APIX - Hovedprojekt',
					description: 'Hovedprojekt for ECIT/INVIXO. En applikation udviklet til at søge på tværs af virksomhedens mange dattervirksomheder. Projektet er bygget med en "AI-first" tilgang for at teste grænserne for en autonom udviklingspipeline med "human-in-the-loop". Der er gjort omfattende brug af "skills" for at sikre, at AI-agenter nemt kan skalere og videreudvikle projektet.',
					image: '/assets/apix-logo.svg',
					hideButton: true
				},
				{
					title: 'Weeks Left',
					description: 'En visualisering af din tid tilbage vist i uger. Baseret på Danmarks Statistiks data om middellevetid.',
					image: '/assets/timeleft.png',
					link: 'https://weeksleft-five.vercel.app/'
				},
				{
					title: 'Clockwise',
					description: 'Dette projekt er en øvelse i at bruge WebSockets til at sende data til flere brugere samtidigt og skabe et live dataflow. Resultatet er et konkurrencepræget spil designet til unge mennesker, der har svært ved at aflæse et analogt ur, men elsker udfordringer. Teknisk demonstrerer det sikker og hurtig tovejs-kommunikation mellem server og klient.',
					image: '/assets/clockwise.png',
					link: 'https://clockwise-lc5r.onrender.com/'
				},
				{
					title: 'Opinion Boids',
					description: 'Jeg synes den klassiske boids simulation er ret cool, og valgte derfor at tage udgangspunkt i den til mit algoritme eksamensprojekt. Projektet undersøger social polarisering og ekkokamre ved at visualisere, hvordan radikale holdninger ændrer flokadfærd. Teknisk er løsningen optimeret med Spatial Hashing, hvilket reducerer kompleksiteten fra O(n²) til O(n) og muliggør tusindvis af agenter i realtid.',
					image: '/assets/opinion-boids.png',
					link: 'https://opinions-boids.vercel.app/'
				},				{
					title: 'Medarbejderrejsen',
					description: 'Integration af DGI Byens HR- og IDP-systemer med fokus på at hjemtage ejerskab og optimere governance. Ved hjælp af Azure Logic Apps er der skabt en modulær low-code løsning, der automatiserer medarbejderens livscyklus fra preboarding til offboarding. Sikkerheden er vægtet højt gennem implementering af Managed Identities og RBAC efter least-privilege-princippet.',
					gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
					image: '/assets/logic-apps-flow.svg',
					hideButton: true
				},
				{
					title: 'KOPL website',
					description: 'Udviklet hjemmeside for virksomheden. Migreret fra wordpress løsning til Sveltekit med svelte 5.',
					image: '/assets/kopl.png',
					link: 'https://kopl.dk/'
				}
			]
		}
	},
	en: {
		seo: {
			homeTitle: 'Jens Kristian Ruben | Computer Scientist focused on automation, development and devops',
			homeDesc: 'Portfolio of Jens Kristian Ruben. Computer Science student focused on automation, development and devops. Explore my projects and professional experience.',
			cvTitle: 'CV & Experience | Jens Kristian Ruben',
			cvDesc: 'Explore my professional background and education. From sign language interpretation to software development and IT automation.',
			projectsTitle: 'Projects | Portfolio',
			projectsDesc: 'Explore my software projects, including Weeks Left, Clockwise, and simulations built with Svelte and WebSockets.',
			contactTitle: 'Contact | Jens Kristian Ruben',
			contactDesc: 'Get in touch for collaborations or inquiries. Find my social profiles and direct email here.'
		},
		nav: {
			cv: 'CV',
			projects: 'Projects',
			contact: 'Contact'
		},
		cv: {
			workHeader: 'Experience',
			eduHeader: 'Education',
			footer: 'End of Transmission',
			milestones: [
				{
					y: 400,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: 'Jun. 2025 — Present',
					title: 'Student Assistant',
					summary: 'KOPL',
					details: 'Migration from WordPress to Svelte 5. Developed internal tools to support the process. Implementation of AI agents.'
				},
				{
					y: 700,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: 'May 2025 — Present',
					title: 'Student Assistant',
					summary: 'DGI Byen',
					details: 'Automation of the employee lifecycle from Preboarding to on- and offboarding. Integration of HR systems and IDP systems. Worked with the Microsoft Azure suite, SSO implementation, and rolled out Phishing simulations.'
				},
				{
					y: 950,
					x: 75,
					alignment: 'left',
					type: 'education',
					date: 'Jan. 2024 — Jun. 2026',
					title: 'Computer Science Student',
					summary: 'Copenhagen School of Design and Technology',
					details: 'Practical education in software development and the IT landscape. My primary focus and interest throughout my studies has been the philosophy and technical implementation of the DevOps mindset. I have worked with multiple programming languages and found enjoyment in both frontend and backend development. My greatest motivation is solving problems.'
				},
				{
					y: 1200,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: 'Mar. 2025 — Aug. 2025',
					title: 'Customer Service Assistant',
					summary: 'føtex, Salling Group',
					details: 'Classic customer service. Plenty of angry customers. Plenty of happy ones.'
				},
				{
					y: 1500,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: 'Feb. 2023 — Jul. 2024',
					title: 'Sign Language Interpreter',
					summary: 'Tegnoprogstolken.dk',
					details: 'Interpreted everything from medical appointments and education to the World Karting Championship.'
				},
				{
					y: 1750,
					x: 75,
					alignment: 'left',
					type: 'education',
					date: 'Sep. 2019 — Jan. 2023',
					title: 'Sign Language Interpreter & Translator',
					summary: 'University College Copenhagen',
					details: 'Bachelor\'s degree in Sign Language Interpretation and Translation. The program focuses heavily on learning sign language, but even more so on how to interpret a message effectively. Sign language is not international – though that would be quite clever..'
				},
				{
					y: 2050,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: 'Jun. 2021 — Jan. 2023',
					title: 'Warehouse Associate',
					summary: 'Bilka, Salling Group',
					details: 'Inventory management, plenty of SAP, plenty of POS. Great place to work.'
				},
				{
					y: 2400,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: '2018 — 2019',
					title: 'Festival Manager',
					summary: 'Volt',
					details: 'Touring various European festivals. Managed the setup and dismantling of production infrastructure.'
				},
				{
					y: 2750,
					x: 25,
					alignment: 'right',
					type: 'work',
					date: '2018 — 2019',
					title: 'Hotel Staff',
					summary: 'Skinetworks (France)',
					details: 'Hotel operations, bartending, morning and evening service. Record for fastest room preparation.'
				}
			]
		},
		contact: {
			title: 'Contact',
			mailLabel: 'Mail',
			socials: [
				{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/jenskrh/' },
				{ name: 'GitHub', href: 'https://github.com/JensKristianRuben' }
			]
		},
		projects: {
			viewProject: 'View Project',
			viewCaseStudy: 'View Case Study',
			items: [
				{
					title: 'APIX - Hovedprojekt',
					description: 'Core project for ECIT/INVIXO. An application developed to search across the company\'s many subsidiaries. The project was built with an "AI-first" approach to test the boundaries of an autonomous development pipeline with "human-in-the-loop". Extensive use of "skills" ensures that AI agents can easily scale and continue developing the project.',
					image: '/assets/apix-logo.svg',
					hideButton: true
				},
				{
					title: 'Weeks Left',
					description: 'A visualization of your remaining time shown in weeks. Based on Statistics Denmark\'s data on average life expectancy.',
					image: '/assets/timeleft.png',
					link: 'https://weeksleft-five.vercel.app/'
				},
				{
					title: 'Clockwise',
					description: 'This project is an exercise in using WebSockets to broadcast data to multiple users simultaneously, creating a live data flow. I developed a competitive clock game for young people who struggle with analog clocks but love competition. Technically, it demonstrates fast, secure two-way communication between server and client.',
					image: '/assets/clockwise.png',
					link: 'https://clockwise-lc5r.onrender.com/'
				},
				{
					title: 'Opinion Boids',
					description: 'I find the classic boids simulation quite cool, so I chose it as the starting point for my algorithm exam project. The project explores social polarization and echo chambers by visualizing how radical opinions alter flock behavior. Technically, the solution is optimized with Spatial Hashing, reducing complexity from O(n²) to O(n) and enabling thousands of real-time agents.',
					image: '/assets/opinion-boids.png',
					link: 'https://opinions-boids.vercel.app/'
				},
				{
					title: 'The Employee Journey',
					description: 'Integration of HR and IDP systems with a focus on internal ownership and optimized governance. Developed using Azure Logic Apps, this modular low-code solution automates the employee lifecycle from preboarding to offboarding. Security is prioritized through Managed Identities and RBAC following least-privilege principles.',
					gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
					image: '/assets/logic-apps-flow.svg',
					hideButton: true
				},
				{
					title: 'KOPL website',
					description: 'Developed website for the company. Migrated from a WordPress solution to SvelteKit with Svelte 5.',
					image: '/assets/kopl.png',
					link: 'https://kopl.dk/'
				}
			]
		}
	}
};
