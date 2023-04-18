import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: () => (
    <>
      <img src="/favicon/favicon-32x32.png" />
      <span style={{ 
          fontWeight: "bold", 
          fontSize: "1.2rem",
          paddingLeft: 10,
          paddingRight: 10, }}
      >
        Typia
      </span>
      <span>Superfast Runtime Validator</span>
    </>
  ),
  project: {
    link: 'https://github.com/samchon/typia',
  },
  docsRepositoryBase: 'https://github.com/samchon/typia',
  footer: {
    text: () => <span>
      Made by{" "}
      <a href="https://github.com/samchon" 
         target="_blank" 
         style={{ color: "blue" }}>
        <u> Samchon </u>
      </a>
    </span>
  },
  useNextSeoProps() {
    return {
      defaultTitle: "Typia Guide Documents",
      titleTemplate: "Typia Guide Documents - %s",
      additionalLinkTags: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png"
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest"
        },
        ...[16, 32].map(size => ({
          rel: "icon",
          type: "image/png",
          sizes: `${size}x${size}`,
          href: `/favicon/favicon-${size}x${size}.png`
        })),
      ],
      additionalMetaTags: [
        {
          property: "og:image",
          content: "/og.jpg"
        },
        {
          property: "og:type",
          content: "object"
        },
        {
          property: "og:title",
          content: "Typia Guide Documents",
        },
        {
          property: "og:description",
          content: "Superfast Runtime Validator with only one line"
        },
        {
          property: "og:site_name",
          content: "Typia Guide Documents"
        },
        {
          property: "og:url",
          content: "https://typia.io"
        },
      ]
    }
  },
}

export default config