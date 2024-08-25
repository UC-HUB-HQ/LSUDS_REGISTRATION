import { useState } from "react"
import Validation from "./validation";
const ApplicationInfoForm = ({nextStep}) => {

    const [userInfo, setUserInfo] = useState({
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            department: ''
        });
    const [errors, setErrors] = useState({})

    
    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.dataset.name]: event.target.value})
    }

    const handleValidation = () =>{
        setErrors(Validation(userInfo))
        const allInputFields = Object.values(userInfo).every((value) => value.trim() !== '');

        if(allInputFields){
            console.log(allInputFields)
            nextStep()
        }
    }

    return (
        <>
            <div className="inputsContainer">
                <div className="inputBox">
                    {errors?.firstName && <span className="text-xs text-customred">{errors?.firstName}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">First Name</legend>
                        <i className="bi bi-person icon"></i>
                        <input className={`inputField`} id="first_name" type="text" data-name="firstName" value={userInfo.firstName} onChange={handleChange} placeholder="Enter your first name" name="entry.1945534493" required />
                    </fieldset>
                </div>
                <div className="inputBox">
                    {errors?.lastName && <span className="text-xs text-customred">{errors?.lastName}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Last Name</legend>
                        <i className="bi bi-person icon"></i>
                        <input className="inputField" id="last_name" type="text" data-name="lastName" value={userInfo.lastName} onChange={handleChange} placeholder="Enter your last name" name="entry.1419225498" required />
                    </fieldset>
                </div>
            </div>
            <div className="inputsContainer">
                <div className="inputBox">
                    {errors?.email && <span className="text-xs text-customred">{errors?.email}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Email</legend>
                        <i className="bi bi-envelope icon"></i>
                        <input className="inputField" id="email" type="email" data-name="email" value={userInfo.email} onChange={handleChange} placeholder="Enter yout email address" name="entry.895389556" required />
                    </fieldset>
                </div>
                <div className="inputBox">
                    {errors?.mobile && <span className="text-xs text-customred">{errors?.mobile}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Mobile</legend>
                        <i className="bi bi-telephone icon"></i>
                        <input className="inputField" type="tel" id="mobile_number" data-name="mobile" value={userInfo.mobile} onChange={handleChange}  placeholder="Enter your mobile number" name="entry.2013455807" required pattern="^(\+)?[0-9]+$"/>
                    </fieldset>
                </div>
            </div>
            <div className="inputsContainer">
                <div className="inputBox">
                    <fieldset className="fieldset">
                        <legend className="legend">Level</legend>
                        <select defaultValue={100} name="entry.283386231" id="level">
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                        </select>
                    </fieldset>
                </div>
                <div className="inputBox">
                    {errors?.department && <span className="text-xs text-customred">{errors?.department}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Department</legend>
                        <i className="bi bi-diagram-3 icon"></i>
                        <input className="inputField" id="department" type="text" data-name="department" value={userInfo.department} onChange={handleChange} placeholder="Enter department" name="entry.1801548548" required/>
                    </fieldset>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button className="text-white border-none bg-customred btn" type="button" onClick={handleValidation}>Next</button>
            </div>
        </>
    )
}


export default ApplicationInfoForm