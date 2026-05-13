<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { lang } from '$lib/i18n.svelte';
	import { translations } from '$lib/translations';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import LanguageToggle from '$lib/components/LanguageToggle.svelte';

	let t = $derived(translations[lang.current].nav);
	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	const links = $derived([
		{ name: t.cv, href: '/cv', id: 'cv' },
		{ name: t.projects, href: '/projects', id: 'projects' },
		{ name: t.contact, href: '/contact', id: 'contact' }
	]);
</script>

<main class="fixed inset-0 flex flex-col items-center justify-center bg-canvas p-8">
	<!-- Tools in top right -->
	<div class="absolute top-12 right-12 flex items-center space-x-6 z-50">
		<LanguageToggle />
		<ThemeToggle />
	</div>

	<div class="flex flex-col items-center space-y-6 md:space-y-4">
		{#if mounted}
			{#each links as link, i}
				<div 
					in:fly={{ y: 20, opacity: 0, duration: 1200, delay: 400 + i * 250 }}
					class="overflow-hidden"
				>
					<a
						href={link.href}
						style="view-transition-name: nav-{link.id}"
						class="block text-2xl uppercase tracking-[1em] font-light text-content transition-all duration-700 hover:opacity-50"
					>
						{link.name}
					</a>
				</div>
			{/each}
		{/if}
	</div>

	<!-- Background subtle text -->
	<div class="absolute bottom-12 left-12 opacity-10 pointer-events-none">
		<p class="text-[10px] uppercase tracking-[1em]">Portfolio // 2026</p>
	</div>
</main>

<style>
	/* Ensure the view transition covers the whole element */
	a {
		display: inline-block;
		width: fit-content;
	}
</style>
