import React, {useState} from 'react'
import ok from './ok.png'


const ConditionalEffects = () => {
    const [yesState, setYes] = useState(false)
    const [noState, setNo] = useState(false)


    let yes = function(){
        setYes(item => !item)
        setNo(false)
    }
    let no = function(){
        setNo(item => !item)
        setYes(false)
    }

  return (
    <div>
        <h1> Is Tanya lovely?!</h1>
        <button onClick={yes}>Yes</button>
        <button onClick={no}>No</button>

        {yesState && <h3>YESSS SHEEE IS LOVELYYYYYYYYYY</h3>}
        {noState && <h3>HOW DARE YOU SO NO! SHE IS LOVELY OK!<span><img src={ok}/></span></h3>}
        
    </div>
  )
}

export default ConditionalEffects