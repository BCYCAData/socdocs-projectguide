import { w as writable, d as derived } from "./index.js";
const __kitDocs = writable({ meta: null });
const kitDocs = {
  subscribe: __kitDocs.subscribe
};
const frontmatter = derived(kitDocs, ($kitDocs) => $kitDocs?.meta?.frontmatter);
export {
  __kitDocs as _,
  frontmatter as f,
  kitDocs as k
};
