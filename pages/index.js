import Head from 'next/head'
import style from '../styles/Home.module.css'

function Home() {
  return (
    <>
      <Head>
        <title>Saas Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className={style.container}
      >
        <h1
          className={style.title}
        >
          Saas Home
        </h1>
        <p
          className={style.subtitle}
        >
          Work in Progress...
        </p>
      </div>
    </>
  )
}

export default Home