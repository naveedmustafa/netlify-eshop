<script>
	import { onMount } from 'svelte';
	let count;
	let cart;
	onMount(() => {
		cart = JSON.parse(localStorage.getItem('cart'));
		if (cart) {
			count = cart.lines.edges.length;
		}
	});
</script>

<section>
	<header class="app-header">
		<h1>Shoppezi</h1>
		<nav class="main-nav">
			<ul>
				<li class="main-nav-item">
					<a href="/">All</a>
				</li>
				<li class="main-nav-item">
					<a href="/about">About</a>
				</li>
				<li class="main-nav-item">
					<a href="/catalog">Catalog</a>
				</li>				
				<li class="main-nav-item">
					<a href="/contact">Contact</a>
				</li>
				<li class="main-nav-item">
					<div class="cart-size">{count || 0}</div>
					<a href="#">Cart</a>
				</li>
			</ul>
		</nav>
	</header>
</section>