import Head from 'next/head'
import Homepage from '../components/Homepage'

export default function Home() {
  return (
    <>
      <Head>
        <title>TemplateForge — Craft Professional Results in Minutes</title>
        <meta name="description" content="Premium templates for work, school and life." />
      </Head>
      <Homepage />
    </>
  )
}
