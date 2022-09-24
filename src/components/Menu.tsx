//O menu era ter dois formatos, um especifico para Home e outro para as demais páginas
//Tudo isso será controlado pela props modo, que será enviada por quem estiver chamando o Menu
//Modo terá dois valores: default e home

import Link from "next/link";
import Image from "next/image"
import logo from '../../public/images/home/logo.png'
import styles from '../styles/Home.module.css'
import { iconePesquisa } from "./icons";

export default function Menu(props) {
    return (
        <header className={styles.container}>
            <div className={styles.image}>
                <Image src={logo} alt="Logo do site, nele temos as palvras Plataforma de Estágio" />
            </div>
            <ul className={styles.menu}>
                <li className={styles.menuItems}><Link href="./vagas">Vagas</Link></li>
                <li className={styles.menuItems}><Link href="./contato">Contato</Link></li>
                <li className={styles.menuItems}><Link href="./sobrenos">Sobre Nós</Link></li>
                <li className={styles.menuItems}><Link href="./termos">Termos de uso</Link></li>
            </ul>
            <div className={styles.containerBotao}>
                <input type="text" className={styles.inputPesquisa} placeholder="Digite para pesquisar..."/>
                <button className={styles.botaoPesquisa}>{iconePesquisa}</button>
            </div>
            <div>
                <button>Login</button>
                <button>Cadastro</button>
            </div>
        </header>
    )
}