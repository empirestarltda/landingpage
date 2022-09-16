import styled from 'styled-components'

interface MuralProps{
    lado: 'esq'|'dir'
    width: number|undefined
    height: number|undefined
}

export const Container = styled.div<MuralProps> `
    display: flex;
    flex-direction: ${props => props.lado === 'esq'? "row" : "row-reverse"};
    width: 80%;
    max-height: 20%;
    font-size: 1.5rem;
    justify-content: space-around;
    text-align: justify;
    margin-bottom: 2rem;
    
    .seta{
        display: flex;
        flex-direction: column;
        height: 80%;
        width: fit-content;
        justify-content: center;
        border-radius: 30px;
        color: var(--secundary-color);
        cursor: pointer;
        &:hover{
            background-color: rgba(0, 0, 0, 0.2);
        }
    }
    #exemplo{
        display: flex;
        min-height: 100%;
        flex-direction: column;
        text-align: center;
        font-size: 1.75rem;
        align-self: self-end;
        @media (max-width: 820px) {
            align-self: unset;
            }
        span{
            margin-bottom: 0.5rem;
        }
        #fundo{
            display: flex;
            min-width: 20rem;
            min-height: 12.5rem;
            max-width: 25rem;
            background: #D4D4D8;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 30px;
            margin-bottom: 1.5rem;
            align-items: center;
            @media (max-width: 820px) {
                max-width: 20rem;
                height: fit-content;
                max-height: 20rem;
            }
            a{
                width: 100%;
                display: flex;
                margin: 0;
                padding: 0;
                img{
                    max-width:98%;
                    max-height: 11.5rem;
                    height: auto;
                    width: auto;
                    @media (max-width: 820px) {
                        max-width:95%;
                        max-height: 19.5rem;
                    }
                }
            }
            img{
                max-width:90%;
                max-height: 100%;
                margin: auto;
                border-radius: 4px;
                @media (max-width: 820px) {
                    max-width:85%;
                    max-height: 100%;
                }
            }
        }     
    }
    .texto{
        text-indent: 2rem;
        margin: ${props => props.lado === 'esq'? "0 0 auto 5rem" : "0 5rem auto 0"};
        @media (max-width: 820px) {
            font-size: 1.2rem;
            margin: 0 2rem 1rem 2rem;
            h3{
                text-indent: 0;
                text-align: center;
            }
        }
    }
    @media (max-width: 820px){
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        align-items: center;
    }
`