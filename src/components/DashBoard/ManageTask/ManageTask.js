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
    console.log(e)
    // send services data to database
    fetch(`https://afternoon-bastion-35335.herokuapp.com/manage-task/${e}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(e)
    })
      .then(res => res.json())
      .then(inserted => {
        if (inserted.acknowledged) {
          Swal.fire(
            'task complete',
            '',
            'success'
          )
        }
      })
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-white w-full">
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
                      <td onClick={() => { finishBtn(t._id) }} className='text-white bg-slate-600' style={{ cursor: 'pointer' }}>Let's finish</td>
                      :
                      <td className='text-blue-400'>{t.status}</td>
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