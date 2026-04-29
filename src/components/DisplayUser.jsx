import React, { useState } from 'react'

const DisplayUser = ({allUsers, deleteUser, editUser}) => {
    const [firstName, setfirstName] = useState("")
          const [lastName, setlastName] = useState("")
          const [email, setemail] = useState("")
          const [password, setpassword] = useState("")
    const [currentIndex, setcurrentIndex] = useState(null)

    // let getProd = localStorage.getItem("products")
    // let convProd = JSON.parse(getProd)
    // console.log(convProd);
    
  return (
    <div>
<div>
        {allUsers.map((_, idx)=>(
          <div className="card" style={{width: "18rem"}} key={idx}>
          <div className="card-body">
            <h5 className="card-title">{_.firstName+" "+_.lastName}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{_.email}</h6>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
            <div className='d-flex gap-2'>

              <div className="btn btn-danger" onClick={()=>deleteUser(idx)}>Delete</div>

              <div className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setcurrentIndex(idx)}>Edit</div>
            </div>
          </div>
        </div>
        ))}
      </div>




      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit user</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <input type="text"  onChange={(e)=>setfirstName(e.target.value)} placeholder='firstName'/>
      <input type="text"  onChange={(e)=>setlastName(e.target.value)} placeholder='lastName'/>
      <input type="text"  onChange={(e)=>setemail(e.target.value)} placeholder='email'/>
      <input type="text"  onChange={(e)=>setpassword(e.target.value)} placeholder='password'/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>editUser(currentIndex, {firstName, lastName, email, password})}>Save changes</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default DisplayUser