import React from 'react'
import { Slider } from '@mui/joy'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const StrategyPage = () => {
  
  return (
    <div className='w-[30%] bg-[#fafafa] h-full pl-4 '>
      <div className='mt-[62px] border-b border-b-slate-200 pb-4'>
        <h2 className='text-md text-zinc-700 font-bold'>Retirement Strategy</h2>
        <div className='mt-6 '>
          <h2 className='text-sm font-bold text-zinc-600'>Employee Contribution</h2>
          <div className='w-36 flex '>
          <Slider defaultValue={40}/>
          <h3 className='ml-4 mt-2 font-bold text-zinc-600'>12%</h3>
          </div>
        </div>
        <div className='mt-6'>
          <h2 className='text-sm font-bold text-zinc-600'>Retirement Age</h2>
          <div className='w-36 flex '>
          <Slider defaultValue={65}/>
          <h3 className='ml-4 mt-2 font-bold text-zinc-600'>65.</h3>
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <div className=' flex '>
            <h2 className='text-sm font-bold text-zinc-600'>Employer Contribution</h2>
            <h3 className='ml-4 font-bold text-zinc-600'>8.4%</h3>
        </div>
        <div className=' flex mt-4'>
            <h2 className='text-sm font-bold text-zinc-600'>Interest Rate</h2>
            <h3 className='ml-20 font-bold text-zinc-600'>5%</h3>
        </div>
      </div>
      <div>
        <div className='mt-4 '>
          <button className='w-44 h-12 bg-indigo-600 font-bold text-white text-md  rounded-md hover:bg-indigo-700'>
              Update
          </button>
        </div>
        <h2 className='text-sm font-bold text-indigo-600 ml-8 mt-4'>View Help Doc <KeyboardArrowRightIcon/></h2>
      </div>
      <div className='mt-10 border-l border-l-indigo-400 pl-4'>
          <h2 className='text-sm text-zinc-600'>Are you considering a</h2>
          <span className='text-md text-slate-800 font-bold'>Housing Advance?</span>
          <p className='text-xs text-slate-400 pt-2'>Limited time reduced interest</p>
        </div>
    </div>
  )
}

export default StrategyPage