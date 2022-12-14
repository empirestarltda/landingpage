import logo from '../../assets/icons/logo.svg'
import logo_alternativo from '../../assets/icons/logo_alternativo.svg'
import instagram_icon from '../../assets/icons/instagram_icon.svg'
import instagram_alternativo from '../../assets/icons/instagram_alternativo.svg'
import menu from '../../assets/icons/menu.svg'
import menu_alternativo from '../../assets/icons/menu_alternativo.svg'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { options } from '../../App'

interface CabecalhoProps{
    funcaoCabecalho: () => void,
    funcaoTema: () => void,
    estadoCabecalho: boolean
    tema: 'claro'|'escuro'
}



export function Cabecalho({funcaoCabecalho, estadoCabecalho, funcaoTema, tema}:CabecalhoProps){

    var largura = window.screen.width
    const [visibilidadeDica, mudarVisibilidadeDica] = useState(false)

    return(
        <Container tema={tema}>
            
            {largura > 501? 
            <>
                <div id='grupo_logo' onClick={() => funcaoTema()} onMouseEnter={() => mudarVisibilidadeDica(!visibilidadeDica)} onMouseLeave={() => mudarVisibilidadeDica(!visibilidadeDica)}>
                    <img src={tema === 'claro'? logo : logo_alternativo} alt="Logo da Empire Star" />
                    <h2>Empire Star Ltda.</h2>
                    <span id={visibilidadeDica === false ? 'escondido' : 'visivel'}>Clique para trocar o tema do site</span>
                </div>
                    {options.map((option, key) => <Link to={`/${option.rota}`} key={key.toString()}>{option.etiqueta}</Link>)}
                <a id='instagramIcon' href="https://www.instagram.com/empirestarltda/">
                    <img  src={tema === 'claro'? instagram_icon: instagram_alternativo} alt="ícone do instagram" />
                </a>
            </> 
            :
            <div id='menu_container'>
                <div id='grupo_logo' >
                    <div id='menu_icon' onClick={()=>funcaoCabecalho()}><img  src={tema === 'claro' ? menu : menu_alternativo} alt="ícone de menu"/></div>
                    <div id='logo' onClick={()=>funcaoTema()}>
                        <img src={tema === 'claro'? logo : logo_alternativo} alt="Logo da Empire Star" />
                        <h2>Empire Star Ltda.</h2>
                        <span id={estadoCabecalho === true ? 'visivel' : 'escondido'}>Clique para trocar o tema do site</span>
                    </div>
                </div>
                <div id="menu">
                    
                    {estadoCabecalho === true?

                        <div id='barra_lateral'>
                            
                            {options.map((option, key) => <Link to={`/${option.rota}`} onClick={() => funcaoCabecalho()} key={key.toString()}>{option.etiqueta}</Link>)}
                            <a id='instagramIcon' href="https://www.instagram.com/empirestarltda/">
                                <img  src={tema === 'claro'? instagram_icon: instagram_alternativo} alt="ícone do instagram" />
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