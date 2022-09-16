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
    var imgwidth = document.getElementById('img')?.clientWidth
    var imgheight = document.getElementById('img')?.clientHeight

    return(
        <Container lado={lado} width={imgwidth} height={imgheight}>
            <div id="exemplo">
                <div id="fundo">
                    <div className="seta" onClick={ () => index > 0 ? setIndex(index - 1) : setIndex(imgArray.length -1) }>{"<"}</div>
                    {href ? <a href={href[index]}><img id="img" src={imgArray[index]} alt={`exemplo`} /></a> : <img src={imgArray[index]} alt={`exemplo`} />}
                    <div className="seta" onClick={ () => index < imgArray.length - 1 ? setIndex(index + 1) : setIndex(0) }>{">"}</div>
                </div>
            </div>
            <div className="texto"><h3>{titulo}</h3>{children}</div>
        </Container>
    )
}