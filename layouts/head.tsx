import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";

export const Head = () => {
  return (
    <NextHead>
      <title>{siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={siteConfig.name} name="twitter:title" />
      <meta content={siteConfig.description} name="twitter:description" />
      <meta content={siteConfig.socialImage} property="og:image" />
      <meta content={siteConfig.socialImage} name="twitter:image" />
      <meta
        content="Arth Exotica hotel in Colva, South Goa"
        property="og:image:alt"
      />
      <meta
        key="viewport"
        content="width=device-width, initial-scale=1.0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
    </NextHead>
  );
};
