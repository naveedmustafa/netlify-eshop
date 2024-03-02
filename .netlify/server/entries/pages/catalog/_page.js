import { g as getProducts } from "../../../chunks/store.js";
async function load(ctx) {
  const productsData = await getProducts();
  return { products: productsData };
}
export {
  load
};
