import { c as create_ssr_component, e as escape, a as each } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>${escape(data.post.title)}</h1> <div><!-- HTML_TAG_START -->${data.post.content}<!-- HTML_TAG_END --></div> ${each(data.props, (product) => {
    return `<p>${escape(product.node.title)} </p>`;
  })}`;
});
export {
  Page as default
};
