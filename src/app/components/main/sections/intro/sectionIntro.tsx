import styles from './intro.module.css';
import { Code } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { CgWebsite } from 'react-icons/cg';
import { FaCertificate } from 'react-icons/fa';



export default function SectionIntro() {
    return (
    <>
    
    <section className={`flex flex-row max-md:flex-col h-100vh gap-10 items-center h-auto justify-center  ${styles.section_intro}`}>
        <div className='flex flex-row max-md:flex-col  gap-5 '>
            <div className={`flex flex-row p-0 gap-0 w-full items-center justify-between ${styles.text}`}>
                <h1 className='flex flex-col font-bold  gap-3 items-center'>
                <img className='h-auto w-[40%] max-md:w-15 max-md:h-15 rounded-full' src={"/images/my-photo.png"} alt='my_photo'/>
                <p className='flex items-center font-bold text-3xl text-center'>Olá 👋</p> <p className='font-light text-2xl'>Me chamo, <span className='font-bold'>
                Rodrigo Carvalho</span></p>
                </h1>
             <p><span className='font-extralight text-sm'>Desenvolvedor de Sofware</span> e profissional em TI</p>
            </div>

        <div className='flex flex-col gap-5 bg-transparent'>
            <h1 className='font-extrabold'>Faça seus projetos comigo de forma dinâmica e prática</h1>
            <p>seus projetos serão desenvolvidos de forma altamente sofistica e com responsabilidade</p>

                <div className={`flex h-full items-center text-center justify-center gap-5 ${styles.certifications}`} >
                    <div className='flex flex-row items-center gap-2'>
                    <FaCertificate className='h-8 w-8'/>
                    Certificação nas tecnologias
                    </div>
                        <div className='h-[1px] w-full bg-gray-600 xl:h-full xl:w-[1px]'/>
                    <div className='flex flex-row items-center gap-2'>
                        <GraduationCap width={50} height={50}/>
                        <p>Nível Avançado em Inglês C1 TOEFL iBT</p>
                    </div>
                    <div className='h-[1px] w-full bg-gray-600 xl:h-full xl:w-[1px]'/>
                    <div className='flex flex-row justify-center items-center gap-2 p-0 text-center'>
                        <Code width={50} height={50}/>
                        <p>Programador Full Stack</p>    
                    </div>           
                </div>
            </div>
        
        </div>

        <img  src={'/images/hand.png'} className={`${styles.image_H1440px}`} alt={'hand'}/>

        <button className='flex flex-row items-center gap-4 bg-zinc-800 rounded-lg px-4 py-2 text-2xl hover:bg-zinc-700'>
        <span className='font-bold'>Portfólio</span>
        <CgWebsite className='h-5 w-5'/>
    </button>

    </section>

    

    <div className={`w-[110vw] ${styles.image}`}>
    <img src={'/images/hand.png'} className={`${styles.hand}`} alt={'hand'}/>
    </div>

    </>
    );
    }