import { BrowserRouter } from 'react-router-dom';
import '../node_modules/modern-css-reset/dist/reset.min.css';
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'


function App() {
  const greeting = 'Hello world'

  return (
    <BrowserRouter>
      <>
        < Navbar />
        <main className="container section flow">
          <h1>{greeting}</h1>
          <h1>step5</h1>
          <h2>step4</h2>
          <h3>step3</h3>
          <p>step1</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat maiores cupiditate fuga dolores debitis iure, nisi consequuntur hic? Quisquam beatae doloremque delectus obcaecati ipsum consectetur, sit enim tempore! Quibusdam!</p>
        </main>
      </>
    </BrowserRouter>
  )
}


export default App