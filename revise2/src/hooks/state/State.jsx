import React, { useState } from 'react'

const state = () => {

  const [things, setThings] = useState(['Thing 1', 'Thing 2']);

  const ele = things.map(function(item){
    return (
      <>
        <h3>{item}</h3>
      </>
    )
  })

  function addThings(){
    setThings(function(item){
      return [...item, `Thing ${things.length + 1}`]
    })
  }

  function showHideData(){
    setShow(i => !i)
  }
  const [showData, setShow] = useState(true); // revising CONDITIONAL operator
  return (
    <div>
      <button onClick={showHideData}>Show THis ele data</button>
  
     { showData &&  
     <div>
      {ele}
      </div>
     }
      <button onClick={addThings}>Add</button>


      <p>The value of the this text changes when the state of 'showData' changes= {showData ? "Visible Data" : "Hidden Data"}</p>

    </div>
  )
}

export default state