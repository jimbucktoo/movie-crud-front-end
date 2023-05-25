import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { graphql } from "react-apollo";
import { getUsersQuery, addUserMutation } from "../queries/queries";

const Profile = (props) => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            handleCreateUser(user);
        }
    }, [isAuthenticated, user]);

    const handleCreateUser = (user) => {
        console.log("Current User: ", user);

        const existingUser = props.getUsersQuery.users.find(
            (existingUser) => existingUser.email === user.email
        );

        if (existingUser) {
            console.log("Existing User: ", existingUser);
            return;
        } else {
            props.addUserMutation({
                variables: {
                    authId: user.sub,
                    username: user.nickname,
                    email: user.email,
                    picture: user.picture,
                },
                refetchQueries: [{ query: getUsersQuery }],
            }).then(() => {}).catch((error) => {
                console.error("Error Adding User: ", error);
            });
        }
    };

    if (isLoading) {
        return (
            <div>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (isAuthenticated) {
        return (
            <a
            className="nav-link nav-links profile dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <img id="userPicture" src={user.picture} alt={user.name} />
            {user.name}
        </a>
        );
    }

    return null;
};

export default graphql(getUsersQuery, { name: "getUsersQuery" })(graphql(addUserMutation, { name: "addUserMutation" })(Profile));
