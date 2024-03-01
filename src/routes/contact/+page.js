import { products, getProducts } from '../../store';

export async function load(ctx) {
	const productsData = await getProducts();

	return {
		props: productsData,
		post: {
			title: `Title for ${ctx.slug} goes here`,
			content: `Content for ${ctx.slug} goes here`
		}
	};
}