import styles from '@/app/components/main/sections/tecnology/section.module.css';
import  Image  from 'next/image';
import Summary from '../../../elements/summary/summary';

export default function SectionTecnology() {
    return (
        <section
        className="flex flex-col gap-5 justify-center items-center"
        >
            <div>
            <h2>Dos fundamentos até o avançado</h2>
            <h1 className="font-bold text-3xl">Utilizamos as mais evoluídas tecnologias do mercado</h1>
            </div>



            <div className="flex flex-row gap-5">
                <Image
                src="/tecnology/react-logo.svg" width={50} height={50}
                alt='react-logo'/>
                <Image src="/tecnology/next-logo.svg" width={50} height={50}
                alt='next-logo'/>
                <Image src={"/tecnology/Nest-logo.svg"} width={50} height={50} alt='nest-logo'/>
                <Image src={"/tecnology/Django-logo.svg"} width={50} height={50} alt='django-logo'/>
                <Image src={"/tecnology/Node-logo.svg"} width={50} height={50} alt='node-logo'/>
            </div>

            <div className='h-[1px] w-5/6 bg-zinc-600'/>
            
                <Summary/>
        </section>
    );
}