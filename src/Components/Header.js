import React from 'react'

const Header = () => {

  const imgstyle = {
    height: '20px'
  }
  return <div className="flex m-3">
    <div className="flex-none w-16 h-16 ">
      <img alt="back" src={`${process.env.PUBLIC_URL}/Back.png`} style={imgstyle} />
    </div>
    <div className="flex-grow h-16 text-white">
      Romantic Comedy
    </div>
    <div className="flex-none w-16 h-16 ">
      <button type='button'><img src={`${process.env.PUBLIC_URL}/search.png`} alt="back" style={imgstyle} /></button>
    </div>
  </div>

}

export default Header