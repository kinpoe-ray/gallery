import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Focus on Product & AI."
          />
          <meta property="og:site_name" content="gallery.kinpoeray.store" />
          <meta
            property="og:description"
            content="Focus on Product & AI."
          />
          <meta property="og:title" content="Kinpoe.Ray's Gallery" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Kinpoe.Ray's Gallery" />
          <meta
            name="twitter:description"
            content="Focus on Product & AI."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
