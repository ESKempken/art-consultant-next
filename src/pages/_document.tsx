import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="https://use.typekit.net/kyn8apf.css" as="style"/>
        <link rel="stylesheet" href="https://use.typekit.net/kyn8apf.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
