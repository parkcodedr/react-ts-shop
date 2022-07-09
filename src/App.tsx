import { useState } from 'react'
import { Container } from 'react-bootstrap';
import {Routes,Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/shoppingCartContext';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Store } from './pages/Store';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShoppingCartProvider>
    <Navbar/>
    <Container>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
    </>
  )
}

export default App
