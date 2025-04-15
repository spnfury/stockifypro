import React from 'react';
import { Helmet } from 'react-helmet';

interface HeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const Head: React.FC<HeadProps> = ({
  title,
  description,
  keywords = 'crm contrareembolso, gestión contrareembolso, sistema contrareembolso, cobro contrareembolso, ecommerce contrareembolso, shopify contrareembolso, gestión de pagos, seguimiento envíos, automatización cobros',
  ogTitle,
  ogDescription,
  ogImage = 'https://app.stockify.pro/assets/img/logos/logo2024.png'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stockify.pro/" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://stockify.pro/" />
      <meta property="twitter:title" content={ogTitle || title} />
      <meta property="twitter:description" content={ogDescription || description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default Head; 