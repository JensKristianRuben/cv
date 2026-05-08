<script lang="ts">
	import LineCanvas from '$lib/components/LineCanvas.svelte';
	import Milestone from '$lib/components/Milestone.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	const totalHeight = 5500;

	// Work with varying x around 25, Education with varying x around 75
	const milestones = [
		{
			y: 600,
			x: 20,
			alignment: 'right',
			type: 'work',
			date: 'Jun. 2025 — Nu',
			title: 'Studentermedhjælper',
			summary: 'KOPL / Frontend Development & SEO',
			details: 'Modernizing and maintaining the company website. Implementing and optimizing SEO strategies.'
		},
		{
			y: 900,
			x: 30,
			alignment: 'right',
			type: 'work',
			date: 'Maj 2025 — Nu',
			title: 'Studentermedhjælper IT',
			summary: 'DGI Byen / Automatisering & Infrastruktur',
			details: 'IT process improvement and automation using Logic Apps.'
		},
		{
			y: 1300,
			x: 75,
			alignment: 'left',
			type: 'education',
			date: 'Jan. 2024 — Jun. 2026',
			title: 'Datamatiker',
			summary: 'Erhvervsakademi København',
			details: 'AP degree in computer science. Java, HTML and modern software development.'
		},
		{
			y: 1700,
			x: 22,
			alignment: 'right',
			type: 'work',
			date: 'Mar. 2025 — Aug. 2025',
			title: 'Kundeservice assistent',
			summary: 'føtex, Salling Group',
			details: 'Handling customer interactions and service management.'
		},
		{
			y: 2200,
			x: 35,
			alignment: 'right',
			type: 'work',
			date: 'Feb. 2023 — Jul. 2024',
			title: 'Tegnsprogstolk',
			summary: 'Tegnsprogstolken.dk ApS',
			details: 'Interpreted technical communication within IT and educational programs.'
		},
		{
			y: 2600,
			x: 70,
			alignment: 'left',
			type: 'education',
			date: 'Sep. 2019 — Jan. 2023',
			title: 'Tegnsprogstolk og Oversætter',
			summary: 'Københavns Professionshøjskole',
			details: "Bachelor's degree in Sign Language Interpretation and Translation."
		},
		{
			y: 3100,
			x: 28,
			alignment: 'right',
			type: 'work',
			date: 'Jun. 2021 — Jan. 2023',
			title: 'Lageransat',
			summary: 'Bilka, Salling Group',
			details: 'Inventory management and SAP ERP operations.'
		},
		{
			y: 3700,
			x: 18,
			alignment: 'right',
			type: 'work',
			date: '2018 — 2019',
			title: 'Festival Manager',
			summary: 'Volt',
			details: 'Managing operations and IT infrastructure at multiple festival sites across Europe.'
		},
		{
			y: 4300,
			x: 32,
			alignment: 'right',
			type: 'work',
			date: '2018 — 2019',
			title: 'Hotel medarbejder',
			summary: 'Skinetworks (Frankrig)',
			details: 'Daily hotel operations and guest interaction in Huez.'
		}
	];
</script>

<Navbar unlocked={true} />

<main 
	class="relative w-full bg-canvas overflow-x-hidden"
	style="height: {totalHeight}px;"
>
	<div class="relative w-full h-full max-w-7xl mx-auto px-12 md:px-0">
		<LineCanvas height={totalHeight} points={milestones} />
		<!-- Track Headers -->
		<div class="absolute left-[15%] top-48 text-center md:left-[22%]">
			<span class="text-[10px] uppercase tracking-[0.6em] opacity-30">Erhverv</span>
		</div>
		<div class="absolute right-[15%] top-48 text-center md:right-[22%]">
			<span class="text-[10px] uppercase tracking-[0.6em] opacity-30">Uddannelse</span>
		</div>

		{#each milestones as m}
			<Milestone {...m} />
		{/each}
	</div>

	<!-- Footer -->
	<footer 
		class="absolute bottom-12 left-0 w-full text-center"
	>
		<p class="text-[9px] uppercase tracking-[0.6em] opacity-20">End of Line</p>
	</footer>
</main>
