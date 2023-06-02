import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from '@apollo/client';
import { getMoviesByUserIdQuery, getUserByAuthIdQuery } from '../queries/queries';

const UserMovies = (props) => {
    const { user, isAuthenticated } = useAuth0();
    const [userMovies, setUserMovies] = useState(null);
    const { data: userData } = useQuery(getUserByAuthIdQuery, {
        variables: {
            authId: isAuthenticated ? user.sub : null
        }
    });
    const { data: userMoviesData, refetch: userMoviesRefetch } = useQuery(getMoviesByUserIdQuery, {
        variables: {
            id: userData ? userData.userByAuthId.id : null
        }
    });

    useEffect(() => {
        if (userMoviesData) {
            setUserMovies(userMoviesData.moviesByUserId);
        }
    }, [userMoviesData]);

    if (userMoviesData != null) {
        const movieList = "/movies/userMovies";
        return (
            <div>
                <Navbar />
                <Table movieList={movieList} movies={userMovies} refetchMovies={userMoviesRefetch}/>
            </div>
        );
    }

    return (
        <div className="App loader">
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
};

export default UserMovies;
