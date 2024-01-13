import React from 'react'
import IncomePage from '../../components/IncomePage'
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import { LinearProgress } from '@mui/joy';
import { LineChart } from '@mui/x-charts';

const Income = () => {
  return (
    <div className='w-full h-screen ml-2     '>
        <div className='flex'>
            <div className='w-[65%]'>
                <IncomePage/>
            </div>
            <div className='mt-10 hidden md:block'>
                <div>
                    <h2 className='text-indigo-600 font-bold text-sm'>Income Range</h2>
                    <span className='text-2xl  text-zinc-700'>From 2015 - 2024</span>
                </div>
                <div className='mt-6 shadow-sm'>
                    <div className='bg-indigo-50 w-[300px] h-[150px]'>
                        <div >
                            <h2 className='text-indigo-400 pt-4 ml-4'><BlurCircularIcon/> <span className='text-5xl font-bold text-indigo-600'>710K</span></h2>
                            <p className='text-xs text-slate-400 mt-2 ml-12'>combined interest</p>
                            <LinearProgress
                            determinate
                            value={60}
                            variant="solid"
                            className="w-44 mt-4 ml-12"
                            />
                            <p className='mt-2 ml-12 text-sm text-slate-500'>your transation rate <span className='text-md text-slate-700 font-bold'>2022-2024</span></p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div>
                        <h2 className='mt-4 text-lg text-slate-600'>Income Chart</h2>
                        <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
                        series={[
                            {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                            valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                            },
                            {
                            data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
                            },
                            {
                            data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
                            valueFormatter: (value) => (value == null ? '?' : value.toString()),
                            },
                        ]}
                        height={300}
                        width={350}
                        margin={{ top: 10, bottom: 20 }}
                        
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Income