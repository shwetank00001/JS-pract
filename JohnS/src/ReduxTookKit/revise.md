To initate an redux app -> we install two libraries.
1. npm i react-redux
2. npm i @reduxjs/toolkit

reduxjs/toolkit gives us 4 things
1. redux - state management
2. Immer - to Directly mutate states
3. asyncThunks
4. reselect - simplifies reducer functions. 
react-redux
1. This acts like a bridge to connect React and Redux



### 
1STEP = SETUP THE STORE - store.js
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStor({
    reducer: {}
}) 
###




