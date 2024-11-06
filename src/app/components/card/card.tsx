import styles from '@/app/components/card/card.module.css';
import { Instagram, Linkedin, RectangleHorizontal, X } from 'lucide-react';
import { Minus } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { Suspense, useEffect, useState } from 'react';
import { Github } from 'lucide-react';
import Loading from '@/app/loading';
import Whatsapp from '../elements/whatsapp';

export default function Card() {

    type User = {
        login: string;
        bio: string;
        avatar_url: string;
    }


    const [ user , setUser ] = useState( {} as User ); 

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.github.com/users/RodrigoCarvalho-Dev');
            const data = await response.json();
            setUser(data);    
        }
        fetchData();    
    } , []);
    
    return (
        <div className={styles.card}>
            <header className={`flex justify-between p-5 w-full bg-zinc-800 ${styles.header}`}>
                <div className='flex gap-3 items-center'>
                    <X className='text-red-300' width={20} height={20}/>
                    <RectangleHorizontal width={20} height={20}/>
                    <Minus width={20} height={20}/>
                </div>

                <div>
                    <span className='flex justify-around gap-3  items-center w-min-[200px] bg-zinc-900 p-2 px-4 rounded-lg border'>
                        <ShieldCheck width={20} height={20}/>
                        <h3 className='font-normal text-xs'>https://github.com/RodrigoCarvalho-Dev</h3>
                    </span>

                </div>
            </header> 


            <main className='flex flex-col justify-center items-center p-8'>
                <div className='flex flex-col gap-5 items-center'>
                    <Suspense fallback={<Loading/>}>
                    <img
                    className='rounded-full'
                    src={user.avatar_url} alt="github-avatar" width={200} height={200} />
                    <h1>@{user.login}</h1>
                    <p>{user.bio}</p>
                    </Suspense>
                    
                </div>




                
                <footer className='flex gap-10 p-10 flex-col m-0'>
                                            <a href="https://www.instagram.com/rodrigo.junior_" className=' bg-zinc-900 hover:bg-neutral-700 transition-all rounded-full p-2'>
                                        <Instagram width={30} height={30} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/rodrigo-c-dev" className=' bg-zinc-900 hover:bg-neutral-700 transition-all rounded-full p-2'>
                                        <Linkedin width={30} height={30} />
                                        </a>
                                        <a href="https://wa.me/558597376799" className='bg-zinc-900 hover:bg-neutral-700  transition-all rounded-full p-2'>
                                        <Whatsapp/>
                                        </a>
                                        <a href="https://github.com/RodrigoCarvalho-Dev" className='bg-zinc-900 hover:bg-neutral-700  transition-all rounded-full p-2'>
                                        <Github width={30} height={30}/>
                                        </a>
            </footer>

            <span>feito com ♥</span>

            </main>



        </div>
    );
}