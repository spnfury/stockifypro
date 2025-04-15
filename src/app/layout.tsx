import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CRM Contrareembolso | Stockify.pro - Gestión Integral de Pagos Contra Reembolso',
  description: 'Sistema CRM especializado en contrareembolso para ecommerce. Automatiza la gestión de pagos contra reembolso, seguimiento de envíos y cobros. Integración con Shopify y principales transportistas.',
  keywords: 'crm contrareembolso, gestión contrareembolso, sistema contrareembolso, cobro contrareembolso, ecommerce contrareembolso, shopify contrareembolso, gestión de pagos, seguimiento envíos, automatización cobros',
  openGraph: {
    title: 'CRM Contrareembolso | Stockify.pro - Gestión Integral de Pagos Contra Reembolso',
    description: 'Sistema CRM especializado en contrareembolso para ecommerce. Automatiza la gestión de pagos contra reembolso, seguimiento de envíos y cobros.',
    url: 'https://stockify.pro/crm-contrareembolso',
    siteName: 'Stockify.pro',
    images: [
      {
        url: 'https://app.stockify.pro/assets/img/logos/logo2024.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <Script
          defer
          data-domain="stockify.pro"
          src="https://plausible.miprimermvp.com/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 