import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ProdutoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    nome: string;
    img: string;
}

export function Contato ({nome, img, children }:ProdutoProps ){
    return(
        <Container>
            <div id="exemplo">
                <span>{nome}</span>
                <div id="fundo">
                    <img src={img} alt={`exemplo de ${nome}`} />
                    <div id="texto">{children}</div>
                </div>
            </div>
        </Container>
    )
}