import logo from '../../assets/icons/logo.svg'
import instagram_icon from '../../assets/icons/instagram_icon.svg'
import { Container } from './styles'
import { Link } from 'react-router-dom'

interface Topico{
    rota: string,
    etiqueta: string
}

export function Cabecalho(){
    const options :Array<Topico> = [
        {
            rota: 'home',
            etiqueta:'Página Principal'
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
            rota:'servicos',
            etiqueta:'Serviços'
        }, 
        {
            rota:'contato',
            etiqueta:'Contato'
        }
    ]
    return(
        <Container>
            <div id="logoGroup">
                <img src={logo} alt="" />
                <h2>Empire Star Ltda.</h2>
            </div>
            {options.map(option => <Link to={`/${option.rota}`}>{option.etiqueta}</Link>)}
            <a id='instagramIcon' href="https://www.instagram.com/empirestarltda/">
                <img  src={instagram_icon} alt="ícone do instagram" />
            </a>

        </Container>
    )
}