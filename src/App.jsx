import { useState, useEffect } from "react"
import { LsudsInterestForm, ApplicantInfoForm, FormProgress, Header, Confirmation } from "./components"
function App() {

  // Displays either step one or two depending on the boolean value, by default it is true meaning only step 1 is visible
  const [isStepOne, setIsStepOne] = useState(true)

  // If true, only the confirmation component is visible to users, be default is is set to false
  const [confirmation, setConfirmation] = useState(false)
  
  // Negates the current value of isStepOne to display a different form step
  const changeFormStep = () => {
    setIsStepOne(!isStepOne)
  }

  // Keeps track of form submmission
  const [submitted, setSubmitted] = useState(false);

  // Displays the confirmation component to user after submitting the form
  const iframeOnLoad = () => {
      if(submitted == true){
        setConfirmation(!confirmation)
        setSubmitted(false)
    }
  }
  
  // Ensures we are at the top of the page whenevert we move to a new component
  useEffect( () => {
    window.scrollTo(0,0);
  }, [isStepOne, confirmation])



  const resetApp = () => {
    setIsStepOne(true)
    setConfirmation(!confirmation)
  }

 
  return (
    <div className="min-h-screen py-[4em] font-body">
      <Header />
      <main className="main_content customShadow">
        <section>
          <FormProgress stepOne={isStepOne} confirmation={confirmation} />
        </section>
        <section className="formContainer"> 
          <iframe className="hidden" id="form_confirmation" name="form_confirmation" onLoad={iframeOnLoad}></iframe>
          <form target="form_confirmation" method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSeoWeLs9we0TNrOZEZYzxaBAjYbZHm2jMfoWjsvB7qfWZTj5g/formResponse" onSubmit={ () => setSubmitted(!submitted)}>
            <section className={ confirmation ? 'hidden' : isStepOne ? 'block' : 'hidden'}>
              <ApplicantInfoForm nextStep={changeFormStep} />
            </section>
            <section className={ confirmation ? 'hidden' : isStepOne ? 'hidden' : 'block'}>
              <LsudsInterestForm prevStep={changeFormStep} btnDisabled = {submitted} />
            </section>
          </form>
          <section className={ confirmation ? 'block' : 'hidden' }>
            <Confirmation reset={resetApp} />
          </section>
        </section>
      </main>
    </div>
  )
}

export default App
