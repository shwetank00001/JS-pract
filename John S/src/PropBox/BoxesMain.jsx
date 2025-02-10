import React from 'react'
import BoxChild from './BoxChild'

import {boxes} from './boxes'

const BoxesMain = () => {
    const [square, setSq] = React.useState(boxes)

    const boxEle = boxes.map(function(item){
        return (
            <BoxChild 
            key={square.id}
            propsOn = {square.on}
            />
            )
        })

  return (
    <div>
        {boxEle}
    </div>
  )
}

export default BoxesMain