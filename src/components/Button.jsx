import React from 'react'

function Button(props) {
  return (
<div>
<button onClick={props.togglePic}> {props.icons} </button>
    </div>

  )
}

export default Button