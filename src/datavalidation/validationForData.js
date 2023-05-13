import {
    ObjForPersonalDetails,
    objForProfessionalDetails,
    SignInDataForDoctor,
    objForUserSignInData
} from '../factory/factory-for-form'

export const validationForUserSignIn = (obj) => {
    const result = {
        res: false,
        message: ''
    };
    const validation = checkValues(objForUserSignInData)
    if (validation.length > 0) {
        result.res = true,
            result.message = validation
        return result
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(obj.Email)) {
        result.res = true,
            result.message = 'Email is not in format'

        return result
    }

    if(!(objForUserSignInData.Confirm_Password === objForUserSignInData.Password)){
        result.res = true,
        result.message = 'Yout Passwords are not matching'

        return result
    }    

    return result

}

export const validationForDoctorProffessionalDetails = () => {
    const result = {
        res: false,
        message: ''
    };
    let validate = checkValues(objForProfessionalDetails)

    result.res = (result.message === validate)
    result.message = validate
    return result

}




export const validationForDoctorPesonlDetails = () => {
    const result = {
        res: false,
        message: ''
    };
    let validate = checkValues(ObjForPersonalDetails)

    result.res = (result.message === validate);
    result.message = validate

    return result
}


export const validatonForDoctorSignIn = () => {
    const result = {
        res: false,
        message: ''
    };
    let validateion = checkValues(SignInDataForDoctor);
    // Need to work on it 
    // if(validateion.length > 0){
    //     result.res = true,
    //     result.message = validateion

    //     return result
    // }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(SignInDataForDoctor)
    if (!emailRegex.test(SignInDataForDoctor.Email)) {
        result.message = "Emial is Invalid"
        result.res = true

    }
    if (!(SignInDataForDoctor.Password == SignInDataForDoctor.Confirm_Password)) {
        result.message = `Your enterd password are not matching`
        result.res = true
    }

    return result;


}

export const checkValues = (obj) => {
    let result = '';
    for (const key in obj) {
        if (!obj[key]) {
            result = `${key} is empty`
            return result;
        }
    }
    return result;
}