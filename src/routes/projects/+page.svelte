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

<main class="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-canvas scroll-smooth">
	<!-- Projects List -->
	{#each t as project, i}
		<ProjectCard {project} index={i} {labels} />
	{/each}
</main>
