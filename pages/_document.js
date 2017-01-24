import Document, { Head, Main, NextScript } from 'next/document';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class extends Document {
    static async getInitialProps(ctx) {
        const props = await Document.getInitialProps(ctx);
        const userAgent = ctx.req.headers['user-agent'];

        return {
            ...props,
            userAgent,
        };
    }

    render() {
        return (
            <html>
                <Head>

                </Head>
                <body>
                <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: this.props.userAgent })}>
                    <div>
                        <Main />
                        <NextScript />
                    </div>
                </MuiThemeProvider>
                </body>
            </html>
        );
    }
}
