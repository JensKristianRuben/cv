<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { lang } from '$lib/i18n.svelte';
	import { translations } from '$lib/translations';
	import { fade, fly } from 'svelte/transition';

	let t = $derived(translations[lang.current].contact);
	let seo = $derived(translations[lang.current].seo);
</script>

<svelte:head>
	<title>{seo.contactTitle}</title>
	<meta name="description" content={seo.contactDesc} />
</svelte:head>

<Navbar />

<main class="flex min-h-screen flex-col items-center justify-center bg-canvas px-12 pt-32 pb-16">
	<div class="max-w-2xl w-full flex flex-col items-center text-center text-content space-y-16">
		
		<!-- Profile Image Container -->
		<div class="relative" in:fly={{ y: -20, duration: 1000, delay: 200 }}>
			<div class="w-72 h-72 md:w-96 md:h-96 relative">
				<!-- Background Blob -->
				<div class="absolute inset-0 bg-accent/5 rounded-full blur-3xl"></div>
				
				<img 
					src="/assets/profile-without-background.png" 
					alt="Jens Kristian Ruben" 
					class="relative z-10 w-full h-full object-contain"
					style="mask-image: linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%); mask-composite: intersect; -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%); -webkit-mask-composite: source-in;"
				/>
			</div>
		</div>

		<!-- Contact Info -->
		<div class="space-y-12">
			<div in:fly={{ y: -10, duration: 800, delay: 500 }}>
				<p class="text-[10px] uppercase tracking-[0.5em] opacity-40 mb-3">{t.mailLabel}</p>
				<a 
					href="mailto:jenskristian79@gmail.com" 
					class="text-base md:text-lg uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors inline-block"
				>
					jenskristian79@gmail.com
				</a>
			</div>
			
			<div class="flex justify-center space-x-12 pt-4" in:fly={{ y: -10, duration: 800, delay: 800 }}>
				{#each t.socials as social}
					<a 
						href={social.href} 
						target="_blank" 
						rel="noopener noreferrer"
						class="text-xs uppercase tracking-[0.3em] opacity-60 hover:opacity-100 hover:text-accent transition-all"
					>
						{social.name}
					</a>
				{/each}
			</div>
		</div>
	</div>
</main>
