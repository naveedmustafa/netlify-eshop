import * as universal from '../entries/pages/catalog/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/catalog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/catalog/+page.js";
export const imports = ["_app/immutable/nodes/4.CFOl75AE.js","_app/immutable/chunks/store.CqnPjSJT.js","_app/immutable/chunks/index.DVBxQroE.js","_app/immutable/chunks/scheduler.Jd_3Qko1.js","_app/immutable/chunks/index.BY5ehJqs.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
