
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Summary = () => {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {data.map((tech, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <Card className="w-[80vw] bg-zinc-800 rounded-xl">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <img src={tech.img} alt={`${tech.category} logo`} className="w-16 h-16" />
                <h2 className="text-2xl font-bold text-white">{tech.category}</h2>
                <p className="text-white text-center">{tech.content}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

const data = [
  {
    category: "React",
    content:
      "React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em aplicativos web. É mantido pela equipe de desenvolvimento do Facebook e sua comunidade que desenvolve em seu código aberto no Github.",
    img: "/tecnology/React-logo.svg",
  },
  {
    category: "Vue",
    content:
      "O Vue é um framework JavaScript progressivo para a construção de interfaces de usuário, especialmente popular no desenvolvimento de front-end. Criado por Evan You, ele permite a criação de interfaces dinâmicas e interativas de forma eficiente, com um foco em facilitar o desenvolvimento de componentes reutilizáveis e modulares.",
    img: "/tecnology/Vue-logo.svg",
  },
  {
    category: "Django",
    content:
      "Django é um framework de alto nível escrito em Python, projetado para simplificar o desenvolvimento de aplicações web robustas e escaláveis, focado principalmente no lado back-end.",
    img: "/tecnology/Django-logo.svg",
  },
  {
    category: "Next",
    content:
      "Next é um framework de desenvolvimento full-stack em JavaScript, construído sobre o React, que facilita a criação de aplicações web escaláveis e otimizadas para desempenho.",
    img: "/tecnology/Next-logo.svg",
  },
  {
    category: "Nest",
    content:
      "Nest é um framework para desenvolvimento de aplicações back-end com Node.js, criado em TypeScript, embora também seja compatível com JavaScript.",
    img: "/tecnology/Nest-logo.svg",
  },
  {
    category: "Node",
    content:
      "Node é um ambiente de execução JavaScript do lado do servidor, que permite executar código JavaScript fora do navegador. Ele permite construir aplicações de alta performance, escaláveis e de I/O intensivo.",
    img: "/tecnology/Node-logo.svg",
  },
];