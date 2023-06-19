import { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useQuery, useMutation } from "@apollo/client"
import { getUsersQuery, authenticateUserMutation, addUserMutation } from "../queries/queries"
import jwt_decode from "jwt-decode"

const Auth = ({ updateToken }) => {
    const { user, isAuthenticated } = useAuth0()
    const { data: usersData } = useQuery(getUsersQuery)
    const [authenticateUser] = useMutation(authenticateUserMutation)
    const [addUser] = useMutation(addUserMutation)

    useEffect(() => {
        let interval = null

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
                    }).then((response) => {
                        const token = response.data.authenticateUser.token
                        const jwt = localStorage.getItem("jwtToken")

                        if (!jwt) {
                            localStorage.setItem("jwtToken", token)
                        }

                        if (updateToken) {
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
                    }).then((response) => {
                        const jwtToken = response.data.addUser.token
                        localStorage.setItem("jwtToken", jwtToken)
                        if (updateToken) {
                            updateToken()
                        }
                    }).catch((error) => {
                        console.error("Error Adding User: ", error)
                    })
                }
            }
        }

        const checkTimeLeft = () => {
            const jwtToken = localStorage.getItem("jwtToken")
            const decodedToken = jwt_decode(jwtToken)
            const currentTime = Date.now() / 1000
            const timeLeft = decodedToken.exp - currentTime

            if (timeLeft < 60) {
                authenticateUser({
                    variables: {
                        authId: user.sub,
                        username: user.nickname,
                        email: user.email,
                        picture: user.picture
                    },
                    refetchQueries: [{ query: getUsersQuery }]
                }).then((response) => {
                    const token = response.data.authenticateUser.token
                    localStorage.setItem("jwtToken", token)
                    if (updateToken) {
                        updateToken()
                    }
                }).catch((error) => {
                    console.error("Error Renewing Token: ", error)
                })
            }
        }

        if (isAuthenticated) {
            handleUserAuth(user)
            interval = setInterval(checkTimeLeft, 1000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [user, usersData, isAuthenticated, authenticateUser, addUser, updateToken])

    return null
}

export default Auth
