// Step 2: Create a Store
// A "store" is where your state lives. It's a single object that holds your data and the functions to update it.
import {create} from 'zustand'

// const [count, setCount] = useState(0) => we will keep this state in our zustand store now

// create a store
const useCounterStore = create(function(set){
    count : 0,

    //We keep the actions directly in the ZUSTAND Store instead of reducers in slices.
    increment : () => set(function(globalState){
        
    })
})