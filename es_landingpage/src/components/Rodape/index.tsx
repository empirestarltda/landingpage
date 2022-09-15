import { Link } from 'react-router-dom';
import { options } from '../../App';
import logo_rodape from '../../assets/icons/logo_rodape.svg'
import { Container } from "./styles";

interface RodapeProps{
    estadoRodape: boolean
}

export function Rodape({ estadoRodape }:RodapeProps){
    return(
        <Container>
            {estadoRodape === false ?
            
            <>
                <img src={logo_rodape} alt="logo empire star"/>
                <div className='coluna'>
                    <span>Navegue</span>
                    {options.map((opt, key) => <Link to={`/${opt.rota}`} key={key.toString()}>{opt.etiqueta}</Link>)}
                </div>
                <div className="coluna">
                    <span>Conheça também</span>
                    <a href="https://matheusalefe.github.io">matheusalefe.github.io</a>
                    <a href="https://oateliegirassol.github.io">oateliegirassol.github.io</a>
                </div>
            </>
            :
            null
            }
            
            
                
        </Container>
    )
}