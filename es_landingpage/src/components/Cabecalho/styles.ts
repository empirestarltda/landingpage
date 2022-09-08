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
    
    #instagramIcon{
        margin-right: 1rem;
    }

    a{
        text-decoration: none;
        color: var(--secundary-color);
        font-weight: 500;
        font-size: 1.25rem;
    }
`