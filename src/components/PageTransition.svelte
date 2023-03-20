<script>
	import { fly } from 'svelte/transition';
	export let pathname = "";
</script>

{#key pathname}
	<!--
	<div in:fly={{ x: 5, duration: 1500, delay: 1500 }}
		 out:fly={{ x: -5, duration: 1500 }}
	>-->
	<div in:fly={{ opacity: 0, duration: 1500, delay: 1500 }}
		 out:fly={{ opacity: 0, duration: 1500 }}
	>
		<slot />
	</div>
{/key}