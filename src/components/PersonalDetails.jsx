import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Formcontext from '../context/Formcontext';

function PersonalDetails() {
  const { formData, updateFormData } = useContext(Formcontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      personalDetails: {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        linkedIn: ''
      }
    }
  });

  // Save handler
  const save = (data) => {
    updateFormData('personalDetails', data.personalDetails);
  };

  // Reset form if formData has saved values
  useEffect(() => {
    console.log(formData)
    if (formData?.personalDetails) {
      reset({
        personalDetails: {
          ...formData.personalDetails
        }
      });
    }
  }, [formData, reset]);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(save)}>
        <div className="flex flex-col w-full items-center">
          <div className="w-1/3">

            {/* Full Name */}
            <div>
              <input
                {...register('personalDetails.fullName', {
                  required: '*Full name is required'
                })}
                className="w-full h-13 bg-gray-100 border-radius rounded-md p-4 focus:outline-none my-2"
                placeholder="Full name"
              />
              {errors.personalDetails?.fullName && (
                <p className="text-sm text-red-400">
                  {errors.personalDetails.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register('personalDetails.email', {
                  required: '*Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full h-13 bg-gray-100 border-radius rounded-md p-4 focus:outline-none my-2"
                placeholder="Email"
              />
              {errors.personalDetails?.email && (
                <p className="text-sm text-red-400">
                  {errors.personalDetails.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                {...register('personalDetails.phone', {
                  required: '*Phone number is required',
                  minLength: {
                    value: 10,
                    message: 'Phone number must be at least 10 digits'
                  }
                })}
                className="w-full h-13 bg-gray-100 border-radius rounded-md p-4 focus:outline-none my-2"
                placeholder="Phone"
              />
              {errors.personalDetails?.phone && (
                <p className="text-sm text-red-400">
                  {errors.personalDetails.phone.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <input
                {...register('personalDetails.address', {
                  required: '*Address is required'
                })}
                className="w-full h-13 bg-gray-100 border-radius rounded-md p-4 focus:outline-none my-2"
                placeholder="Address"
              />
              {errors.personalDetails?.address && (
                <p className="text-sm text-red-400">
                  {errors.personalDetails.address.message}
                </p>
              )}
            </div>

            {/* LinkedIn */}
            <div>
              <input
                {...register('personalDetails.linkedIn')}
                className="w-full h-13 bg-gray-100 border-radius rounded-md p-4 focus:outline-none my-2"
                placeholder="LinkedIn"
              />
              {errors.personalDetails?.linkedIn && (
                <p className="text-sm text-red-400">
                  {errors.personalDetails.linkedIn.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <input
              type="submit"
              value="Save"
              className="my-5 px-4 py-2 text-white rounded-lg bg-[#00a6fb]"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
