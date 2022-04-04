import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import logo from '../../../client/images/logo.png'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MailIcon from '@mui/icons-material/Mail';
import AssessmentIcon from '@mui/icons-material/Assessment';

function SideBarNav() {
    return (
        <div className='flex flex-col h-screen gap-2 px-3 w-fit bg-zinc-900'>
            <div className='flex items-center mt-10 mb-5'>
                <img className='w-10 h-10 mr-2 rounded-lg bg-slate-200' src={logo}></img>
                <div className='flex flex-col'><h1 className='text-lg font-bold text-slate-100'>Juan Dela Cruz</h1>
                <h1 className='text-sm text-slate-100'>Admin</h1></div>
            </div>
            <hr
            style={{
                color: 'white',
                backgroundColor: 'white',
                marginBottom: '10px',
                opacity: '20%',
            }}
            ></hr>
            <div className='flex w-64 gap-2 px-2 py-2 rounded-lg bg-slate-100/10'><DashboardIcon style={{ color: "#BFAA7E" }}></DashboardIcon><a className='font-semibold font-system-ui text-slate-100'>Dashboard</a></div>
            <div className='flex gap-2 px-2 py-2 rounded-lg hover:bg-slate-200/5'><MenuBookIcon style={{ color: "#9CA3AF" }}></MenuBookIcon><a className='font-semibold font-system-ui text-slate-100'>Booking</a></div>
            <div className='flex gap-2 px-2 py-2 rounded-lg hover:bg-slate-200/5'><AccountBalanceWalletIcon style={{ color: "#9CA3AF" }}></AccountBalanceWalletIcon><a className='font-semibold font-system-ui text-slate-100'>Payment</a></div>
            <div className='flex gap-2 px-2 py-2 rounded-lg hover:bg-slate-200/5'><PeopleIcon style={{ color: "#9CA3AF" }}></PeopleIcon><a className='font-semibold font-system-ui text-slate-100'>Guest</a></div>
            <div className='flex gap-2 px-2 py-2 rounded-lg hover:bg-slate-200/5'><AccountBoxIcon style={{ color: "#9CA3AF" }}></AccountBoxIcon><a className='font-semibold font-system-ui text-slate-100'>User List</a></div>
            <div className='flex gap-2 px-2 py-2 rounded-lg hover:bg-slate-200/5'><BookIcon style={{ color: "#9CA3AF" }}></BookIcon><a className='font-semibold font-system-ui text-slate-100'>User Logs</a></div>
            <div className='flex gap-2 px-2 py-2 rounded-lg hover:bg-slate-200/5'><ContentPasteIcon style={{ color: "#9CA3AF" }}></ContentPasteIcon><a className='font-semibold font-system-ui text-slate-100'>Status</a></div>
            <div className='flex gap-2 px-2 py-2 rounded-lg hover:bg-slate-200/5'><SensorDoorIcon style={{ color: "#9CA3AF" }}></SensorDoorIcon><a className='font-semibold font-system-ui text-slate-100'>Room Status</a></div>
            <div className='flex gap-2 px-2 py-2 rounded-lg hover:bg-slate-200/5'><MeetingRoomIcon style={{ color: "#9CA3AF" }}></MeetingRoomIcon><a className='font-semibold font-system-ui text-slate-100'>Room Details</a></div>
            <div className='flex gap-2 px-2 py-2 rounded-lg hover:bg-slate-200/5'><MailIcon style={{ color: "#9CA3AF" }}></MailIcon><a className='font-semibold font-system-ui text-slate-100'>Messages</a></div>
            <div className='flex gap-2 px-2 py-2 rounded-lg hover:bg-slate-200/5'><AssessmentIcon style={{ color: "#9CA3AF" }}></AssessmentIcon><a className='font-semibold font-system-ui text-slate-100'>Reports</a></div>
        </div>
    )
}

export default SideBarNav