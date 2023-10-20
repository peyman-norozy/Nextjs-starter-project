import MainLayout from "@/layouts/MainLayout";
import Providers from "@/shop/provider";
import "../styles/globals.css";
const MyApp = ({ Component, pageProps }) => {
  return (
    <Providers>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Providers>
  );
};

export default MyApp;
