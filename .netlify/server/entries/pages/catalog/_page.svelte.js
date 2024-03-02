import { c as create_ssr_component, b as add_attribute, e as escape, a as each, v as validate_component } from "../../../chunks/ssr.js";
const ProductCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  return `<section><div class="product-card"><div class="product-card-frame"><a${add_attribute("href", `/products/${product.handle}`, 0)}><img class="prodimg"${add_attribute(
    "src",
    typeof product.images.edges[0] !== "undefined" ? product.images.edges[0].node.src : "",
    0
  )}${add_attribute("alt", product.handle, 0)}></a></div> <div class="product-card-text"><h3 class="product-card-title">${escape(product.title)}</h3> <p class="product-card-description">${escape(product.description.substring(0, 60) + "...")}</p></div> <a${add_attribute("href", `/products/${product.handle}`, 0)}><button>View Item ${escape(">")}</button></a></div></section>`;
});
const ProductList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { products } = $$props;
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  return `<div class="product-grid">${each(products, (product) => {
    return `${validate_component(ProductCard, "ProductCard").$$render($$result, { product: product.node }, {}, {})}`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { products } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1hqh2bk_START -->${$$result.title = `<title>Shop</title>`, ""}<!-- HEAD_svelte-1hqh2bk_END -->`, ""} <main>${validate_component(ProductList, "ProductList").$$render($$result, { products }, {}, {})}</main>`;
});
export {
  Page as default
};
