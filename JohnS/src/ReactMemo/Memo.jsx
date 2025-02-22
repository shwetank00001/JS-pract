import React from 'react'

const Memo = () => {

    const [count, setCount] = React.useState(0)
    const styleparent = {
        backgroundColor: "yellow"
    }
    console.log("PARENT RENDERED")
    function parent(){
        setCount(count+1)
    }
  return (
    <div style={styleparent}>
        <h3>This is parent component</h3>
        <button onClick={parent}>trigger rendering of both the components</button>
        <ChildMemo />
        <RealChild propCount = {count} />
    </div>
  )
}

const styleChild1 = {
    border: "2px solid black",
    margin: "5%"
}

export const ChildMemo = React.memo(function(){
    console.log("CHILD COMPONENT RENDERED")
    return(
        <div style ={styleChild1}>
            <h3>This is Child 1 for memo</h3>
            <p>This component will not render when parent changes because i am not passing props to this</p>
        </div>
    )
})
export const RealChild = React.memo(function(props){
    console.log("REAL MEMO CHILD COMPONENT RENDERED")

    return(
        <div>
            <h3>This is real child for memo</h3>
            <p>This component will render because i am passing props to this</p>
            <>{props.propCount}</>
        </div>
    )
})

export default Memo