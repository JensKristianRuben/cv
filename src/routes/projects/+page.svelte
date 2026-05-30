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

<main class="w-full min-h-screen bg-canvas selection:bg-content selection:text-canvas">
	<!-- Projects List -->
	<div class="flex flex-col w-full">
		{#each t as project, i}
			<ProjectCard {project} index={i} {labels} />
		{/each}
	</div>

	<!-- Simple Footer -->
	<footer class="py-24 px-6 text-center">
		<a href="/contact" class="text-sm uppercase tracking-[0.5em] opacity-40 hover:opacity-100 transition-opacity">
			Start a conversation
		</a>
	</footer>
</main>
