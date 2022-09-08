import logo from '../../assets/icons/logo.svg'
import instagram_icon from '../../assets/icons/instagram_icon.svg'
import { Container } from './styles'

export function Header(){
    const options :Array<string> = [
        'Página Principal', 'Quem somos', 'Produtos', 'Serviços', 'Contato'
    ]
    return(
        <Container>
            <div id="logoGroup">
                <img src={logo} alt="" />
                <h2>Empire Star Ltda.</h2>
            </div>
            {options.map(option => <span>{option}</span>)}
            <a id='instagramIcon' href="https://www.instagram.com/empirestarltda/">
                <img  src={instagram_icon} alt="ícone do instagram" />
            </a>

        </Container>
    )
}