import GlobalStyle from "../components/globalStyles";
import Navbar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
