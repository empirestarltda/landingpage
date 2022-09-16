import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    width: 60%;
    max-height: 20%;
    font-size: 1.5rem;
    justify-content: space-around;
    text-align: justify;
    
    #exemplo{
        display: flex;
        width: 95%;
        flex-direction: column;
        text-align: center;
        font-size: 1.75rem;
        span{
            margin-bottom: 0.5rem;
        }
        #fundo{
            display: flex;
            flex-direction: row;
            width:100%;
            height: 10rem;
            background: #D4D4D8;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 30px;
            margin-bottom: 1.5rem;
            color: var(--secundary-color);
            a{
                display: flex;
                width: fit-content;
                height: 100%;
                align-items: center;
                justify-content: center;
                @media (max-width: 820px){
                    width: 100%;
                }
            }
            img{
                max-width:90%;
                max-height: 100%;
                padding-left: 0.5rem;
                margin: auto;
                @media (max-width: 820px){
                    max-width:75%;
                    max-height: 75%;
                    padding-left: 0;
                }
                }
            @media (max-width: 1440px){
                flex-direction: column;
            }
            @media (max-width: 820px) {
                flex-direction: column;
                width: fit-content;
                min-width: 20rem;
            }
            }
            @media (max-width: 820px) {
                width:fit-content;
                font-size: 1.25rem;
            }
        }
    #texto{
        font-size: 1.5rem;
        text-indent: 2rem;
        margin: auto 5rem auto auto;
        @media (max-width: 820px) {
            width: fit-content;
            text-indent: 0;
            text-align: center;
            margin: auto;
            font-size: 1.25rem;
        }
    }
    
`