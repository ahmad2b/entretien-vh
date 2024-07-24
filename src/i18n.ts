// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";
// import { Locale } from "./types";

// export const locales: Locale[] = ["en", "fr"];

// export default getRequestConfig(async ({ locale }) => {
// 	if (!locales.includes(locale as any)) notFound();

// 	// return {
// 	// 	messages: (await import(`../messages/${locale}.json`)).default,
// 	// };

// 	return {
// 		locale,
// 	};
// });


import { getRequestConfig } from 'next-intl/server';

export type Locale = 'en' | 'fr';

export const localesList = ['en', 'fr'];

export default getRequestConfig(async ({ locale }) => ({
  messages: {
    // ...(await import(`./src/data/${locale}/navigation.json`)).default,
    // ...(await import(`./src/data/${locale}/privacy-policy.json`)).default,
    // ...(await import(`./src/data/${locale}/terms-and-conditions.json`)).default,
  },
}));
