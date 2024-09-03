export default function Validation(values){

    const errors = {}

    const email_patterns = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if (values.surname === ""){
        errors.surname = 'Surname is Required!';
    }

    if (values.otherNames === ""){
        errors.otherNames = 'Other Names is Required!'
    }

    if (values.email === ""){
        errors.email = 'Email is Required!'
    }
    else if (!email_patterns.test(values.email)){
        errors.email = 'Invalid Email entered';
    }

    if (values.department === ""){
        errors.department = 'Department is Required!'
    }

    if (values.mobile === ""){
        errors.mobile = 'Mobile No is Required!'
    }

    return errors

}