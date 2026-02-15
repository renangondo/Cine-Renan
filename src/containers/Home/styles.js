import styled from "styled-components";

export const Background = styled.div`
    background-image: url(${(props) => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover; //Tamanho do background -> assim cobrindo todo espaço
    display: flex;
    align-items: center; // Alinha na vertical
    justify-content: center; // alinha na horizontal

    &::before {
        content: '';
        position: absolute; //posicionado na frente dos elementos
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 1500px;

    
`

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;

    h1 {
        font-size: 5rem;
        font-weight: 700;
        color: #FFFFFF;
    }

    P {
        font-size: 20px;
        font-weight: 500;
        color: #ffffff;
        margin-top: 30px;
        margin-bottom: 20px;

    }
`

export const Poster =styled.div`
    z-index: 2;

    img{
        width: 400px;
        border-radius:30px;
    }

`

export const ContainerButton =styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
`