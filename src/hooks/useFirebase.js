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
  const [isLoading, setIsLoading] = useState(true)

  //   ----- auth & providers ---------//
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const facebookProvider = new FacebookAuthProvider()

  // -------  google sign in ------- //
  const signInUsingGoogle = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider).finally(() => {
      setIsLoading(false)
    })
  }

  // ------ Github Sign In ----------//
  const signInUsingGithub = () => {
    setIsLoading(true)
    return signInWithPopup(auth, githubProvider).finally(() =>
      setIsLoading(false)
    )
  }

  // -------- FaceBook SignIn ------//
  const signInusingFacebook = () => {
    setIsLoading(true)
    return signInWithPopup(auth, facebookProvider).finally(() => {
      setIsLoading(false)
    })
  }

  //   ----------- signOut------//
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        console.log("signed Out")
        setUser("")
        setError("")
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  //-------checking the user------- //
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("inside State Change", user)
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
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
    setError,
    isLoading
  }
}

export default useFirebase
