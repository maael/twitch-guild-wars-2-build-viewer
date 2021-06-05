import '../styles.css'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import useFathom from '../components/hooks/useFathom'
import SEO from '../../next-seo.config'
import EmojiFavicon from '../components/primitives/EmojiFavicon'
import TwitchContext from '../components/context/Twitch'

function App({ Component, pageProps }) {
  useFathom()
  return (
    <TwitchContext>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fd015d" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <EmojiFavicon emoji="🤖" />
      <script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></script>
    </TwitchContext>
  )
}

export default App
