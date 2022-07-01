import React, { useEffect, useState } from 'react';

const Overview = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch('https://afternoon-bastion-35335.herokuapp.com/task', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setTask(data))
  }, [])
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
      </div>
    </div>
  );
};

export default Overview;