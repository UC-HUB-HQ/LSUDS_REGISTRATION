const ApplicationInfoForm = ({nextStep}) => {

    return (
        <>
            <div className="inputsContainer">
                <div className="inputBox">
                    <label htmlFor="first_name" className="inputLabel">First Name</label>
                    <input className="inputField" id="first_name" type="text" placeholder="First Name" name="entry.1945534493" required />
                </div>
                <div className="inputBox">
                    <label htmlFor="last_name" className="inputLabel">Last Name</label>
                    <input className="inputField" id="last_name" type="text" placeholder="Last Name" name="entry.1419225498" required />
                </div>
            </div>
            <div className="inputsContainer">
                <div className="inputBox">
                    <label htmlFor="email" className="inputLabel">Email</label>
                    <input className="inputField" id="email" type="email" placeholder="Email Address" name="entry.895389556" required />
                </div>
                <div className="inputBox">
                    <label htmlFor="mobile_number" className="inputLabel">Mobile</label>
                    <input className="inputField" type="tel" id="mobile_number"  placeholder="Mobile Number" name="entry.2013455807" required pattern="^(\+)?[0-9]+$" oninvalid="this.setCustomValidity('Enter a valid phone number')" oninput="this.setCustomValidity('')"/>
                </div>
            </div>
            <div className="inputsContainer">
                <div className="inputBox">
                    <label htmlFor="level" className="inputLabel">Your Level</label>
                    <select className="inputField" name="entry.283386231" id="level">
                        <option disabled>Select Level</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                    </select>
                </div>
                <div className="inputBox">
                    <label htmlFor="department" className="inputLabel">Department</label>
                    <input className="inputField" id="department" type="text" placeholder="Department" name="entry.1801548548" required/>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button className=" bg-softRed text-white px-6 py-2 rounded-md" type="button" onClick={nextStep}>Next</button>
            </div>
        </>
    )
}


export default ApplicationInfoForm