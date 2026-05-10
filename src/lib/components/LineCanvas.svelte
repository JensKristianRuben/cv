<script lang="ts">
	import { onMount } from 'svelte';

	let { points = [], height = 3000 } = $props();
	let scrollProgress = $state(0);

	/**
	 * Generates a simple straight path connecting milestones.
	 */
	function generatePath(pts: any[], centerX: number, forceStraight: boolean = false) {
		const startY = 230;
		const sortedPts = [...pts].sort((a, b) => a.y - b.y);
		
		const allPoints = [
			{ x: centerX, y: startY },
			...sortedPts.map(p => ({ x: forceStraight ? centerX : p.x, y: p.y }))
		];

		if (allPoints.length < 2) return "";

		// Create a simple polyline path
		let d = `M ${allPoints[0].x} ${allPoints[0].y}`;
		
		for (let i = 1; i < allPoints.length; i++) {
			d += ` L ${allPoints[i].x} ${allPoints[i].y}`;
		}
		
		return d;
	}

	let workPoints = $derived(points.filter((p: any) => p.type === 'work'));
	let eduPoints = $derived(points.filter((p: any) => p.type === 'education'));

	let workPathData = $derived(generatePath(workPoints, 25));
	let eduPathData = $derived(generatePath(eduPoints, 75));
	
	// Mobile: A perfectly straight path at 10% X
	let mobilePathData = $derived(generatePath(points, 10, true));

	let maxWorkY = $derived(workPoints.length > 0 ? Math.max(...workPoints.map((p: any) => p.y)) : height);
	let maxEduY = $derived(eduPoints.length > 0 ? Math.max(...eduPoints.map((p: any) => p.y)) : height);
	let maxMobileY = $derived(points.length > 0 ? Math.max(...points.map((p: any) => p.y)) : height);

	onMount(() => {
		const handleScroll = () => {
			const winScroll = window.scrollY;
			const viewportHeight = window.innerHeight;
			
			// headPosition is the Y-coordinate on the canvas where the line "ends" 
			// as we scroll. By adding half the viewport height, the line 
			// will appear to "hit" milestones when they are in the center of the screen.
			const headPosition = winScroll + (viewportHeight / 2);
			
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
		<!-- Desktop Paths -->
		<g class="hidden md:block">
			<!-- Work Path -->
			<path
				d={workPathData}
				fill="none"
				stroke="currentColor"
				stroke-width="0.2"
				pathLength="1"
				stroke-dasharray="1"
				stroke-dashoffset={1 - Math.min(1, (scrollProgress * height) / maxWorkY)}
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
				stroke-dashoffset={1 - Math.min(1, (scrollProgress * height) / maxEduY)}
				class="text-content/10 transition-[stroke-dashoffset] duration-300 ease-out"
			/>
		</g>

		<!-- Mobile Path -->
		<g class="md:hidden">
			<path
				d={mobilePathData}
				fill="none"
				stroke="currentColor"
				stroke-width="0.2"
				pathLength="1"
				stroke-dasharray="1"
				stroke-dashoffset={1 - Math.min(1, (scrollProgress * height) / maxMobileY)}
				class="text-content/10 transition-[stroke-dashoffset] duration-300 ease-out"
			/>
		</g>
	</svg>
</div>
