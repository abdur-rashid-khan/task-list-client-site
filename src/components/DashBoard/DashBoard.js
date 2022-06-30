import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import menu from '../../img/menu.png'
// for hero icon 
import { CalendarIcon, CheckCircleIcon, ExclamationCircleIcon, HomeIcon, MenuIcon, ViewGridAddIcon } from '@heroicons/react/solid'
import CustomLink from './Active/CustomLink';

const DashBoard = () => {

	return (
		<>
			<div className="container mx-auto px-2 lg:px-0">
				<div className="drawer drawer-mobile ">
					<input id="open-dashboard-menu" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content  flex flex-col bg-slate-200 py-6" id='total_content'>
						{/* <!-- Page content here --> */}
						<div className="text-left mt-4" style={{ zIndex: '1111111' }}>
							<label htmlFor="open-dashboard-menu" className="w-10 rounded h-10 inline-block cursor-pointer bg-blue-500 hover:bg-blue-800 text-white lg:hidden"><span>
								<MenuIcon/>
							</span> </label>
						</div>
						<div className="text-center ">
							<div id="header" className='py-6'>

							</div>
							<div className="text-left px-3">
								<Outlet></Outlet>
							</div>
						</div>

					</div>
					<div className="drawer-side ">
						<label htmlFor="open-dashboard-menu" className="drawer-overlay "></label>
						<ul className="menu p-4 overflow-y-auto w-80 bg-white border-r-1 shadow-2xl  text-slate-600 font-semibold" id='slideBar'>
							<div className="profile text-center py-8">
								<div className="avatar online ">
									<div className="w-24 rounded-full">
										<img src="https://placeimg.com/192/192/people" />
									</div>
								</div>
								<strong className='block'>Rashid khan</strong>
							</div>
							{/* <!-- Sidebar content here --> */}
							<li className='py-1 text-lg hover:text-black rounded'><CustomLink className='flex gap-4 ' to={'/overview'}><HomeIcon className='text-slate-600 w-6'></HomeIcon> Overview</CustomLink></li>
							<li className='py-1 text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/completed-task'}><CheckCircleIcon className='text-slate-600 w-6' /> Completed Tasks</CustomLink></li>
							<li className='py-1 text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/incomplete-tasks'}><ExclamationCircleIcon className='text-slate-600 w-6' /> Incomplete Tasks</CustomLink></li>
							<li className='py-1 text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/add-tasks'}><ViewGridAddIcon className='text-slate-600 w-6' /> Add Tasks</CustomLink></li>
							<li className='py-1 text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/calender'}><CalendarIcon className='text-slate-600 w-6' /> Calender</CustomLink></li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashBoard;