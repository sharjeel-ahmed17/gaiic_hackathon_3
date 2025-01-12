import Carousel from '@/components/home/carousel/Carousel'
import Gallery from '@/components/home/gallery/Gallery'
import Hero from '@/components/home/hero/Hero'
import Sidebar from '@/components/home/sidebar/Sidebar'
import Testimonial from '@/components/home/testimonial/Testimonial'
import Timer from '@/components/home/timer/Timer'
import GridProducts from '@/components/GridProducts'
import { products } from './data/productData'
import Heading from '@/components/Heading'



const Home = () => {
  return (
    <div>
 
      
      {/* grid products  */}
      {/* <GridProducts products={products}/> */}
      <div className='flex justify-between '>


      <Sidebar />
      <Carousel />
      </div>
      <Timer />
      <Hero />
      <Gallery/>
      <Testimonial/>
    </div>
  )
}

export default Home