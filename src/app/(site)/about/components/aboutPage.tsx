'use client'

import styles from './about.module.css'
import Image from "next/image";
import { Suspense } from "react";

export default function AboutPersonalPage() {

    return (
        <main className='flex flex-col items-center bg-zinc-900'>
            <section className={`flex flex-col items-center justify-center p-2 gap-5 ${styles.about}`}>
                <Suspense fallback={<>Loading...</>}>
                <Image src={'/images/anime-photo.svg'} className="rounded-full" width={120} height={120} alt={'whatsapp-icon'} />
                <div className="h-[1px] w-[40%] bg-zinc-100"/>
                </Suspense>

                <main className="flex flex-col items-center justify-center gap-5 p-10">
                    <h1 className="text-3xl font-bold" >Rodrigo Carvalho</h1>
                    <p>Sou um programador pleno com uma sólida formação em desenvolvimento full stack, o que significa que possui habilidades tanto no front-end quanto no back-end, permitindo que trabalhe em todas as camadas de uma aplicação. Ao longo de minha carreira, eu consolidei conhecimentos em diversas tecnologias essenciais para a construção de sistemas completos e eficientes.                        
                    </p>
                    <div className="h-[1px] w-full bg-zinc-100"/>
                    <p>
No front-end, Tenho é proficiente em HTML, CSS e JavaScript, além de dominar frameworks populares como React, Vue.js e Angular. Essas habilidades permitem que eu crie interfaces intuitivas e atraentes, sempre com foco na experiência do usuário e na acessibilidade. Eu me preocupo com a responsividade e acessibilidade dos meus projetos, garantindo que as aplicações funcionem bem em diferentes dispositivos e sejam acessíveis a um público diverso.
                    </p>
                    <div className="h-[1px] w-full bg-zinc-100"/>
                    <p>
                    No back-end, Tenho tem experiência com Node.js e frameworks como Nest.js, Django, Flask, Adonis.js. Além de linguagens como Python e Javascript. Eu compreendo os conceitos fundamentais de arquitetura de software e sei estruturar APIs robustas, seguras e escaláveis, seja para projetos pequenos ou para aplicações de maior porte. também possuo um sólido entendimento em bancos de dados, tanto relacionais (como MySQL e PostgreSQL) quanto não relacionais (como MongoDB), o que a permite modelar e gerenciar dados de maneira eficiente.
                    </p>

                    <button
                    className="bg-zinc-950 hover:bg-zinc-800 transition-all text-white font-bold py-2 px-4 rounded-2xl"
                    onClick={() =>  {window.location.href = '/'}}
                    >
                        Retornar para Home
                    </button>


                </main>
                
            </section>
        </main>
    );
}