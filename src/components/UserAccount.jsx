import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Profile from '/profile.png'
import User_Profile from '/gigachadd.jpeg'
import { LineChart } from '@mui/x-charts/LineChart';
import { LinearProgress } from '@mui/joy';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';


const UserAccount = () => {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023',
      '2024',
    ];
  return (
    <div className='lg:ml-8 ml-0 bg-[#fafafa] w-full md:w-full lg:w-[45%] h-full '>
    <div className='lg:block flex '>
    <div className='md:mx-6 md:ml-0 ml-8'>
    <div className='flex md:mt-6 mt-8 md:ml-0 ml-12'>
            <img src={Profile} className='md:w-16 md:h-16 w-20 h-20  rounded-full ml-4 shadow-xl'/>
            <div className='md:mt-3 mt-6 ml-4'>
            <h2 className='leading-6 font-bold md:text-xl text-3xl text-zinc-600 '>Hi Richard,</h2>
            <span className='md:text-xs text-md'>Welcome back.</span>
            </div>
            <div className='absolute right-4 md:hidden top-4 cursor-pointer hover:text-indigo-400' onClick={({})=>{navigate("/")}}>
            <NotificationAddOutlinedIcon/>
          </div>
        </div>
        <div className='md:mt-8 md:ml-4 ml-16 mt-10'>
            <h4 className='font-bold text-slate-700 mb-4'>Today</h4>
            <div>
                <h2 className='md:text-2xl text-5xl font-extrabold md:leading-8 leading-16 text-slate-800'>$19,892</h2>
                <span className='md:text-xs text-md text-zinc-400'>Account balance</span>
            </div>
            <div className='md:block flex md:gap-0 gap-16'>
            <div className='mt-6 '>
                <h2 className='md:text-md text-2xl font-extrabold leading-6 text-slate-800'>$4,000</h2>
                <span className='text-xs text-zinc-400'>Year-to-Date Contributions</span>
            </div>
            <div className='mt-6'>
                <h2 className='md:text-md text-2xl font-extrabold leading-6 text-slate-800'>$1,892</h2>
                <span className='text-xs text-zinc-400'>Total Interest</span>
            </div>
            </div>
        </div>
        <div className='md:mt-4 md:ml-4 ml-16 mt-8 '>
            <button className='md:w-24 md:h-10 h-12 w-52  bg-indigo-600 font-bold text-white text-xs  rounded-md hover:bg-indigo-700'>
                I want to <ArrowDropDownIcon className='ml-[-5px]'/>
            </button>
        </div>
        <div>
            <div className='md:ml-2 md:mt-2 ml-[70px] mt-10'>
                <h2 className='font-bold text-slate-700 mb-4 border-t pt-6 border-t-slate-300'>Recent Transactions</h2>
                <div className='mb-4'>
                    <span className='text-xs text-slate-400'>
                        2024-1-11
                    </span>
                    <h4 className='text-sm font-bold text-slate-600'>Withdrawal Transfer to Bank-XX</h4>
                </div>
                <div className='mb-4 md:inline hidden'>
                    <span className='text-xs text-slate-400'>
                        2024-1-11
                    </span>
                    <h4 className='text-sm font-bold text-slate-600'>Withdrawal Transfer to Bank-XX</h4>
                </div>
               
            </div>
        </div>
    </div>
    <div className='bg-indigo-50 h-screen md:w-[73%] md:block lg:hidden hidden pl-6'>
        <div className='mt-8'>
            <h2 className='text-3xl text-zinc-800 font-bold'>Profile</h2>
        </div>
        <div className='flex gap-6 mt-4'>
            <div className='bg-[#fafafa] w-[50%] h-[150px] shadow-md'>
                <div className='flex mt-4 ml-4'>
                    <img src={User_Profile} className='w-14 h-14  rounded-full shadow-2xl'/>
                    <div className='mt-3 ml-2'>
                    <h1 className='text-lg text-slate-800 leading-4'>Richard Min</h1>
                    <span className='text-sm text-slate-500'>The hardworking lad</span>
                    <p className='text-xs mt-4 text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae laboriosam, sit animi e?</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#fafafa] w-[40%] shadow-md'>
                <div className='mt-4 ml-6'>
                    <h1 className='text-5xl font-bold text-zinc-700'>376K <span className='text-slate-600'><AutoGraphIcon/></span></h1>
                    <span className='text-sm text-slate-400'>Monthy saved for 2024</span>
                    <LinearProgress
                    determinate
                    value={60}
                    variant="solid"
                    className="w-36 mt-1"
                    />
                    <p className='mt-4 text-sm text-slate-500'>your transation rate <span className='text-md text-slate-700 font-bold'>2022-2024</span></p>
                </div>
            </div>
        </div>
        <div className='mt-6'>
            <div>
                <h2 className='text-lg text-slate-700'>Transaction Chart</h2>
                <span className='text-slate-600 text-xs'><span className='text-sm text-indigo-500 font-bold'>RapidQuest</span> the best</span>
                <div>
                <LineChart
                width={580}
                height={300}
                series={[
                    { data: pData, label: 'Transaction' },
                    { data: uData, label: 'Income' },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                />
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default UserAccount