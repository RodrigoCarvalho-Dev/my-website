'use client';

import { Line } from './style';
import styles from './header.module.scss';
import Image from 'next/image';
import { MenuMobile } from '../menu-mobile/menu-mobile';

export default function Header() {
    
    
    return (
        <header className={`flex items-center justify-between py-2 px-16 bg-zinc-900 gap-5 ${styles.header} `} >
            
            <Image src='/logo/logo.png'  alt="logo" width={80} height={80} className='cursor-pointer'
            onClick={() => {
                window.location.href = '/home';
            }}
            />
            
            
            <Line className={`bg-zinc-50`}/>


            <nav 
                className={`flex gap-5 items-center ${styles.nav}`}
            >
                <a className='font-bold hover:opacity-80 transition-all'
                 href="/home" target="_self" rel="noopener noreferrer">Home</a>
                <a className={`font-bold hover:opacity-80 transition-all`}
                 href="/about" target='_self' rel='noopener noreferrer'>Sobre</a>
                <a className='font-bold hover:opacity-80 transition-all' 
                href="/contact" target='_self' rel='noopener noreferrer'>Contato</a>
            </nav>


           <MenuMobile/>


        </header>
    );
}