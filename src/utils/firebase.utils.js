import {initializeApp} from 'firebase/app';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBZaq25tO1R3lmAoueUxsy-CDN2Dc0Xohw",
    authDomain: "crown-clothing-db-9f03c.firebaseapp.com",
    projectId: "crown-clothing-db-9f03c",
    storageBucket: "crown-clothing-db-9f03c.appspot.com",
    messagingSenderId: "745402989954",
    appId: "1:745402989954:web:e9c82b2f79cbb0a6b3e39b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const googleprovider=new GoogleAuthProvider();
  googleprovider.setCustomParameters({
    prompt:'select_account'
  });
  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,googleprovider);
  export const signinWInWithGoogleRedirect=()=>signInWithRedirect(auth,googleprovider);
  export const db=getFirestore();
  export const creatUserDocumentfromauth=async (userAuth)=>{
    const userDocRef=doc(db,'user',userAuth.uid);
    console.log(userDocRef);
    const userSnapshot=await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())
    // if user data not exists
    if(!userSnapshot.exists()){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt
        })
      }catch(err){
        console.log('error created while making entry in db ',err.message)
      }
    }
    //if user data exists
    return userDocRef;
    //return userdocref
  }