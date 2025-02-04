import { createContext } from "react";

const UserContext = createContext({
    userName:"default User", 
    designation:"Default"
})

export default UserContext