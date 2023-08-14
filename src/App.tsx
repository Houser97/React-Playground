import './App.css'
import FormBorderAnimation from './components/FormBorderAnimation'
import Home from './components/Home'
import InvertedBorderRadiusCard from './components/InvertedBorderRadiusCard'
import Navbar from './components/Navbar'
import NetflixLines from './components/NetflixLines'

function App() {
  return (
    <div className='app'>
      <InvertedBorderRadiusCard />
      <FormBorderAnimation />
      <NetflixLines />
    </div>
  )
}

export default App
