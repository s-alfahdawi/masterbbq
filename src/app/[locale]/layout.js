
import { Tajawal } from "next/font/google";
import { Noto_Naskh_Arabic } from "next/font/google";
import { Cairo } from "next/font/google";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Layout from "@/src/app/[locale]/_components/layout/Layout";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const tajawal = Tajawal({ weight: ["300", "400", "500", "700"], subsets: ["arabic"] });
const notoNaskhArabic = Noto_Naskh_Arabic({ subsets: ["arabic"] });
const cairo = Noto_Sans_Arabic({ weight: [ "200", "300", "400"], subsets: ["arabic"] });

export const metadata = {
    title: "master BBQ",
    description: "",
};

async function loadMessages(locale) {
    try {
        const messages = await import(`../../../messages/${locale}.json`);
        return messages.default;
    } catch (error) {
        return null;
    }
}

const RootLayout = async ({ children, params: { locale } }) => {
    const messages = await loadMessages(locale);
    if (!messages) {
        notFound();
    }

    return (
        <html lang={locale}>
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </head>
        <body className={locale === "kr" ? cairo.className : tajawal.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Layout>{children}</Layout>
        </NextIntlClientProvider>
        </body>
        </html>
    );
};

export default RootLayout;
