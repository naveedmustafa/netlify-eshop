import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.csF8b7Ff.js","_app/immutable/chunks/scheduler.Jd_3Qko1.js","_app/immutable/chunks/index.BY5ehJqs.js"];
export const stylesheets = [];
export const fonts = [];
