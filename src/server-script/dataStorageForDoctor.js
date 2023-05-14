import { app2 as app_Doctor, firestore_Doctor } from './FirebaseForUser'
import { SignInDataForDoctor } from '../factory/factory-for-form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection } from "firebase/firestore";
import { ObjForPersonalDetails, objForProfessionalDetails } from '../factory/factory-for-form';


// For doctor 

export const signInForDoctorInDataBase = () => {

    const auth = getAuth(app_Doctor);

    createUserWithEmailAndPassword(auth, SignInDataForDoctor.Email, SignInDataForDoctor.Password)
        .then((userCredential) => {
            console.log("Doctor ID :", userCredential.user.uid)
            storeDataForDoctor(userCredential.user.uid, 'docotr-data', {
                ...objForProfessionalDetails,
                ...ObjForPersonalDetails
            })
            return true
        })
        .catch((error) => {
            console.log("Error :", error.message)
            return false
        })
}

export const storeDataForDoctor = (docId, collection_name, obj) => {

    // Get ref to forebase collection 

    const userRef = collection(firestore_Doctor, collection_name);

    // create ref to doc with custom ID 

    const userDoc = doc(userRef, docId)

    // set the data for the document 

    setDoc(userDoc, obj)
        .then((res) => {
            console.log("Document written with ID: ", res);
        })
        .catch((error) => {
            console.log("Error adding document: ", error.message);
        });


}
