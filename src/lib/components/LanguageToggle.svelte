<script lang="ts">
	import { lang } from '$lib/i18n.svelte';
</script>

<button
	onclick={() => lang.toggle()}
	class="p-2 opacity-80 hover:opacity-100 transition-all flex items-center justify-center cursor-pointer text-[10px] uppercase tracking-widest text-content font-bold hover:scale-110"
	aria-label="Toggle language"
>
	{lang.current === 'da' ? 'EN' : 'DA'}
</button>
