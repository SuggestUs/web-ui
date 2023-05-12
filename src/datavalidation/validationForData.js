export const validationForUserSignIn = (obj)=>{
    Object.keys(obj).forEach((x)=>{
        if(obj[x] === ''){
            alert(`Please Feel ${obj[x]} to sign in `)
            return  false
        }
    })
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(obj.Email)){
        alert("Email is invalid ")
        return false
    }

    return true
}

export const validationForDoctorProffessionalDetails = (obj)=>{

}

export const anything = {}