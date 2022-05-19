import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const Typerwriter = () => {

  const {text} = useTypewriter({
    words: ['Uh oh ... 404, Page not found.' ],
    delaySpeed: 2000,
    deleteSpeed: 90,
    typeSpeed: 100
  })

  return (
    <div className='loopdiv' style={{background: 'black', height: '100vh'}}>
      <span style={{ color: 'white', fontSize: '3rem' }}>{text} <Cursor /></span>
    </div>
  )
}

export default Typerwriter