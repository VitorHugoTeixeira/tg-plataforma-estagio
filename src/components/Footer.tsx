import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import imagemInstagram from '../../public/images/home/instagram.png'
import imagemFacebook from '../../public/images/home/facebook.png'
import imagemYoutube from '../../public/images/home/youtube.png'
import imagemLinkedin from '../../public/images/home/linkedin.png'
import imagemTwitter from '../../public/images/home/twitter.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__header}>
                <h3 className={styles.footer__anoCopyright}>&copy;2022 P.E</h3>
                <Link href="/termosUso"><a className={styles.footer__linkTermos}>Termos de Uso</a></Link>
            </div>
            <div className={styles.footer__containerMenu}>
                <ul className={styles.footer__menu}>
                    <Link href='/'><li><a className={styles.footer__menuItems}>Home</a></li></Link>
                    <hr className={styles.footer__primeiraLinhaMenu} />
                    <Link href='/'><li><a className={styles.footer__menuItems}>Aluno</a></li></Link>
                    <hr className={styles.footer__segundaLinhaMenu} />
                    <Link href='/'><li><a className={styles.footer__menuItems}>Orientador</a></li></Link>
                    <hr className={styles.footer__terceiraLinhaMenu} />
                    <Link href='/'><li><a className={styles.footer__menuItems}>Faculdade</a></li></Link>
                </ul>
                <ul className={styles.footer__menu}>
                    <Link href='/'><li><a className={styles.footer__menuItems}>Empresa</a></li></Link>
                    <Link href='/'><li><a className={styles.footer__menuItems}>Vagas</a></li></Link>
                    <Link href='/'><li><a className={styles.footer__menuItems}>Dúvidas</a></li></Link>
                    <Link href='/'><li><a className={styles.footer__menuItems}>Contato</a></li></Link>
                </ul>
                <ul className={styles.footer__menuComDoisItens}>
                    <Link href='/'><li><a className={styles.footer__menuItems}>Sobre Nós</a></li></Link>
                    <Link href='/'><li><a className={styles.footer__menuItems}>Pesquisa</a></li></Link>
                </ul>
            </div>
            <div className={styles.footer__containerIcons}>
                <Link href='/'><Image className={styles.footer__iconSocialMedia} src={imagemTwitter} /></Link>
                <Link href='/'><Image className={styles.footer__iconSocialMedia} src={imagemFacebook} /></Link>
                <Link href='/'><Image className={styles.footer__iconSocialMedia} src={imagemInstagram} /></Link>
                <Link href='/'><Image className={styles.footer__iconSocialMedia} src={imagemLinkedin} /></Link>
                <Link href='/'><Image className={styles.footer__iconSocialMedia} src={imagemYoutube} /></Link>
            </div>
        </footer>
    )
}