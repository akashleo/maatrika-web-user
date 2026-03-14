import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReduxProvider } from '../store/Provider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ReduxProvider>
  );
}
