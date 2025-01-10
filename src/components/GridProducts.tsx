import ProductCard from "./ProductCard"

import { Product } from "@/types/types";
interface IGridProducts{
  products : Product[]
}
const GridProducts = ({products } : IGridProducts) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
        {
            products.map((product , index : number) => (
                <ProductCard key={index} product={product} />
            ))
        }
        
    </div>
  )
}

export default GridProducts


