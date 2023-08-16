import {useState} from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'

export const Router = () => {
  const [pokemonData, setPokemonData] = useState<any>();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home setPokemonData={setPokemonData} />} />
        <Route path='/profile'  element={<Profile pokemonData={pokemonData}/>} />
      </Routes>
    </BrowserRouter>
  )
}
