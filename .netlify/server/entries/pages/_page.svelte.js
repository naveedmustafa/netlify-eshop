import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1hqh2bk_START -->${$$result.title = `<title>Shop</title>`, ""}<!-- HEAD_svelte-1hqh2bk_END -->`, ""}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-t32ptj_END -->`, ""} <section>${validate_component(Routes, "Index").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
