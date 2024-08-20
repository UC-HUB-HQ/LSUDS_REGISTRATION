import { useState } from "react"
import { LsudsInterestForm, ApplicantInfoForm, FormProgress } from "./components"
function App() {

  const [isStepOne, setIsStepOne] = useState(true)

  const nextFormStep = () => {
    setIsStepOne(!isStepOne)
  }

  const [submitted, setSubmitted] = useState(false);

  const iframeOnLoad = () => {
      if(submitted){
        alert("Thanks")
    }
  }

  return (
    <div className="min-h-screen py-[4em] mobile:py-[3em]">
      <section className="flex justify-center items-center mb-[4em]">
        <h1 className="text-3xl font-bold text-grayishBlue">LSUDS REGISTRATION</h1>
      </section>
      <section>
        <FormProgress stepOne={isStepOne} />
      </section>
      <main className="py-[4em] mobile:py-[3em] "> 
        <iframe className="hidden" id="form_confirmation" name="form_confirmation" onLoad={iframeOnLoad}></iframe>
        <form className="form" target="form_confirmation" method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSeoWeLs9we0TNrOZEZYzxaBAjYbZHm2jMfoWjsvB7qfWZTj5g/formResponse" onSubmit={ () => setSubmitted(true)}>
          <section className={ isStepOne ? 'block' : 'hidden'}>
            <ApplicantInfoForm nextStep={nextFormStep} />
          </section>
          <section className={ isStepOne ? 'hidden' : 'block'}>
            <LsudsInterestForm prevStep={nextFormStep} />
          </section>
        </form>
      </main>
    </div>
  )
}

export default App
