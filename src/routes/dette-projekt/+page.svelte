<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { lang } from '$lib/i18n.svelte';
	import { translations } from '$lib/translations';
	
	let seo = $derived(translations[lang.current].seo);
</script>

<svelte:head>
	<title>{seo.detteProjektTitle}</title>
	<meta name="description" content={seo.detteProjektDesc} />
</svelte:head>

<Navbar />

<main class="bg-canvas text-content min-h-screen pt-32 px-8">
	<!-- Content will be added here -->
</main>
