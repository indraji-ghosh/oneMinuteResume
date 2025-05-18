import React, { useContext, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import Formcontext from '../context/Formcontext'



function ExperienceDetails() {
 const {formData, updateFormData} = useContext(Formcontext)
    const {register, handleSubmit,reset, formState:{errors}} = useForm({
        defaultValues:{
            ExperienceDetails:{
                company: '',
                jobTitle: '',
                location: '',
                startDate: '',
                endDate: '',
                responsibilities: '',
            }
        }})


        const save = (data) => updateFormData('experience', data.ExperienceDetails)

        useEffect(()=>{
            console.log(formData)
            if(formData?.experience){
                reset({
                    ExperienceDetails: {
                      ...formData.experience
                    }
                  })
            }
        },[formData])

      

  return (
    <div className='w-full'>
        <form onSubmit={handleSubmit(save)}>
            <div className='flex flex-col w-full items-center'>
                <div className='w-1/3'>
                <div>
                <input {...register('ExperienceDetails.company', {required:'*Institution name is required'})}
                 className='w-full h-13  bg-gray-100 border-radius rounded-md p-4  focus:outline-none my-2'
                 placeholder="Company name"
                />
                {errors.ExperienceDetails?.company &&  <p className='text-sm text-red-400'>{errors.ExperienceDetails.company.message}</p> }
              
                </div>
                <div>
                <input {...register('ExperienceDetails.jobTitle', {
            required: '*jobTitle is required',
          })}
                className='w-full h-13  bg-gray-100 border-radius rounded-md p-4  focus:outline-none my-2'
                placeholder="JobTitle" />
                {errors.ExperienceDetails?.jobTitle &&  <p className='text-sm text-red-400'>{errors.ExperienceDetails.jobTitle.message}</p> }
                </div>
            <div>
            <input {...register('ExperienceDetails.location', {
            required: '*location is required'})}
             className='w-full h-13  bg-gray-100 border-radius rounded-md p-4  focus:outline-none my-2'
             placeholder="location"
            />
            {errors.ExperienceDetails?.location &&  <p className='text-sm text-red-400'>{errors.ExperienceDetails.location.message}</p> }
            </div >
          
                <div  className='relative'>
                <span className="form-label absolute top-5 right-20 text-gray-500">Start Date</span>
                <input {...register('ExperienceDetails.startDate', {required:'*Start Date is required'})}
                 type="month"
                 className='w-full h-13  bg-gray-100 border-radius rounded-md p-4  focus:outline-none my-2'
                />
               
                {errors.ExperienceDetails?.startDate &&  <p className='text-sm text-red-400'>{errors.ExperienceDetails.startDate.message}</p> }
                </div>
                <div  className='relative '>
                <span className="form-label absolute top-5 right-20 text-gray-500">End Date</span>
            <input {...register('ExperienceDetails.endDate',)}
             type="month"
             placeholder='start-date'
             className='w-full h-13  bg-gray-100 border-radius rounded-md p-4  focus:outline-none my-2'
            />
            {errors.ExperienceDetails?.endDate &&  <p className='text-sm text-red-400'>{errors.ExperienceDetails.endDate.message}</p> }
            </div>
         

            <div>
                <textarea 
            {...register('ExperienceDetails.responsibilities', {
                required: '*learnings is required'})}
            rows="4" className="block  w-full bg-gray-100  rounded-md p-4 focus:outline-none " placeholder="Responsibilities"></textarea>
             {errors.ExperienceDetails?.responsibilities &&  <p className='text-sm text-red-400'>{errors.ExperienceDetails.responsibilities.message}</p> }
            </div >
               
                <input type="submit" value="save"
                className='my-5 px-4 py-2 text-white rounded-lg bg-[#00a6fb]'
                />
                </div>
            </div>
        </form>
    </div>
  )
}

export default ExperienceDetails