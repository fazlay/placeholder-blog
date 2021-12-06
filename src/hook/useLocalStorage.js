import React, { useState } from 'react'



const useLocalStorage = () => {
    const [newUser, setNewUser] = useState({
        email:'',
        password:''
    })
   

    const locSignIn=(userInfo
        )=>{

        window.localStorage.setItem("person", JSON.stringify(userInfo));
  
    }
    const locSignOut=()=>{

        window.localStorage.clear();

    }

    const getUserInfo=()=>{
         const person = JSON.parse(window.localStorage.getItem('person'));
       
        setNewUser(person)
    }
    return {locSignIn,locSignOut,newUser,getUserInfo}
}

export default useLocalStorage
