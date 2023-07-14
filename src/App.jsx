import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import whitecat from '/images/whitecat2.png'
import './App.css'

const Header = ({name}) => {
  return (
    <div class="h-screen w-screen bg-blue-400 rounded-3xl">
      <h1 class="text-5xl">My name is {name}</h1>

    </div>
  )
}



function App({}) {
  return (
    <div class="Background">
     
      <div class="h-screen w-auto bg-cover bg-gradient-to-b from-sky-950 to-sky-200">
   
      </div>
    
      <img src = "/images/whitecat2.png" alt="white cat" />
    </div>
    
  )
}

export default App
