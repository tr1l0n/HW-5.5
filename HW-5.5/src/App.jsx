import { useState } from 'react'
import Recipe from './components/Recipe'
import recipces from './recipces.json'
function App() {
 

  return (
    <>
      <Recipe recipcesMass={recipces}/>
    </>
  )
}

export default App
