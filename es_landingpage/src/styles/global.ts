import { createGlobalStyle } from 'styled-components'

interface GlobalStyleProps{
    tema: 'claro'|'escuro'
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    :root{
        --primary-color: #FFDE00;
        --primary-color-hover: #FFF194;
        --secundary-color: #000000;
        --secundary-color-hover: #353b48;

        --color-white-primary: #FFFFFF;
        --color-white-secondary: #F4F4F5;
        --color-grey-primary: #D4D4D8;
        --color-grey-secondary: #F5F5F5;
        --color-black-primary: #353b48;
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
    body{
        background: ${props => props.tema === 'claro'? "var(--color-white-primary)" : "var(--color-black-primary)"};
    }
    /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: var(--secundary-color) transparent;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--secundary-color);
    border-radius: 10px;
    border: 1px solid var(--secundary-color);
  }

`
export default GlobalStyle