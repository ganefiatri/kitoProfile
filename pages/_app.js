import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
    <SessionProvider session={pageProps.session}>
      <NextNProgress/>
      <ToastContainer/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
