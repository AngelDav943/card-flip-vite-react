import { useState } from 'react'

import './styles/testimonies.css'
import './styles/cards.css'

import Saludo from './Components/greetings'
import Testimony from './Components/testimony'
import Card from './Components/card'

const longlorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugit error, eaque molestias iure obcaecati dignissimos sequi repudiandae hic est? A facere ullam ab culpa ducimus animi, illo exercitationem suscipit?"
const shortlorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
const antoni = "antonio_transparent.png"

export default function () {
  return (
    <>
      <Card src={antoni} name="Anthony" strength="999" speed="100" description="juan's cousin" />
      <Card src="juan_transparent.png" name="Juan" strength="100" speed="999" description="anthony's cousin." />
      <Card src="rodolfo.png" name="Rudolph" strength="10" speed="70" description={shortlorem} />
    </>
  )
}