import { Container } from "./styles";

interface ConteudoProps{
    nome_da_pagina? : string
}

export function Conteudo({nome_da_pagina}:ConteudoProps){
    return(
        <Container>
            {nome_da_pagina === 'home' || nome_da_pagina === undefined ?
            <>
                <h1>Bem vinde ao futuro!</h1>
                <div id="texto_de_abertura">
                    <p>Viemos para somar. Nossa equipe colocou muito carinho neste projeto para podermos tornar a sua vida mais fácil.</p>
                    <p>Sinta-se à vontade para navegar! Nesta página você encontrará todas as novidades sobre a Empire Star e o mundo da tecnologia.</p>
                </div>
            </>
            :
            nome_da_pagina === 'quem_somos'?
            <>
                <h1>Quanto vale o seu tempo?</h1>
                <p>Sabe aquele empurrãozinho que falta para começar a se organizar financeiramente?Aquela horinha que faltou para atualizar o currículo no fim de semana? São tantos compromissos que se organizar parece uma missão impossível...</p>
                <p>Foi para ajudar você que a Empire Star nasceu. Somos uma empresa feita para ajudar a tirar os seus planos do papel, com produtos e serviços voltados à organização de estudos, financeira e da vida profissional. Ajudamos tanto quem está começando agora quanto já tem experiência no mercado!</p>
                <p>Navegue pelo nosso site e conheça tudo que podemos fazer por você. Será um prazer fazer parte da sua história de sucesso!</p>
            </>
            :
            nome_da_pagina === 'produtos'?
            <h1>Produtos</h1>
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