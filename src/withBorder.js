import React from 'react'

export default Component => props => 
  <div style={{border: `5px solid ${props.color}`}}>
    <Component {...props}/>
  </div>