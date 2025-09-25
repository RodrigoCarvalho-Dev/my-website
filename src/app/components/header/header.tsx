'use client';

import { Line } from './style';
import styles from './header.module.scss';
import Image from 'next/image';
import { MenuMobile } from '../menu-mobile/menu-mobile';

export default function Header() {
    
    
    return (
        <header className={`flex items-center justify-between py-2 px-16 gap-5 ${styles.header} bg-transparent`} >
            
            <Image src='/logo/logo.png'  alt="logo" width={80} height={80} className='cursor-pointer'
            onClick={() => {
                window.location.href = '/home';
            }}
            />
            
            
            <Line className={`bg-zinc-50 hidden max-sm:block`}/>


            {/* <nav 
                className={`flex gap-5 items-center ${styles.nav}`}
            >
                <a className='font-bold hover:opacity-80 transition-all'
                 href="/home" target="_self" rel="noopener noreferrer">Home</a>
                <a className={`font-bold hover:opacity-80 transition-all`}
                 href="/about" target='_self' rel='noopener noreferrer'>Sobre</a>
                <a className='font-bold hover:opacity-80 transition-all' 
                href="/contact" target='_self' rel='noopener noreferrer'>Contato</a>
            </nav> */}


           <MenuMobile/>


        </header>
    );
}