import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="//fonts.googleapis.com" crossOrigin />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="preload" href="https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700&display=swap" as="style" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700&display=swap" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" as="style" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" />
          <link rel="preload" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" as="style" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" />
          <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin />
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
          {/* Must */}

          <link rel="preload" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined&display=swap" as="style" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined&display=swap" />
          

          {/* Android */}

          <meta name='mobile-web-app-capable' content='yes' />
          </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}