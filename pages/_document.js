import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document  {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }
    render() {
        return (
            <html>
                <Head>
                </Head>
                <body className="custom_class">
                    <Main className="123"/>
                    <NextScript />
                </body>
            </html>
        )
    }
}