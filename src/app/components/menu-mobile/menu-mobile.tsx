'use client';


import './menu-mobile.scss';
import { useEffect, useRef, useState } from "react";
import {  House, Menu, Smartphone, User, X } from 'lucide-react';
import { Line } from '../header/style';

export function MenuMobile() {

    const [ open , setOpen ] = useState(false as boolean);
    const menuRef = useRef(null as HTMLDivElement);

    const toggleMenu = () => {
        setOpen(!open);
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpen(!open);
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
        <nav className='menu' ref={menuRef}>
            <button
                className='menu-button'
                onClick={toggleMenu}
            >
            <Menu width={45} height={45}/>
            </button>

            <div className={`menu-items ${open ? 'open' : ''} bg-zinc-950 text-white `}>
                <button
                    onClick={toggleMenu}
                >
                    <X width={45} height={45}/>
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
            </div>
        </nav>
    );

}