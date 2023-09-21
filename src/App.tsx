import './App.css'
import FormBorderAnimation from './components/FormBorderAnimation'
import GalleryHover from './components/GalleryHover'
import HandScann from './components/HandScann'
import Home from './components/Home'
import HotCup from './components/HotCup'
import InvertedBorderRadiusCard from './components/InvertedBorderRadiusCard'
import Navbar from './components/Navbar'
import NetflixLines from './components/NetflixLines'
import RainText from './components/RainText'
import TextAnimation from './components/TextAnimation'
//      <NetflixLines />
function App() {
  return (
    <div className='app'>
      <TextAnimation />
      <HotCup />
      <GalleryHover />
      <InvertedBorderRadiusCard />
      <FormBorderAnimation />
      <RainText />
      <HandScann />
    </div>
  )
}

export default App
