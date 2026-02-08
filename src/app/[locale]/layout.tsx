import { Raleway } from "next/font/google"
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { getMessages, setRequestLocale } from 'next-intl/server'


import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Footer } from "@/components/layout/Footer"
import { ThemeProvider } from '@/providers/ThemeProvider'
import type { Metadata } from "next"
import { StickyScrollToTopButton } from '@/components/layout/StickyScrollToTopButton'
import { Toaster } from "@/components/ui/toaster"
import { routing } from "@/i18n/routing";
import { SITE_NAME, SITE_AUTHOR, SITE_URL, OG_IMAGE, LOCALE_MAP } from "@/constants/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const raleway = Raleway({ subsets: ["cyrillic", "latin"] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const tMeta = await getTranslations({ locale, namespace: 'Metadata' });
  const tSite = await getTranslations({ locale, namespace: 'Site' });

  return {
    title: {
      default: tMeta('title'),
      template: `%s | ${SITE_NAME}`,
    },
    description: `${tSite("slogan")} — ${tSite("description")}`,
    keywords: tMeta('keywords').split(', '),
    authors: [{ name: SITE_AUTHOR }],
    category: "Legal Services",
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
    openGraph: {
      type: "website",
      locale: LOCALE_MAP[locale] || "en_US",
      url: `${SITE_URL}/${locale}`,
      siteName: SITE_NAME,
      title: tMeta("title"),
      description: `${tSite("slogan")} — ${tSite("description")}`,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tMeta("title"),
      description: `${tSite("slogan")} — ${tSite("description")}`,
      images: [OG_IMAGE],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        pl: `${SITE_URL}/pl`,
        uk: `${SITE_URL}/ua`, // Ukrainian
        ru: `${SITE_URL}/ru`,
      },
    },
    other: {
      "msapplication-TileColor": "#ffffff",
      "theme-color": "#000000",
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages()
  const tStickyScrollToTopButton = await getTranslations('Components.StickyScrollToTopButton')

  return (
    <html lang={locale} suppressHydrationWarning>

      <body className={`${raleway.className} flex flex-col min-h-screen text-foreground bg-background-alt`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Toaster />
            <Footer />
            <StickyScrollToTopButton
              StickyScrollToTopButton={tStickyScrollToTopButton('scrollToTop')}
            />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}