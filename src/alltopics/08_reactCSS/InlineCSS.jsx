import React from 'react'


const InlineCSS = () => {

    let styles = {
        backgroundColor: "red",
        color : "white",
    }




  return (
    <div>
        <h1 style={styles}>InlineCSS</h1>
        <h1 style={{backgroundColor: "black", color: "White"}}> Hello world</h1>
    </div>
  )
}

export default InlineCSS;