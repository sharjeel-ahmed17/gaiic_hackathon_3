// // import { Button } from "@/components/ui/button"
// import { productData } from "@/app/data/productData";
// import GridProducts from "@/components/GridProducts";
// import Heading from "@/components/Heading";
// import Label from "@/components/Label";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// // import { urlFor } from "@/sanity/lib/image";
// const getProducts = async ()=>{
//   try {
//     const data= client.fetch(`*[_type== 'product' && "electronics" in tags ]{
//   _id ,
//     name , 
//     price,
//     discountPercentage,
//     tags,
//     "imageUrl": image.asset->url
// }`);

// return data
//   } catch (error) {
//     console.log(error);
    
    
//   }
// }


// interface Iproduct{
//   _id: string,
//   name: string,
//   price: number,
//   discountPercentage: number,
//   tags: string[],
//   imageUrl: string,
 
// }
// const Testing = async () => {
//  const  products = await getProducts()
//   return (
//     <>
// {/* grid products */}
// <GridProducts products={productData}>
//       {/* label and heading */}

//       <Label title="new product"/>
//       <Heading title="heading is here"/>
      
//     {/* button  */}
//     {/* <Button>hello world</Button> */}
//     <div className="bg-slate-400 p-4">
// {
//   products.map((item : Iproduct )=>(
    
//     <div key={item._id} className="bg-red-500 p-6 m-5">

//     <h2>name : {item.name}</h2>
//     <p>price : {item.price}</p>
//     {

//       <Image src={item.imageUrl} width={200} height={200} alt="sanity image"/>

//     }
//     </div>
    
//   ))
// }
//     </div>

  
//     </>
//   )
// }

// export default Testing

// 888888
// import { productData } from '@/app/data/productData'
import GridProducts from '@/components/GridProducts'
import { getAllProducts } from '@/services/products';
import React from 'react'



// const getAllProducts = async ()=>{
//   try {
//     const response = await fetch('https://dummyjson.com/products');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     // console.log(response);
    
//     const data = await response.json();
//     // console.log(data.products);
//     return data.products
//     // productData.products = data;
//     // console.log(productData.products);
//   } catch (error) {
//     console.log(error);
    
    
//   }
// }
const Testing = async () => {
  // console.log(productData.products);
  const products = await getAllProducts();
  // console.log('>>>>products',products);
  
  return (
    <div>
      <h1>grid product data</h1>

      <GridProducts products={products}/>
    </div>
  )
}

export default Testing