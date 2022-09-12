import styled from 'styled-components'

interface ConteudoProps{
    tema: 'claro'|'escuro'
}

export const Container = styled.section<ConteudoProps> `
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    align-items: center;
    color: ${props => props.tema === 'claro'? "var(--secundary-color)" : "var(--primary-color)"};
    h1{
        font-size: 4.5rem;
        margin: 1rem;
        @media (max-width: 820px) {
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
            @media (max-width: 820px) {
                
                font-size: 1.2rem;
            }
        }
        @media (max-width: 820px) {
            width: fit-content;
            margin: 0 2rem 1rem 2rem;
        }
    }
    #texto_apresentacao{
        display: flex;
        width: 60%;
        flex-direction: column;
        text-align: justify;
        text-indent: 50;
        align-items: center;
        p{
            font-size: 1.25rem;
            text-indent: 2.5rem;
            margin: 0;
            
            @media (max-width: 820px) {
                
                font-size: 0.875rem;
            }
        }
        @media (max-width: 820px) {
            width: fit-content;
            margin: 0 2rem 1rem 2rem;
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
        color: var(--secundary-color);
        
        label{
            text-align: end;
        }
        @media (max-width: 820px) {
            width: 100%;
            font-size: 1.2rem;
        }
        
    }
    #grupo_produtos{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    #contatos{
        display: flex;
        width: 100%;
        justify-content: space-around;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        @media (max-width: 820px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    }
    
`