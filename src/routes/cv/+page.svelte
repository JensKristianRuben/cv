<script lang="ts">
	import { onMount } from 'svelte';
	import Milestone from '$lib/components/Milestone.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { lang } from '$lib/i18n.svelte';
	import { translations } from '$lib/translations';

	let t = $derived(translations[lang.current].cv);
	let seo = $derived(translations[lang.current].seo);
	
	let scrollContainer: HTMLDivElement;
	let scrollY = $state(0);
	let innerHeight = $state(0);
	let scrollHeight = $state(0);
	
	let progress = $derived.by(() => {
		if (scrollHeight <= innerHeight) return 0;
		const totalScrollable = scrollHeight - innerHeight;
		return Math.min(1, Math.max(0, scrollY / totalScrollable));
	});

	function handleScroll() {
		if (scrollContainer) {
			scrollY = scrollContainer.scrollTop;
		}
	}

	onMount(() => {
		const handleResize = () => {
			if (scrollContainer) {
				innerHeight = scrollContainer.clientHeight;
				scrollHeight = scrollContainer.scrollHeight;
			}
		};
		
		window.addEventListener('resize', handleResize);
		handleResize();
		handleScroll();
		
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<svelte:window bind:innerHeight />

<svelte:head>
	<title>{seo.cvTitle}</title>
	<meta name="description" content={seo.cvDesc} />
</svelte:head>

<Navbar />

<main class="bg-canvas text-content selection:bg-accent selection:text-white">
	<!-- Background Central Line -->
	<div class="fixed left-1/2 top-0 bottom-0 w-[2px] bg-content/5 -translate-x-1/2 hidden md:block">
		<div 
			class="w-full bg-accent transition-all duration-300 ease-out origin-top"
			style="height: {progress * 100}%"
		></div>
	</div>

	<!-- Labels (Fixed Header below Navbar) -->
	<div class="fixed top-32 left-0 w-full z-10 hidden md:block pointer-events-none">
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

	<!-- Snap Container -->
	<div 
		bind:this={scrollContainer}
		onscroll={handleScroll}
		class="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden"
	>
		{#each t.milestones as m}
			<Milestone {...m} />
		{/each}

	</div>
</main>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.snap-y::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.snap-y {
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
	}
</style>
