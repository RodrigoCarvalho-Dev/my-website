'use client';

import Image from "next/image";
import styles from '@/app/components/about/about.module.css';

export default function AboutHome() {
    return (
        <section className={`flex flex-col items-center justify-center text-center p-5 ${styles.about_home}`}>
           
           <div className={`${styles.conteiner}`}>
          
            <div className={`flex flex-col items-center justify-center ${styles.about}`} >
            <h1 className="font-bold text-3xl">Sobre Mim</h1>
                <div className="flex flex-col gap-5 p-4 text-center">
                    <h1 className="font-extrabold text-3xl">Rodrigo Carvalho</h1>
                    <p>Sou um Desenvolvedor de Software com 2 anos de experiência, sou um desenvolvedor Full Stack que trabalha com as linguagens Python e Javascript</p>
                    <button className="bg-zinc-950 hover:bg-zinc-800 transition-all text-white font-bold py-2 px-4 rounded-2xl"
                     onClick={() => {
                        window.location.href = '/about'
                    } }
                    >
                        Mais Sobre mim
                    </button>
                </div>
            </div> 
            <Image src={'/images/notebook.svg'} className={`${styles.notebook}`}  alt={'notebook-icon'} width={1000} height={1000} />
            </div>
            
        </section>
    );
}