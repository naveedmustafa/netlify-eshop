<script context="module">
	import { getProductDetails } from '../../store'; 

	export async function load(ctx) {
		let handle = ctx.page.params.handle;
		const product = await getProductDetails(handle);

		if(typeof product !== 'undefined'){
			const productImage = product.images.edges[0].node.src;
			const productVariants = product.variants.edges.map((v) => v.node);
			return { props: { product, productImage, productVariants } };
		}
	}
</script>

<script>
	export let product;
	export let productImage;
	export let productVariants;
	let quantity = 0;
	// @ts-ignore
	let selectedProduct = productVariants[0].id;
		const addToCart = async () => {
		// add selected product to cart
		try {
			const addToCartResponse = await fetch('/api/add-to-cart', {
				method: 'POST',
				body: JSON.stringify({
					cartId: localStorage.getItem('cartId'),
					itemId: selectedProduct,
					quantity: quantity
				})
			});
			const data = await addToCartResponse.json();

			// save new cart to localStorage
			localStorage.setItem('cartId', data.id);
			localStorage.setItem('cart', JSON.stringify(data));
			location.reload();

		} catch (e) {
			console.log(e);
		}
	};
	function price(itemPrice) {
		const amount = Number(itemPrice).toFixed(2);
		return amount + ' ' + 'USD';
	}
</script>

<main class="product-page">
	<article>
		<section class="product-page-content">
			<div>
				<img class="product-page-image" src={productImage} alt={product.handle} />
			</div>
			<div>
				<h1>{product.title}</h1>
				<p>{product.description}</p>
				<form>
					{#if productVariants.length > 1}
						<div class="product-page-price-list">
							{#each productVariants as { id, quantityAvailable, title, priceV2 }}
								<div class="product-page-price">
									<input
										{id}
										bind:value={selectedProduct}
										type="radio"
										name="merchandiseId"
										disabled={quantityAvailable === 0}
									/>
									<label for={id}>
										{title} - {price(productVariants[0].price)}
									</label>
								</div>
							{/each}
						</div>
					{:else}
						<div class="product-page-price is-solo">
							{price(productVariants[0].price)}
						</div>
					{/if}
					<div class="product-page-quantity-row">
						<input
							class="product-page-quantity-input"
							type="number"
							name="quantity"
							min="1"
							max={productVariants[0].quantityAvailable}
							bind:value={quantity}
						/>

						<button type="submit" on:click|preventDefault={addToCart} class="button purchase">
							Add to Cart
						</button>
					</div>
				</form>
			</div>
		</section>
	</article>
</main>