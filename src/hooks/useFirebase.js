import { useEffect, useState } from "react"
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth"
import initializeAuthentication from "../firebase/firebase.init"

initializeAuthentication()

const useFirebase = () => {
  // ------- states ---------//
  const [user, setUser] = useState({})
  const [error, setError] = useState({})

  //   ----- auth & providers ---------//
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const facebookProvider = new FacebookAuthProvider()

  // -------  google sign in ------- //
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  // ------ Github Sign In ----------//
  const signInUsingGithub = () => {
    return signInWithPopup(auth, githubProvider)
  }

  // -------- FaceBook SignIn ------//
  const signInusingFacebook = () => {
    return signInWithPopup(auth, facebookProvider)
  }

  //   ----------- signOut------//
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed Out")
        setUser("")
        setError("")
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  //-------checking the user------- //
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("inside State Change", user)
        setUser(user)
      }
    })
  }, [])

  return {
    signInUsingGithub,
    signInUsingGoogle,
    signInusingFacebook,
    logOut,
    user,
    setUser,
    error,
    setError
  }
}

export default useFirebase
