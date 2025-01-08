import Category from "../components/Category"
import Choose from "../components/Choose"
import Fproduct from "../components/Fproduct"
import Hero from "../components/Hero"
import Meet from "../components/Meet"
import User from "../components/User"


const Home = () => {
  return (
    <div className="">
  <Hero/>
     <Choose/> 
     <Fproduct/>
     <Category/>
     <Meet/>
     <User/>
    </div>
  )
}

export default Home
