import { CircleUserRound } from 'lucide-react';
import { ChartNoAxesColumnIncreasing } from 'lucide-react'
import { PanelsTopLeft } from 'lucide-react';
import { Shield } from 'lucide-react';
import Image from 'next/image';



export default function SectionIntro() {
    return (
        <section className='grid gap-10 grid-rows-1'>
        <div className='flex flex-row gap-5 items-center'>
            <h1 className=' flex font-bold  gap-3 items-center'>
                <CircleUserRound width={25} height={25}/>
                Rodrigo Carvalho
            </h1>
            <div className='h-full w-[1px] bg-zinc-100'/>
            
            <p>desenvolvedor de Sofware e profissional em TI</p>
        </div>

        <div className='flex flex-col gap-3'>
            <h1 className='font-extrabold'>Faça seus projetos comigo de forma dinâmica e prática</h1>
            <p>seus projetos serão desenvolvidos de forma altamente sofistica e com responsabilidade</p>

                <div className='flex h-[54px] items-center justify-center gap-5'>
                    <div className='flex flex-row items-center gap-2'>
                    <ChartNoAxesColumnIncreasing width={50} height={50}/>
                    nível Pleno
                    </div>
                        <div className='h-full w-[1px] bg-gray-600'/>
                    <div className='flex flex-row items-center gap-2'>
                        <PanelsTopLeft width={50} height={50}/>
                        <p>Mais de 50 projetos no gitHub</p>
                    </div>
                    <div className='h-full w-[1px] bg-gray-600'/>
                    <div className='flex flex-row items-center gap-2'>
                        <Shield width={50} height={50}/>
                        <p>Projetos feitos a base de testes e segurança</p>    
                    </div>           
                </div>
        </div>
        <Image src={'/images/image-computer.svg'} alt="logo" width={1000} height={1000}/>
    </section>
    );
    }