import { useContext } from "react";
import {AuthContex} from "../contex/AuthProvider";


const useAuth=()=>{

    const auth = useContext(AuthContex)
    return auth
}

export default useAuth;