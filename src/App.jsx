import React from 'react'


function App(props) {
  const newTittle = "<Code Signal/>";

  return (
    <>
    <h1 className='main-Tittle'>{newTittle}</h1>
    <p className='main-Subtitle'>-Welcome to Code Solutions-</p>
    <ul className='main-Nav'>
     <li><a href="#news">News</a></li>
     <li><a href="#">Post</a></li>
     <li><a href="#">Questions</a></li>
     <li><a href="https://github.com/agusdigiam">Contact</a></li>
    </ul>
    </>
  )
}

export default App