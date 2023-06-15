import { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useQuery, useMutation } from "@apollo/client"
import { getUsersQuery, authenticateUserMutation, addUserMutation } from "../queries/queries"

const Auth = ({ updateToken }) => {
    const { user, isAuthenticated } = useAuth0()
    const { data: usersData } = useQuery(getUsersQuery)
    const [ authenticateUser ] = useMutation(authenticateUserMutation)
    const [ addUser ] = useMutation(addUserMutation)

    useEffect(() => {
        if (isAuthenticated) {
            handleUserAuth(user)
        }
    }, [isAuthenticated, user])

    const handleUserAuth = (user) => {
        if (usersData) {
            const existingUser = usersData.users.find(
                (existingUser) => existingUser.email === user.email
            )

            if (existingUser) {
                authenticateUser({
                    variables: {
                        authId: user.sub,
                        username: user.nickname,
                        email: user.email,
                        picture: user.picture
                    },
                    refetchQueries: [{ query: getUsersQuery }]
                }).then(response => {
                    const token = response.data.authenticateUser.token
                    localStorage.setItem("jwtToken", token)
                    if(updateToken){
                        updateToken()
                    }
                }).catch((error) => {
                    console.error("Error Authenticating User: ", error)
                })
            } else {
                addUser({
                    variables: {
                        authId: user.sub,
                        username: user.nickname,
                        email: user.email,
                        picture: user.picture
                    },
                    refetchQueries: [{ query: getUsersQuery }]
                }).then(response => {
                    const token = response.data.addUser.token
                    localStorage.setItem("jwtToken", token)
                    if(updateToken){
                        updateToken()
                    }
                }).catch((error) => {
                    console.error("Error Adding User: ", error)
                })
            }
        }
    }

    return null
}

export default Auth
