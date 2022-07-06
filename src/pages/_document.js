import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="fr">
      <Head>
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/icon-256x256.png" />
        <link rel="apple-touch-icon" sizes="384x384" href="/icon-384x384.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta
          name="description"
          content="Rencontrez d'autres artisans proches de chez vous."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
