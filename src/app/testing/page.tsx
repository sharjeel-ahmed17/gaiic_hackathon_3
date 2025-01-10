// import { Button } from "@/components/ui/button"
import { client } from "@/sanity/lib/client";
import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
const getProducts = async ()=>{
  try {
    const data= client.fetch(`*[_type== 'product' && "electronics" in tags ]{
  _id ,
    name , 
    price,
    discountPercentage,
    tags,
    "imageUrl": image.asset->url
}`);

return data
  } catch (error) {
    console.log(error);
    
    
  }
}


interface Iproduct{
  _id: string,
  name: string,
  price: number,
  discountPercentage: number,
  tags: string[],
  imageUrl: string,
 
}
const Testing = async () => {
 const  products = await getProducts()
  return (
    <>
    {/* button  */}
    {/* <Button>hello world</Button> */}
    <div className="bg-slate-400 p-4">
{
  products.map((item : Iproduct )=>(
    
    <div key={item._id} className="bg-red-500 p-6 m-5">

    <h2>name : {item.name}</h2>
    <p>price : {item.price}</p>
    {

      <Image src={item.imageUrl} width={200} height={200} alt="sanity image"/>

    }
    </div>
    
  ))
}
    </div>
    </>
  )
}

export default Testing