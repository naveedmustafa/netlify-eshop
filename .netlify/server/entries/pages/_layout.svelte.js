import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><header class="app-header"><h1 data-svelte-h="svelte-umoniy">Shoppezi</h1> <nav class="main-nav"><ul><li class="main-nav-item" data-svelte-h="svelte-147dgkw"><a href="/">All</a></li> <li class="main-nav-item" data-svelte-h="svelte-v3tlfx"><a href="/about">About</a></li> <li class="main-nav-item" data-svelte-h="svelte-4usq99"><a href="/catalog">Catalog</a></li> <li class="main-nav-item" data-svelte-h="svelte-1cd1xd3"><a href="/contact">Contact</a></li> <li class="main-nav-item"><div class="cart-size">${escape(0)}</div> <a href="#" data-svelte-h="svelte-1jbydd5">Cart</a></li></ul></nav></header></section>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer data-svelte-h="svelte-m64lm8"><section class="testimonial"><h2>Vans are a staple in skate culture and street style</h2> <p>zzz</p></section> <section class="app-footer-links"><ul><li>About</li> <li>Company</li> <li>Locations</li> <li>Contact</li> <li>Hours</li></ul> <ul><li>Twitter</li> <li>Facebook</li> <li>Instagram</li> <li>LinkedIn</li></ul> <div class="newsletter"><h2 class="newsletter-title">Sign up for our newsletter:</h2> <input class="newsletter-input" type="email" placeholder="Enter your email"></div></section> <div class="project-credit"><p>©2024</p></div></footer>`;
});
const css = {
  code: ".app.svelte-8o1gnw{display:flex;flex-direction:column;min-height:100vh}main.svelte-8o1gnw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}@media(min-width: 480px){}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-8o1gnw">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-8o1gnw">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
