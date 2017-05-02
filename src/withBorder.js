import React from 'react'

export default Component => props => 
  <div onClick={props.onClick ? () => props.onClick('from Bordered') : null} style={{border: `10px solid ${props.color}`}}>
    <Component {...props}/>
  </div>