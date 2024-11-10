import { useState, useEffect } from "react";
import Validation from "./validation";

const ApplicationInfoForm = ({ nextStep }) => {

    const [userInfo, setUserInfo] = useState({
        surname: '',
        otherNames: '',
        email: '',
        mobile: '',
        department: ''
    });

    const [errors, setErrors] = useState(null);

    const [validationPassed, setValidationPassed] = useState(false);

    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.dataset.name]: event.target.value });
    };

    const handleValidation = () => {
        setErrors( errors => {
            const newError = Validation(userInfo)
            if (Object.values(newError).length === 0) {
                setValidationPassed(true); 
            }
            return newError
        });
    };

    useEffect(() => {
        if (validationPassed) {
            nextStep();
            setValidationPassed(false); 
        }
    }, [validationPassed]); 

    return (
        <>
            <div className="inputsContainer">
                
                <div className="inputBox">
                    {errors?.surname && <span className="text-xs text-customred">{errors?.surname}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Surname</legend>
                        <i className="bi bi-person icon"></i>
                        <input className={`inputField`} id="surname" type="text" value={userInfo.surname} data-name="surname" onChange={handleChange} placeholder="Enter your surname" name="entry.244786694" required />
                    </fieldset>
                </div>
                <div className="inputBox">
                    {errors?.otherNames && <span className="text-xs text-customred">{errors?.otherNames}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Other Names</legend>
                        <i className="bi bi-person icon"></i>
                        <input className="inputField" id="other_names" type="text" data-name="otherNames" value={userInfo.otherNames} onChange={handleChange} placeholder="Enter your other names" name="entry.11177549" required />
                    </fieldset>
                </div>
            </div>
            <div className="inputsContainer">
                <div className="inputBox">
                    {errors?.email && <span className="text-xs text-customred">{errors?.email}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Email</legend>
                        <i className="bi bi-envelope icon"></i>
                        <input className="inputField" id="email" type="email" data-name="email" value={userInfo.email} onChange={handleChange} placeholder="Enter your email address" name="entry.2137853488" required />
                    </fieldset>
                </div>
                <div className="inputBox">
                    {errors?.mobile && <span className="text-xs text-customred">{errors?.mobile}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Mobile Number</legend>
                        <i className="bi bi-telephone icon"></i>
                        <input className="inputField" type="tel" id="mobile_number" data-name="mobile" value={userInfo.mobile} onChange={handleChange} placeholder="Enter your mobile number" name="entry.2078166964" required pattern="^(\+)?[0-9]+$" />
                    </fieldset>
                </div>
            </div>
            <div className="inputsContainer">
                <div className="inputBox">
                    <fieldset className="fieldset">
                        <legend className="legend">Level</legend>
                        <select defaultValue={100} name="entry.2017945221" id="level">
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
                        <input className="inputField" id="department" type="text" data-name="department" value={userInfo.department} onChange={handleChange} placeholder="Enter department" name="entry.621575232" required />
                    </fieldset>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button className="text-white border-none bg-customred btn" type="button" onClick={handleValidation}>Next</button>
            </div>
        </>
    );
};

export default ApplicationInfoForm;
