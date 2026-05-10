<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { lang } from '$lib/i18n.svelte';
	import { translations } from '$lib/translations';

	let t = $derived(translations[lang.current].contact);
</script>

<Navbar unlocked={true} />

<main class="flex min-h-screen flex-col items-center justify-center bg-canvas px-12 pt-32">
	<div class="max-w-2xl w-full text-center text-content">
		<div class="space-y-12">
			<div>
				<p class="text-[9px] uppercase tracking-[0.5em] opacity-40 mb-2">{t.mailLabel}</p>
				<a href="mailto:jenskristian79@gmail.com" class="text-sm uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">jenskristian79@gmail.com</a>
			</div>
			
			<div class="pt-12">
				<div class="flex justify-center space-x-12">
					{#each t.socials as social}
						<a 
							href={social.href} 
							target="_blank" 
							rel="noopener noreferrer"
							class="text-[10px] uppercase tracking-widest hover:opacity-50 transition-opacity"
						>
							{social.name}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>
