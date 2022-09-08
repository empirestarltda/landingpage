import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #FFDE00;
        --primary-color-hover: #FFF194;
        --secundary-color: #000000;
        --secundary-color-hover: #353b48;

        --color-white-primary: #FFFFFF;
        --color-white-secondary: #F4F4F5;
        --color-grey-primary: #D1D1D1;
        --color-grey-secondary: #F5F5F5;
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