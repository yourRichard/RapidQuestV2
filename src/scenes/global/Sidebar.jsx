import React,{useState}from 'react'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import TableViewOutlined  from '@mui/icons-material/TableViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import  SearchOutlined  from '@mui/icons-material/SearchOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const Menus = [
    
    { title: "Home",key:"/", src: <HomeOutlinedIcon/>, gap: true},
    { title: "Income ",key:"/stratedgy",src: <TableViewOutlined/> },
    { title: "Strategy",key:"/income", src: <ListAltOutlinedIcon/>},
    { title: "Account",key:"/user", src:<PersonOutlineOutlinedIcon/> },
    { title: "Notification ",key:"/notification" ,src: <NotificationAddOutlinedIcon/>, gap: true },
    { title: "Logout", src: <LogoutOutlinedIcon/> },
  ];
  return (
    <div className='h-screen hidden lg:block w-auto'>
        <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-700`}
      >
        <KeyboardArrowLeftOutlinedIcon
          className={`absolute cursor-pointer -right-3 top-10 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img src="/logo2.svg" className={`w-10 h-10 cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}/>
          <h1
            className={`text-black origin-left font-bold text-2xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Rapid<span className='text-indigo-500'>Quest</span>
          </h1>
        </div>
        <ul className="pt-6">
          <div className='flex ml-2'>
            <SearchOutlined className='mt-2 hover:text-indigo-400 cursor-pointer'/>
            <input type="text" className={`w-[150px] p-2 rounded-md h-10 ml-4 ${!open && "hidden"} border border-slate-500`} placeholder='Enter your search'/>
          </div>
          {Menus.map((Menu, index) => (
            
            <li
              onClick={({})=>{
                navigate(Menu.key)
              }}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-indigo-600  hover:text-white text-gray-600 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-[100px]" : "mt-2"} ${
                index === 0 && "text-slate-200 bg-indigo-600"
              } `}
            >
              <div>
                {Menu.src }
              </div>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar