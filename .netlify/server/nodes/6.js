import * as universal from '../entries/pages/counter/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/counter/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/counter/+page.js";
export const imports = ["_app/immutable/nodes/6.COf2j479.js","_app/immutable/chunks/scheduler.Jd_3Qko1.js","_app/immutable/chunks/index.BY5ehJqs.js","_app/immutable/chunks/store.CqnPjSJT.js","_app/immutable/chunks/index.DVBxQroE.js"];
export const stylesheets = [];
export const fonts = [];
