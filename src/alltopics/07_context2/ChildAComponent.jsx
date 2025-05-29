import React from 'react'
import ChildBCommponent from './ChildBCommponent'

const ChildAComponent = () => {
  return (
    <div>
        <h1>ChildAComponent</h1>

        <ChildBCommponent/>
    </div>
  )
}

export default ChildAComponent