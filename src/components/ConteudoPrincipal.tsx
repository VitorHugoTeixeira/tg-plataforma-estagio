import Link from "next/link";
import Image from "next/image"
import imagemDiploma from '../../public/images/home/diploma-de-graduacao.png'
import imagemLicenciamento from '../../public/images/home/licenciamento.png'
import imagemComputador from '../../public/images/home/tela-de-computador.png'
import imagemEquipe from '../../public/images/home/equipe.png'
import imagemUsuario from '../../public/images/home/usuario.png'
import styles from '../styles/ConteudoPrincipal.module.css'
import { iconeMenuMobile, iconeSetaDireita } from "./icons";
import { useEffect, useState } from "react";

export default function ConteudoPrincipal() {
    const [pesquisaVagas, setPesquisaVagas] = useState('')
    return (
        <main className={styles.main__containerPrincipal}>
            <article className={styles.main__container}>
                <hr className={styles.main__linha} />
                <h2 className={styles.main__subtitulo}>Venha fazer seu estágio!</h2>
                <h1 className={styles.main__titulo}>Encontre a sua vaga de Estágio</h1>
                <div className={styles.main__containerBusca}>
                    <input type="text" className={styles.main__campoBusca} value={pesquisaVagas}
                        placeholder="Pesquisar Vagas..." onChange={e => setPesquisaVagas(e.target.value)} />
                    <button className={styles.main__botaoBuscar}>Buscar</button>
                </div>
                <div className={styles.main__containerCaracteristicas}>
                    <div className={styles.main_carateristica}>
                        <Image src={imagemLicenciamento} className={styles.main__imgCaracteristica} />
                        <h3 className={styles.main_tituloCaraterisca}>Validar documentos do estágio</h3>
                    </div>
                    <div className={styles.main_carateristica}>
                        <Image src={imagemComputador} className={styles.main__imgCaracteristica} />
                        <h3 className={styles.main_tituloCaraterisca}>Ambiente totalmente online</h3>
                    </div>
                    <div className={styles.main_carateristica}>
                        <Image src={imagemDiploma} className={styles.main__imgCaracteristica} />
                        <h3 className={styles.main_tituloCaraterisca}>Integração completa com Faculdades</h3>
                    </div>
                </div>
            </article>
            <aside className={styles.main__conteudoSecundario}>
                <h2 className={styles.main__tituloConteudoSecundario}>FAQ</h2>
                <h2 className={styles.main__subtituloConteudoSecundario}>Dúvidas sobre o P.E</h2>
                <p className={styles.main__paragrafoConteudoSecundario}>Encontre as respostas que procura na nossa página de <Link href="/duvidas"><a className={styles.main__linkDuvida}>Dúvidas</a></Link></p>
                <div className={styles.main__secao}>
                    <Image src={imagemEquipe} className={styles.main__imagemEquipe} />
                    <div className={styles.main__containerDuvidas}>
                        <section className={styles.main__secaoDuvida}>
                            <Link href='/'>
                                <div className={styles.main__containerTituloDuvida}>
                                    <h3 className={styles.main__tituloDuvida}>Como pesquisar Vagas de estágio?</h3>
                                    {iconeSetaDireita}
                                </div>
                            </Link>
                            <hr className={styles.main__linhaDuvida} />
                        </section>
                        <section className={styles.main__secaoDuvida}>
                            <Link href='/'>
                                <div className={styles.main__containerTituloDuvida}>
                                    <h3 className={styles.main__tituloDuvida}>Como se cadastrar no P.E?</h3>
                                    {iconeSetaDireita}
                                </div>
                            </Link>
                            <hr className={styles.main__linhaDuvida} />
                        </section>
                        <section className={styles.main__secaoDuvida}>
                            <Link href='/'>
                                <div className={styles.main__containerTituloDuvida}>
                                    <h3 className={styles.main__tituloDuvida}>Como enviar a documentação do estágio?</h3>
                                    {iconeSetaDireita}
                                </div>
                            </Link>
                            <hr className={styles.main__linhaDuvida} />
                        </section>
                    </div>
                </div>
            </aside>
            <aside className={styles.main__conteudoOpiniao}>
                <div className={styles.main__containerOpiniao}>
                    <h2 className={styles.main__tituloPergunta}>O que acham de nós?</h2>
                    <p className={styles.main_opiniao}>"Depois de muitas horas de correções de documentos finalmente temos uma plataforma que facilite a manutenção dos estágios dos alunos".</p>
                    <p className={styles.main__conclusaoOpiniao}>Obrigada PE.com!</p>
                    <h4 className={styles.main__nomeUsuario}>Maria José</h4>
                </div>
                <div className={styles.main__containerImagem}>
                    <Image src={imagemUsuario} alt="Imagem representativa de um usuário do P.E" className={styles.main__imagemGarota} />
                </div>
            </aside>
        </main>
    )
}