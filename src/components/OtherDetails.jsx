import React, { useContext, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import Formcontext from '../context/Formcontext'



function OtherDetails() {
 const {formData, updateFormData} = useContext(Formcontext)
    const {register, handleSubmit,reset, formState:{errors}} = useForm({
        defaultValues:{
            OtherDetails:{
                language: '',
                hobbies: '',
                skills: '',
                certification: '',
                objective: '',
            }
        }})


        const save = (data) => updateFormData('others', data.OtherDetails)

        useEffect(()=>{
            console.log(formData)
            if(formData?.others){
                reset({
                    OtherDetails: {
                      ...formData.others
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
                <input {...register('OtherDetails.language', {required:'*language is required'})}
                 className='w-full h-13  bg-gray-100 border-radius rounded-md p-4  focus:outline-none my-2'
                 placeholder="Language"
                />
                {errors.ExperienceDetails?.language &&  <p className='text-sm text-red-400'>{errors.ExperienceDetails.language.message}</p> }
              
                </div>
                <div>
                <input {...register('OtherDetails.hobbies',)}
                className='w-full h-13  bg-gray-100 border-radius rounded-md p-4  focus:outline-none my-2'
                placeholder="Hobbies" />
                {errors.OtherDetails?.hobbies &&  <p className='text-sm text-red-400'>{errors.OtherDetails.hobbies.message}</p> }
                </div>
            <div>
            
            <textarea 
            {...register('OtherDetails.skills', {
                required: '*skills is required'})}
            rows="2" className="block  w-full bg-gray-100  rounded-md p-4 focus:outline-none " placeholder="Skills"></textarea>
            {errors.OtherDetails?.skills &&  <p className='text-sm text-red-400'>{errors.OtherDetails.skills.message}</p> }
            </div >
          
         

            <div>
            <input {...register('OtherDetails.certification')}
             className='w-full h-13  bg-gray-100  rounded-md p-4  focus:outline-none my-2'
             placeholder="certification"
            />
            {errors.OtherDetails?.certification &&  <p className='text-sm text-red-400'>{errors.OtherDetails.certification.message}</p> }
            </div>



            <div>
            
            <textarea 
            {...register('OtherDetails.objective', {
                required: '*summary is required'
            })}
            rows="4" className="block  w-full bg-gray-100  rounded-md p-4 focus:outline-none " placeholder="Objective"></textarea>
            {errors.OtherDetails?.objective &&  <p className='text-sm text-red-400'>{errors.OtherDetails.objective.message}</p> }
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

export default OtherDetails