import React, { useState } from 'react'
import { countercontext } from '../context/context'

function Store({children}) {
   
    let [task,settask]=useState([]);
  return (
    <div>
      <countercontext.Provider value={[task,settask]}>
        {children}
      </countercontext.Provider>
    </div>
  )
}

export default Store
