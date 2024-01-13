import React from 'react'
import UserAccount from '../../components/UserAccount'
import IncomePage from '../../components/IncomePage'
import StrategyPage from '../../components/StrategyPage'

const Dashboard = () => {
  return (
    <main>
    <div className='h-screen w-full flex'>
      <UserAccount/>
      <div className='h-screen w-screen  hidden lg:flex'>
      <IncomePage/>
      <StrategyPage/>     
      </div>
    </div> 
    </main>
  )
}

export default Dashboard