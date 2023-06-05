import React from 'react'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <div className='bg-sky-300'>
        <Fa icon={faVideoSlash}/>
    </div>
  )
}

export default Navbar