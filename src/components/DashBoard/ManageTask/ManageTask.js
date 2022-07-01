import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageTask = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch('https://afternoon-bastion-35335.herokuapp.com/task', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setTask(data))
  }, [])

  const finishBtn = e => {
    const id = e._id;
    console.log(id);
    // send services data to database
    fetch(`http://localhost:5000/manage-task/${id}`, {
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
                      <td className='p-0'> <button onClick={() => { finishBtn(t) }} className='text-white bg-blue-800 rounded p-2' style={{ cursor: 'pointer' }}>complete now</button></td>
                      :
                      <td className='text-blue-800 font-semibold'>{t.status}</td>
                  }
                </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTask;