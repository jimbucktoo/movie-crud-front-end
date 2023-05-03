import { gql } from "apollo-boost";

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
    {
        movie(id: 1) {
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
    ) {
        addMovie(
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

const deleteAllMutation = gql`
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
    getMoviesQuery,
    getMovieQuery,
    addMovieMutation,
    updateMovieMutation,
    deleteMovieMutation,
    deleteAllMutation,
};
