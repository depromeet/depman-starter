import Document, { Head, Main, NextScript } from 'next/document';
import {getStyles} from "typestyle";

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage();
    const style = getStyles();
    return { ...page, style }
  }

  render () {
    return (
      <html>
        <Head>
          <title>디프만 하이하이</title>
          <link rel='stylesheet' type='text/css' href='/static/reset.css' />
          <link rel='stylesheet' type='text/css' href='/static/main.css' />
          <style id='cxs-style' dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}