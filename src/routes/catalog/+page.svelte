<script>
	export let data;
	const { products } = data;

	import ProductList from '../../components/ProductList.svelte';
</script>


<svelte:head>
	<title>Shop</title>
</svelte:head>


<main>
	<ProductList products={products} />
</main>