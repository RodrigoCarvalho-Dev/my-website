'use client';


import styles from '@/app/components/main/main.module.css';
import SectionIntro from './sections/intro/sectionIntro';
import { CircleArrowDown } from 'lucide-react';
import Card from '../card/card';
import { Suspense } from 'react';
import Loading from '../../loading';
import AboutHome from '../about/about';

import React, { useRef } from 'react';
import SectionTecnology from './sections/tecnology/sectionTecnology';

export default function Main() {

    const mySectionTech : any = useRef( null );
    const handleTech = () => {
    mySectionTech.current.scrollIntoView({ behavior: 'smooth' });
    };

    const mySectionCard : any = useRef( null );
    const handleCard = () => {
    mySectionCard.current.scrollIntoView({ behavior: 'smooth' });
    };

    const mySectionAbout : any = useRef( null );
    const handleAbout = () => {
        mySectionAbout.current.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <main className='flex flex-col p-10 justify-center items-center gap-20'>
           <SectionIntro/>

           
        <div className='w-full h-[1px] bg-slate-600 flex items-center justify-center'>
            <button className='bg-zinc-900 rounded-full  hover:scale-110 transition-all' onClick={handleTech}>
                <CircleArrowDown  width={50} height={50}/>
            </button>
        </div>

        <section ref={mySectionTech} className ={`section_pricipal`}>
                <SectionTecnology/>
        </section>

        <div className='w-full h-[1px] bg-slate-600 flex items-center justify-center'>
            <button onClick={handleCard} className='bg-zinc-900 rounded-full  hover:scale-110 transition-all'>
                <CircleArrowDown  width={50} height={50}/>
            </button>
        </div>

        <section 
        ref={mySectionCard}
        className='section_card flex items-center justify-center'
        >
        <Suspense fallback={<Loading/>}>
            <Card/>
        </Suspense>
        </section>

        
        <div className='w-full h-[1px] bg-slate-600 flex items-center justify-center'>
            <button className='bg-zinc-900 rounded-full  hover:scale-110 transition-all'
            onClick={handleAbout}
            >
                <CircleArrowDown  width={50} height={50}/>
            </button>
        </div>

        <section 
        className='section_about'
        ref={mySectionAbout}
        >
        <AboutHome/>
        </section>       
        </main>

    );
}