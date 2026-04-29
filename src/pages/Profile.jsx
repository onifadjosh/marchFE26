import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const {username} = useParams()
    const count = useSelector((state)=>state.count)

    // console.log(params);
    
  return (
    <div>This is a profile page for {username} with {count} year old baby</div>
  )
}

export default Profile