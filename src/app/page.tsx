import GridProducts from '@/components/GridProducts'
import Carousel from '@/components/home/carousel/Carousel'
import Gallery from '@/components/home/gallery/Gallery'
import Hero from '@/components/home/hero/Hero'
import Sidebar from '@/components/home/sidebar/Sidebar'
import Testimonial from '@/components/home/testimonial/Testimonial'
import Timer from '@/components/home/timer/Timer'
import { Product } from '@/types/types'
import React from 'react'
export const products: Product[] = [
  {
    id: 1,
    title: "Smartphone XYZ",
    description: "A high-performance smartphone with the latest features.",
    price: 699.99,
    discountPercentage: 15,
    rating: 4.5,
    stock: 120,
    brand: "TechBrand",
    category: "smartphones",
    thumbnail: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/0000FF",
      "https://via.placeholder.com/150/008000",
      "https://via.placeholder.com/150/FF0000",
    ],
  },
  {
    id: 2,
    title: "Laptop Pro 15",
    description: "A powerful laptop designed for professionals.",
    price: 1299.99,
    discountPercentage: 10,
    rating: 4.8,
    stock: 75,
    brand: "LaptopBrand",
    category: "laptops",
    thumbnail: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/000000",
      "https://via.placeholder.com/150/808080",
    ],
  },
  {
    id: 3,
    title: "Wireless Headphones",
    description: "Noise-canceling wireless headphones with superior sound quality.",
    price: 199.99,
    discountPercentage: 20,
    rating: 4.6,
    stock: 150,
    brand: "AudioGear",
    category: "audio",
    thumbnail: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/800080",
      "https://via.placeholder.com/150/FF69B4",
    ],
  },
  {
    id: 4,
    title: "Smartwatch GT",
    description: "A smartwatch with fitness tracking and health monitoring features.",
    price: 249.99,
    discountPercentage: 12,
    rating: 4.3,
    stock: 200,
    brand: "WatchBrand",
    category: "smartwatches",
    thumbnail: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/4682B4",
      "https://via.placeholder.com/150/5F9EA0",
    ],
  },
  {
    id: 5,
    title: "Gaming Mouse",
    description: "An ergonomic gaming mouse with customizable buttons.",
    price: 49.99,
    discountPercentage: 25,
    rating: 4.7,
    stock: 300,
    brand: "GamingGear",
    category: "gaming",
    thumbnail: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/FF4500",
      "https://via.placeholder.com/150/FFD700",
    ],
  },
  {
    id: 6,
    title: "4K Ultra HD TV",
    description: "A 55-inch 4K Ultra HD TV with smart features.",
    price: 799.99,
    discountPercentage: 18,
    rating: 4.4,
    stock: 50,
    brand: "ViewTech",
    category: "televisions",
    thumbnail: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/2E8B57",
      "https://via.placeholder.com/150/6A5ACD",
    ],
  },
  {
    id: 7,
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with deep bass and long battery life.",
    price: 59.99,
    discountPercentage: 30,
    rating: 4.5,
    stock: 250,
    brand: "SoundBrand",
    category: "audio",
    thumbnail: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/008B8B",
      "https://via.placeholder.com/150/20B2AA",
    ],
  },
  {
    id: 8,
    title: "Tablet Plus",
    description: "A lightweight tablet with a 10-inch display and high-speed performance.",
    price: 399.99,
    discountPercentage: 15,
    rating: 4.2,
    stock: 90,
    brand: "TabTech",
    category: "tablets",
    thumbnail: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/DEB887",
      "https://via.placeholder.com/150/D2B48C",
    ],
  },
  {
    id: 9,
    title: "Fitness Tracker",
    description: "A waterproof fitness tracker with step counting and sleep monitoring.",
    price: 39.99,
    discountPercentage: 20,
    rating: 4.1,
    stock: 400,
    brand: "FitGear",
    category: "fitness",
    thumbnail: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/B0C4DE",
      "https://via.placeholder.com/150/87CEFA",
    ],
  },
  {
    id: 10,
    title: "Digital Camera",
    description: "A compact digital camera with 24MP and 4K video recording.",
    price: 549.99,
    discountPercentage: 10,
    rating: 4.7,
    stock: 60,
    brand: "CameraPro",
    category: "cameras",
    thumbnail: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150/FFB6C1",
      "https://via.placeholder.com/150/F08080",
    ],
  },
];


const Home = () => {
  return (
    <div>
      {/* grid products  */}
      <GridProducts products={products}/>
      <Sidebar/>
      <Carousel />
      <Timer />
      <Hero />
      <Gallery/>
      <Testimonial/>
    </div>
  )
}

export default Home