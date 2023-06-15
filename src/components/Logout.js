import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Logout = () => {
    const { logout } = useAuth0()

    const handleLogout = (event) => {
        localStorage.removeItem("jwtToken")
        logout({ logoutParams: { returnTo: window.location.origin } })
    }

    return (
        <button className="dropdown-item profile-links" id="logout" onClick={handleLogout}>
            Log Out
        </button>
    )
}

export default Logout
