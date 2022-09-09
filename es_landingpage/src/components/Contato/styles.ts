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
        flex-direction: column;
        text-align: center;
        font-size: 1.75rem;
        span{
            margin-bottom: 0.5rem;
        }
        #fundo{
            display: flex;
            flex-direction: row;
            width: 35rem;
            height: 10rem;
            background: #D4D4D8;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 30px;
            margin-bottom: 1.5rem;
            img{
                max-width:90%;
                max-height: 100%;
                margin: auto;
                @media (max-width: 500px){
                    max-width:75%;
                    max-height: 75%;
                    
                }
                }
            @media (max-width: 500px) {
                flex-direction: column;
                width: fit-content;
                min-width: 20rem;
            }
            }
            @media (max-width: 500px) {
                width:fit-content;
                font-size: 1.25rem;
            }
        }
    #texto{
        text-indent: 2rem;
        margin: auto 5rem auto auto;
        @media (max-width: 500px) {
            width: fit-content;
            text-indent: 0;
            text-align: center;
            margin: auto;
        }
    }
    
`