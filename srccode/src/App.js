import React from 'react'

function App() {
  return (
    <div className='box'>
      <div className="container">
        <img src={require("./assets/image-qr-code.png")} alt="qr-code" className='qr-code'/>
        <h1 className='heading'>Improve your front-end skills by building projects</h1>
        <p className='about'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level. </p>
      </div>
    </div>
  )
}

export default App