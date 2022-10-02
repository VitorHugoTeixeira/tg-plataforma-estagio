import Head from 'next/head'
import ConteudoPrincipal from '../components/ConteudoPrincipal'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Menu />
      <ConteudoPrincipal />
      <Footer />
    </div>
  )
}
