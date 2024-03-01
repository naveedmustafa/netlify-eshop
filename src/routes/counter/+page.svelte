<script lang="ts">
	import { count_val } from '../../store';
	import Add from '../../components/Add.svelte';
	import Subtract from '../../components/Subtract.svelte';
	import Zero from '../../components/Zero.svelte';

	let count = 0;
	count_val.subscribe((val) => count = val);
</script>


<div>
	<h1>{$count_val}</h1>
	<h2>{count}</h2>

	<Zero />
	<Add />
	<Subtract />
</div>