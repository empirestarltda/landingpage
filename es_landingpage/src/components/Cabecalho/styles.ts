import styled from 'styled-components'

export const Container = styled.nav `
    width: 100%;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary-color);
    #grupo_logo{
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
        @media (max-width: 500px){
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
    
    #instagramIcon{
        margin-right: 1rem;
    }

    a{
        text-decoration: none;
        color: var(--secundary-color);
        font-weight: 500;
        font-size: 1.25rem;
        @media (max-width: 500px){
            margin: auto;
        }
    }

    #menu_container{
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 4.5rem;
    }
    #menu_icon{
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
        background-color: var(--primary-color);
        align-items: center;
        a{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    
`