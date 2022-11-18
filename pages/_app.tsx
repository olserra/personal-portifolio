import 'styles/global.css';

import { ThemeProvider } from 'next-themes';
import Script from "next/script";
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const interVariable = Inter();

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z3HJ9S40WJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Z3HJ9S40WJ');
        `}
        </Script>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}
