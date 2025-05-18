import React from 'react'
import Stepper from '../components/Stepper'
import PersonalDetails from '../components/PersonalDetails'
import EducationDetails from '../components/EducationDetails'
import ExperienceDetails from '../components/ExperienceDetails'
import OtherDetails from '../components/OtherDetails'

const steps = [
    {
        name:"Personal Detais",
        Component: PersonalDetails
    },
    {
        name:"Education",
        Component: EducationDetails
    },
    {
        name:"Experience",
        Component: ExperienceDetails
    },
    {
        name:"Other",
        Component: OtherDetails
    },
    
]

function ResumeBuilder() {
  return (
    <div>
        <h1 className='mt-10 text-center text-2xl font-bold'>1Minute Resume</h1>
        <p className='text-center  text-gray-400'>1 Minute. 1 Resume. Endless Possibilities.</p>
    <div>
    <Stepper stepConfig={steps}/>
    </div>
    </div>
  )
}

export default ResumeBuilder