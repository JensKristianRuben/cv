<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar unlocked={true} />

<main class="flex min-h-screen flex-col items-center justify-center bg-canvas px-12 pt-32">
	<div class="max-w-4xl w-full">
		<h1 class="text-4xl uppercase tracking-[0.8em] mb-24 text-center text-content">Projects</h1>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-24">
			{#each [1, 2, 3, 4] as i}
				<div class="group cursor-pointer">
					<div class="aspect-video w-full bg-content/5 mb-6 transition-colors group-hover:bg-content/10 flex items-center justify-center">
						<span class="text-[10px] uppercase tracking-widest opacity-20 text-content">Preview {i}</span>
					</div>
					<h2 class="text-xs uppercase tracking-[0.4em] mb-2 text-content">Project Zero {i}</h2>
					<p class="text-[9px] uppercase tracking-widest opacity-40 text-content">System Architecture / Design</p>
				</div>
			{/each}
		</div>
	</div>
</main>
