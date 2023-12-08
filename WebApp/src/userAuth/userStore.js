import { ref, onUnmounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const currentUser = ref(null);

const auth = getAuth();
const unsubscribe = onAuthStateChanged(auth, (user) => {
  currentUser.value = user;
});

onUnmounted(() => unsubscribe());

export function useUser() {
  return { currentUser };
}
