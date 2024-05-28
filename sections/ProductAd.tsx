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
    loader?: LoaderGenericTypes[],
}


export function ErrorFallback({error}: {error: Error}){

    return (
        <div class="justify-center flex flex-wrap flex-col items-center" >
           
            <Image
              width={280}
              class="w-full lg:100 object-fit"
              sizes="(max-width: 280px) 100vw, 30vw"
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10316/674d0c24-6481-4c3a-8209-26dee73403da"
              alt="Erro no loader"
              decoding="async"
              loading="lazy"
            />

            <h1 class="text-lg my-4 decoration-red-600" >Aconteceu um erro =(</h1>
            <h2 class="bg-slate-300 px-4 mb-4"> Aconteceu um erro no carregamento do loader. Tente carregar algum outro </h2>
            <p class="border-orange-500 font-bold">O erro: {error?.message}</p>

            <button class="bg-orange-500 text-lg decoration-white px-6 py-2 mt-4 rounded decoration-white">
                <a href="//Cultura">Para saber mais</a>
            </button>
        </div>
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
            <div class="bg-gray-200 flex-1 flex-wrap justify-center py-3 flex max-w-xl m-auto">
                <div>
                    {props.product && 
                        <div class="">
                            <img width="150px" src={props.product.imageSrc} alt={props.product.title } /> <br />
                            Produto: {props.product.title} <br />
                            Descrição: {props.adDescription ?? (props.product.description) } <br />
                            Preço: {props.product.price } <br />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}