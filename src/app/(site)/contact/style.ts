import styled from "styled-components";




export const Container = styled.div`
display : flex;
flex-direction : column;
justify-content: center;
align-items: center;
padding: 2rem;
gap: 2rem;

width: 100%;
height : auto;

background-image: url('/components/form/background-form.png');


background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 20rem;
        justify-content: space-between;
    }

    h1{
        font-size: 2.0rem;
        font-weight: 600;
    }

    h3{
    
        text-align: center;
        font-weight: 400;
    }

`


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 60vh;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap : 5rem       
    }

`