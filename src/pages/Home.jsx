import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseByNum, increaseNum } from '../redux/appSlice'

const Home = () => {
  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch()
  const [number, setnumber] = useState(0)
  return (
    <div>This is the home page for our class 



      <input type="number" className='w-25 form-control'  onChange={(e)=>setnumber(e.target.value)}/>

      <div className='d-flex  gap-2 align-items-center'>
        <button className='btn btn-danger' >-</button>
          <h1>{count}</h1>
        <button className='btn btn-success' onClick={()=>dispatch(increaseNum())}>+</button>
        <button className='btn btn-success' onClick={()=>dispatch(increaseByNum(Number(number)))}>+{number}</button>
      </div>
    </div>
  )
}

export default Home