import styled from 'styled-components'
interface CabecalhoProps{
    tema: 'claro'|'escuro'
}

export const Container = styled.nav<CabecalhoProps> `
    width: 100%;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.tema === 'claro'? "var(--primary-color)" : "var(--secundary-color)"};
    
    #grupo_logo{
        height: 100%;
        width: 18rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 1rem;
        font-weight: 400;
        cursor: pointer;
        h2{
            padding-left: 0.5rem;
            white-space: nowrap;
        }
    
        img{
            height: 75%;
        }
        @media (max-width: 820px){
            a{
                height: 100%;
                width: fit-content;
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-left: 1rem;
                font-weight: 400;
                h2{
                padding-left: 0.5rem;
                white-space: nowrap;
                }
            
                img{
                    height: 75%;
                }
            }
        }
    }
    #logo{
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    #instagramIcon{
        margin-right: 1rem;
        img{
            width: 2rem;
        }
    }

    a{
        text-decoration: none;
        font-weight: 500;
        font-size: 1.25rem;
        @media (max-width: 820px){
            margin: auto;
        }
    }

    a, div{
        color: ${props => props.tema === 'claro'? "var(--secundary-color)" : "var(--primary-color)"};
        &:hover{
        color: ${props => props.tema === 'claro'? "var(--secundary-color-hover)" : "var(--primary-color-hover)"};
    }
    }

    #menu_container{
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 4.5rem;
    }
    #menu_icon{
        min-width: 3rem;
        width: fit-content;
        img{
            margin: auto;
            width: 50%;
        }
    }
    #menu{
        width: fit-content;
        margin: auto;
        img{
            width: 3rem;
        }
    }

    #barra_lateral{
        width: 100vw;
        height: calc(100vh - 4.5rem);
        display: flex;
        flex-direction: column;
        background-color: ${props => props.tema === 'claro'? "var(--primary-color)" : "var(--secundary-color)"};
        align-items: center;
        a{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    #escondido{
        display: none;
    }
    #visivel{
        display: flex;
        position: relative;
        top:2.5rem;
        right:15rem;
        white-space: nowrap;
        @media (max-width: 820px) {
            width: 100vw;
            display: flex;
            text-align: center;
            top: 1.5rem;
            right: 11.5rem;
            font-size: 0.75rem;
        }
    }
`