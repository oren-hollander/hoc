import React from 'react'

export default ({text, color, onClick}) => <div onClick={onClick ? () => onClick('from Text') : null} style={{color}}>{text}</div>