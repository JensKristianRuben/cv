<script lang="ts">
	import { onMount } from 'svelte';
	import LineCanvas from '$lib/components/LineCanvas.svelte';
	import Milestone from '$lib/components/Milestone.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { lang } from '$lib/i18n.svelte';
	import { translations } from '$lib/translations';

	const desktopHeight = 3500;
	
	let t = $derived(translations[lang.current].cv);
	
	// Responsive detection
	let isMobile = $state(false);
	onMount(() => {
		const checkMobile = () => isMobile = window.innerWidth < 768;
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});

	// Process milestones based on screen size
	let processedMilestones = $derived.by(() => {
		const base = t.milestones;
		if (!isMobile) return base;

		// On mobile: Work first, then Education
		const work = base.filter(m => m.type === 'work');
		const edu = base.filter(m => m.type === 'education');
		
		const sortedWork = work.map((m, i) => ({
			...m,
			y: 350 + (i * 450) // Increased from 280
		}));

		const sortedEdu = edu.map((m, i) => ({
			...m,
			y: 350 + (work.length * 450) + 200 + (i * 450) // Increased from 280
		}));
		
		return [...sortedWork, ...sortedEdu];
	});

	let displayHeight = $derived(isMobile 
		? 350 + (processedMilestones.length * 450) + 500 
		: desktopHeight
	);
	
	let workHeaderY = 180; // Moved up from 240
	let eduHeaderY = $derived(isMobile ? 350 + (t.milestones.filter(m => m.type === 'work').length * 450) - 20 : 48 * 4);

	// Scroll tracking for normalized progress
	let progress = $state(0);
	let currentHead = $state(0);
	onMount(() => {
		const handleScroll = () => {
			const winScroll = window.scrollY;
			const viewportHeight = window.innerHeight;

			// Target offset is middle of screen (0.5)
			const targetOffset = viewportHeight * 0.5;

			// Smoothly transition the offset from 0 to targetOffset over the first 300px of scroll
			// This prevents the "jump" at the start.
			const entryDistance = 300;
			const transitionFactor = Math.min(1, winScroll / entryDistance);
			const dynamicOffset = targetOffset * transitionFactor;

			currentHead = winScroll + dynamicOffset;

			if (winScroll < 5) {
				progress = 0;
				currentHead = 0;
			} else {
				progress = Math.min(1, currentHead / displayHeight);
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<Navbar />

<main 
	class="relative w-full bg-canvas overflow-x-hidden"
	style="height: {displayHeight}px;"
>
	<div class="relative w-full h-full max-w-7xl mx-auto px-12 md:px-0">
		<LineCanvas 
			height={displayHeight} 
			points={processedMilestones} 
			workHeaderY={isMobile ? workHeaderY + 25 : 160}
			eduHeaderY={isMobile ? eduHeaderY + 25 : 160}
			{progress}
		/>
		
		<!-- Desktop Track Headers -->
		<div class="hidden md:block absolute left-[25%] top-32 text-center -translate-x-1/2">
			<span class="text-xs uppercase tracking-[0.8em] opacity-60 font-medium">{t.workHeader}</span>
		</div>
		<div class="hidden md:block absolute right-[25%] top-32 text-center translate-x-1/2">
			<span class="text-xs uppercase tracking-[0.8em] opacity-60 font-medium">{t.eduHeader}</span>
		</div>

		<!-- Mobile Track Headers (Sequential) -->
		<div class="md:hidden absolute left-10 transition-all duration-700" style="top: {workHeaderY}px">
			<span class="text-[10px] uppercase tracking-[0.6em] opacity-60 font-bold text-accent">{t.workHeader}</span>
		</div>
		
		<div class="md:hidden absolute left-10 transition-all duration-700" style="top: {eduHeaderY}px">
			<span class="text-[10px] uppercase tracking-[0.6em] opacity-60 font-bold text-accent">{t.eduHeader}</span>
		</div>

		{#each processedMilestones as m}
			<Milestone {...m} {currentHead} />
		{/each}
	</div>

	<!-- Footer -->
	<footer 
		class="absolute bottom-12 left-0 w-full text-center"
	>
		<p class="text-[9px] uppercase tracking-[0.6em] opacity-20">{t.footer}</p>
	</footer>
</main>
