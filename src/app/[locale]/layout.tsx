import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { cn } from '@/lib/utils';
import { notFound } from 'next/navigation';
// import { localesList } from '../../../i18n';
import { localesList } from '@/i18n';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';
import EnNavbar from '@/components/en/Navbar';
import EnFooter from '@/components/en/Footer';
import FrNavbar from '@/components/fr/Navbar';
import FrFooter from '@/components/fr/Footer';
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Entretien VH Pro',
  description: 'Entretien VH Pro',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  // Show a 404 error if the user requests an unknown locale
  if (!localesList.includes(locale as any)) notFound();

  unstable_setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={cn(
        'light bg-[#f9f9f9] text-slate-900 antialiased',
        GeistSans.className,
        montserrat.variable
      )}
    >
      <body className='min-h-screen bg-[#f9f9f9] antialiased'>
        <main className='mx-auto h-full'>
      {params.locale === "fr" ? <FrNavbar /> : <EnNavbar />}

          {children} <Analytics />
      {params.locale === "fr" ? <FrFooter /> : <EnFooter />}

        </main>
      </body>
    </html>
  );
}
