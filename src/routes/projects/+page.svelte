<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { lang } from '$lib/i18n.svelte';
	import { translations } from '$lib/translations';

	let t = $derived(translations[lang.current].projects.items);
	let labels = $derived(translations[lang.current].projects);
	let seo = $derived(translations[lang.current].seo);
</script>

<svelte:head>
	<title>{seo.projectsTitle}</title>
	<meta name="description" content={seo.projectsDesc} />
</svelte:head>

<Navbar />

<main class="relative bg-canvas overflow-x-hidden pt-32">
	<!-- Projects List -->
	{#each t as project, i}
		<ProjectCard {project} index={i} {labels} />
	{/each}

	<!-- Footer -->
	<footer class="flex h-64 items-center justify-center border-t border-content/5">
		<p class="text-[10px] uppercase tracking-[0.8em] opacity-20">End of Portfolio</p>
	</footer>
</main>
