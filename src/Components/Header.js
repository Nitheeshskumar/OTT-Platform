import React from 'react'

const Header=()=>{

const imgstyle={
    height:'20px'
}
    return  <div class="flex ...">
  <div class="flex-none w-16 h-16 ...">
  <img alt="back" src="Back.png" style={imgstyle}/>
  </div>
  <div class="flex-grow h-16 text-white">
  Romantic Comedy
  </div>
  <div class="flex-none w-16 h-16 ...">
  <button type='button'><img  src='search.png' alt="back" style={imgstyle} /></button>
  </div>
</div>

}

export default Header