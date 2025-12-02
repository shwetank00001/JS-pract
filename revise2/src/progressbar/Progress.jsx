import './progress.css'

const Progress = (props) => {

    const styling = {
        "border" : "2px solid white",
        "width" : `${props.width}%`,
        "backgroundColor": "green"
    }
  return (
    <div className='bar' style={styling}>
        <p>{props.width}</p>
    </div>
  )
}

export default Progress