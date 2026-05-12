export const translations = {
	da: {
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
					x: 20,
					alignment: 'right',
					type: 'work',
					date: 'Jun. 2025 — Nu',
					title: 'Studentermedhjælper',
					summary: 'KOPL',
					details: 'Migration fra WordPress til Svelte 5. Udvikling af interne værktøjer til at understøtte processen samt implementering af AI-agenter.'
				},
				{
					y: 700,
					x: 30,
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
					x: 22,
					alignment: 'right',
					type: 'work',
					date: 'Mar. 2025 — Aug. 2025',
					title: 'Kundeserviceassistent',
					summary: 'føtex, Salling Group',
					details: 'Klassisk kundeservice. Masser af sure kunder. Masser af glade.'
				},
				{
					y: 1500,
					x: 35,
					alignment: 'right',
					type: 'work',
					date: 'Feb. 2023 — Jul. 2024',
					title: 'Tegnsprogstolk',
					summary: 'Tegnsprogstolken.dk',
					details: 'Tolket alt fra lægebesøg og uddannelse til VM i gokart.'
				},
				{
					y: 1750,
					x: 70,
					alignment: 'left',
					type: 'education',
					date: 'Sep. 2019 — Jan. 2023',
					title: 'Tegnsprogstolk og Oversætter',
					summary: 'Københavns Professionshøjskole',
					details: 'Bachelorgrad i tegnsprogstolkning og oversættelse. Uddannelsen handler meget om at lære tegnsprog, men endnu mere om hvordan man tolker et budskab godt. Tegnsprog er ikke internationalt – selvom det ville være smart..'
				},
				{
					y: 2050,
					x: 28,
					alignment: 'right',
					type: 'work',
					date: 'Jun. 2021 — Jan. 2023',
					title: 'Lageransat',
					summary: 'Bilka, Salling Group',
					details: 'Lagerstyring, masser af SAP, masser af POS. Godt sted at arbejde.'
				},
				{
					y: 2400,
					x: 18,
					alignment: 'right',
					type: 'work',
					date: '2018 — 2019',
					title: 'Festival Manager',
					summary: 'Volt',
					details: 'Tour rundt til forskellige europæiske festivaler. Opsætning og nedtagning af produktionen.'
				},
				{
					y: 2750,
					x: 32,
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
					title: 'Clockwise',
					category: 'Real-time Gaming',
					description: 'Dette projekt er en øvelse i at bruge WebSockets til at sende data til flere brugere samtidigt og skabe et live dataflow. Resultatet er et konkurrencepræget spil designet til unge mennesker, der har svært ved at aflæse et analogt ur, men elsker udfordringer. Teknisk demonstrerer det sikker og hurtig tovejs-kommunikation mellem server og klient.',
					gradient: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
					image: '/assets/clockwise.png',
					link: 'https://clockwise-lc5r.onrender.com/',
					animationType: 'slide-left'
				},
				{
					title: 'Opinion Boids',
					category: 'Social Simulation',
					description: 'Jeg synes den klassiske boids simulation er ret cool, og valgte derfor at tage udgangspunkt i den til mit algoritme eksamensprojekt. Projektet undersøger social polarisering og ekkokamre ved at visualisere, hvordan radikale holdninger ændrer flokadfærd. Teknisk er løsningen optimeret med Spatial Hashing, hvilket reducerer kompleksiteten fra O(n²) til O(n) og muliggør tusindvis af agenter i realtid.',
					gradient: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
					image: '/assets/opinion-boids.png',
					link: 'https://opinions-boids.vercel.app/',
					animationType: 'slide-right'
				},				{
					title: 'Medarbejderrejsen',
					category: 'Automation',
					description: 'Integration af DGI Byens HR- og IDP-systemer med fokus på at hjemtage ejerskab og optimere governance. Ved hjælp af Azure Logic Apps er der skabt en modulær low-code løsning, der automatiserer medarbejderens livscyklus fra preboarding til offboarding. Sikkerheden er vægtet højt gennem implementering af Managed Identities og RBAC efter least-privilege-princippet.',
					gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
					image: '/assets/logic-apps-flow.svg',
					animationType: 'zoom-in',
					hideButton: true
				},
				{
					title: 'KOPL website',
					category: 'Web Development',
					description: 'Udviklet website.',
					gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
					image: '/assets/kopl.png',
					link: 'https://kopl.dk/',
					animationType: '3d-unfold'
				},
				{
					title: 'Cloud Audit',
					category: 'Infrastructure',
					description: 'Automatiseret gennemgang og optimering af cloud-ressourcer i Azure.',
					gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
					animationType: 'diagonal'
				},
				{
					title: 'Data Streamer',
					category: 'System Architecture',
					description: 'Håndtering af massive datamængder i realtid med lav latens.',
					gradient: 'linear-gradient(135deg, #3b0764 0%, #4c1d95 100%)',
					animationType: 'perspective-zoom'
				},
				{
					title: 'Portfolio App',
					category: 'Mobile Design',
					description: 'En moderne, responsiv applikation designet til maksimal visuel effekt.',
					gradient: 'linear-gradient(135deg, #701a75 0%, #86198f 100%)',
					animationType: 'skew-reveal'
				},
				{
					title: 'DevOps Hub',
					category: 'Process Optimization',
					description: 'Centraliseret styring af CI/CD pipelines og deployment-strategier.',
					gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 100%)',
					animationType: 'blur-focus'
				}
			]
		}
	},
	en: {
		nav: {
			cv: 'CV',
			projects: 'Projects',
			contact: 'Contact'
		},
		cv: {
			workHeader: 'Experience',
			eduHeader: 'Education',
			footer: 'End of Line',
			milestones: [
				{
					y: 400,
					x: 20,
					alignment: 'right',
					type: 'work',
					date: 'Jun. 2025 — Present',
					title: 'Student Assistant',
					summary: 'KOPL',
					details: 'Migration from WordPress to Svelte 5. Developed internal tools to support the process. Implementation of AI agents.'
				},
				{
					y: 700,
					x: 30,
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
					x: 22,
					alignment: 'right',
					type: 'work',
					date: 'Mar. 2025 — Aug. 2025',
					title: 'Customer Service Assistant',
					summary: 'føtex, Salling Group',
					details: 'Classic customer service. Plenty of angry customers. Plenty of happy ones.'
				},
				{
					y: 1500,
					x: 35,
					alignment: 'right',
					type: 'work',
					date: 'Feb. 2023 — Jul. 2024',
					title: 'Sign Language Interpreter',
					summary: 'Tegnsprogstolken.dk',
					details: 'Interpreted everything from medical appointments and education to the World Karting Championship.'
				},
				{
					y: 1750,
					x: 70,
					alignment: 'left',
					type: 'education',
					date: 'Sep. 2019 — Jan. 2023',
					title: 'Sign Language Interpreter & Translator',
					summary: 'University College Copenhagen',
					details: 'Bachelor\'s degree in Sign Language Interpretation and Translation. The program focuses heavily on learning sign language, but even more so on how to interpret a message effectively. Sign language is not international – though that would be quite clever..'
				},
				{
					y: 2050,
					x: 28,
					alignment: 'right',
					type: 'work',
					date: 'Jun. 2021 — Jan. 2023',
					title: 'Warehouse Associate',
					summary: 'Bilka, Salling Group',
					details: 'Inventory management, plenty of SAP, plenty of POS. Great place to work.'
				},
				{
					y: 2400,
					x: 18,
					alignment: 'right',
					type: 'work',
					date: '2018 — 2019',
					title: 'Festival Manager',
					summary: 'Volt',
					details: 'Touring various European festivals. Managed the setup and dismantling of production infrastructure.'
				},
				{
					y: 2750,
					x: 32,
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
					title: 'Clockwise',
					category: 'Real-time Gaming',
					description: 'This project is an exercise in using WebSockets to broadcast data to multiple users simultaneously, creating a live data flow. I developed a competitive clock game for young people who struggle with analog clocks but love competition. Technically, it demonstrates fast, secure two-way communication between server and client.',
					gradient: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
					image: '/assets/clockwise.png',
					link: 'https://clockwise-lc5r.onrender.com/',
					animationType: 'slide-left'
				},
				{
					title: 'Opinion Boids',
					category: 'Social Simulation',
					description: 'I find the classic boids simulation quite cool, so I chose it as the starting point for my algorithm exam project. The project explores social polarization and echo chambers by visualizing how radical opinions alter flock behavior. Technically, the solution is optimized with Spatial Hashing, reducing complexity from O(n²) to O(n) and enabling thousands of real-time agents.',
					gradient: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
					image: '/assets/opinion-boids.png',
					link: 'https://opinions-boids.vercel.app/',
					animationType: 'slide-right'
				},
				{
					title: 'The Employee Journey',
					category: 'Automation',
					description: 'Integration of HR and IDP systems with a focus on internal ownership and optimized governance. Developed using Azure Logic Apps, this modular low-code solution automates the employee lifecycle from preboarding to offboarding. Security is prioritized through Managed Identities and RBAC following least-privilege principles.',
					gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
					image: '/assets/logic-apps-flow.svg',
					animationType: 'zoom-in',
					hideButton: true
				},
				{
					title: 'KOPL website',
					category: 'Web Development',
					description: 'Developed website.',
					gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
					image: '/assets/kopl.png',
					link: 'https://kopl.dk/',
					animationType: '3d-unfold'
				},
				{
					title: 'Cloud Audit',
					category: 'Infrastructure',
					description: 'Automated review and optimization of cloud resources in Azure.',
					gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
					animationType: 'diagonal'
				},
				{
					title: 'Data Streamer',
					category: 'System Architecture',
					description: 'Handling massive data volumes in real-time with ultra-low latency.',
					gradient: 'linear-gradient(135deg, #3b0764 0%, #4c1d95 100%)',
					animationType: 'perspective-zoom'
				},
				{
					title: 'Portfolio App',
					category: 'Mobile Design',
					description: 'A modern, responsive application designed for maximum visual impact.',
					gradient: 'linear-gradient(135deg, #701a75 0%, #86198f 100%)',
					animationType: 'skew-reveal'
				},
				{
					title: 'DevOps Hub',
					category: 'Process Optimization',
					description: 'Centralized management of CI/CD pipelines and deployment strategies.',
					gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 100%)',
					animationType: 'blur-focus'
				}
			]
		}
	}
};
