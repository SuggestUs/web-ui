import {app2 as app_Doctor} from './FirebaseForUser'
import { SignInDataForDoctor  } from '../factory/factory-for-form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc , collection} from "firebase/firestore";


// For doctor 

export const signInForDoctorInDataBase = ()=>{

    const auth = getAuth(app_Doctor);

    createUserWithEmailAndPassword(auth , SignInDataForDoctor.Email , SignInDataForDoctor.Password)
    .then((userCredential)=>{
        console.log("Doctor ID :" , userCredential.user.uid)
        return true
    })
    .catch((error)=>{
       console.log("Error :" , error.message)
       return false
    })
}

export const anything = {

}
