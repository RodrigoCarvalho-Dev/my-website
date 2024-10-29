import styles from '@/app/components/card/card.module.css';
import { RectangleHorizontal, X } from 'lucide-react';
import { Minus } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

/*

 useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/dados');
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

*/


export default function Card() {

    interface User {
        name: string;
        login: string;
        bio: string;
        avatar_url: string;
    }


    const [ user , setUser ] = useState( {} as User ); ;

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
                    <span className='flex gap-3  items-center w-min-[200px] bg-zinc-900 p-2 px-4 rounded-lg border'>
                        <ShieldCheck width={20} height={20}/>
                        <h3>https://github.com/RodrigoCarvalho-Dev</h3>
                    </span>

                </div>
            </header> 


            <main className='flex flex-col justify-center items-center p-8'>
                <div className='flex flex-col gap-5 items-center'>
                    <img
                    className='rounded-full'
                    src={user?.avatar_url} alt="github-avatar" width={200} height={200} />
                    <h1>@{user?.login}</h1>
                    <p>{user?.bio}</p>
                </div>




                
            <footer className='flex gap-10 p-5 flex-col'>
                <a href="">Github</a>
                <a href="">Whatsapp</a>
                <a href="">instagram</a>
                <a href="">Linkdin</a>
            </footer>

            </main>



        </div>
    );
}