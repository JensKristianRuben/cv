<script lang="ts">
	import { onMount } from 'svelte';
	import Milestone from '$lib/components/Milestone.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { lang } from '$lib/i18n.svelte';
	import { translations } from '$lib/translations';

	let t = $derived(translations[lang.current].cv);
	let seo = $derived(translations[lang.current].seo);
	
	let scrollY = $state(0);
	let innerHeight = $state(0);
	let scrollHeight = $state(0);
	
	let progress = $derived.by(() => {
		const totalScrollable = scrollHeight - innerHeight;
		if (totalScrollable <= 0) return 0;
		return Math.min(1, Math.max(0, scrollY / totalScrollable));
	});

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};
		
		const handleResize = () => {
			innerHeight = window.innerHeight;
			scrollHeight = document.documentElement.scrollHeight;
		};
		
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		
		// Initial values
		handleResize();
		handleScroll();
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<svelte:window />

<svelte:head>
	<title>{seo.cvTitle}</title>
	<meta name="description" content={seo.cvDesc} />
</svelte:head>

<Navbar />

<main class="relative bg-canvas text-content selection:bg-accent selection:text-white min-h-screen pb-20">
	<!-- Background Central Line -->
	<div class="fixed left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-content/5 -translate-x-1/2 z-0">
		<div 
			class="w-full bg-accent transition-all duration-150 ease-out origin-top"
			style="height: {progress * 100}%"
		></div>
	</div>

	<!-- Labels (Scrollable Header) -->
	<div class="absolute top-24 md:top-32 left-0 w-full z-10 hidden md:block pointer-events-none">
		<div class="max-w-7xl mx-auto grid grid-cols-[1fr_2px_1fr] w-full items-center">
			<div class="text-right pr-16">
				<span class="text-[10px] uppercase tracking-[0.8em] opacity-40 font-bold text-accent">{t.workHeader}</span>
			</div>
			<div class="w-full h-4"></div>
			<div class="text-left pl-16">
				<span class="text-[10px] uppercase tracking-[0.8em] opacity-40 font-bold text-accent">{t.eduHeader}</span>
			</div>
		</div>
	</div>

	<!-- Container -->
	<div class="relative pt-32">
		{#each t.milestones as m}
			<Milestone {...m} />
		{/each}
	</div>
</main>

<style>
</style>
