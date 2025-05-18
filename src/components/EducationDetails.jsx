import React, { useContext, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import Formcontext from '../context/Formcontext'



function EducationDetails() {
 const {formData, updateFormData} = useContext(Formcontext)
    const {register, handleSubmit,reset, formState:{errors}} = useForm({
        defaultValues:{
            EducationDetails:{
                institution: '',
                degree: '',
                learnings: '',
                startDate: '',
                endDate: '',
                grade:'',
            }
        }})


        const save = (data) => updateFormData('education', data.EducationDetails)

        useEffect(()=>{
            console.log(formData)
            if(formData?.education){
                reset({
                  EducationDetails: {
                      ...formData.education
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
                <input {...register('EducationDetails.institution', {required:'*Institution name is required'})}
                 className='w-full h-13  bg-gray-100 border-radius rounded-md p-4  focus:outline-none my-2'
                 placeholder="Institution name"
                />
                {errors.EducationDetails?.institution &&  <p className='text-sm text-red-400'>{errors.EducationDetails.institution.message}</p> }
              
                </div>
                <div>
                <input {...register('EducationDetails.degree', {
            required: '*Degree is required',
          })}
                className='w-full h-13  bg-gray-100 border-radius rounded-md p-4  focus:outline-none my-2'
                placeholder="Degree" />
                {errors.EducationDetails?.degree &&  <p className='text-sm text-red-400'>{errors.EducationDetails.degree.message}</p> }
                </div>
                <div>
                <textarea 
            {...register('EducationDetails.learnings', {
                required: '*learnings is required'})}
            rows="4" className="block  w-full bg-gray-100  rounded-md p-4 focus:outline-none " placeholder="Learnings"></textarea>
             {errors.EducationDetails?.learnings &&  <p className='text-sm text-red-400'>{errors.EducationDetails.learnings.message}</p> }
            </div >
          
                <div  className='relative'>
                <input {...register('EducationDetails.startDate', {required:'*Start Date is required'})}
                 type="number" min="2000" max="2100" placeholder='start year'
                 className='w-full h-13  bg-gray-100 border-radius rounded-md p-4  focus:outline-none my-2'
                />
               
                {errors.EducationDetails?.startDate &&  <p className='text-sm text-red-400'>{errors.EducationDetails.startDate.message}</p> }
                </div>
                <div  className='relative '>
            <input {...register('EducationDetails.endDate',{required:'*end Date is required'})}
             type="number" min="2000" max="2100" placeholder='end year'
             className='w-full h-13  bg-gray-100 border-radius rounded-md p-4  focus:outline-none my-2'
            />
            {errors.EducationDetails?.endDate &&  <p className='text-sm text-red-400'>{errors.EducationDetails.endDate.message}</p> }
            </div>
         

            <div>
            <input {...register('EducationDetails.grade')}
             className='w-full h-13  bg-gray-100 border-radius rounded-md p-4  focus:outline-none my-2'
             placeholder="CGPA"
            />
            {errors.EducationDetails?.grade &&  <p className='text-sm text-red-400'>{errors.EducationDetails.grade.message}</p> }
            </div>
               
                <input type="submit" value="save"
                className='my-5 px-4 py-2 text-white rounded-lg bg-[#00a6fb]'
                />
                </div>
            </div>
        </form>
    </div>
  )
}

export default EducationDetails