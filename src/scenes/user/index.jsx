import React from 'react'
import UserAccount from '../../components/UserAccount'
import User_Profile from '/gigachadd.jpeg'
import { LinearProgress } from '@mui/joy'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { LineChart } from '@mui/x-charts/LineChart';



const User = () => {
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
    <div className='w-full h-screen '>
      <div className='w-full flex'>
      <UserAccount/>
      <div className='hidden lg:block bg-indigo-50'>
        <div className='mt-[37px] ml-12'>
        <h1 className='text-3xl font-bold text-slate-800'>Profile</h1>
        <span className='text-sm text-slate-400'>Customize your profile</span>
        </div>
        <div className='w-full'>
        <div className='w-full flex mt-4 '>
        <div className='bg-[#fafafa] w-[40%] ml-12 h-[180px] shadow-md rounded-md'>
                <div className='flex mt-6 pt-1 ml-8'>
                    <img src={User_Profile} className='w-14 h-14  rounded-full shadow-2xl'/>
                    <div className='mt-3 ml-2'>
                    <h1 className='text-lg text-slate-800 leading-4'>Richard Min</h1>
                    <span className='text-sm text-slate-500'>The hardworking lad</span>
                    <p className='text-xs mt-4 pr-3 text-slate-400'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugit nihil a?</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#fafafa] w-[40%] ml-6 h-[180px] shadow-md rounded-md '>
            <div className='mt-8 ml-6'>
                    <h1 className='text-5xl font-bold text-zinc-700'>376K <span className='text-slate-600'><AutoGraphIcon/></span></h1>
                    <span className='text-sm text-slate-400'>Monthy saved for 2024</span>
                    <LinearProgress
                    determinate
                    value={60}
                    variant="solid"
                    className="w-36 mt-2"
                    />
                    <p className='mt-4 text-sm text-slate-500'>your transation rate <span className='text-md text-slate-700 font-bold'>2022-2024</span></p>
                </div>
            </div>
        </div>
        <div className='ml-12 mt-2'>
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

export default User