<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { lang } from '$lib/i18n.svelte';
	import './layout.css';
	
	let { children } = $props();

	// Update html lang attribute when language changes
	$effect(() => {
		document.documentElement.lang = lang.current;
	});

	const pageOrder = ['/', '/cv', '/projects', '/contact'];

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		const fromPath = (navigation.from?.url.pathname || '').replace(/\/$/, '') || '/';
		const toPath = (navigation.to?.url.pathname || '').replace(/\/$/, '') || '/';

		const fromIndex = pageOrder.indexOf(fromPath);
		const toIndex = pageOrder.indexOf(toPath);
		
		const isBackwards = fromIndex > toIndex;
		if (isBackwards) {
			document.documentElement.classList.add('backwards');
		} else {
			document.documentElement.classList.remove('backwards');
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

{@render children()}
