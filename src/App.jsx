import { useState } from 'react'

import './styles/testimonios.css'
import './styles/cards.css'

import Saludo from './Components/greetings'
import Testimony from './Components/testimony'
import Card from './Components/card'

const longlorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugit error, eaque molestias iure obcaecati dignissimos sequi repudiandae hic est? A facere ullam ab culpa ducimus animi, illo exercitationem suscipit?"
const shortlorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
const antoni = "antonio_transparent.png"

//<Testimony src="src/assets/antonio.png" job="Ingeniero de Software" name="Antonio" content={lorem}/>
export default function() {
  return (
    <>
      <Card src ={antoni} name="Anthony" strength="999" speed="100" description="Primo de juan"/>
      <Card src ="juan_transparent.png" name="Juan" strength="100" speed="999" description="Primo de antonio."/>
      <Card src ="rodolfo.png" name="Rodolfo" strength="10" speed="70" description={shortlorem}/>
    </>
  )
}

/*export default function() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Saludo>Angel</Saludo>
      <button onClick={() => setCount(c => c += 1)}>
        <img src="src/assets/antonio.png" alt="" />
        <p>{count}</p>
      </button>
    </>
  )
}*/