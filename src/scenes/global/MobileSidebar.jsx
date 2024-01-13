import React from 'react'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import TableViewOutlined  from '@mui/icons-material/TableViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import  SearchOutlined  from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';

const MobileSidebar = () => {
  const navigate = useNavigate()
  const Menu = [
    { key:"/" },
    { key:"/stratedgy" },
    { key:"/income" },
    { key:"/user" },
  ];
  return (
    <div className='fixed flex lg:hidden w-full bottom-0 '>
        <div className='bg-white border-t border-t-slate-200 w-full h-[50px] flex items-center gap-20'>
            <div className='flex gap-16 mx-auto transition-colors duration-700 '>
            <div>
            <SearchOutlined className='hover:bg-indigo-600 cursor-pointer rounded-sm  hover:text-white text-gray-600' />
            </div>
            <div onClick={({})=>{navigate("/")}}>
            <HomeOutlinedIcon className='hover:bg-indigo-600 cursor-pointer rounded-sm  hover:text-white text-gray-600 w-14 h-14' />
            </div>
            <div onClick={({})=>{navigate("/stratedgy")}}>
            <TableViewOutlined className='hover:bg-indigo-600 cursor-pointer rounded-sm  hover:text-white text-gray-600 w-14 h-14' />
            </div>
            <div onClick={({})=>{navigate("/income")}}>
            <ListAltOutlinedIcon className='hover:bg-indigo-600 cursor-pointer rounded-sm  hover:text-white text-gray-600 w-14 h-14' />
            </div>
            <div onClick={({})=>{navigate("/user")}}>
            <PersonOutlineOutlinedIcon className='hover:bg-indigo-600 cursor-pointer rounded-sm  hover:text-white text-gray-600 w-14 h-14' />
            </div>
            </div>

        </div>
    </div>
  )
}

export default MobileSidebar