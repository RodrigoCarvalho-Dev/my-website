'use client';


import { Menu, X } from 'lucide-react';
import styles from './header.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function Header() {
    
    
    return (
        <header className={`flex items-center justify-between py-2 px-16 bg-zinc-900 gap-5 ${styles.header} `} >
            
            <Image src='/logo/logo.png'  alt="logo" width={80} height={80} className='cursor-pointer'
            onClick={() => {
                window.location.href = '/home';
            }}
            />
            
            
        <div className={`h-[1px] w-full bg-zinc-100 ${styles.line}`}/>


            <nav 
                className={`flex gap-5 items-center ${styles.nav}`}
            >
                <a className='font-bold hover:underline link-animation'
                 href="/home" target="_self" rel="noopener noreferrer">Home</a>
                <a className={`font-bold hover:underline link-animation`}
                 href="/about" target='_self' rel='noopener noreferrer'>About</a>
            </nav>

            

           
                
            
        </header>
    );
}