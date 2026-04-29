import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { Bars, InfinitySpin } from 'react-loader-spinner'

const FetchProd = () => {
    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(()=>{
       const makeRequest=async()=>{
        let response = await axios.get(`${import.meta.env.VITE_BASE_URL}`)
        console.log(response.data.products);
        setproducts(response.data.products)
        setloading(false)
        
       } 

       makeRequest()
    }, [])
  return (
    <div className='d-flex justify-content-center align-items-center flex-wrap gap-3'>{
        loading?<InfinitySpin
            width="200"
            color="#4fa94d"
            />:products.map((_, idx)=>(
                <div className="card" style={{width: "18rem"}} key={idx}>
  <img src={_.images[0]} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
            ))
        
        
        }</div>
  )
}

export default FetchProd