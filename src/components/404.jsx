import React from 'react'

export const InvalidPage = () => {
  return (
    <div style={{padding: '15rem'}}>
        <h3 style={{fontSize: '5rem', padding: '3rem'}}>404 Page. This page doesn't exist</h3>
        <button style={{padding: '2rem', color: 'red', fontSize: '2rem', borderRadius: '5px'}}>
            <a href="/">Home</a>
        </button>
    </div>
  )
}
