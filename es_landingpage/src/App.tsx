import GlobalStyle from './styles/global'; //Importa os estilos globais da aplicação
import { Header } from './components/Header';

function App() {
  return (
      <main className='App'>
        <GlobalStyle/> {/* Inicializa os Estilos globais */}
        <Header/>
      </main>
  );
}

export default App;
