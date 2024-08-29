const LsudsInterestForm = ({prevStep, btnDisabled}) => {
    return (
        <>
            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question1">Why do you want to join LSUDS</label>
                <fieldset className="fieldset">
                    <legend className="legend textareaLegend">Why should you join the lsuds</legend>
                    <textarea name="entry.1420042524" id="question1" required></textarea>
                </fieldset>
            </div>

            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question2">Why should you be selected to the next stage?</label>
                <fieldset className="fieldset">
                    <legend className="legend textareaLegend">Why should you be selected to the next stage?</legend>
                    <textarea name="entry.916034787" id="question2" required></textarea>
                </fieldset>
            </div>

            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question3">What do you hope to gain when you join?</label>
                <fieldset className="fieldset">
                    <legend className="legend textareaLegend">What do you hope to gain when you join?</legend>
                    <textarea name="entry.54895519" id="question3"></textarea>
                </fieldset>
            </div>

            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question4">Can you dedicate 2 hours every Friday to learning the art of public speaking?</label>
                <fieldset className="fieldset ">
                    <legend className="legend textareaLegend">Can you dedicate 2 hours every Friday to learning the art of public speaking?</legend>
                    <select defaultValue={'Yes'} name="entry.1423883032" id="question4">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </fieldset>
            </div>

            <div className="inputBox">
                <label className="textareaLabel" htmlFor="question5">If you make it to the next stage, how do you want to be interviewed: Physical or Virtual?</label>
                <fieldset className="fieldset">
                    <legend className="legend textareaLegend"> If you make it to the next stage, how do you want to be interviewed: Physical or Virtual?</legend>
                    <select defaultValue={'Physical'} name="entry.2061764711" id="question5">
                        <option value="Physical">Physical</option>
                        <option value="Virtual">Virtual</option>
                    </select>
                </fieldset>
            </div>

            <div className=" text-grayishBlue">
                <p><b className="text-darkBlue">Note:</b> Online interviews are only advised in extreme scenrios where the interviewee is sure they cannot make it to the physical venue.</p>
            </div>
            
            <div className="flex items-center justify-between mt-8">
                <button className="border-2 btn text-customred border-customred " type="button" onClick={prevStep}>Prev</button>
                <input className="text-white border-none btn bg-blue"  type="submit" value={btnDisabled ? "Processing..." : "Submit"} disabled={btnDisabled} />
            </div>
        </>
    )
}


export default LsudsInterestForm