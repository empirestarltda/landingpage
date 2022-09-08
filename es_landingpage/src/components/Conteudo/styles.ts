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
`