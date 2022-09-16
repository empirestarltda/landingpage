import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ProdutoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    nome: string;
    img: string;
    href?: string;
}

export function Contato ({nome, img, children, href }:ProdutoProps ){
    return(
        <Container>
            <div id="exemplo">
                <span>{nome}</span>
                <div id="fundo">
                    {
                    href? 
                    <a href={href}><img src={img} alt={`exemplo de ${nome}`} /></a>
                    :
                    <img src={img} alt={`exemplo de ${nome}`} />
                    }
                    <div id="texto">{children}</div>
                </div>
            </div>
        </Container>
    )
}