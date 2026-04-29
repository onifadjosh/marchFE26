import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [name, setname] = useState("Pampam")
    const [number, setnumber] = useState(0)
    useEffect(()=>{
        console.log("use effect ran");

        return(()=>{
            alert("are you sure you wannt to leave??")
        })
        
    }, [name])

    //when there is no dependency array, on load useeffect runs and when any state changes it runs again
    //when there is empty dep array, on load it runds, when state changes it won't run
    //when there is a state in the dep array, onload it runs, when the state changes, it will run again
    
  return (
    <div>

        <button onClick={()=>setname("Josh")}><h1>{name}</h1></button>
        <button onClick={()=>setnumber(number+1)}><h1>{number}</h1></button>
    </div>
  )
}

export default Effect