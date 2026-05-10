<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Menu, X } from 'lucide-svelte';
	import { page } from '$app/state';
	import { lang } from '$lib/i18n.svelte';
	import { translations } from '$lib/translations';
	import ThemeToggle from './ThemeToggle.svelte';
	import LanguageToggle from './LanguageToggle.svelte';

	let { unlocked = true } = $props();
	let isOpen = $state(false);

	let t = $derived(translations[lang.current].nav);

	const links = $derived([
		{ name: t.cv, href: '/cv' },
		{ name: t.projects, href: '/projects' },
		{ name: t.contact, href: '/contact' }
	]);

	function isActive(href: string) {
		return page.url.pathname === href;
	}
</script>

<nav class="fixed left-0 top-0 z-40 w-full px-8 py-12 transition-opacity duration-1000 {unlocked ? 'opacity-100' : 'opacity-0 pointer-events-none'}">
	<div class="flex items-start justify-between">
		<!-- Desktop Navigation (Left Aligned) -->
		<div class="hidden md:flex flex-col space-y-4">
			{#each links as link}
				<a
					href={link.href}
					class="text-2xl uppercase tracking-[1em] transition-all duration-300 text-content {isActive(link.href) ? 'opacity-100' : 'opacity-20 hover:opacity-50'}"
				>
					{link.name}
				</a>
			{/each}
		</div>

		<!-- Mobile Burger Button (Left Aligned) -->
		<button
			class="md:hidden text-content p-2 opacity-80 hover:opacity-100 transition-opacity z-50 cursor-pointer"
			onclick={() => (isOpen = !isOpen)}
			aria-label="Toggle menu"
		>
			{#if isOpen}
				<X size={24} strokeWidth={1} />
			{:else}
				<Menu size={24} strokeWidth={1} />
			{/if}
		</button>

		<!-- Top Right Tools (Desktop Only) -->
		<div class="hidden md:flex items-center space-x-4 md:space-x-6">
			<LanguageToggle />
			<ThemeToggle />
		</div>
	</div>

	<!-- Mobile Menu Overlay -->
	{#if isOpen}
		<div
			transition:fade={{ duration: 300 }}
			class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-canvas md:hidden"
		>
			<div class="flex flex-col items-center space-y-12">
				<div class="flex flex-col items-center space-y-12 mb-8">
					{#each links as link}
						<a
							href={link.href}
							class="text-2xl uppercase tracking-[0.8em] transition-all text-content {isActive(link.href) ? 'opacity-100' : 'opacity-30'}"
							onclick={() => (isOpen = false)}
						>
							{link.name}
						</a>
					{/each}
				</div>

				<!-- Mobile Toggles -->
				<div class="flex items-center space-x-8 pt-12 border-t border-content/10">
					<LanguageToggle />
					<ThemeToggle />
				</div>
			</div>
		</div>
	{/if}
</nav>
