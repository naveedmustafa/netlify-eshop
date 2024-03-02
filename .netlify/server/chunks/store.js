import { w as writable } from "./index.js";
const postToShopify = async ({ query, variables }) => {
  try {
    let result = await fetch(`${"https://blendium.myshopify.com"}/admin/api/2024-01/graphql.json`, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": `${"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"}`
      },
      body: JSON.stringify({ query })
    });
    const jproducts = await result.json();
    return jproducts["data"]["products"]["edges"];
  } catch (error) {
    console.log(error);
  }
};
const products = writable([]);
const count_val = writable(100);
const getProducts = async () => {
  try {
    const shopifyResponse = await postToShopify({
      query: `{
	     products(sortKey: TITLE, first: 100) {
	      edges {
	        node {
	          id
	          handle
	          description
	          title
	          totalInventory
	          productType
	          variants(first: 5) {
	            edges {
	              node {
	                id
	                title
	                inventoryQuantity
	                price
	              }
	            }
	          }
	          priceRange {
	            maxVariantPrice {
	              amount
	              currencyCode
	            }
	            minVariantPrice {
	              amount
	              currencyCode
	            }
	          }
	          images(first: 1) {
	            edges {
	              node {
	                src
	                altText
	              }
	            }
	          }
	        }
	      }
	    }
    }
	  `
    });
    products.set(shopifyResponse);
    return shopifyResponse;
  } catch (error) {
    console.log(error);
  }
};
export {
  count_val as c,
  getProducts as g
};
