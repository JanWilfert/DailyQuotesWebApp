import { ref, onUnmounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const currentUser = ref(null);
const userProfile = ref(null); 

const auth = getAuth();
const db = getFirestore();

const unsubscribe = onAuthStateChanged(auth, async (user) => {
  currentUser.value = user;
  if (user) {
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      userProfile.value = userDoc.data();
    } else {
      userProfile.value = null;
    }
  } else {
    userProfile.value = null;
  }
});

onUnmounted(() => unsubscribe());

export function useUser() {
  return { currentUser, userProfile };
}
