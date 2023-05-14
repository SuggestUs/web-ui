
import { app as app_user, firestore as firestore_user } from './FirebaseForUser'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { objForUserSignInData , SignInDataForDoctor} from '../factory/factory-for-form';
import { doc, setDoc , collection} from "firebase/firestore";


export const signInForUserInDataBase = () => {

    const auth = getAuth(app_user);
    createUserWithEmailAndPassword(auth, objForUserSignInData.Email, objForUserSignInData.Password)
        .then((userCredential) => {
            const userData = userCredential.user
            console.log("ID ", userCredential.user.uid)
            storeDataForUser(userCredential.user.uid, 'user-data'
                , {
                    'first-name ': objForUserSignInData.First_Name,
                    'last-name': objForUserSignInData.Last_Name,
                    'email': objForUserSignInData.Email,
                })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorMessage', errorMessage)
        })
}




export const storeDataForUser = (docId, collection_name, object) => {
          
    // Get a reference to a Firestore collection
    const usersRef = collection(firestore_user, collection_name);

    // Create a reference to the document with the custom ID
    const userDoc = doc(usersRef, docId);

    // Set the data for the document
    setDoc(userDoc, object)
        .then((res) => {
            console.log("Document written with ID: ", res);
        })
        .catch((error) => {
            console.error("Error adding document: ", error.message);
        });

}


