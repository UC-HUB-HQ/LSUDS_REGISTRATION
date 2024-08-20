const LsudsInterestForm = ({prevStep}) => {
    return (
        <>
            <div className="inputBox">
                <label className="inputLabel" htmlFor="question1">1. Why should you join the lsuds</label>
                <textarea name="entry.1420042524" id="question1" required></textarea>
            </div>

            <div className="inputBox">
                <label className="inputLabel" htmlFor="question2">2. Why should you be selected to the next stage?</label>
                <textarea name="entry.916034787" id="question2" required></textarea>
            </div>

            <div className="inputBox">
                <label className="inputLabel" htmlFor="question3">3. What do you hope to gain when you join?</label>
                <textarea name="entry.54895519" id="question3"></textarea>
            </div>

            <div className="inputBox">
                <label className="inputLabel" htmlFor="question4">4. Can you dedicate 2 hours every Friday to learning the art of public speaking? </label>
                <textarea name="entry.1423883032" id="question4"></textarea>
            </div>

            <div className="inputBox">
                <label className="inputLabel" htmlFor="question5">5. If you make it to the next stage, how do you want to be interviewed: Physical or Virtual?</label>
                <select className="inputField" name="entry.2061764711" id="question5">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <div className=" text-grayishBlue">
                <p><b className="text-darkBlue">Note:</b> Online interviews are only advised in extreme scenrios where the interviewee is sure they cannot make it to the physical venue.</p>
            </div>
            
            <div className="flex justify-between items-center mt-8">
                <button className=" bg-softRed text-white px-6 py-2 rounded-md" type="button" onClick={prevStep}>Prev</button>
                <input className=" bg-softBlue text-white px-6 py-2 rounded-md"  type="submit" value="Submit" />
            </div>
        </>
    )
}


export default LsudsInterestForm