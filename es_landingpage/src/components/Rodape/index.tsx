import { Link } from 'react-router-dom';
import { options } from '../../App';
import logo_rodape from '../../assets/icons/logo_rodape.svg'
import { Container } from "./styles";

export function Rodape(){
    return(
        <Container>
            <img src={logo_rodape} alt="logo empire star"/>
            <div id='navegue'>
                <span>Navegue</span>
                {options.map((opt, key) => <Link to={`/${opt.rota}`} key={key.toString()}>{opt.etiqueta}</Link>)}
            </div>
            
                
        </Container>
    )
}