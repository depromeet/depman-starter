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
          <title>디프만 스타트 킷</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel='stylesheet' type='text/css' href='/static/stylesheets/reset.css' />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css" />
          <link rel='stylesheet' type='text/css' href='/static/stylesheets/depromeet.css' />
          <style id='cxs-style' dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" defer async></script>
        </body>
      </html>
    )
  }
}