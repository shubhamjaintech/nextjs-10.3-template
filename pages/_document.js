import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
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
}

export default MyDocument
