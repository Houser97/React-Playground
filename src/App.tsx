import './App.css'
import FormBorderAnimation from './components/FormBorderAnimation'
import HandScann from './components/HandScann'
import Home from './components/Home'
import InvertedBorderRadiusCard from './components/InvertedBorderRadiusCard'
import Navbar from './components/Navbar'
import NetflixLines from './components/NetflixLines'
import RainText from './components/RainText'
//      <NetflixLines />
function App() {
  return (
    <div className='app'>
      <InvertedBorderRadiusCard />
      <FormBorderAnimation />
      <RainText />
      <HandScann />
    </div>
  )
}

export default App
