import { CircularProgress, LinearProgress, Slider } from '@mui/joy'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';



const ProgressBarPage = () => {
  const data = [
    {
      id: 'data-0',
      x1: 329.39,
      x2: 391.29,
      y1: 443.28,
      y2: 153.9,
    },
    {
      id: 'data-1',
      x1: 96.94,
      x2: 139.6,
      y1: 110.5,
      y2: 217.8,
    },
    {
      id: 'data-2',
      x1: 336.35,
      x2: 282.34,
      y1: 175.23,
      y2: 286.32,
    },
    {
      id: 'data-3',
      x1: 159.44,
      x2: 384.85,
      y1: 195.97,
      y2: 325.12,
    },
    {
      id: 'data-4',
      x1: 188.86,
      x2: 182.27,
      y1: 351.77,
      y2: 144.58,
    },
    {
      id: 'data-5',
      x1: 143.86,
      x2: 360.22,
      y1: 43.253,
      y2: 146.51,
    },
    {
      id: 'data-6',
      x1: 202.02,
      x2: 209.5,
      y1: 376.34,
      y2: 309.69,
    },
    {
      id: 'data-7',
      x1: 384.41,
      x2: 258.93,
      y1: 31.514,
      y2: 236.38,
    },
    {
      id: 'data-8',
      x1: 256.76,
      x2: 70.571,
      y1: 231.31,
      y2: 440.72,
    },
    {
      id: 'data-9',
      x1: 143.79,
      x2: 419.02,
      y1: 108.04,
      y2: 20.29,
    },
    {
      id: 'data-10',
      x1: 103.48,
      x2: 15.886,
      y1: 321.77,
      y2: 484.17,
    },
    {
      id: 'data-11',
      x1: 272.39,
      x2: 189.03,
      y1: 120.18,
      y2: 54.962,
    },
    {
      id: 'data-12',
      x1: 23.57,
      x2: 456.4,
      y1: 366.2,
      y2: 418.5,
    },
    {
      id: 'data-13',
      x1: 219.73,
      x2: 235.96,
      y1: 451.45,
      y2: 181.32,
    },
    {
      id: 'data-14',
      x1: 54.99,
      x2: 434.5,
      y1: 294.8,
      y2: 440.9,
    },
    {
      id: 'data-15',
      x1: 134.13,
      x2: 383.8,
      y1: 121.83,
      y2: 273.52,
    },
    {
      id: 'data-16',
      x1: 12.7,
      x2: 270.8,
      y1: 287.7,
      y2: 346.7,
    },
    {
      id: 'data-17',
      x1: 176.51,
      x2: 119.17,
      y1: 134.06,
      y2: 74.528,
    },
    {
      id: 'data-18',
      x1: 65.05,
      x2: 78.93,
      y1: 104.5,
      y2: 150.9,
    },
    {
      id: 'data-19',
      x1: 162.25,
      x2: 63.707,
      y1: 413.07,
      y2: 26.483,
    },
    {
      id: 'data-20',
      x1: 68.88,
      x2: 150.8,
      y1: 74.68,
      y2: 333.2,
    },
    {
      id: 'data-21',
      x1: 95.29,
      x2: 329.1,
      y1: 360.6,
      y2: 422.0,
    },
    {
      id: 'data-22',
      x1: 390.62,
      x2: 10.01,
      y1: 330.72,
      y2: 488.06,
    },
  ];
   const navigate = useNavigate()
  return (
    <div className='w-full h-screen flex'>
      <div className='md:w-[30%] w-full md:ml-12 ml-16 mt-4'>
      <div>
          <h2 className='text-2xl  font-bold text-zinc-700'>How do I compare to my peers?</h2>
          <div className='absolute right-4 md:hidden top-4 cursor-pointer hover:text-indigo-400' onClick={({})=>{navigate("/")}}>
            <CloseIcon/>
          </div>
          <span className='text-xs text-slate-500'>These numbers represent current goal achievement</span>
        </div>
        <div className='  mt-3'>
          <div >
            <h4 className='border-b pb-2 border-b-slate-200 font-bold text-zinc-700'>Age: <span className='text-sm text-zinc-500 font-normal'>Under 30 <ArrowDropDownIcon/></span></h4>
            <h4 className='border-b py-2 border-b-slate-200 font-bold text-zinc-700'>Salary: <span className='text-sm text-zinc-500 font-normal'>K20 - K30<ArrowDropDownIcon/></span></h4>
            <h4 className=' pt-2  font-bold text-zinc-700'>Gender: <span className='text-sm text-zinc-500 font-normal'>Male <ArrowDropDownIcon /></span></h4>
          </div>
          <div className='flex mr-14 gap-8 mt-2'>
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
          <div className=' border-b border-b-slate-200 pb-1'>
        <h2 className='text-md text-zinc-700 font-bold mt-6'>Retirement Strategy</h2>
        <div className='mt-2 '>
          <h2 className='text-sm font-bold text-zinc-600'>Employee Contribution</h2>
          <div className='flex w-40'>
          <Slider defaultValue={40}/>
          <h3 className='ml-4 mt-2 font-bold text-zinc-600'>12%</h3>
          </div>
        </div>
        <div className='mt-2'>
          <h2 className='text-sm font-bold text-zinc-600'>Retirement Age</h2>
          <div className='w-40 flex '>
          <Slider defaultValue={65}/>
          <h3 className='ml-4 mt-2 font-bold text-zinc-600'>65.</h3>
          </div>
        </div>
      </div>
      <div className='mt-4'>
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
        
      </div>
        </div>
      </div>
      <div className='fixed bottom-0 hover:bg-indigo-700 cursor-pointer bg-indigo-600 w-full h-[50px] lg:hidden block'>
        <h1 className='text-center text-2xl font-bold text-white mt-1'>Update</h1>
      </div>
      <div className='w-[40%] ml-10  md:block hidden'>
        <div>
          <div className='mt-6 ml-4 '>
            <h3 className='text-2xl text-slate-700'>Tranferation Rate  </h3>
            <span className='text-sm text-slate-400'>RapidQuest is the best to choose</span>
          </div>
          <div className='mt-6'>
          <ScatterChart
      width={600}
      height={350}
      series={[
        {
          label: 'Transfer Rate',
          data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
        },
        {
          label: 'Income',
          data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
        },
      ]}
    />
          </div>
          <div className='flex'>
          <div className='bg-indigo-50 w-[60%] h-[150px] shadow-md'>
                <div className='mt-4 ml-6'>
                    <h1 className='text-5xl font-bold text-zinc-700'>302TS <span className='text-slate-600'><AutoGraphIcon/></span></h1>
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
            <div className='ml-16 w-[30%]'>
              <h2 className='text-slate-700 text-lg'>Income of 2025</h2>
              <span className='text-xs text-slate-400'>Lorem ipsum dolor sit amet onsectetur adipisicing elit. Deleniti veritatis sint omnis pariatu.</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ProgressBarPage