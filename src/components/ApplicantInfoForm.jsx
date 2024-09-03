import { useState, useRef } from "react";
import Validation from "./validation";

const ApplicationInfoForm = ({ nextStep }) => {

    const [userInfo, setUserInfo] = useState({
        surname: '',
        otherNames: '',
        email: '',
        mobile: '',
        department: ''
    });

    const errors = useRef(null);

    const [isErrorPresent, setIsErrorPresent] = useState(false);

    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.dataset.name]: event.target.value });
    };

    const handleValidation = () => {
        errors.current = Validation(userInfo);
        const allInputFields = Object.values(errors.current).every(error => error === '');

        if (allInputFields) {
            nextStep();
        } else {
            setIsErrorPresent(!isErrorPresent);
        }
    };

    return (
        <>
            <div className="inputsContainer">
                
                <div className="inputBox">
                    {errors.current?.surname && <span className="text-xs text-customred">{errors.current?.surname}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Surname</legend>
                        <i className="bi bi-person icon"></i>
                        <input className={`inputField`} id="surname" type="text" value={userInfo.surname} data-name="surname" onChange={handleChange} placeholder="Enter your surname" name="entry.1945534493" required />
                    </fieldset>
                </div>
                <div className="inputBox">
                    {errors.current?.otherNames && <span className="text-xs text-customred">{errors.current?.otherNames}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Other Names</legend>
                        <i className="bi bi-person icon"></i>
                        <input className="inputField" id="other_names" type="text" data-name="otherNames" value={userInfo.otherNames} onChange={handleChange} placeholder="Enter your other names" name="entry.1419225498" required />
                    </fieldset>
                </div>
            </div>
            <div className="inputsContainer">
                <div className="inputBox">
                    {errors.current?.email && <span className="text-xs text-customred">{errors.current?.email}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Email</legend>
                        <i className="bi bi-envelope icon"></i>
                        <input className="inputField" id="email" type="email" data-name="email" value={userInfo.email} onChange={handleChange} placeholder="Enter your email address" name="entry.895389556" required />
                    </fieldset>
                </div>
                <div className="inputBox">
                    {errors.current?.mobile && <span className="text-xs text-customred">{errors.current?.mobile}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Mobile Number</legend>
                        <i className="bi bi-telephone icon"></i>
                        <input className="inputField" type="tel" id="mobile_number" data-name="mobile" value={userInfo.mobile} onChange={handleChange} placeholder="Enter your mobile number" name="entry.2013455807" required pattern="^(\+)?[0-9]+$" />
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
                    {errors.current?.department && <span className="text-xs text-customred">{errors.current?.department}</span>}
                    <fieldset className="fieldset">
                        <legend className="legend">Department</legend>
                        <i className="bi bi-diagram-3 icon"></i>
                        <input className="inputField" id="department" type="text" data-name="department" value={userInfo.department} onChange={handleChange} placeholder="Enter department" name="entry.1801548548" required />
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
