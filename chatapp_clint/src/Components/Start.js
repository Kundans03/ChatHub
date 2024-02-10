import React, { useState } from 'react'
import StartLeft from './StartLeft'
import StartRightCreate from './StartRightCreate'
import StartRightJoin from './StartRightJoin'


function Start(props) {


  return (
<div className='h-screen w-screen flex '>
    <StartLeft/>
    {/* <StartRightCreate/> */}
    <StartRightJoin  name={props.name} setname={props.setname} />
</div>
  )
}

export default Start