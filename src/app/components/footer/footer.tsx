import styles from '@/app/components/footer/footer.module.css';
import Image from 'next/image';
import { Instagram , Linkedin } from 'lucide-react';
import { MessagesSquare } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import  Whatsapp  from '@/app/components/elements/whatsapp';




export default function Footer() {
    return (
        <footer className={`bg-zinc-800 ${styles.footer}`}>
            <div>
                <Image src={'/logo/logo.png'} width={100} height={100} alt={'logo'}/>
            </div>
                
            <div className={`flex gap-3 items-center flex-col ${styles.social}`}>

                    <h1 className='flex gap-2 items-center font-bold p-2'>
                        Social Media
                        <MessagesSquare width={20} height={20} />
                    </h1>
                                    <div className={`flex gap-2 items-center  font-bold p-2 ${styles.social_icons}`}>
                                            <a href="https://www.instagram.com/rodrigo.junior_" className=' bg-zinc-900 hover:bg-neutral-700 transition-all rounded-full p-2'>
                                        <Instagram width={30} height={30} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/rodrigo-c-dev" className=' bg-zinc-900 hover:bg-neutral-700 transition-all rounded-full p-2'>
                                        <Linkedin width={30} height={30} />
                                        </a>
                                        <a href="https://wa.me/558597376799" className='bg-zinc-900 hover:bg-neutral-700  transition-all rounded-full p-2'>
                                        <Whatsapp/>
                                        </a>
                            </div>    
                        
            </div>
            <div className='flex items-center flex-col gap-2'>
                    <h1 className='flex gap-2 items-center font-bold p-2'>
                        Contato
                        <Smartphone width={20} height={20} />
                    </h1>  
                    <h3>telefone - (85) 997376799</h3>
                    <h3 className='flex text-center flex-col gap-2'>email para contato<br/> rodrigosms103042r6@gmail.com 
                    </h3>   
            </div>
        </footer>
    );
}


// # Social media

// instagram -> @rodrigocarvalho
// github -> whatsapp -> (85) 997376799

// # Contato

// telefone -> (85) 997376799
// email -> email para contato -> rodrigosms103042r6@gmail.com || contato@rodrigocarvalhodev.com
// 