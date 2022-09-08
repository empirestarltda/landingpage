import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #FFDE00;
    }
    h1{
        font-family: 'Playfair Display', sans-serif;
    }
    h2{
        font-family: 'Lato', sans-serif;
    }
    span{
        font-family: 'Lato', sans-serif;
    }
`
export default GlobalStyle