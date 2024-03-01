<script>
	export let data;
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>


{#each data.props as product}
	<p>{product.node.title} </p>
{/each}