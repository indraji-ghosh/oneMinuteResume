import React,{createContext, useEffect, useState} from 'react'

export const Formcontext = createContext()

const localStorageKey = 'resumeFormData'

export function FormcontextProvider({children}) {
const [formData, setFormData] = useState(()=>{
    const storedData = localStorage.getItem(localStorageKey)
    return storedData? JSON.parse(storedData) :
    {
    personalDetails:{},
    education: {},
    experience: {},
    others: {}
  }})

  const updateFormData = (fields, value) =>{
    setFormData((prev)=>({...prev, [fields]:value}))
  }

  useEffect(()=>{
localStorage.setItem(localStorageKey, JSON.stringify(formData))
  },[formData])
  
  return (
   <Formcontext.Provider value={{formData, updateFormData}}>
    {children}
   </Formcontext.Provider>
  )
}

export default Formcontext