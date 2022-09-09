import GlobalStyle from './styles/global'; //Importa os estilos globais da aplicação
import { Cabecalho } from './components/Cabecalho';
import { Conteudo } from './components/Conteudo';
import { Rodape } from './components/Rodape';
import { useState } from 'react';

interface AppProps{
  page: string;
}

function App({page}:AppProps) {
  const [estadoMenu, mudarEstadoMenu] = useState(false)
  return (
      <main className='App'>
        <GlobalStyle /> {/* Inicializa os Estilos globais */}
          <Cabecalho funcaoCabecalho={() => mudarEstadoMenu(!estadoMenu)} estadoCabecalho={estadoMenu}/>
          {estadoMenu === false? <Conteudo nome_da_pagina={page}/> : null}
        <Rodape />
      </main>
  );
}

export default App;
