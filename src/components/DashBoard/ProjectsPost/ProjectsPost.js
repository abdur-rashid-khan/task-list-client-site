import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const ProjectsPost = () => {
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
          const projectsData = {
            projectsName: data.projectsName,
            projectsLiveLink: data.projectsLiveLink,
            projectsDescription: data.projectsDescription,
            image: img
          }
          // console.log(projectsData);
          fetch('http://localhost:5000/project-add', {
            method: 'POST',
            headers:{
              'content-type': 'application/json',
            },
            body: JSON.stringify(projectsData),
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.acknowledged) {
                Swal.fire(
                  'product add success',
                  '',
                  'success'
                )
              }
              reset()
            })
        }
      })
  }
  return (
    <section>
      <div id="services-content">
        <div className="text-center">
          <h1 className="text-2xl font-serif pt-4" >Add Projects</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            <div>
              <label htmlFor="projectsName" className="text-slate-600">Projects Name</label>
              <input id="projectsName" name="projectsName" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Your Projects Name "
                {...register("projectsName", {
                  required: {
                    value: true,
                    message: "please Typing Here",
                  },
                }
                )}
              />
              <label className="">
                {errors.projectsName?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.projectsName.message}
                  </span>
                )}
              </label>
            </div>
            <div className='mt-4'>
              <label htmlFor="projectsLiveLink" className="text-slate-600">Projects Live Link</label>
              <input id="projectsLiveLink" name="projectsLiveLink" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Your Projects Live Link "
                {...register("projectsLiveLink", {
                  required: {
                    value: true,
                    message: "please Typing Here",
                  },
                }
                )}
              />
              <label className="">
                {errors.projectsLiveLink?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.projectsLiveLink.message}
                  </span>
                )}
              </label>
            </div>
            <div className='py-4'>
              <label htmlFor="projectsDescription" className="text-slate-600">Services Description</label>
              <input id="projectsDescription" name="projectsDescription" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Project Description "

                {...register("projectsDescription", {
                  required: {
                    value: true,
                    message: "please Typing Here",
                  },

                }
                )}
              />
              <label className="">
                {errors.projectsDescription?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.projectsDescription.message}
                  </span>
                )}
              </label>
            </div>
            <div className='pb-4'>
              <label htmlFor="image" className="text-slate-600">Website photos</label>
              <input id="image" name="image" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Services photos "
                {...register("image", {
                  required: {
                    value: true,
                    message: "please Typing Here",
                  },

                }
                )}
              />
              <label className="">
                {errors.image?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <button className='uppercase bg-blue-700 w-full py-2 text-white hover:bg-blue-600 rounded-b'>submit</button>
        </form>
      </div>
    </section>
  );
};

export default ProjectsPost;