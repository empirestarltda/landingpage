import styled from 'styled-components'

export const Container = styled.footer `
    width: 100%;
    background-color: var(--secundary-color);
    color: var(--primary-color);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    img{
        padding: 1rem;
        max-width: 7.5%;
        @media (max-width: 500px) {
            max-width: 35%;
        }
    }
    #navegue{
        width:25%;
        display: flex;
        flex-direction: column;
        
        span{
            font-weight: 600;
            font-size: 1.25rem;
            padding-bottom: 0.5rem;
        }
        a{
            color: var(--primary-color);
            text-decoration: none;
            &:hover{
                color: var(--primary-color-hover);
            }
        }
    }
`