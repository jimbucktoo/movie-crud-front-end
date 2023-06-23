import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()

    if (isLoading) {
        return (
            <div>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    if (isAuthenticated) {
        return (
            <div className="nav-link nav-links Profile dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img id="userPicture" src={user.picture} alt={user.name} />
                {user.name}
            </div>
        )
    }

    return null
}

export default Profile
