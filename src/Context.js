import { useContext,createContext,useState ,useEffect} from "react";
import {onAuthStateChanged,signOut} from 'firebase/auth';
import {auth,db} from './firebase';
import { doc, setDoc, collection, onSnapshot, deleteDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

const Contexts=createContext();

function useValue(){
    const value=useContext(Contexts);
    return value;
}


function Context({children}){
    const [authUser, setAuthUser] = useState(null);
    const [news,setNews]=useState({});
    const [email,setEmail]=useState(null);
    const [fav,setFav]=useState([]);



// =====================Fetch Api=================================================
useEffect(() => {
  const fetchNews = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-11-05&sortBy=publishedAt&apiKey=7530bc687d274b7d97d167ed3eda101c');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      
      const jsonData = await response.json();
      setNews(jsonData);

      console.log('Data fetched:',jsonData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchNews();
}, [authUser]);



// ============================================Pushing data to firebase==========================

async function addFav(news) {
 
   try {
  
    
  if(email){
    const favDoc = doc(collection(db, email))
    await setDoc(favDoc, {
     news,
      createdOn: new Date(),

    });
    alert("Successfully Added to Favorites");
  }else{
    alert("Log in to add Favorites")
    // navigate('/Auth');
  }

    
    
   } catch (error) {
     console.error("Error in buyNow:", error);
   }
 };



// ==========================================================================
  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, update the authUser state
        setAuthUser(user);
      } else {
        // User is signed out, set authUser to null
        setAuthUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

//   ==========================SignOut====================
const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout was Successful");
      })
      .catch((err) => {
        console.error("Signout error:", err);
      });
  };

  // ===================================fetch-data-from-firebase=========================

  useEffect(()=>{
    onSnapshot(collection(db, `${email}`), (snapShot) => {
      const data = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setFav(data);
    });
  },[email]);

    // ====================================================Getting the userId and email when the user signs in
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setEmail(user.email);
        } else {
          setEmail(null);
        }
      });
    }, []);


  // ======================================================================Remove Favorites
  async function removeFav(id){
    try{
      const docRef = doc(db, email, id);
      await deleteDoc(docRef);
    }catch(err){
      console.error(err);
    }
  }


    return(
        <Contexts.Provider 
                        value={{
                            authUser,
                            userSignOut,
                            news,
                            fav,
                            addFav,
                            email,
                            removeFav
                        }}
        >

            {children}

        </Contexts.Provider>
    )
}
export {useValue};
export default Context;