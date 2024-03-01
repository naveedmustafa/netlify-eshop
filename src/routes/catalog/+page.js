	import { products, getProducts } from '../../store';

	export async function load(ctx) {
		const productsData = await getProducts();

		return { products: productsData };
	}