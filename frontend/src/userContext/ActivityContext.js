import React, { useState, createContext } from 'react'
import AuthenticationAPI from './AuthenticationContext'
const ActivityListAPI = createContext()
export function ActivityContext({ children }) {
    const [activityList, setActivityList] = useState([])
    const [count, setCount] = useState(10)
    const { userDbId } = React.useContext(AuthenticationAPI)
    const getActivities = () => {
        if (userDbId != "") {
            fetch('http://172.17.13.131:3333/getactivities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userDbId: userDbId,
                })
            })
                .then(res => res.json()).then(
                    data => {
                        if (!data.error) {
                            tempList = data.slice(0).reverse().map(element => {
                                return element
                            })

                            setActivityList(tempList)
                        }

                    }
                )
        }

    }

    React.useEffect(() => {
        getActivities()
    }, [userDbId])

    return (
        <ActivityListAPI.Provider
            value={{
                activityList,
                setActivityList,
                count,
                setCount
            }}>
            {children}
        </ActivityListAPI.Provider>
    )
}

export default ActivityListAPI
