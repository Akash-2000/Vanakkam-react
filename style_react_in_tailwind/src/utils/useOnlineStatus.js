import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    //get online status
    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {

        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })

    }, [])

    return onlineStatus
}


export default useOnlineStatus