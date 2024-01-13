import { Routes,Route } from 'react-router-dom'
import './index.css'
import Sidebar from './scenes/global/Sidebar'
import MobileSidebar from './scenes/global/MobileSidebar'
import { Stratedgy,Dashboard,User,Income,Notification } from './scenes'

function App() {

  return (
    <div className='App' >
      <Sidebar/>
      <MobileSidebar/>
      <div className='content'>
       <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/stratedgy' element={<Stratedgy/>}/>
          <Route path='/income' element={<Income/>}/>
          <Route path='/notification' element={<Notification/>}/>
       </Routes>

      </div>
    </div>
  )
}

export default App
