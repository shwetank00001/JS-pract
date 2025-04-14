import React from 'react'

const ProgressBar = ({progress}) => {
    const styles = {
        backgroundColor: "green",
        width: `${progress}%`,
        transition : `${progress} 5s ease`

    }
  return (
    <div className='outer'>
        <div style={styles} className='inner' role='progressbar' aria-valuemax={100} aria-valuemin={0}>
            {progress}
        </div>
    </div>
  )
}

export default ProgressBar