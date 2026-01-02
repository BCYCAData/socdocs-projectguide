export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["SOCLogo.png","SOCLogo.png:Zone.Identifier","SOCLogo_lite.png","SOCLogo_lite.png:Zone.Identifier","SOCLogo_quarter.png","SOCLogo_quarter.png:Zone.Identifier","ag.png","ag.png:Zone.Identifier","favicon.png","favicon.png:Zone.Identifier","favicon_x.png","favicon_x.png:Zone.Identifier","nswg.jpg","nswg.jpg:Zone.Identifier"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.qrtug2ke.js",app:"_app/immutable/entry/app.BZo3EU6G.js",imports:["_app/immutable/entry/start.qrtug2ke.js","_app/immutable/chunks/6HhlOw4B.js","_app/immutable/chunks/DHYgcxfT.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BRUxeW2M.js","_app/immutable/chunks/8UtF8RsF.js","_app/immutable/entry/app.BZo3EU6G.js","_app/immutable/chunks/DHYgcxfT.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/kit-docs/index.meta","/faqs","/kit-docs/faqs.meta","/kit-docs/faqs.sidebar","/faqs/faq","/kit-docs/faqs_faq.meta","/project-blog","/kit-docs/project-blog.meta","/kit-docs/project-blog.sidebar","/project-components","/kit-docs/project-components.meta","/kit-docs/project-components.sidebar","/soc-project","/kit-docs/soc-project.meta","/kit-docs/soc-project.sidebar","/project-blog/hello-world","/kit-docs/project-blog_hello-world.meta","/project-components/overview/overview","/kit-docs/project-components_overview_overview.meta","/soc-project/history/overview","/kit-docs/soc-project_history_overview.meta","/project-components/local-community-hubs/burrell-creek","/kit-docs/project-components_local-community-hubs_burrell-creek.meta","/project-components/local-community-hubs/mondrook","/kit-docs/project-components_local-community-hubs_mondrook.meta","/project-components/kyngs/overview","/kit-docs/project-components_kyngs_overview.meta","/project-components/digital-online-mapping/overview","/kit-docs/project-components_digital-online-mapping_overview.meta","/project-components/workshops/overview","/kit-docs/project-components_workshops_overview.meta","/soc-project/grants/2021","/kit-docs/soc-project_grants_2021.meta","/soc-project/grants/2022","/kit-docs/soc-project_grants_2022.meta","/soc-project/project-team","/kit-docs/soc-project_project-team.meta"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
