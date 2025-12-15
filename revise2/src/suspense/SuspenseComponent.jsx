import React, { Suspense } from "react";
const LazyData = React.lazy(() => import('./Data'));


const SuspenseComponent = () => {
  return (
    <div>
        <h1>This is a suspense component, below this is a fallback component</h1>

        <article>
            <Suspense fallback={<h4>Loading this data.....</h4>}><LazyData /></Suspense>
        </article>
    </div>
  )
}

export default SuspenseComponent