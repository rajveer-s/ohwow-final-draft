import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const Typerwriter = () => {

  const {text} = useTypewriter({
    words: ['Developer', 'Programmer', 'stylist', 'Genuis'],
    loop:{},
    delaySpeed: 2000,
    deleteSpeed: 90,
    typeSpeed: 100
  })

  return (
    <div>
        <h1 style={{ paddingTop: '15rem', margin: 'auto 0', fontWeight: 'bold', fontSize: '8rem' }}>I am a </h1>
      <span style={{ color: 'red', fontWeight: 'bold', fontSize: '10rem' }}>{text}</span>
      <Cursor  />
    </div>
  )
}

export default Typerwriter