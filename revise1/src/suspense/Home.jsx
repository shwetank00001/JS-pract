import React,  {Suspense} from 'react'

const SlowData = React.lazy(() => import('./FakeData.jsx'))
// import FakeData from './FakeData.jsx'


export default function Home(){
    return (
        <div>
            <h1>Hi all</h1>
             <Suspense fallback={<p>Loading this data until the query is resolved!!!!</p>}>
                <SlowData />
            </Suspense>
        </div>
    )
}
