const LsudsInterestForm = ({prevStep, btnDisabled}) => {
    return (
        <>
            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question1">Why do you want to join the LASU Debate Society?</label>
                <fieldset className="fieldset">
                    <legend className="legend textareaLegend">Why do you want to join the LASU Debate Society?</legend>
                    <textarea name="entry.1420042524" id="question1" required></textarea>
                </fieldset>
            </div>

            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question2">What distinguishes you as an applicant worthy of progressing to the next stage?</label>
                <fieldset className="fieldset">
                    <legend className="legend textareaLegend">What distinguishes you as an applicant worthy of progressing to the next stage?</legend>
                    <textarea name="entry.916034787" id="question2" required></textarea>
                </fieldset>
            </div>

            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question3">In what ways do you plan to contribute to the LASU Debate Society if you become a member?</label>
                <fieldset className="fieldset">
                    <legend className="legend textareaLegend">In what ways do you plan to contribute to the LASU Debate Society if you become a member?</legend>
                    <textarea name="entry.54895519" id="question3" required></textarea>
                </fieldset>
            </div>

            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question4">Are you willing to commit two hours every Friday to developing your skills in public speaking?</label>
                <fieldset className="fieldset ">
                    <legend className="legend textareaLegend">Are you willing to commit two hours every Friday to developing your skills in public speaking?</legend>
                    <select defaultValue={'Yes'} name="entry.1423883032" id="question4">
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