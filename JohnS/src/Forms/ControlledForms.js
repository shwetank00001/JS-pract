import React from 'react'

const ControlledForms = () => {
    // const [data, setData ] = React.useState("")
    // const [lName, setName ] = React.useState("")
    const [formData, setForm] = React.useState({
        fname: "",
        lname:"",
        areURich: false
    })

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
    
        setForm((prevForm) => ({
          ...prevForm,
          [name]: type === 'checkbox' ? checked : value
        }));
      }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
    }

  return (
    <div>
        <form  onSubmit={handleSubmit}>
        <input type='text' name="fname" value={formData.fname} placeholder='first Name' onChange={handleChange} />
        <input type='text' name="lname" value={formData.lname} placeholder='Last name' onChange={handleChange}/>
        <label htmlFor='richh'>Are you rich</label>
        <input type="checkbox" name="areURich" id="rich" checked={formData.areURich} onChange={handleChange} />
        <button>Submit</button>
        </form>

    </div>
  )
}

export default ControlledForms