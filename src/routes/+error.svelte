<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<div class="error-page">
	<div class="content">
		<div class="animation-container">
			<svg viewBox="0 0 200 100" class="devops-loop">
				<!-- Infinity loop path -->
				<path 
					d="M50,50 C50,20 80,20 100,50 C120,80 150,80 150,50 C150,20 120,20 100,50 C80,80 50,80 50,50 Z" 
					class="loop-path"
				/>
			</svg>
		</div>

		{#if page.status === 404}
			<h1>404</h1>
			<div class="explanation">
				<p>
					Har du nogensinde tænkt over det? Tallet stammer fra de gode gamle dage i CERN-laboratoriet, 
					hvor internettet blev født. Historien går på, at database-filerne lå i rum nummer 404. 
					Når folk ledte efter noget, der ikke var der, fik de at vide: "Findes ikke i rum 404".
				</p>
				<p>
					I dag betyder det bare, at din browser har banket på min server-dør, men ruten du bad om 
					findes ikke i min pipeline. Måske er den slettet, måske er den flyttet, eller måske har du 
					bare tastet lidt for hurtigt?
				</p>
			</div>
		{:else}
			<h1>{page.status}</h1>
			<h2>Fejl i systemet</h2>
			<p>{page.error?.message ?? 'Noget gik galt under indlæsningen.'}</p>
			<a href="/" class="text-link">Gå til forsiden</a>
		{/if}
	</div>
</div>

<style>


	.error-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		text-align: center;
		padding: 2rem;
		background-color: var(--bg);
		color: var(--fg);
	}

	.content {
		max-width: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 4rem;
	}

	.animation-container {
		width: 250px;
		margin-bottom: 2rem;
	}

	.devops-loop {
		width: 100%;
		height: auto;
		overflow: visible;
	}

	.loop-path {
		fill: none;
		stroke: var(--fg);
		stroke-width: 1.5;
		stroke-linecap: round;
		stroke-dasharray: 400;
		stroke-dashoffset: 400;
		animation: draw 4s linear infinite;
	}

	@keyframes draw {
		0% { stroke-dashoffset: 400; }
		50% { stroke-dashoffset: 0; }
		100% { stroke-dashoffset: -400; }
	}

	h1 {
		font-size: 5rem;
		margin: 50px;
		line-height: 1;
		font-weight: 300 !important;
		letter-spacing: -0.05em;
	}

	h2 {
		font-size: 1.2rem;
		margin: 0.5rem 0 1.5rem 0;
		font-weight: 200 !important;
		text-transform: uppercase;
		letter-spacing: 0.15em;
	}

	.explanation p {
		font-weight: 200 !important;
		opacity: 0.8;
		margin-bottom: 1.5rem;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.text-link {
		color: var(--fg);
		text-decoration: underline;
		text-underline-offset: 4px;
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	.text-link:hover {
		opacity: 0.5;
	}
</style>
