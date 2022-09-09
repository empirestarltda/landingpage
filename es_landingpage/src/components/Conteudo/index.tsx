import { Produto } from "../Produto";
import { Container } from "./styles";
import exemplo_curriculo from '../../assets/icons/exemplo_curriculo.svg'
import exemplo_site from '../../assets/icons/exemplo_site.svg'

interface ConteudoProps{
    nome_da_pagina? : string
}

export function Conteudo({nome_da_pagina}:ConteudoProps){
    return(
        <Container>
            {nome_da_pagina === 'home' || nome_da_pagina === undefined ?
            <>
                <h1>Bem vinde ao futuro!</h1>
                <div id="texto">
                    <p>Viemos para somar. Nossa equipe colocou muito carinho neste projeto para podermos tornar a sua vida mais fácil.</p>
                    <p>Sinta-se à vontade para navegar! Nesta página você encontrará todas as novidades sobre a Empire Star e o mundo da tecnologia.</p>
                </div>
            </>
            :
            nome_da_pagina === 'quem_somos'?
            <>
                <h1>Quanto vale o seu tempo?</h1>
                <div id="texto">
                    <p>Sabe aquele empurrãozinho que falta para começar a se organizar financeiramente?Aquela horinha que faltou para atualizar o currículo no fim de semana? São tantos compromissos que se organizar parece uma missão impossível...</p>
                    <p>Foi para ajudar você que a Empire Star nasceu. Somos uma empresa feita para ajudar a tirar os seus planos do papel, com produtos e serviços voltados à organização de estudos, financeira e da vida profissional. Ajudamos tanto quem está começando agora quanto já tem experiência no mercado!</p>
                    <p>Navegue pelo nosso site e conheça tudo que podemos fazer por você. Será um prazer fazer parte da sua história de sucesso!</p>
                    <blockquote>
                        <q>Com organização e tempo, acha-se o segredo de fazer tudo e bem feito.</q>
                        <label htmlFor="q">-Pitágoras, filósofo grego</label>
                    </blockquote>
                </div>
            </>
            :
            nome_da_pagina === 'produtos'?
            <>
                <h1>Produtos</h1>
                <Produto nome="Currículo On-line" img={exemplo_curriculo}>Um currículo on-line pode ser o seu diferencial para conquistar a vaga de emprego que você tanto almeja! Nele você pode exibir - além de todas as informações super úteis de um currículo padrão - um vasto portfólio de uma forma agradável e onde você estiver.</Produto>
                <Produto nome="Site Estático" img={exemplo_site}>Esse é o produto ideal se o que você está procurando é um site onde você possa exibir tudo que o seu negócio - seja ele qual for - tem a oferecer. Um belo site estático pode mudar o jogo do seu empreendimento! Construir sua presença on-line é essencial para garantir que as informações cheguem rápida e corretamente aos seus clientes!</Produto>
            </>
            :
            nome_da_pagina === 'servicos'?
            <h1>Serviços</h1>
            :
            nome_da_pagina === 'contato'?
            <h1>Contato</h1>
            :
            <h1>404</h1>
            }
        </Container>
    )
}