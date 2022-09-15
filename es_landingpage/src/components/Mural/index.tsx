import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import { Container } from "./styles";

interface ProdutoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    imgArray: Array<string>;
    lado: 'esq'|'dir'
    titulo: string
    href?:Array<string|undefined>
}

export function Mural({ imgArray, children, lado, titulo, href }: ProdutoProps ){

    const [index, setIndex] = useState(0)

    return(
        <Container lado={lado}>
            <div id="exemplo">
                <div id="fundo">
                    <div className="seta" onClick={ () => index > 0 ? setIndex(index - 1) : setIndex(imgArray.length -1) }>{"<"}</div>
                    {href ? <a href={href[index]}><img src={imgArray[index]} alt={`exemplo`} /></a> : <img src={imgArray[index]} alt={`exemplo`} />}
                    <div className="seta" onClick={ () => index < imgArray.length - 1 ? setIndex(index + 1) : setIndex(0) }>{">"}</div>
                </div>
            </div>
            <div id="texto"><h3>{titulo}</h3>{children}</div>
        </Container>
    )
}