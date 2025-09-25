import Header from "@/app/components/header/header";
import { ProjectCard } from "@/app/components/projectPage/projectCard/ProjectCard";
import { Lock, FastForward} from "lucide-react";


export default function Projects() {

    return (

        <>
        <Header/>

        <main className="flex flex-col justify-center items-center w-full h-auto p-4">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h1 className="font-bold text-5xl text-center">Projetos</h1>
                
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex flex-row items-center gap-4">
                        <Lock />
                        <p className="text-2xl">+</p>
                        <FastForward/>
                    </div>
                    <p className="font-semibold text-2xl">Segurança & velocidade</p>
                    <p className="font-normal text-md">usando sempre as tecnologias mais modernas do mercado</p>
                </div>
                

                <ProjectCard
                    title="selective-test-infinity"
                    text="Projeto back-end com nest.js para a infinity"
                    imgAlt="logo_nest"
                    imgLink="/tecnology/Nest-logo.svg"
                />

            </div>
        </main>
        </>
    )

}