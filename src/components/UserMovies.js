import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";

const UserMovies = (props) => {
    const movieList = 1;

    return (
        <div>
            <Navbar />
            <Table movieList={movieList}/>
        </div>
    );
};

export default UserMovies;
