import styles from '@/app/components/main/main.module.css';
import SectionIntro from './sections/sectionIntro';

import { CircleArrowDown } from 'lucide-react';
import SectionPrincipal from './sections/sectionPrincipal';
import Card from '../card/card';
import { Suspense } from 'react';
import Loading from '@/app/loading';


export default function Main() {

    return (
        <main className='flex flex-col p-10 justify-center items-center gap-20'>
           <SectionIntro/>

           
        <div className='w-full h-[1px] bg-slate-600 flex items-center justify-center'>
            <button className='bg-zinc-900 rounded-full  hover:scale-110 transition-all'>
                <CircleArrowDown  width={50} height={50}/>
            </button>
        </div>
        <SectionPrincipal/>


        <div className='w-full h-[1px] bg-slate-600 flex items-center justify-center'>
            <button className='bg-zinc-900 rounded-full  hover:scale-110 transition-all'>
                <CircleArrowDown  width={50} height={50}/>
            </button>
        </div>

        <Suspense fallback={<Loading/>}>
            <Card/>
        </Suspense>
            
        
        </main>
    );
}