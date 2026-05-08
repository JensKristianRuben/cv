<script lang="ts">
	import { onMount } from 'svelte';

	let { points = [], height = 3000 } = $props();
	let scrollProgress = $state(0);

	/**
	 * Generates a simple straight path connecting milestones.
	 */
	function generatePath(pts: any[], centerX: number) {
		const startY = 230;
		const sortedPts = pts.sort((a, b) => a.y - b.y);
		
		const allPoints = [
			{ x: centerX, y: startY },
			...sortedPts,
			{ x: centerX, y: height }
		];

		if (allPoints.length < 2) return "";

		// Create a simple polyline path
		let d = `M ${allPoints[0].x} ${allPoints[0].y}`;
		
		for (let i = 1; i < allPoints.length; i++) {
			d += ` L ${allPoints[i].x} ${allPoints[i].y}`;
		}
		
		return d;
	}

	let workPathData = $derived(generatePath(points.filter(p => p.type === 'work'), 25));
	let eduPathData = $derived(generatePath(points.filter(p => p.type === 'education'), 75));

	onMount(() => {
		const handleScroll = () => {
			const winScroll = window.scrollY;
			const viewportHeight = window.innerHeight;
			
			// At scrollY = 0, we want headPosition to be <= startY (230)
			// to ensure the line is not visible initially.
			// We calculate progress relative to the scrollable height.
			const headPosition = winScroll + 100; // Small offset to start drawing quickly
			
			// If we are at the very top, keep it at 0
			if (winScroll <= 0) {
				scrollProgress = 0;
			} else {
				scrollProgress = Math.min(1, headPosition / height);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // Initial check
		
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" style="height: {height}px">
	<svg
		viewBox="0 0 100 {height}"
		preserveAspectRatio="none"
		class="h-full w-full"
	>
		<!-- Work Path -->
		<path
			d={workPathData}
			fill="none"
			stroke="currentColor"
			stroke-width="0.2"
			pathLength="1"
			stroke-dasharray="1"
			stroke-dashoffset={1 - scrollProgress}
			class="text-content/10 transition-[stroke-dashoffset] duration-300 ease-out"
		/>

		<!-- Education Path -->
		<path
			d={eduPathData}
			fill="none"
			stroke="currentColor"
			stroke-width="0.2"
			pathLength="1"
			stroke-dasharray="1"
			stroke-dashoffset={1 - scrollProgress}
			class="text-content/10 transition-[stroke-dashoffset] duration-300 ease-out"
		/>
	</svg>
</div>
