import { Github } from "lucide-react";
import Image from "next/image";

interface IProjectCard {
    className? : string;
    title : string; 
    text : string;
    gitHubLink? : string;
    imgLink : string;
    imgAlt : string;
}

export function ProjectCard( { ...props } : IProjectCard ) {

    return (
        <div className={`flex flex-col justify-start items-start w-[20rem] h-auto p-4 rounded-md bg-zinc-900 border-zinc-50 gap-5 ${props.className}`}>
            <h2 className="font-semibold text-xl">{props.title}</h2>
            <div className="w-[80%] h-[1px] bg-zinc-50 "/>
            <p className="text-start">{props.text}</p>
            <Image src={props.imgLink} width={150} height={150} alt={props.imgAlt}/>
            <a href={props.gitHubLink} className="flex flex-row gap-2 bg-zinc-950 rounded-lg px-4 py-2 " target="_blank" rel="noopener noreferrer">Acessar GitHub Code <Github/></a>
        </div>
    )
}