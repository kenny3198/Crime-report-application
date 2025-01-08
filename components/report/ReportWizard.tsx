"use client"
import React, { useState } from 'react'
import ReportForm from './ReportForm'


const ReportWizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [reportData, setReportData] = useState<any>(null)
    const handleStepComplete = async(data: any) => {
       setCurrentStep({...reportData, ...data});
       if (currentStep === 3) { 
        return;
       } 
        setCurrentStep((prev) => prev + 1)
       
    }
  return (
    <div className='rounded-2xl bg-zinc-900 p-8'>
        {currentStep === 1 && <ReportForm  onComplete={handleStepComplete} />}
        </div>
  )
}

export default ReportWizard