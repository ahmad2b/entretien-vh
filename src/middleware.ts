import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	// A list of all locales that are supported
	locales: ["en", "fr"],

	// If this locale is matched, pathnames work without a prefix (e.g. `/about`)
	defaultLocale: "en",
	pathnames: {
		"/": "/",
		"/pathnames": {
			en: "/pathnames",
			fr: "/chemins",
		},
	},
	localePrefix: "always",
});

export const config = {
	matcher: [
		// Enable a redirect to a matching locale at the root
		"/",

		// Set a cookie to remember the previous locale for
		// all requests that have a locale prefix
		"/(fr|en)/:path*",

		// Enable redirects that add missing locales
		// (e.g. `/pathnames` -> `/en/pathnames`)
		"/((?!_next|_vercel|.*\\..*).*)",
	],
};
