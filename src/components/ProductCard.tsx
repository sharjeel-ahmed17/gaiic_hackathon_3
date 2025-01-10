import { Product } from "@/types/types";
interface IProduct {
  product : Product;
}

const ProductCard = ({product } : IProduct) => {
    // console.log(product);
    
  return (
    <div>
{
  product.rating && (
    <span>0</span>
  )
}
{
product.title && (

<h2>{product.title}</h2>
)
}
    </div>
  )
}

export default ProductCard