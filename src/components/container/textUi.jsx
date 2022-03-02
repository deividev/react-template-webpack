import React from 'react';



export default function textUi() {
  return (
    <div>
        <h1>Title H1</h1>
        <h2>Title H2</h2>
        <h3>Title H3</h3>
        <div>
          <p className="text-ligth">Text Light</p>
          <p>Text regular</p>
          <p className="text-bold">Text Bold</p>
        </div>
        <div className="separator"></div>
    </div>
  )
}
