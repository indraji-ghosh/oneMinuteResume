import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Stepper({stepConfig=[]}) {

  const navigate = useNavigate()

    const [currentStep, setCurrentStep] = useState(1)
    const ActiveComponent = stepConfig[currentStep-1]?.Component
    const stepRef = useRef([])
    const [margin, setMargin] = useState({
      marginLeft: 0,
      marginRight:0,
    })

useEffect(()=>{
setMargin({
  marginLeft: stepRef.current[0].offsetWidth/2,
  marginRight:stepRef.current[stepConfig.length-1].offsetWidth/2,
})
},[stepRef])

    const calculateProgressWidth = () =>{
      return ((currentStep-1)/(stepConfig.length-1))*100
    }


    const handleNext = () =>{
      setCurrentStep((prev)=>{
          if(prev === stepConfig.length){
              setIsComplete(true)
              return prev
          }
          else{
              return prev+1
          }
      })
      if (currentStep === stepConfig.length) {
          navigate('/download'); 
        } else {
        }
  }
  
    
    const handlePrev = () =>{
        if (currentStep>1) {
            return setCurrentStep((prev)=> prev-1)
        }
    }


const reset = () =>{
  localStorage.clear()
  window.location.reload();
}





  return (
    <div className='stepper'>
        <div className="steps w-[40%] m-auto  mt-15">
      {stepConfig.map((step,index)=>(
        <div key={step.name} className={`step`}
        ref={(el)=>stepRef.current[index]=el}
        >
          
              <div
      className={`step-number h-13 w-13 text-white flex justify-center items-center 
        ${currentStep > index + 1 || currentStep === index + 1 ? 'bg-[#00a6fb]' : 'bg-black'} 
        rounded-full`}
    >
  {currentStep > index + 1 ? <span>★</span> : index + 1}
</div>





          <div className="step-name">{step.name}</div> 
            
        </div>
      ))}
      <div className="progress-bar" 
      style={{
        width: `calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
        marginLeft: margin.marginLeft,
        marginRight: margin.marginRight
      }}
      >
        <div className="progress" style={{width:`${calculateProgressWidth()}%`}}> 

        </div>
      </div>
      </div>
      <div className='w-full mt-10 flex justify-center'>
      <ActiveComponent/>
      </div>


        <div className='flex justify-center'>
        <div className=' w-1/2 mt-15 flex gap-1 justify-between'>
       <div><button  className="bg-red-400 text-sm text-white rounded-lg   p-2 cursor-pointer " onClick={reset}>
            Reset
          </button>
          </div> 
          <div>
            <button onClick={handlePrev} disabled={currentStep===1} className={` bg-gray-200 text-sm text-black rounded-lg  p-2  ${currentStep === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}> {' << Previous'}</button>
            <button  onClick={handleNext}  className='bg-black text-sm text-white rounded-lg   p-2 cursor-pointer'> {currentStep==stepConfig.length?'Export & Download':' Next >>'}</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Stepper