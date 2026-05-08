<script lang="ts">
	import { onMount } from 'svelte';
	import { Sun, Moon } from 'lucide-svelte';

	let isDark = $state(false);

	onMount(() => {
		// Sync local state with the class set by the blocking script in app.html
		isDark = document.documentElement.classList.contains('dark');
	});

	function toggle() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<button
	onclick={toggle}
	class="p-2 opacity-40 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
	aria-label="Toggle theme"
>
	{#if isDark}
		<Sun size={16} strokeWidth={1.5} class="text-content" />
	{:else}
		<Moon size={16} strokeWidth={1.5} class="text-content" />
	{/if}
</button>
