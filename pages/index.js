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
          Retro Bowl :)
          <iframe src="https://game316009.konggames.com/gamez/0031/6009/live/index.html" width="100%" height="300" class="wp-embed-frame " frameborder="0"></iframe>
        </p>
      </main>

      <Footer />
    </div>
  )
}
