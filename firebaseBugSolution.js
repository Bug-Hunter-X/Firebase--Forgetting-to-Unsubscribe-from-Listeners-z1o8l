import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; //Import your firebase configuration

function MyComponent() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // ... rest of your component
}