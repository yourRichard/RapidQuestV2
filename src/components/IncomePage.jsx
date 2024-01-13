import React, { PureComponent } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { CircularProgress } from '@mui/joy';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';


const IncomePage = () => {
 
  return (
    <div className='w-[70%] bg-white h-screen md:ml-6 ml-10'>
      <div className='mt-[37px]' >
        <h2 className='text-sm font-bold text-indigo-600'>Retirement Income</h2>
        <span className='text-2xl text-slate-800'>Starting Year 2056</span>
      </div>
      <div className='absolute right-4 md:hidden top-4 cursor-pointer hover:text-indigo-400' onClick={({})=>{navigate("/")}}>
            <NotificationAddOutlinedIcon/>
      </div>
      <div className='md:flex block justify-between mt-6'>
        <div className=' border-b border-b-indigo-400 md:w-[160px] w-full pb-2 ml-4 md:ml-0'>
          <h2 className='text-xl font-bold text-zinc-600'>$300,000</h2>
          <span className='text-xs text-slate-400'>My Goal</span>
        </div>
        <div className='flex ml-4 gap-3 md:mt-0 mt-4'>
        <div className=' border-b border-b-indigo-400 w-[160px] pb-4'>
          <h2 className='text-xl font-bold text-zinc-600'>59%</h2>
          <span className='text-xs text-slate-400'>Goal Achieved</span>
        </div>
        <div className=' border-b border-b-indigo-400 w-[160px] pb-4 mr-6'>
          <h2 className='text-xl font-bold text-zinc-600'>$300</h2>
          <span className='text-xs text-slate-400'>Est. Montly Income</span>
        </div>
        </div>
      </div>
      <div className='md:mt-0 mt-12'>
        <h2 className='mt-6 font-bold text-xl text-slate-800'>Contributions Overtime</h2>
        <div className='md:mt-0 mt-8'>
        <BarChart
          series={[
            { data: [3, 5, 7, 9, 11], stack: 'A', label: 'Employer',color:"#0800a3"},
            { data: [3, 5, 7, 9, 11], stack: 'A', label: 'Employee',color:"#4935ff"},
            { data: [3, 5, 7, 9, 11], stack: 'A', label: 'Total Interest',color:"#85afff" },
            { data: [4, 6, 8, 10, 12], stack: 'B',color:"#0800a3"},
            { data: [4, 6, 8, 10, 12], stack: 'B',color:"#4935ff" },
            { data: [4, 6, 8, 10, 12], stack: 'B',color:"#85afff" },
          ]}
          width={500}
          height={200}
        />
        </div>
      </div>
      <div className='hidden md:block'>
        <div >
          <h2 className='text-md font-bold text-zinc-700'>How do I compare to my peers?</h2>
          <span className='text-xs text-slate-500'>These numbers represent current goal achievement</span>
        </div>
        <div className='flex justify-between mt-6'>
          <div >
            <h4 className='border-b pb-2 border-b-slate-200 font-bold text-zinc-700'>Age: <span className='text-sm text-zinc-500 font-normal'>Under 30 <ArrowDropDownIcon/></span></h4>
            <h4 className='border-b pb-2 border-b-slate-200 font-bold text-zinc-700'>Salary: <span className='text-sm text-zinc-500 font-normal'>K20 - K30<ArrowDropDownIcon/></span></h4>
            <h4 className=' pb-1  font-bold text-zinc-700'>Gender: <span className='text-sm text-zinc-500 font-normal'>Male <ArrowDropDownIcon /></span></h4>
          </div>
          <div className='flex mr-14 gap-8 mt-1'>
          <div >
          <CircularProgress size="lg" determinate value={78}>
            78%
          </CircularProgress>
          <p className='text-sm pl-2 pt-1 text-slate-500'>Average</p>
          </div>
          <div>
          <CircularProgress size="lg" determinate value={90}>
            95%
          </CircularProgress>
          <p className='text-sm pl-5 pt-1 text-slate-500'>Top</p>
          </div>
          <div>
          <CircularProgress size="lg" determinate value={59}>
            59%
          </CircularProgress>
          <p className='text-sm pl-2 pt-1 text-slate-500'>Average</p>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncomePage