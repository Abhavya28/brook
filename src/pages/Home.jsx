
import Furniture from '../sections/Furniture'
import Hero from '../sections/Hero'
import Inspirations from '../sections/Inspirations'
import Products from '../sections/Products'
import Range from '../sections/Range'

function Home() {

  return (
    <div id='home'>
      <Hero />
      <Range />
      <Products />
      <Inspirations />
      <Furniture />
    </div>
  )
}

export default Home
