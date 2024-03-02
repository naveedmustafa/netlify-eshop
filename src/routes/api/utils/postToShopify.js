export const postToShopify = async ({ query, variables }) => {
	try {
		// @ts-ignore
		let result = await fetch(`https://blendium.myshopify.com/admin/api/2024-01/graphql.json`, {
			mode: 'no-cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Access-Token': `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`
			},
			body: JSON.stringify({ query })
		});

		const jproducts = await result.json(); 								//console.log(variables, jproducts);
       	return jproducts['data']['products']['edges'];

	} catch (error) {
		console.log(error);
	}
};