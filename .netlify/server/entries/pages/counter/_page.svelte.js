import { a as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { c as count_val } from "../../../chunks/store.js";
const Add = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button data-svelte-h="svelte-1775dtu">+</button>`;
});
const Subtract = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button data-svelte-h="svelte-16beh1d">-</button>`;
});
const Zero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button data-svelte-h="svelte-ek476b">Reset</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $count_val, $$unsubscribe_count_val;
  $$unsubscribe_count_val = subscribe(count_val, (value) => $count_val = value);
  let count = 0;
  count_val.subscribe((val) => count = val);
  $$unsubscribe_count_val();
  return `<div><h1>${escape($count_val)}</h1> <h2>${escape(count)}</h2> ${validate_component(Zero, "Zero").$$render($$result, {}, {}, {})} ${validate_component(Add, "Add").$$render($$result, {}, {}, {})} ${validate_component(Subtract, "Subtract").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
