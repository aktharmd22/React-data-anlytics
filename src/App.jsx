import './App.css'
import Anaylytics from './components/Anaylytics'
import Cards from './components/Cards'
import Footer from './components/Footer'
import { Hero } from './components/Hero'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Anaylytics/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App
