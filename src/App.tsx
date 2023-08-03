import './App.css'
import FormBorderAnimation from './components/FormBorderAnimation'
import Home from './components/Home'
import InvertedBorderRadiusCard from './components/InvertedBorderRadiusCard'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='app'>
      <InvertedBorderRadiusCard />
      <FormBorderAnimation />
    </div>
  )
}

export default App
