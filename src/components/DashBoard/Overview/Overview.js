import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const Overview = () => {
  const [task, setTask] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://afternoon-bastion-35335.herokuapp.com/task/${user.email}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setTask(data))
  }, [user])

  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full text-slate-700">
          <thead style={{ backgroundColor: '#fff' }}>
            <tr>
              <th>Id</th>
              <th>task name </th>
              <th>task start date </th>
              <th>task end date</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {
              task.map((t, index) =>
                <tr key={index}>
                  <th>{index+1}</th>
                  <td>{t.taskName}</td>
                  <td>{t.taskStartDate}</td>
                  <td>{t.taskEndDate}</td>
                  {
                    t.status==='incomplete' ?
                    <td className='text-red-500'>{t.status}</td>
                    :
                    <td className='text-blue-400'>{t.status}</td>
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

export default Overview;