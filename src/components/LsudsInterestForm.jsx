import { useState } from "react"
import WordCount from "./WordCount"

const LsudsInterestForm = ({prevStep, btnDisabled}) => {


    const [interestForm, setInterestForm] = useState({
        question1: "",
        question2: "",
        question3: ""
    })

    const [questionWordCount, setQuestionWordCount] = useState({
        question1: 0,
        question2: 0,
        question3: 0
    })

    const handleChange = (event) => {
        const interestFormQuestionResponse = event.target.value;
        const interestFormQuestionResponseCount = interestFormQuestionResponse.split(" ").filter(word => word !== "").length;
        // 
        if(interestFormQuestionResponseCount <= 300){
            setQuestionWordCount({ ...questionWordCount, [event.target.dataset.name]: interestFormQuestionResponseCount  });
            setInterestForm({ ...interestForm, [event.target.dataset.name]: event.target.value });
        }
    };


    return (
        <>
            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question1">Why do you want to join the LASU Debate Society?</label>
                <fieldset className="fieldset textareaFieldSet">
                    <legend className="legend textareaLegend">Why do you want to join the LASU Debate Society?</legend>
                    <textarea name="entry.459583861" id="question1" required value={interestForm.question1} data-name="question1" onChange={handleChange}></textarea>
                    <WordCount wordCount={questionWordCount.question1} />
                </fieldset>
            </div>

            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question2">What distinguishes you as an applicant worthy of progressing to the next stage?</label>
                <fieldset className="fieldset textareaFieldSet">
                    <legend className="legend textareaLegend">What distinguishes you as an applicant worthy of progressing to the next stage?</legend>
                    <textarea name="entry.1789378395" id="question2" required value={interestForm.question2} data-name="question2" onChange={handleChange}></textarea>
                    <WordCount wordCount={questionWordCount.question2} />
                </fieldset>
            </div>

            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question3">In what ways do you plan to contribute to the LASU Debate Society if you become a member?</label>
                <fieldset className="fieldset textareaFieldSet">
                    <legend className="legend textareaLegend">In what ways do you plan to contribute to the LASU Debate Society if you become a member?</legend>
                    <textarea value={interestForm.question3} onChange={handleChange} data-name="question3" name="entry.2050489767" id="question3" required></textarea>
                    <WordCount wordCount={questionWordCount.question3} />
                </fieldset>
            </div>

            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question4">Are you willing to commit two hours every Friday to developing your skills in public speaking?</label>
                <fieldset className="fieldset">
                    <legend className="legend textareaLegend">Are you willing to commit two hours every Friday to developing your skills in public speaking?</legend>
                    <select defaultValue={'Yes'} name="entry.845859975" id="question4">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </fieldset>
            </div>
            
            <div className="flex items-center justify-between mt-8">
                <button className="border-2 btn text-customred border-customred " type="button" onClick={prevStep}>Prev</button>
                <input className="text-white border-none btn bg-blue"  type="submit" value={btnDisabled ? "Processing..." : "Submit"} disabled={btnDisabled} />
            </div>
        </>
    )
}


export default LsudsInterestForm