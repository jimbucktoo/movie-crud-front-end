import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, useMutation } from '@apollo/client';
import { getUsersQuery, addUserMutation } from '../queries/queries';

const Profile = (props) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { data: usersData } = useQuery(getUsersQuery);
    const [ addUser ] = useMutation(addUserMutation);

    useEffect(() => {
        if (isAuthenticated) {
            handleCreateUser(user);
        }
    }, [isAuthenticated, user]);

    const handleCreateUser = (user) => {
        if (usersData) {
            const existingUser = usersData.users.find(
                (existingUser) => existingUser.email === user.email
            );

            if (existingUser) {
                return;
            } else {
                addUser({
                    variables: {
                        authId: user.sub,
                        username: user.nickname,
                        email: user.email,
                        picture: user.picture
                    },
                    refetchQueries: [{ query: getUsersQuery }]
                }).then(() => {}).catch((error) => {
                    console.error("Error Adding User: ", error);
                });
            }
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
            <div className="nav-link nav-links Profile dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img id="userPicture" src={user.picture} alt={user.name} />
                {user.name}
            </div>
        );
    }

    return null;
};

export default Profile;
