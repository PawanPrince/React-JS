import React from 'react'


const ChildX = () => {
    console.log("child x");
    
  return (
    <div>ChildX</div>
  )
}

export default React.memo(ChildX);