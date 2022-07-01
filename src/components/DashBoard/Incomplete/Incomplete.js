import React, { useEffect, useState } from 'react';

const Incomplete = () => {
  const [incomplete, setIncomplete] = useState([]);

  useEffect(() => {
    fetch('https://afternoon-bastion-35335.herokuapp.com/incomplete-task', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setIncomplete(data))
  }, [])
  console.log(incomplete);
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
              incomplete.map((t, index) =>
                <tr key={index}>
                  <th>{index+1}</th>
                  <td>{t.taskName}</td>
                  <td>{t.taskStartDate}</td>
                  <td>{t.taskEndDate}</td>
                  <td className='text-red-500'>{t.status}</td>
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

export default Incomplete;