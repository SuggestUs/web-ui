export const validationForUserSignIn = (obj)=>{
    Object.keys(obj).forEach((x)=>{
        if(obj[x] === ''){
            alert(`Please Feel ${obj[x]} to sign in `)
            return  false
        }
    })
    const emailRegx =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(emailRegx.test(obj.Email)){
        alert("Email is invalid ")
        return false
    }

    return true
}

export const anything = {}