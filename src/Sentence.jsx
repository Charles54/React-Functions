import React from 'react'
import { useState } from 'react'

const Sentence = () => {
    const [name, setName] = useState("Prince Ndukwe");
    const [job, setJob] = useState("software web developer");
    const [age, setAge] = useState(35);

    const changeBio = () =>{
        setName("Grace Ndukwe")
        setJob("Mechanical Engineer")
        setAge(67)
    }
   
   
  return (
    <div>
        <h1>Hello! My name is {name}. I'm a {job}. I'm {age} years old.</h1>
        
        <button className='btn btn-primary' onClick={changeBio}>Click me to change bio</button>


    </div>
  )
}

export default Sentence