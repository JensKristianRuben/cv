<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Menu, X } from 'lucide-svelte';
	import { page } from '$app/state';
	import ThemeToggle from './ThemeToggle.svelte';

	let { unlocked = true } = $props();
	let isOpen = $state(false);

	const links = [
		{ name: 'CV', href: '/cv' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Contact', href: '/contact' }
	];

	function isActive(href: string) {
		return page.url.pathname === href;
	}
</script>

<nav class="fixed left-0 top-0 z-40 w-full px-8 py-12 transition-opacity duration-1000 {unlocked ? 'opacity-100' : 'opacity-0 pointer-events-none'}">
	<div class="flex items-start justify-between">
		<!-- Main Navigation (Left Aligned) -->
		<div class="flex flex-col space-y-4">
			{#each links as link}
				<a
					href={link.href}
					class="text-2xl uppercase tracking-[1em] transition-all duration-300 text-content {isActive(link.href) ? 'opacity-100' : 'opacity-20 hover:opacity-50'}"
				>
					{link.name}
				</a>
			{/each}
		</div>

		<!-- Top Right Tools (Theme Toggle + Burger) -->
		<div class="flex items-center space-x-6">
			<ThemeToggle />
			
			<button
				class="md:hidden text-content"
				onclick={() => (isOpen = !isOpen)}
				aria-label="Toggle menu"
			>
				{#if isOpen}
					<X size={20} strokeWidth={1} />
				{:else}
					<Menu size={20} strokeWidth={1} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu Overlay -->
	{#if isOpen}
		<div
			transition:fade={{ duration: 300 }}
			class="fixed inset-0 z-30 flex flex-col items-center justify-center bg-canvas md:hidden"
		>
			<div class="flex flex-col items-center space-y-8">
				{#each links as link}
					<a
						href={link.href}
						class="text-xl uppercase tracking-[0.8em] transition-all text-content {isActive(link.href) ? 'opacity-100' : 'opacity-30'}"
						onclick={() => (isOpen = false)}
					>
						{link.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
