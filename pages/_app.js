import GlobalStyle from "../src/components/Link/theme/GlobalStyle"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp