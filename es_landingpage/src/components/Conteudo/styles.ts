import styled from 'styled-components'

export const Container = styled.section `
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    h1{
        font-size: 4.5rem;
    }
    #texto{
        display: flex;
        width: 60%;
        flex-direction: column;
        text-align: justify;
        text-indent: 50;
        p{
            font-size: 1.75rem;
            text-indent: 2.5rem;
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
        
    }
`