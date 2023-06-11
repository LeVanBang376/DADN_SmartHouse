import React from 'react'
import Tabs from '../../navigation/tab'
import Login from './Login'
import AuthenticationAPI from '../userContext/AuthenticationContext'
export default function Index() {
    const { login, setLogin } = React.useContext(AuthenticationAPI)
    return (

        login == false ? (
            <Login />
        ) : (
            <Tabs />
        )
    )
}
