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
            <Link id='grupo_logo' to={`/home`}>
                <img src={logo} alt="Logo da Empire Star" />
                <h2>Empire Star Ltda.</h2>
            </Link>
            {options.map(option => <Link to={`/${option.rota}`}>{option.etiqueta}</Link>)}
            <a id='instagramIcon' href="https://www.instagram.com/empirestarltda/">
                <img  src={instagram_icon} alt="ícone do instagram" />
            </a>

        </Container>
    )
}