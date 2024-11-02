import Image from 'next/image';

export default function Whatsapp() {
    return (
        <Image src={'/icons/whatsapp-icon.svg'} width={30} height={30} alt={'whatsapp-icon'}/>
    );
}