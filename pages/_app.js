import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar';
import { useEffect } from 'react';

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
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
