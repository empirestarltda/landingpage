import { Container } from "./styles";
import { Produto } from "../Produto";
import { Contato } from "../Contato";
import exemplo_curriculo from '../../assets/icons/exemplo_curriculo.svg'
import exemplo_site from '../../assets/icons/exemplo_site.svg'
import exemplo_planilhas from '../../assets/icons/exemplo_planilhas.svg'
import instagram from '../../assets/icons/instagram.svg'
import email from '../../assets/icons/email.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'

interface ConteudoProps{
    tema: 'claro'|'escuro'
    nome_da_pagina? : string
    
}

interface Canal{
    nome:string;
    conteudo:string
    img:string
}

export function Conteudo({tema, nome_da_pagina }:ConteudoProps){
    const canais :Array<Canal> =[
        {
            nome: "Email",
            conteudo: "contato@empirestarltda.com",
            img: email
        },
        {
            nome: "Telefone/WhatsApp",
            conteudo: "+55 (11) 99580-2314",
            img: whatsapp
        },
        {
            nome: "Direct via Instagram",
            conteudo: "@empirestarltda",
            img: instagram
        }
    ]
    return(
        <Container tema={tema}>
            {nome_da_pagina === 'home' || nome_da_pagina === undefined ?
            <>
                <h1>Bem vinde ao futuro!</h1>
                <div id="texto">
                    <p>Viemos para somar. Nossa equipe colocou muito carinho neste projeto para podermos tornar a sua vida mais fácil. Sinta-se à vontade para navegar!</p>
                </div>
            </>
            :
            nome_da_pagina === 'quem_somos'?
            <>
                <h1>Quanto vale o seu tempo?</h1>
                <div id="texto">
                    <p>Sabe aquele empurrãozinho que falta para começar a se organizar financeiramente? Aquela horinha que faltou para atualizar o currículo no fim de semana? São tantos compromissos que se organizar parece uma missão impossível...</p>
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
                <div id="texto_apresentacao">
                    <p>Nossos produtos são 100% customizáveis e adaptados ao seu uso e às suas necessidades, seja você vestibulando, universitário, pequeno empresário, etc.</p>
                    <p>Acreditamos que com uma ajudinha qualquer um pode se organizar e evoluir na sua vida pessoal, estudantil ou profissional</p>
                </div>
                <div id="grupo_produtos">
                    <Produto nome="Currículo On-line" img={exemplo_curriculo}>Um currículo on-line pode ser o seu diferencial para conquistar a vaga de emprego que você tanto almeja! Nele você pode exibir - além de todas as informações super úteis de um currículo padrão - um vasto portfólio de uma forma agradável e onde você estiver.</Produto>
                    <Produto nome="Site Estático" img={exemplo_site}>Esse é o produto ideal se o que você está procurando é um site onde você possa exibir tudo que o seu negócio - seja ele qual for - tem a oferecer. Um belo site estático pode mudar o jogo do seu empreendimento! Construir sua presença on-line é essencial para garantir que as informações cheguem rápida e corretamente aos seus clientes!</Produto>
                    <Produto nome="Planilhas Personalizadas" img={exemplo_planilhas}>
                            Precisa de ajuda para organizar as finanças, quer ter um acompanhamento dos seus acertos em questões estudando para um vestibular ou concurso ou precisa de outro tipo de planilha pro seu negócio? Não se preocupe! Temos a solução para você.
                    </Produto>
                </div>
                
            </>
            :
            
            nome_da_pagina === 'contato'?
            <>
                <h1>Como você prefere falar com a gente?</h1>
                <div id="texto">
                    <p>
                        Sinta-se à vontade para conversar conosco pelo canal que te deixar mais confortável. Atenderemos a sua solicitação ou dúvida o mais rápido que pudermos para oferecermos a melhor experiência para você.
                    </p>
                </div>
                <div id="contatos">
                    {canais.map((canal) => <Contato nome={canal.nome} img={canal.img}>{canal.conteudo}</Contato>)} 
                </div>
                
            </>
            :
            <h1>404</h1>
            }
        </Container>
    )
}