import React, { useState } from 'react'

const AddUser = ({submitUser}) => {
     const [firstName, setfirstName] = useState("")
      const [lastName, setlastName] = useState("")
      const [email, setemail] = useState("")
      const [password, setpassword] = useState("")
  return (
    <div>

<input type="text"  onChange={(e)=>setfirstName(e.target.value)} placeholder='firstName'/>
      <input type="text"  onChange={(e)=>setlastName(e.target.value)} placeholder='lastName'/>
      <input type="text"  onChange={(e)=>setemail(e.target.value)} placeholder='email'/>
      <input type="text"  onChange={(e)=>setpassword(e.target.value)} placeholder='password'/>

      <button onClick={()=>submitUser({firstName, lastName, email, password})}>Submit</button>
    </div>
  )
}

export default AddUser