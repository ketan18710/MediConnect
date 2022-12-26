import React, { useEffect } from 'react'
import Sidebar from './sidebar'

const Dashboard = (props:any) => {

  useEffect(() => {
    console.log('dashboard')
  
  }, [])
  
  
  return (
    <div>
        <Sidebar/>
    </div>
  )
}

export default Dashboard