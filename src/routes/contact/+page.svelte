<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar unlocked={true} />

<main class="flex min-h-screen flex-col items-center justify-center bg-canvas px-12 pt-32">
	<div class="max-w-2xl w-full text-center text-content">
		<h1 class="text-4xl uppercase tracking-[0.8em] mb-24">Contact</h1>
		
		<div class="space-y-12">
			<div>
				<p class="text-[9px] uppercase tracking-[0.5em] opacity-40 mb-2">Mail</p>
				<a href="mailto:jenskristian79@gmail.com" class="text-sm uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">jenskristian79@gmail.com</a>
			</div>
			
			<div class="pt-12">
				<div class="flex justify-center space-x-12">
					<a href="#" class="text-[10px] uppercase tracking-widest hover:opacity-50 transition-opacity">LinkedIn</a>
					<a href="#" class="text-[10px] uppercase tracking-widest hover:opacity-50 transition-opacity">GitHub</a>
					<a href="#" class="text-[10px] uppercase tracking-widest hover:opacity-50 transition-opacity">Instagram</a>
				</div>
			</div>
		</div>
	</div>
</main>
