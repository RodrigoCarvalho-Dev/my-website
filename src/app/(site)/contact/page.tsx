'use client';

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Container, Content } from "./style";

export default function Form() {

        

    return ( 
        <>
        <Header/>
            <Container>
                <Content>
                    <div>
                        <h1>Contato</h1>
                            <p className="text-center text-2xl">entre em contato conosco</p>
                            <p className="text-center text-2xl">(85) 997376799</p>
                            
                        <div className="flex flex-col text-center ">
                            email para contato
                            contato@rodrigocarvalhodev.com
                        </div>
                    </div>
                          
                        
                </Content>
            </Container>
            <Footer/>
        </>
    );
}