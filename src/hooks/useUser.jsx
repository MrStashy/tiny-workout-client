import { useContext } from "react"
import { CurrentUserContext } from '../context/currentUser'

function useUser() {
    return useContext(CurrentUserContext)
}

export default useUser