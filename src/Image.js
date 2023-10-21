import React from 'react';
import picture from "./beach.png"

function Image() {
  return (
    <div>
      <img src={picture} alt='beach' width="400px"/>
    </div>
  )
}

export default Image;