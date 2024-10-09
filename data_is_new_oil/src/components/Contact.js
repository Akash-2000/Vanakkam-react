import { useContext } from "react"
import { userContext } from "./context/userContext"

const Contact = () => {
    const [username] = useContext(userContext)
    return(
        <div>
            <p>Contact us page</p>
            {username}
        </div>
    )
}

export default Contact