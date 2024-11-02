'use client';

import styles from './summary.module.css';



export default function Summary() {
    return (
        <div className={`flex flex-col gap-5 ${styles.summary}`}>
            <details className={`flex w-[80vw] h-auto items-center bg-zinc-800 rounded-xl p-5 gap-5 ' ${styles.react}`}>
                <summary className='text-3xl font-semibold'>
                    React
                </summary>
                <p>
                    React e uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em aplicativos web. É mantido pelo pela equipe de desenvolvimento do Facebook e sua comunidade que desenvolve em seu código aberto no Github.
                </p>
            </details>

            <details className={`flex w-[80vw] h-auto items-center bg-zinc-800 rounded-xl p-5 gap-5 ' ${styles.react}`}>
                <summary className='text-3xl font-semibold'>
                    Vue
                </summary>
                <p>
                    O Vue é um framework JavaScript progressivo para a construção de interfaces de usuário, especialmente popular no desenvolvimento de front-end. Criado por Evan You, ele permite a criação de interfaces dinâmicas e interativas de forma eficiente, com um foco em facilitar o desenvolvimento de componentes reutilizáveis e modulares. É chamado de "progressivo" porque pode ser adotado gradualmente, ou seja, é possível usá-lo apenas para partes específicas de uma aplicação ou como um framework completo, dependendo das necessidades do projeto.
                </p>
            </details>

            <details className={`flex w-[80vw] h-auto items-center bg-zinc-800 rounded-xl p-6 gap-5 ' ${styles.react}`}>
                <summary className='text-3xl font-semibold'>
                    Django
                </summary>
                <p>
                    Django é um framework de alto nível escrito em Python, projetado para simplificar o desenvolvimento de aplicações web robustas e escaláveis, focado principalmente no lado back-end. Criado para ajudar desenvolvedores a construir aplicativos de forma rápida e eficaz
                </p>
            </details>

            <details className={`flex w-[80vw] h-auto items-center bg-zinc-800 rounded-xl p-6 gap-5 ' ${styles.react}`}>
                <summary className='text-3xl font-semibold'>
                    Next
                </summary>
                <p>
                    Next é um framework de desenvolvimento full-stack em JavaScript, construído sobre o React, que facilita a criação de aplicações web escaláveis e otimizadas para desempenho. Criado pela empresa Vercel, ele é especialmente popular para construir aplicações front-end que se beneficiam de renderização rápida e otimização para SEO
                </p>
            </details>

            <details className={`flex w-[80vw] h-auto items-center bg-zinc-800 rounded-xl p-6 gap-5 ' ${styles.react}`}>
                <summary className='text-3xl font-semibold'>
                    Nest
                </summary>
                <p>
                    Nest é um framework para desenvolvimento de aplicações back-end com Node.js, criado em TypeScript, embora também seja compatível com JavaScript. Ele é inspirado por arquiteturas como o Angular e é ideal para criar aplicações escaláveis e de alto desempenho. Utiliza uma abordagem modular e orientada a objetos, facilitando a construção de APIs robustas e organizadas, sendo especialmente adequado para projetos complexos e de grande escala.
                </p>
            </details>

            <details className={`flex w-[80vw] h-auto items-center bg-zinc-800 rounded-xl p-6 gap-5 ' ${styles.react}`}>
                <summary className='text-3xl font-semibold'>
                    Node
                </summary>
                <p>
                    
                     Node é um ambiente de execução JavaScript do lado do servidor, que permite executar código JavaScript fora do navegador. Desenvolvido sobre o motor de execução V8, o mesmo usado pelo Google Chrome, Node.js permite construir aplicações de alta performance, escaláveis e de I/O intensivo ( muitas interações de entrada e saída ), como APIs, servidores web e sistemas de tempo real
                </p>
            </details>


        </div>
    );
}