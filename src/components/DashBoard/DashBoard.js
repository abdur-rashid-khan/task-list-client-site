import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import menu from '../../img/menu.png'
// for hero icon 
// import { BeakerIcon, ChevronRightIcon } from '@heroicons/react/solid'

const DashBoard = () => {

	return (
		<>
			<div className="container mx-auto px-2 lg:px-0">
				<div className="drawer drawer-mobile ">
					<input id="open-dashboard-menu" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content  flex flex-col bg-slate-200">
						{/* <!-- Page content here --> */}
						<div className="text-left mt-4" style={{zIndex:'1111111'}}>
							<label htmlFor="open-dashboard-menu" className="w-10 rounded h-10 inline-block cursor-pointer bg-blue-500 hover:bg-blue-800 text-white lg:hidden"><span>
								<img className='w-full z-20' src={menu} alt="" />
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
						<ul className="menu p-4 overflow-y-auto w-80 bg-blue-600 border-r-1 shadow-lg  text-white">
							{/* <!-- Sidebar content here --> */}
							<li className='py-1 text-lg hover:text-black rounded'><Link className='py-2 capitalize' to={'/upload/to-do'}>ToDo</Link></li>
							<li className='py-1 text-lg hover:text-black rounded'><Link className='py-2 ' to={'/admin-rk/manage-projects'}>Manage Projects</Link></li>
							<li className='py-1 text-lg hover:text-black rounded'><Link className='py-2 capitalize' to={'/admin-rk/project-add'}>Add Project</Link></li>
							<li className='py-1 text-lg hover:text-black rounded'><Link className='py-2 ' to={'/admin-rk/add-skill'}>Add Skill</Link></li>
							<li className='py-1 text-lg hover:text-black rounded'><Link className='py-2 ' to={'/admin-rk/manage-skills'}>Manage Skills</Link></li>
							<li className='py-1 text-lg hover:text-black rounded'><Link className='py-2 ' to={'/admin-rk/add-review'}>Add Review</Link></li>
							<li className='py-1 text-lg hover:text-black rounded'><Link className='py-2 ' to={'/admin-rk/manage-review'}>Manage Review</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashBoard;