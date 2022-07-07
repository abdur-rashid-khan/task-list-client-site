import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom";

const ManageTask = () => {
  const [task, setTask] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    fetch(`https://afternoon-bastion-35335.herokuapp.com/task/${user.email}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setTask(data))
  }, [user])

  const finishBtn = e => {
    const id = e._id;
    console.log(id);
    // send services data to database
    fetch(`https://afternoon-bastion-35335.herokuapp.com/manage-task/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(e)
    })
      .then(res => res.json())
      // .then(data=>console.log(data))
      .then(inserted => {
        if (inserted.acknowledged) {
          Swal.fire(
            'task completed',
            '',
            'success'
          )
        }
      })
  }
  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-slate-700 w-full">
          <thead style={{ backgroundColor: '#fff' }}>
            <tr>
              <th>Id</th>
              <th>task name </th>
              <th>task start date </th>
              <th>task end date</th>
              <th>status</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              task.map((t, index) =>
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{t.taskName}</td>
                  <td>{t.taskStartDate}</td>
                  <td>{t.taskEndDate}</td>
                  {
                    t.status === 'incomplete' ?
                      <td className='p-0'> <button onClick={() => { finishBtn(t) }} className='text-white bg-blue-800 rounded p-2' disabled style={{ cursor: 'pointer' }}>complete now</button></td>
                      :
                      <td className='text-blue-800 font-semibold'>{t.status}</td>
                  }
                  {
                    t.status === 'incomplete' ? <>
                      <td className='p-0'><Link to={`/update/${t._id}`} className='text-blue-600 rounded  text-center' style={{ cursor: 'pointer' }}><PencilAltIcon className='w-7'></PencilAltIcon> </Link></td>
                      <td className='p-0'><button className='text-red-600 rounded text-center' style={{ cursor: 'pointer' }}><TrashIcon className='w-7'></TrashIcon> </button></td>
                    </> : <>
                      <td className='p-0'> <Link to={`/update/${t._id}`} className='text-blue-600 rounded  text-center' style={{ cursor: 'pointer' }}><PencilAltIcon className='w-7'></PencilAltIcon> </Link></td>
                      {/* disable */}
                      <td className='p-0'><button disabled className='text-red-400 rounded text-center' ><TrashIcon className='w-7'></TrashIcon> </button></td>
                    </>
                  }
                </tr>
              )
            }

          </tbody>
        </table>
        {
          task.length === 0 && <p className='text-xl py-4 px-4 text-slate-700 font-serif font-semibold'>No Data Found</p>
        }
      </div>
    </div>
  );
};

export default ManageTask;