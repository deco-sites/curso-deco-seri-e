import { ProductDetailsPage } from "apps/commerce/types.ts";

export interface Product{
    title: string;
    description?: string;
    price: string;
    imageSrc: string;
}
export interface Props{
    product: Product;
    adDescription?: string;
    // productPage: ProductDetailsPage;
}

export default function ProductAd({
    product, adDescription
}: Props){

    return(
        <div>
            <img src={product.imageSrc} alt={product.title } /> <br />
            Produto: {product.title} <br />
            Descrição: {adDescription ?? product.description } <br />
            Preço: {product.price } <br />
        </div>
    )
}