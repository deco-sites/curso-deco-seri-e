import { ProductDetailsPage } from "apps/commerce/types.ts";
import {Section} from "deco/blocks/section.ts"
import { AppContext } from "site/apps/site.ts";
import { LoaderGenericTypes } from "../loaders/types.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Product{
    title: string;
    description?: string;
    price: string;
    imageSrc: string;
}


export interface Quote{
    data: string[]
}

export interface ListItem {
    text: string;
    bold?: boolean;
    color?: "text-red-800" | "text-green-800";
}

export interface Props{
    product?: Product;
    /**
     * @title Importar Sessão
     */
    section?: Section[];
    adDescription?: string;
    title?: string;
    quote?: Quote;
    items?: ListItem[];
    text?: string;
    loader?: LoaderGenericTypes[]
    erFalBck?: {
        image?: ImageWidget
        title?: string
    }

}

export function ErrorFallback({error}: {error: Error}, props: Props){
    return (
        <ProductAd
            title="ErrorFallback"
            erFalBck={ 
                { 
                    image: props.erFalBck?.image,
                    title: props.erFalBck?.title ?? "Aconteceu um erro =("
                }
            }
        />
    )
}

//Loading Fallback
export function LoadingFallback() {
    // Renderize spinners, esqueletos e outros espaços reservados
    return (
      <div>
        <h2>carregando...</h2>
      </div>
    );
  }
  
  


export default function ProductAd(props: Props){
    return(
        <div>
            <div>
               
                {props.title && props.title}
                <div>
                    {props.product && 
                        <div>
                            <img width="150px" src={props.product.imageSrc} alt={props.product.title } /> <br />
                            Produto: {props.product.title} <br />
                            Descrição: {props.adDescription ?? (props.product.description) } <br />
                            Preço: {props.product.price } <br />
                        </div>
                    }
                </div>
                {props.loader?.length &&
                    <div>Loader: {props.loader[0].data} </div>
                }
                {
                props.title == 'ErrorFallback' &&
                    <div>

                        {props.erFalBck?.image && (
                            <Image
                                width={640}
                                class="w-full lg:w-1/2 object-fit"
                                sizes="(max-width: 640px) 100vw, 30vw"
                                src={props.erFalBck?.image}
                                alt={props.erFalBck?.image}
                                decoding="async"
                                loading="lazy"
                                />
                        )}
                        {
                            props.erFalBck?.title &&
                            props.erFalBck?.title
                        }
                    </div>
                }
            </div>
        </div>
    )
}