import GlobalStyle from './styles/global'; //Importa os estilos globais da aplicação
import { Cabecalho } from './components/Cabecalho';
import { Conteudo } from './components/Conteudo';
import { Rodape } from './components/Rodape';

interface AppProps{
  page: string;
}

function App({page}:AppProps) {
  
  return (
      <main className='App'>
        <GlobalStyle /> {/* Inicializa os Estilos globais */}
        <Cabecalho />
        <Conteudo nome_da_pagina={page} />
        <Rodape />
      </main>
  );
}

export default App;
