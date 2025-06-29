import "./css/index.css"
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import { MovieProvider } from "./contexts/MovieContext"

function App() {
  return (
    <MovieProvider>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />

      </Routes>
    </MovieProvider>



  )
}

export default App