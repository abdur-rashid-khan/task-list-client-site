import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import './Upload.css'

const AddTask = () => {
  const [agree, setAgree] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const imgbbAPIKey = 'ef8e2adcf82ba9b088feff829df4d6bf';
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const task = {
            taskName: data.taskName,
            taskStartDate: data.taskStartDate,
            taskEndDate: data.taskEndDate,
            budget: data.budget,
            taskDescription: data.taskDescription,
            status: 'incomplete',
            email: user.email,
            img: img
          }
          // send services data to database
          fetch('https://afternoon-bastion-35335.herokuapp.com/task', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(task)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.acknowledged) {
                Swal.fire(
                  'task add success',
                  '',
                  'success'
                )
                reset();
              }
            })
          // console.log(services);
        }
      })
  }

  // agree
  const agreeBtn = e => {
    const agreeValue = e.target.checked;
    setAgree(agreeValue)
  }
  // for user 

  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    console.log(error);
  }
  return (
    <section>
      <div id="services-content" className='rounded'>
        <div className="text-center">
          <h1 className="text-2xl font-serif pt-4 font-semibold py-6 text-slate-700" >Create New Task</h1>
        </div>
        <div className="block sm:flex items-center justify-between pb-8 pl-4">
          <div className="flex  items-center">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              onChange={agreeBtn}
            />
            <label
              htmlFor="agree"
              className="ml-2 block text-sm text-gray-500 capitalize font-semibold "
            >
              are you sure create new task
            </label>
          </div>
        </div>

        {
          agree &&
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4">
              <div>
                <div className='block sm:flex items-center'>
                  <label htmlFor="taskName" className="text-slate-500 font-semibold w-1/5 ">Task Name</label>
                  <input id="taskName" name="taskName" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Services Header "
                    {...register("taskName", {
                      required: {
                        value: true,
                        message: "type here task name",
                      },
                    }
                    )}
                  />
                </div>
                <label className="text-left sm:text-right block">
                  {errors.taskName?.type === "required" && (
                    <span className="text-red-500 text-sm capitalize">
                      {errors.taskName.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="block sm:flex gap-3 py-4">
                <div className='w-full pb-4 sm:pb-0'>
                  <div className='block sm:flex items-center'>
                    <label htmlFor="taskStartDate" className="text-slate-500 font-semibold w-1/2 ">Task Start Date</label>
                    <input id="taskStartDate" name="taskStartDate" type="date" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      {...register("taskStartDate", {
                        required: {
                          value: true,
                          message: "select task start date",
                        },
                      }
                      )}
                    />
                  </div>
                  <label className="text-left sm:text-right block">
                    {errors.taskStartDate?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.taskStartDate.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className='w-full'>
                  <div className='block sm:flex items-center '>
                    <label htmlFor="taskEndDate" className="text-slate-500 font-semibold w-1/2 ">Task End Date</label>
                    <input id="taskEndDate" name="taskEndDate" type="date" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      {...register("taskEndDate", {
                        required: {
                          value: true,
                          message: "select task End date",
                        },
                      }
                      )}
                    />
                  </div>
                  <label className="text-left sm:text-right block">
                    {errors.taskEndDate?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.taskEndDate.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div >
                <div className='block sm:flex items-center'>
                  <label htmlFor="budget" className="text-slate-500 font-semibold w-1/5 ">Budget</label>
                  <input id="budget" name="budget" type="number" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="How Much Your Budget "
                    {...register("budget", {
                      required: {
                        value: true,
                        message: "how much your budget",
                      },
                    }
                    )}
                  />
                </div>
                <label className="text-left sm:text-right block">
                  {errors.budget?.type === "required" && (
                    <span className="text-red-500 text-sm capitalize">
                      {errors.budget.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='py-8'>
                <div className=' block sm:flex '>
                  <label htmlFor="taskDescription" className="text-slate-500 w-1/5 font-semibold">Task Description</label>
                  <textarea id="taskDescription" name="taskDescription" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Services Description "
                    cols="5"
                    rows="5"
                    {...register("taskDescription", {
                      required: {
                        value: true,
                        message: "type here task description",
                      },

                    }
                    )}
                  />
                </div>
                <label className="text-left sm:text-right block">
                  {errors.taskDescription?.type === "required" && (
                    <span className="text-red-500 text-sm  capitalize">
                      {errors.taskDescription.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='pb-4'>
                <div className=' block sm:flex items-center'>
                  <label htmlFor="image" className="text-slate-500 w-1/5 font-semibold">Select photos</label>
                  <input id="image" name="image" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="select photo"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "select photos",
                      },

                    }
                    )}
                  />
                </div>
                <label className="text-left sm:text-right block">
                  {errors.image?.type === "required" && (
                    <span className="text-red-500 text-sm  capitalize">
                      {errors.image.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <button className='uppercase bg-blue-700 w-full py-2 text-white hover:bg-blue-600 rounded-b'>create task</button>
          </form>
        }
      </div>
    </section>
  );
};

export default AddTask;