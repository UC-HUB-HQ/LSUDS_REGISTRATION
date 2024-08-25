export default function Validation(values){

    const errors = {}

    const email_patterns = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if (values.firstName === ""){
        errors.firstName = 'First Name is Required!';
    }

    if (values.lastName === ""){
        errors.lastName = 'Last Name is Required!'
    }

    if (values.email === ""){
        errors.email = 'Email is Required!'
    }
    else if (!email_patterns.test(values.email)){
        errors.email = 'Email is not valid';
    }

    if (values.department === ""){
        errors.department = 'Department is Required!'
    }

    if (values.mobile === ""){
        errors.mobile = 'Mobile is Required!'
    }

    return errors

}