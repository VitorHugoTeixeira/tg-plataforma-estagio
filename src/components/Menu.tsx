import Link from "next/link";
import Image from "next/image"
import logo from '../../public/images/home/logo.png'
import styles from '../styles/Menu.module.css'
import { iconePesquisa, iconeMenuMobile } from "./icons";
import { useEffect, useState } from "react";


export default function Menu(props) {
    const [menuMobile, setMenuMobile] = useState(styles.desabilitar)
    const [pesquisa, setPesquisa] = useState('')


    function ativarMenuMobile() {
        console.log(styles)
        menuMobile === styles.habilitar ? setMenuMobile(styles.desabilitar) : setMenuMobile(styles.habilitar)
    }

    return (
        <>
            <header className={styles.container}>
                <div className={styles.image}>
                    <Image src={logo} alt="Logo do site, nele temos as palvras Plataforma de Estágio" />
                </div>
                <div className={`${styles.botaoMenuMobile}`}>
                    <button onClick={ativarMenuMobile}>{iconeMenuMobile}</button>
                </div>
                <div className={`${styles.menuDesktop}`}>
                    <nav className={styles.container__menu}>
                        <ul className={styles.menu}>
                            <li className={styles.menuItems}><Link href="./">Home</Link></li>
                            <li className={styles.menuItems}><Link href="./vagas">Vagas</Link></li>
                            <li className={styles.menuItems}><Link href="./contato">Contato</Link></li>
                            <li className={styles.menuItems}><Link href="./sobrenos">Sobre Nós</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.containerPesquisa}>
                        <input type="text" value={pesquisa} onChange={e => setPesquisa(e.target.value)} className={styles.inputPesquisa} placeholder="Digite para pesquisar..." />
                        <button className={styles.botaoPesquisa}>{iconePesquisa}</button>
                    </div>
                    <div className={styles.containerCadastro}>
                        <button className={styles.botaoLogin}>Login</button>
                        <button className={styles.botaoCadastro}>Cadastro</button>
                    </div>
                </div>
            </header>
            <div className={`${styles.menuMobile} ${menuMobile}`}>
                <div className={styles.containerMobilePesquisa}>
                    <input type="text" value={pesquisa} onChange={e => setPesquisa(e.target.value)} className={styles.inputMobilePesquisa} placeholder="Digite para pesquisar..." />
                    <button className={styles.botaoMobilePesquisa}>{iconePesquisa}</button>
                </div>
                <ul className={styles.menuMobileList}>
                    <li className={styles.menuMobileItems}><Link href="./">Home</Link></li>
                    <li className={styles.menuMobileItems}><Link href="./vagas">Vagas</Link></li>
                    <li className={styles.menuMobileItems}><Link href="./contato">Contato</Link></li>
                    <li className={styles.menuMobileItems}><Link href="./sobrenos">Sobre Nós</Link></li>
                </ul>
                <div className={styles.containerMobileCadastro}>
                    <button className={styles.botaoMobileLogin}>Login</button>
                    <button className={styles.botaoMobileCadastro}>Cadastro</button>
                </div>
            </div>
        </>
    )
}

