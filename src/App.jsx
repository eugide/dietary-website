import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />} >
      <Route path='/' element={<About />} />
      <Route path='contact' element={<Contact />}/>
      <Route path='/home' element={<Home />} />

      </Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App