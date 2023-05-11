import initFirebase from '@/utils/firebase';
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithPopup,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

initFirebase();
const useFirebase = (second) => {
   const [user, setUser] = useState({});
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(true);
   const auth = getAuth();
   const provider = new GoogleAuthProvider();

   const googleSignIn = async () => {
      const { user } = await signInWithPopup(auth, provider);
      console.log('🚀 ~ file: useFirebase.js:21 ~ googleSignIn ~ user:', user);
      setUser(user);
   };

   const createAccount = async (email, password) => {
      try {
         setLoading(true);
         const user = await createUserWithEmailAndPassword(auth, email, password);
         console.log('🚀 ~ file: useFirebase.js:15 ~ createAccount ~ user:', user);
      } catch (error) {
         setError(error.message);
      } finally {
         setLoading(false);
      }
   };

   const leaveAccount = async () => {
      try {
         setLoading(true);
         await auth.signOut();
         setUser({});
      } catch (error) {
         setError(error.message);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      const subscribed = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         } else {
            setUser({});
         }
         setLoading(false);
      });
      return () => subscribed;
   }, [auth]);

   return {
      user,
      error,
      loading,
      googleSignIn,
      createAccount,
      leaveAccount,
   };
};
export default useFirebase;
