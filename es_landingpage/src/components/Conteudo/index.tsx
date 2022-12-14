import { Container } from "./styles";
import { Produto } from "../Produto";
import { Contato } from "../Contato";
import { Mural } from "../Mural";

import exemplo_curriculo from '../../assets/icons/exemplo_curriculo.svg'
import exemplo_site from '../../assets/icons/exemplo_site.svg'
import exemplo_planilhas from '../../assets/icons/exemplo_planilhas.svg'
import instagram from '../../assets/icons/instagram.svg'
import email from '../../assets/icons/email.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'

import curriculo_matheus from '../../assets/img/curriculo_matheus.png'
import curriculo_matheus_celular from '../../assets/img/curriculo_matheus_celular.png'
import portifolio_matheus from '../../assets/img/portifolio_matheus.png'
import es_claro from '../../assets/img/es_claro.png'
import es_escuro from '../../assets/img/es_escuro.png'
import pi_atelie from '../../assets/img/pi_atelie.png'
import pi_atelie_celular from '../../assets/img/pi_atelie_celular.png'
import o_atelie from '../../assets/img/o_atelie.png'
import menu_atelie_celular from '../../assets/img/menu_atelie_celular.png'


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

    const temaArray :Array<string> = [es_claro, es_escuro]
    const responsividadeArray :Array<string> = [curriculo_matheus, curriculo_matheus_celular, pi_atelie, pi_atelie_celular, menu_atelie_celular]
    const designArray :Array<string> = [o_atelie, portifolio_matheus]

    const atelieArray = [o_atelie, pi_atelie, pi_atelie_celular, menu_atelie_celular]
    const matheusArray = [curriculo_matheus, curriculo_matheus_celular, portifolio_matheus]

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
                <div className="texto">
                    <p>Viemos para somar. Nossa equipe colocou muito carinho neste projeto para podermos tornar a sua vida mais fácil. Sinta-se à vontade para navegar!</p>
                </div>
                <h1>Nosso Portifolio</h1>
                <div id="grupoMural">
                    <Mural titulo="Diversidade de temas" imgArray={temaArray} lado='esq'>
                        Você prefere tema escuro ou tema claro? Aqui na Empire Star você pode ter os dois! Trabalhamos com temas que garantem uma alta legibilidade e leiturabilidade, então pode ficar relaxar! Seu conteúdo será muito bem entregue aos seu visitantes! :)
                        </Mural>

                    <Mural titulo="Design moderno"imgArray={designArray} lado='dir' 
                    href={ designArray.map(i => matheusArray.includes(i) ? 'https://matheusalefe.github.io' 
                    : atelieArray.includes(i)?'http://oateliegirassol.github.io'
                    : undefined)}>
                        Presamos por trabalhar com o que há de mais novo no mercado. Utilizamos das mais atuais tecnologias para que o seu site - além de ficar a sua cara e a cara da sua marca - mostre toda a jovialidade e atualidade da sua marca garantindo uma melhor comunicação e maturidade da sua presença digital.
                    </Mural>

                    <Mural titulo="Responsividade acima de tudo"imgArray={responsividadeArray} lado='esq' href={ designArray.map(i => matheusArray.includes(i) ? 'https://matheusalefe.github.io' 
                    : atelieArray.includes(i)?'http://oateliegirassol.github.io'
                    : undefined)}>
                        Nossos sites são facilmente adaptáveis a qualquer tela, garantindo a melhor experiência para os seus visitantes e usuários. Seja desktop, tablet ou smartphone, a interface estará preparada para mostrar sempre o melhor que o seu negócio pode oferecer!
                    </Mural>
                </div>
                
            </>
            :
            nome_da_pagina === 'quem_somos'?
            <>
                <h1>Quanto vale o seu tempo?</h1>
                <div className="texto">
                    <p>Sabe aquele empurrãozinho que falta para começar a se organizar financeiramente? Aquela horinha que faltou para atualizar o currículo no fim de semana? São tantos compromissos que se organizar parece uma missão impossível...</p>
                    <p>Foi para ajudar você que a Empire Star nasceu. Somos uma empresa feita para ajudar a tirar os seus planos do papel, com produtos e serviços voltados à organização de estudos, financeira e da vida profissional. Ajudamos tanto quem está começando agora quanto já tem experiência no mercado!</p>
                    <p>Navegue pelo nosso site e conheça tudo que podemos fazer por você. Será um prazer fazer parte da sua história de sucesso!</p>
                    <blockquote>
                        <q>Com organização e tempo, acha-se o segredo de fazer tudo e bem feito.</q>
                        <label htmlFor="q">-Pitágoras, filósofo grego</label>
                    </blockquote>
                </div>
                <h1>Visão</h1>
                <div className="texto">
                    <p>Ser competitiva no mercado entregando produtos e serviços de alto valor agregado à preços acessíveis aos seus clientes para democratizar o acesso à bens digitais de alta qualidade sem elitização agindo com transparência.</p>
                </div>

                <h1>Missões</h1>
                <div className="texto">
                    <p>1. Democratizar o acesso aos sites empresariais promovendo de forma ágil, moderna e acessível a elaboração dos mesmos aos micros e pequenos empreendedores brasileiros.</p>
                    <p>2. Promover ajuda a estudantes e empreendedores no que se trata sobre a organização pessoal e empresarial.</p>
                </div>

                <h1>Valores</h1>
                <div className="texto-topicos">
                    <p>1. Transparência com o cliente</p>
                    <p>2. Entrega ágil de projetos</p>
                    <p>3. Acessibilidade e inclusão individuais</p>
                    <p>4. Acessibilidade de preços</p>
                    <p>5. Contribuição ao código aberto</p>
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
                <div className="texto">
                    <p>
                        Sinta-se à vontade para conversar conosco pelo canal que te deixar mais confortável. Atenderemos a sua solicitação ou dúvida o mais rápido que pudermos para oferecermos a melhor experiência para você.
                    </p>
                </div>
                <div id="contatos">
                    {canais.map((canal) => <Contato nome={canal.nome} img={canal.img} href={canal.nome === 'Telefone/WhatsApp'? 'https://api.whatsapp.com/send?phone=5511995802314' : undefined }>{canal.conteudo}</Contato>)} 
                </div>
                
            </>
            :
            <h1>404</h1>
            }
        </Container>
    )
}