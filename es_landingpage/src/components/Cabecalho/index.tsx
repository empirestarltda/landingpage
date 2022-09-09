import logo from '../../assets/icons/logo.svg'
import instagram_icon from '../../assets/icons/instagram_icon.svg'
import menu from '../../assets/icons/menu.svg'
import { Container } from './styles'
import { Link } from 'react-router-dom'

interface Topico{
    rota: string,
    etiqueta: string
}

interface CabecalhoProps{
    funcaoCabecalho: () => void,
    estadoCabecalho: boolean
}

export function Cabecalho({funcaoCabecalho, estadoCabecalho}:CabecalhoProps){

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

    var largura = window.screen.width

    return(
        <Container>
            
            {largura > 501? 
            <>
                <Link id='grupo_logo' to={`/home`}>
                    <img src={logo} alt="Logo da Empire Star" />
                    <h2>Empire Star Ltda.</h2>
                </Link>
                    {options.map(option => <Link to={`/${option.rota}`}>{option.etiqueta}</Link>)}
                <a id='instagramIcon' href="https://www.instagram.com/empirestarltda/">
                    <img  src={instagram_icon} alt="ícone do instagram" />
                </a>
            </> 
            :
            <div id='menu_container'>
                <div id='grupo_logo' >
                    <div id='menu_icon' onClick={()=>funcaoCabecalho()}><img  src={menu} alt="ícone de menu"/></div>
                    <Link to='/home' onClick={()=>estadoCabecalho === true? funcaoCabecalho():null}>
                        <img src={logo} alt="Logo da Empire Star" />
                        <h2>Empire Star Ltda.</h2>
                    </Link>
                </div>
                <div id="menu">
                    
                    {estadoCabecalho === true? 
                        <div id='barra_lateral'>
                            {options.map(option => <Link to={`/${option.rota}`} onClick={() => funcaoCabecalho()}>{option.etiqueta}</Link>)}
                            <a id='instagramIcon' href="https://www.instagram.com/empirestarltda/">
                                <img  src={instagram_icon} alt="ícone do instagram" />
                            </a>
                        </div> 
                    : 
                        <>
                        
                        </>
                    }
                </div>
                
            </div>
            }
            
        </Container>
    )
}