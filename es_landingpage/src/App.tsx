import GlobalStyle from './styles/global'; //Importa os estilos globais da aplicação
import { Cabecalho } from './components/Cabecalho';
import { Conteudo } from './components/Conteudo';
import { Rodape } from './components/Rodape';
import { useState } from 'react';

interface AppProps{
  page: string;
}

interface Topico{
  rota: string,
  etiqueta: string
}


export const options :Array<Topico> = [ 
  {
      rota: 'home',
      etiqueta: 'Pagina Inicial'
  },
  {
      rota:'quem_somos',
      etiqueta:'Quem somos'
  }, 
  {
      rota:'produtos',
      etiqueta:'Produtos'
  },  
  {
      rota:'contato',
      etiqueta:'Contato'
  }
]

function App({page}:AppProps) {
  const [estadoMenu, mudarEstadoMenu] = useState(false)
  const [tema, mudarTema] = useState<'claro'|'escuro'>('claro')
  
  return (
      <main className='App'>
        <GlobalStyle tema={tema}/> {/* Inicializa os Estilos globais */}
          <Cabecalho 
            funcaoCabecalho={() => mudarEstadoMenu(!estadoMenu)} 
            estadoCabecalho={estadoMenu} 
            funcaoTema={() => mudarTema(tema === 'claro' ? 'escuro' : 'claro')}
            tema={tema}
          />
          {estadoMenu === false? <Conteudo tema={tema} nome_da_pagina={page}/> : null}
        <Rodape estadoRodape={estadoMenu}/>
      </main>
  );
}

export default App;
