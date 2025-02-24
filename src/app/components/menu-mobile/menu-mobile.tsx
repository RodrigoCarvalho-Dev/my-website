'use client';


import './menu-mobile.scss';
import { RefObject, useEffect, useRef, useState } from "react";
import {  House, Menu, Smartphone, User, X } from 'lucide-react';
import { Line } from '../header/style';
import Image from 'next/image';
import Link from 'next/link';

export function MenuMobile() {

    const [ open , setOpen ] = useState(false as boolean);
    const menuRef : RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null) ;

    const toggleMenu = () => {
        setOpen(!open);
    }

    const handleClickOutside = (event : Event) => {
        if (menuRef.current) {
            // Verifique se event.target é um Node e não é null
            const target = event.target as Node; // Assegura que target é tratado como Node
            if (!menuRef.current.contains(target)) {
                setOpen(false); // Ou qualquer outra lógica que você deseje
            }
    }
    }

    useEffect(() => {
        if (open) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        // Cleanup event listener on component unmount
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [open]);

    return (

        <>

        <nav className='menu' ref={menuRef}>
            <button
                className='menu-button '
                onClick={toggleMenu}
            >
            <Menu className='hover:bg-zinc-50/40 transform transition-all hover:scale-75 rounded-full ' width={45} height={45}/>
            </button>

            <div className={`menu-items ${open ? 'open' : ''} bg-zinc-950 text-white `}>
                <button
                    className='hover:bg-zinc-200/40 rounded-full'
                    onClick={toggleMenu}
                >
                    <X width={25} height={25}/>
                </button>
                <a href="/home">
                    <House width={25} height={25}/>
                    <p>Home</p>
                </a>
                <Line className='bg-zinc-50'/>
                
                <a href="/about">
                <User width={25} height={25}/>
                <p>Sobre</p>
                </a>
                <Line className='bg-zinc-50'/>
                
                <a href="/contact">
                <Smartphone width={25} height={25}/>
                <p>Contato</p>
                </a>
                <div className='bg-zinc-900 p-3 flex flex-row gap-2 rounded-lg items-center'>
                <p>Feito por Rodrigo Carvalho</p>
                <Link href={`https://github.com/RodrigoCarvalho-Dev`}>
                <Image src="https://avatars.githubusercontent.com/u/152572102?s=400&u=16f72e3a3d631199107e2c5f190bff8ea165260c&v=4" width={25} height={25} alt='logo_img' className='rounded-full'/>
                </Link>
                </div>
                
            </div>
            
        </nav>
    
        </>
    );

}