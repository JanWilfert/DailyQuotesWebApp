import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { getFirestore, doc, setDoc } from 'firebase/firestore';


const db = getFirestore();

const register = async (email, password, username) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;

    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, {
      username: username,
      email: email,
      favorites: [],
      lastQuotes: [
        { 
          id: "08Sc72y24TvkjOHVggch",
          date: new Date(new Date().setDate(new Date().getDate()-0))
        },
        {
          id: "04b5DpH3jS0NVS7NFUsE",
          date: new Date(new Date().setDate(new Date().getDate()-1))
        },
        { 
          id: "3TUosYR8KQHMFgS2Lz06",
          date: new Date(new Date().setDate(new Date().getDate()-2))
        },
        { 
          id: "3iJrf3FxhJaajUuwvZ7z",
          date: new Date(new Date().setDate(new Date().getDate()-3))
        }
      ]
    });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};

export { register, login, logout };
