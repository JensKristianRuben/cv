<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import ScrollSVG from '$lib/components/ScrollSVG.svelte';
	import { lang } from '$lib/i18n.svelte';
	import { translations } from '$lib/translations';
	
	let seo = $derived(translations[lang.current].seo);

	let scrollY = $state(0);
	let innerHeight = $state(0);
	let scrollHeight = $state(0);

	const stepContent = [
		{ title: 'Code', description: 'Applikationen er skrevet i Svelte 5 med TypeScript for maksimal typesikkerhed og performance.' },
		{ title: 'Build', description: 'Vite håndterer build-processen og optimerer assets, mens Docker sikrer et konsistent miljø.' },
		{ title: 'Test', description: 'Playwright kører end-to-end tests for at sikre, at brugeroplevelsen er fejlfri på tværs af browsere.' },
		{ title: 'Release', description: 'Automatiseret CI/CD via GitHub Actions sørger for at koden altid er klar til release.' },
		{ title: 'Deploy', description: 'Projektet deployes automatisk til Vercel for lynhurtig levering via deres Edge Network.' },
		{ title: 'Operate', description: 'Driften er serverless, hvilket minimerer vedligeholdelse og maksimerer oppetid.' },
		{ title: 'Monitor', description: 'Lighthouse CI overvåger performance og tilgængelighed ved hvert eneste commit.' },
		{ title: 'Plan', description: 'Nye features planlægges med fokus på brugercentreret design og moderne webstandarder.' }
	];

	let progress = $state(0);
	let sectionRefs = $state<HTMLElement[]>([]);

	function handleScroll() {
		if (!sectionRefs.length || !sectionRefs[0]) return;

		// Calculate progress from the first section to the last section
		const firstRect = sectionRefs[0].getBoundingClientRect();
		const lastRect = sectionRefs[sectionRefs.length - 1].getBoundingClientRect();
		
		const startPoint = firstRect.top + scrollY + firstRect.height / 2;
		const endPoint = lastRect.top + scrollY + lastRect.height / 2;
		const viewportCenter = scrollY + innerHeight / 2;

		const totalDistance = endPoint - startPoint;
		const currentDistance = viewportCenter - startPoint;

		// Map distance to 0-1 range smoothly
		progress = Math.min(Math.max(currentDistance / totalDistance, 0), 1);
	}
</script>

<svelte:window bind:scrollY bind:innerHeight onscroll={handleScroll} />

<svelte:head>
	<title>{seo.detteProjektTitle}</title>
	<meta name="description" content={seo.detteProjektDesc} />
</svelte:head>

<main class="bg-canvas relative" bind:clientHeight={scrollHeight}>
	<!-- DevOps Circle - Fixed on the right half of the screen - Half size as requested -->
	<div class="fixed top-1/2 -translate-y-1/2 right-0 w-[30vw] z-30 pointer-events-none opacity-10 md:opacity-100 transition-opacity duration-500">
		<ScrollSVG {progress} />
	</div>

	<!-- Scrolling Content Area - Left Aligned -->
	<div class="relative z-10 w-full max-w-2xl ml-8 md:ml-32 pt-32 pb-[60vh]">
		<h1 class="text-6xl md:text-9xl mb-64 tracking-tighter italic font-black uppercase opacity-10">
			Workflow
		</h1>

		<div class="space-y-[60vh]">
			{#each stepContent as step, i}
				<section 
					bind:this={sectionRefs[i]}
					class="transition-all duration-1000"
					style="opacity: {progress >= (i / (stepContent.length - 1)) ? 1 : 0.1}"
				>
					<h2 class="text-5xl md:text-8xl mb-6 uppercase tracking-tighter italic font-black">
						{step.title}
					</h2>
					<p class="text-xl md:text-4xl font-light leading-relaxed">
						{step.description}
					</p>
				</section>
			{/each}
		</div>
	</div>

	<!-- Back button or simple home link since Navbar is gone -->
	<a href="/" class="fixed top-12 left-8 md:left-32 z-50 text-xl uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
		← Tilbage
	</a>
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
