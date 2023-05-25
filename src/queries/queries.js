import { gql } from "apollo-boost";

//User Queries & Mutations

const getUsersQuery = gql`
    {
        users {
            id
            authId
            username
            email
            picture
        }
    }
`;

const getUserQuery = gql`
    query GetUser($id: ID!) {
        user(id: $id) {
            id
            authId
            username
            email
            picture
        }
    }
`;

const getUserAuthQuery = gql`
    query GetUserAuth($authId: String!) {
        userAuth(authId: $authId) {
            id
            authId
            username
            email
            picture
        }
    }
`;

const addUserMutation = gql`
    mutation (
        $authId: String!
        $username: String!
        $email: String!
        $picture: String!
    ) {
        addUser(
            authId: $authId
            username: $username
            email: $email
            picture: $picture
        ) {
            id
            authId
            username
            email
            picture
        }
    }
`;

const updateUserMutation = gql`
    mutation (
        $id: ID!
        $authId: String!
        $username: String!
        $email: String!
        $picture: String!
    ) {
        updateUser(
            id: $id
            authId: $authId
            username: $username
            email: $email
            picture: $picture
        ) {
            id
            authId
            username
            email
            picture
        }
    }
`;

const deleteUserMutation = gql`
    mutation ($id: ID!) {
        deleteUser(id: $id) {
            id
            authId
            username
            email
            picture
        }
    }
`;

const deleteAllUsersMutation = gql`
    mutation {
        deleteAllUsers {
            id
            authId
            username
            email
            picture
        }
    }
`;

//Movie Queries & Mutations

const getMoviesQuery = gql`
    {
        movies {
            id
            title
            directors
            year
            rating
            poster_url
        }
    }
`;

const getMovieQuery = gql`
    query GetMovie($id: ID!) {
        movie(id: $id) {
            id
            title
            directors
            year
            rating
            poster_url
        }
    }
`;

const addMovieMutation = gql`
    mutation (
        $title: String!
        $directors: String!
        $year: Int!
        $rating: Int!
        $poster_url: String!
        $user_id: Int!
    ) {
        addMovie(
            title: $title
            directors: $directors
            year: $year
            rating: $rating
            poster_url: $poster_url
            user_id: $user_id
        ) {
            id
            title
            directors
            year
            rating
            poster_url
            user_id
        }
    }
`;

const updateMovieMutation = gql`
    mutation (
        $id: ID!
        $title: String!
        $directors: String!
        $year: Int!
        $rating: Int!
        $poster_url: String!
    ) {
        updateMovie(
            id: $id
            title: $title
            directors: $directors
            year: $year
            rating: $rating
            poster_url: $poster_url
        ) {
            id
            title
            directors
            year
            rating
            poster_url
        }
    }
`;

const deleteMovieMutation = gql`
    mutation ($id: ID!) {
        deleteMovie(id: $id) {
            id
            title
            directors
            year
            rating
            poster_url
        }
    }
`;

const deleteAllMoviesMutation = gql`
    mutation {
        deleteAll {
            id
            title
            directors
            year
            rating
            poster_url
        }
    }
`;

export {
    getUsersQuery,
    getUserQuery,
    getUserAuthQuery,
    addUserMutation,
    updateUserMutation,
    deleteUserMutation,
    deleteAllUsersMutation,
    getMoviesQuery,
    getMovieQuery,
    addMovieMutation,
    updateMovieMutation,
    deleteMovieMutation,
    deleteAllMoviesMutation,
};
