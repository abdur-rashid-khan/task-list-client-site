import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const Completed = () => {
  const [completed, setCompleted] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    fetch(`https://afternoon-bastion-35335.herokuapp.com/completed-task/${user.email}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setCompleted(data))
  }, [user])
  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
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
              </tr>
            </thead>
            <tbody>
              {
                completed.map((t, index) =>
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{t.taskName}</td>
                    <td>{t.taskStartDate}</td>
                    <td>{t.taskEndDate}</td>
                    <td className='text-blue-500 '>{t.status}</td>
                  </tr>
                )
              }

            </tbody>
          </table>
          {
            completed.length === 0 && <p className='text-xl py-4 px-4 text-slate-700 font-serif font-semibold'>No Data Found</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Completed;