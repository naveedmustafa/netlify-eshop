export const postToShopify = async ({ query, variables }) => {
	try {
		// @ts-ignore
		let  result = await fetch(`${import.meta.env.VITE_SHOPIFY_API_ENDPOINT}/admin/api/2024-01/graphql.json`, {
			mode: 'no-cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Access-Token': `${import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN}`
			},
			body: JSON.stringify({ query })
		})

		const jproducts = await result.json(); 								//console.log(variables, jproducts);
       	return jproducts['data']['products']['edges'];

	} catch (error) {
		console.log(error);
	}
};