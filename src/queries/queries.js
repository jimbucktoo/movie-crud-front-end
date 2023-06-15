import { gql } from "@apollo/client"

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
`

const getUserByIdQuery = gql`
    query GetUserById($id: ID!) {
        userById(id: $id) {
            id
            authId
            username
            email
            picture
        }
    }
`

const getUserByAuthIdQuery = gql`
    query GetUserByAuthId($authId: String!) {
        userByAuthId(authId: $authId) {
            id
            authId
            username
            email
            picture
        }
    }
`

const authenticateUserMutation = gql`
    mutation (
        $authId: String!
        $username: String!
        $email: String!
        $picture: String!
    ) {
        authenticateUser(
            authId: $authId
            username: $username
            email: $email
            picture: $picture
        ) {
            token
        }
    }
`

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
            token
        }
    }
`

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
`

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
`

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
`

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
`

const getMoviesByUserIdQuery = gql`
    query GetMoviesByUserId($id: ID!) {
        moviesByUserId(id: $id) {
            id
            title
            directors
            year
            rating
            poster_url
        }
    }
`

const getMovieByIdQuery = gql`
    query GetMovieById($id: ID!) {
        movieById(id: $id) {
            id
            title
            directors
            year
            rating
            poster_url
        }
    }
`

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
`

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
`

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
`

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
`

export {
    getUsersQuery,
    getUserByIdQuery,
    getUserByAuthIdQuery,
    authenticateUserMutation,
    addUserMutation,
    updateUserMutation,
    deleteUserMutation,
    deleteAllUsersMutation,
    getMoviesQuery,
    getMoviesByUserIdQuery,
    getMovieByIdQuery,
    addMovieMutation,
    updateMovieMutation,
    deleteMovieMutation,
    deleteAllMoviesMutation,
}
