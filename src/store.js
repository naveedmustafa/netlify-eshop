import { writable } from "svelte/store";
import { postToShopify } from "./routes/api/utils/postToShopify";

export const products = writable([]);
export const productDetails = writable([]);
export const count_val = writable(100);


export const getProducts = async () => {
  try {
    // @ts-ignore
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
	  `,
    });
    products.set(shopifyResponse);
    return shopifyResponse;
  } catch (error) {
    console.log(error);
  }
};



export const getProductDetails = async (handle) => {
  try {
    const shopifyResponse = await postToShopify({
      query: ` 
        query getProduct($handle: String!) {
          productByHandle(handle: $handle) {
            id
            handle
            description
            title
            totalInventory
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
      `,
      variables: {
        handle: handle
      }
    });

    productDetails.set(shopifyResponse.productByHandle);
    return shopifyResponse.productByHandle;
  } catch (error) {
    console.log(error);
  }
};
























/*export const getProducts_fetch = async () => {
    const query = `{
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
    }`;

  try {
      let  result = await fetch(`${import.meta.env.VITE_SHOPIFY_API_ENDPOINT}/admin/api/2024-01/graphql.json`, {
          mode: 'no-cors',
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Access-Token': `${import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN}`
          },
          body: JSON.stringify({ query })
      })

      const jproducts = await result.json();
      return jproducts['data']['products']['edges'];

  } catch (error) {
      console.log("error", error);
  }
};



export const getProducts_axios = async () => {
    const query = `{
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
    }`;

    const options = {
      method: 'POST',
      url: `${import.meta.env.VITE_SHOPIFY_API_ENDPOINT}/admin/api/2024-01/graphql.json`,
      headers:{
        'mode':'no-cors',
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': `${import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN}`
      },
      data: { query }
    };

    try {
      let jproducts = await axios(options);
      return jproducts.data.data.products.edges;  
    } catch (error) {
      console.log("error", error);
    }
};



export const getProducts = async () => {
    try {
        const query = `{
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
        }`;

        const graphqlEndpoint = `${import.meta.env.VITE_SHOPIFY_API_ENDPOINT}/admin/api/2024-01/graphql.json`;
        const res = await fetch(graphqlEndpoint, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': `${import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN}`
        },
        body: JSON.stringify({ query })
        });

        const responseData = await res.json();
        if (res.ok) {
          return responseData;
        } else {
          throw new Error(responseData);
        }

    } catch (error) {
        console.log(error);
    }
};
*/