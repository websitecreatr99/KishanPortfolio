import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.5.1/build/styles/rainbow.min.css" />
        <title>Data Scientist | Machine Learning | Deep Learning </title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.5.1/build/highlight.min.js" strategy="lazyOnload">
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
      </Script>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}