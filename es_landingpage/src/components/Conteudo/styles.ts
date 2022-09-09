import styled from 'styled-components'

export const Container = styled.section `
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    z-index: -1;
    h1{
        font-size: 4.5rem;
        @media (max-width: 500px) {
            font-size: 2.5rem;
            margin: 0.5rem;
            text-align: center;
        }
    }
    #texto{
        display: flex;
        width: 60%;
        flex-direction: column;
        text-align: justify;
        text-indent: 50;
        align-items: center;
        p{
            font-size: 1.75rem;
            text-indent: 2.5rem;
            @media (max-width: 500px) {
                
                font-size: 1.2rem;
            }
        }
    }
    blockquote{
        display: flex;
        flex-direction: column;
        background: #D4D4D8;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        font-size: 2.5rem;
        font-weight: 400;
        padding: 1.25rem;
        font-style: italic;
        label{
            text-align: end;
        }
        @media (max-width: 500px) {
            width: 100%;
            font-size: 1.2rem;
        }
        
    }
    #contatos{
        display: flex;
        width: 100%;
        justify-content: space-around;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        @media (max-width: 500px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    }
    
`