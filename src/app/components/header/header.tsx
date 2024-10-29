import styles from './header.module.css';


export default function Header() {
    return (
        <header className={`flex items-center justify-between py-2 px-16 bg-zinc-900 gap-10 ${styles.header} `} >
            <img src='/logo/logo.png'  alt="logo" width={100} height={100}/>
            
        <div className='h-[1px] w-full bg-zinc-100'/>


            <nav 
                className='flex gap-10 items-center '
            >
                <a className='font-bold hover:underline link-animation'
                 href="" target="_self" rel="noopener noreferrer">Home</a>
                <a className={`font-bold hover:underline link-animation`}
                 href="" target='_self' rel='noopener noreferrer'>About</a>
            </nav>
        </header>
    );
}