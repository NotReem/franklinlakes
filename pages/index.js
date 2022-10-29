import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Franklin Lakes Math!" />
        <p className="description">
          In Progress <code>By Kimo :)</code>
          <iframe id="gameframe" src="https://806e2242-df99-4dcd-b6ac-2c20175159a8.poki-gdn.com/1f884fd8-2d89-46aa-9e6c-359550da969f/index.html?country=US&amp;url_referrer=https%3A%2F%2Fpoki.com%2F&amp;tag=pg-v3.40.2&amp;categories=2%2C69%2C775%2C854%2C929%2C1109%2C1126%2C1140%2C1141%2C1143%2C1147%2C1159%2C1171&amp;site_id=3&amp;iso_lang=en&amp;poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fretro-bowl&amp;v=1667004464128&amp;game_id=806e2242-df99-4dcd-b6ac-2c20175159a8&amp;game_version_id=1f884fd8-2d89-46aa-9e6c-359550da969f" allow="autoplay; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write" scrolling="no"></iframe>
        </p>
      </main>

      <Footer />
    </div>
  )
}
