import styles from './intro.module.css';
import { CircleUserRound } from 'lucide-react';
import { ChartNoAxesColumnIncreasing } from 'lucide-react'
import { Code } from 'lucide-react';
import { GraduationCap } from 'lucide-react';




export default function SectionIntro() {
    return (
    <>
    
    <section className={`flex flex-row gap-10 items-center h-auto justify-center  ${styles.section_intro}`}>
        <div className='flex flex-col gap-5 '>
            <div className={`flex flex-row p-0 gap-3 w-full items-center justify-between  ${styles.text}`}>
                <h1 className=' flex font-bold  gap-3 items-center'>
                <CircleUserRound width={25} height={25}/>
                Rodrigo Carvalho
                </h1>
            
                <div className='h-[1px] w-[80%] bg-zinc-100'/>
            
             <p><span className='font-medium'>Desenvolvedor de Sofware</span> e profissional em TI</p>
        </div>

        <div className='flex flex-col gap-5 bg-transparent'>
            <h1 className='font-extrabold'>Faça seus projetos comigo de forma dinâmica e prática</h1>
            <p>seus projetos serão desenvolvidos de forma altamente sofistica e com responsabilidade</p>

                <div className={`flex h-auto items-center text-center justify-center gap-5 ${styles.certifications}`} >
                    <div className='flex flex-row items-center gap-2'>
                    <ChartNoAxesColumnIncreasing width={50} height={50}/>
                    nível Júnior
                    </div>
                        <div className='h-[1px] w-full bg-gray-600 xl:h-full xl:w-[1px]'/>
                    <div className='flex flex-row items-center gap-2'>
                        <GraduationCap width={50} height={50}/>
                        <p>Nível Avançado em Inglês</p>
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
        
    </section>

    <div className={`w-[110vw] ${styles.image}`}>
    <img src={'/images/hand.png'} className={`${styles.hand}`} alt={'hand'}/>
    </div>

    </>
    );
    }