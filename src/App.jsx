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


  const submitForm = () => {
    const prevSubmission = localStorage.getItem("LSUDS")
    if (prevSubmission){
      alert("Looks like you’ve already made your case! You’ve submitted your application, and we’re reviewing it with the scrutiny of a debate champion. Stay tuned for the results — no need to debate this one twice!")
    }
    else{
      setSubmitted(!submitted)
      localStorage.setItem("LSUDS", true)
    }
  }

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

 
  return (
    <div className="min-h-screen py-[4em] font-body">
      <Header />
      <main className="main_content customShadow">
        <section>
          <FormProgress stepOne={isStepOne} confirmation={confirmation} />
        </section>
        <section className="formContainer"> 
          <iframe className="hidden" id="form_confirmation" name="form_confirmation" onLoad={iframeOnLoad}></iframe>
          <form target="form_confirmation" method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSeOL_6bczRQtLdhcgdpbT2VVzStH8H9aoSGuAffvX3F7YCD0A/formResponse" onSubmit={submitForm}>
            <section className={ confirmation ? 'hidden' : isStepOne ? 'block' : 'hidden'}>
              <ApplicantInfoForm nextStep={changeFormStep} />
            </section>
            <section className={ confirmation ? 'hidden' : isStepOne ? 'hidden' : 'block'}>
              <LsudsInterestForm prevStep={changeFormStep} btnDisabled = {submitted} />
            </section>
          </form>
          <section className={ confirmation ? 'block' : 'hidden' }>
            <Confirmation />
          </section>
        </section>
      </main>
      <footer className=" text-center mt-10">
        <p className="font-bold">Powered by <a className=" text-softBlue underline" href="https://www.theuchub.com/">UCHUB</a></p>
      </footer>
    </div>
  )
}

export default App
