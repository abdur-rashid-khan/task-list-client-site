import React, { useEffect, useState } from 'react';

const Completed = () => {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/completed-task', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setCompleted(data))
  }, [])
  return (
    <div>
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
        </div>
      </div>
    </div>
  );
};

export default Completed;