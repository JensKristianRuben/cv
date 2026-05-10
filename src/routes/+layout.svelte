<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import './layout.css';
	
	let { children } = $props();

	const pageOrder = ['/', '/cv', '/projects', '/contact'];

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		const fromIndex = pageOrder.indexOf(navigation.from?.url.pathname || '');
		const toIndex = pageOrder.indexOf(navigation.to?.url.pathname || '');
		
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
