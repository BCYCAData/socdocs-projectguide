import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BLhb3ydm.js","_app/immutable/chunks/DYQpAypS.js","_app/immutable/chunks/DHYgcxfT.js","_app/immutable/chunks/BRUxeW2M.js","_app/immutable/chunks/8UtF8RsF.js","_app/immutable/chunks/BV030jdZ.js","_app/immutable/chunks/6HhlOw4B.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/MVvr3gYu.js"];
export const stylesheets = ["_app/immutable/assets/0.BFD1sGw5.css"];
export const fonts = ["_app/immutable/assets/Inter-VF.roman-latin.Cv6u-1wI.woff2","_app/immutable/assets/Inter-VF.italic-latin.IyEm1sv2.woff2","_app/immutable/assets/FiraCode-VF.11PaB-mS.woff2","_app/immutable/assets/FiraCode-VF.BL1FdLIh.woff"];
