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
                    <p>Viemos para somar. Nossa equipe colocou muito carinho neste projeto para podermos tornar a sua vida mais f??cil. Sinta-se ?? vontade para navegar!</p>
                </div>
                <h1>Nosso Portifolio</h1>
                <div id="grupoMural">
                    <Mural titulo="Diversidade de temas" imgArray={temaArray} lado='esq'>
                        Voc?? prefere tema escuro ou tema claro? Aqui na Empire Star voc?? pode ter os dois! Trabalhamos com temas que garantem uma alta legibilidade e leiturabilidade, ent??o pode ficar relaxar! Seu conte??do ser?? muito bem entregue aos seu visitantes! :)
                        </Mural>

                    <Mural titulo="Design moderno"imgArray={designArray} lado='dir' 
                    href={ designArray.map(i => matheusArray.includes(i) ? 'https://matheusalefe.github.io' 
                    : atelieArray.includes(i)?'http://oateliegirassol.github.io'
                    : undefined)}>
                        Presamos por trabalhar com o que h?? de mais novo no mercado. Utilizamos das mais atuais tecnologias para que o seu site - al??m de ficar a sua cara e a cara da sua marca - mostre toda a jovialidade e atualidade da sua marca garantindo uma melhor comunica????o e maturidade da sua presen??a digital.
                    </Mural>

                    <Mural titulo="Responsividade acima de tudo"imgArray={responsividadeArray} lado='esq' href={ designArray.map(i => matheusArray.includes(i) ? 'https://matheusalefe.github.io' 
                    : atelieArray.includes(i)?'http://oateliegirassol.github.io'
                    : undefined)}>
                        Nossos sites s??o facilmente adapt??veis a qualquer tela, garantindo a melhor experi??ncia para os seus visitantes e usu??rios. Seja desktop, tablet ou smartphone, a interface estar?? preparada para mostrar sempre o melhor que o seu neg??cio pode oferecer!
                    </Mural>
                </div>
                
            </>
            :
            nome_da_pagina === 'quem_somos'?
            <>
                <h1>Quanto vale o seu tempo?</h1>
                <div className="texto">
                    <p>Sabe aquele empurr??ozinho que falta para come??ar a se organizar financeiramente? Aquela horinha que faltou para atualizar o curr??culo no fim de semana? S??o tantos compromissos que se organizar parece uma miss??o imposs??vel...</p>
                    <p>Foi para ajudar voc?? que a Empire Star nasceu. Somos uma empresa feita para ajudar a tirar os seus planos do papel, com produtos e servi??os voltados ?? organiza????o de estudos, financeira e da vida profissional. Ajudamos tanto quem est?? come??ando agora quanto j?? tem experi??ncia no mercado!</p>
                    <p>Navegue pelo nosso site e conhe??a tudo que podemos fazer por voc??. Ser?? um prazer fazer parte da sua hist??ria de sucesso!</p>
                    <blockquote>
                        <q>Com organiza????o e tempo, acha-se o segredo de fazer tudo e bem feito.</q>
                        <label htmlFor="q">-Pit??goras, fil??sofo grego</label>
                    </blockquote>
                </div>
                <h1>Vis??o</h1>
                <div className="texto">
                    <p>Ser competitiva no mercado entregando produtos e servi??os de alto valor agregado ?? pre??os acess??veis aos seus clientes para democratizar o acesso ?? bens digitais de alta qualidade sem elitiza????o agindo com transpar??ncia.</p>
                </div>

                <h1>Miss??es</h1>
                <div className="texto">
                    <p>1. Democratizar o acesso aos sites empresariais promovendo de forma ??gil, moderna e acess??vel a elabora????o dos mesmos aos micros e pequenos empreendedores brasileiros.</p>
                    <p>2. Promover ajuda a estudantes e empreendedores no que se trata sobre a organiza????o pessoal e empresarial.</p>
                </div>

                <h1>Valores</h1>
                <div className="texto-topicos">
                    <p>1. Transpar??ncia com o cliente</p>
                    <p>2. Entrega ??gil de projetos</p>
                    <p>3. Acessibilidade e inclus??o individuais</p>
                    <p>4. Acessibilidade de pre??os</p>
                    <p>5. Contribui????o ao c??digo aberto</p>
                </div>
            </>
            :
            nome_da_pagina === 'produtos'?
            <>
                <h1>Produtos</h1>
                <div id="texto_apresentacao">
                    <p>Nossos produtos s??o 100% customiz??veis e adaptados ao seu uso e ??s suas necessidades, seja voc?? vestibulando, universit??rio, pequeno empres??rio, etc.</p>
                    <p>Acreditamos que com uma ajudinha qualquer um pode se organizar e evoluir na sua vida pessoal, estudantil ou profissional</p>
                </div>
                <div id="grupo_produtos">
                    <Produto nome="Curr??culo On-line" img={exemplo_curriculo}>Um curr??culo on-line pode ser o seu diferencial para conquistar a vaga de emprego que voc?? tanto almeja! Nele voc?? pode exibir - al??m de todas as informa????es super ??teis de um curr??culo padr??o - um vasto portf??lio de uma forma agrad??vel e onde voc?? estiver.</Produto>
                    <Produto nome="Site Est??tico" img={exemplo_site}>Esse ?? o produto ideal se o que voc?? est?? procurando ?? um site onde voc?? possa exibir tudo que o seu neg??cio - seja ele qual for - tem a oferecer. Um belo site est??tico pode mudar o jogo do seu empreendimento! Construir sua presen??a on-line ?? essencial para garantir que as informa????es cheguem r??pida e corretamente aos seus clientes!</Produto>
                    <Produto nome="Planilhas Personalizadas" img={exemplo_planilhas}>
                            Precisa de ajuda para organizar as finan??as, quer ter um acompanhamento dos seus acertos em quest??es estudando para um vestibular ou concurso ou precisa de outro tipo de planilha pro seu neg??cio? N??o se preocupe! Temos a solu????o para voc??.
                    </Produto>
                </div>
                
            </>
            :
            
            nome_da_pagina === 'contato'?
            <>
                <h1>Como voc?? prefere falar com a gente?</h1>
                <div className="texto">
                    <p>
                        Sinta-se ?? vontade para conversar conosco pelo canal que te deixar mais confort??vel. Atenderemos a sua solicita????o ou d??vida o mais r??pido que pudermos para oferecermos a melhor experi??ncia para voc??.
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