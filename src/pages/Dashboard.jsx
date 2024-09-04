import { useContext } from "react"
import { CurrentUserContext } from '../context/currentUser'

export default function Dashboard() {
    const { currentUser } = useContext(CurrentUserContext)

    return (
        <p>{currentUser.username}</p>
    )
}