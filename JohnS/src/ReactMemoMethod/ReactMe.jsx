import React from 'react'
import Child1 from './Child1'

export const ReactMe = () => {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('')

    console.log("Parent Rendered")

    let add = React.useCallback(function(){
        console.log("Add Function called")
        setCount(count + 1)
    }, [])

  return (
    <div>
        <h2>HI</h2>
        {count}
        <button onClick={add}>Parent Button</button>
        <Child 
        propCount = {count} 
        addProp = {add}
        nameProp = {name}
        />
    </div>
  )
}

export const Child = React.memo (function(prop){
    console.log("Child rendered")
    return (
        <div>
            <h2>Main Child</h2>
            <p>{prop.propCount}</p>
            <h3>{prop.name}</h3>
            <button onClick={prop.addProp}>Child Button</button>
            
        </div>
    )
})

/* 
with no dependency
add is a fn and whenever we use it
, we will get the memoized value out of it, since there is no dependency present to update it

--> a dependecny
a function in useCallback will only update when we have a particular dependency that triggers the updation of the function

--> when fn is passed as a prop down to a child
and how useCallback works in CHILD with this eg -> 
okay so i have passed the add as a prop to the child component here
And when im am clicking the child component, the child is rendered two times 
and after that whenever i am tapping the 'CHild button'. I am getting only ("Add Function called")

https://chatgpt.com/c/67b305ec-9878-800f-bac2-3c6d8d8b9e0d

In the Parent: You're using useCallback to memoize the add function. 
Since the dependency array is empty ([]), the function is created only once, 
and React will pass the same memoized function reference to the child, avoiding unnecessary re-renders.

In the Child: The child receives the add function as a prop, 
and since it is wrapped in React.memo, the child will not re-render unless its props 
(like propCount or nameProp) change. 
The add function doesn't change between renders because of useCallback, so the child won't re-render just because of the function.
*/
