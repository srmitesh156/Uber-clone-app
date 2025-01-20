import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

/////Create a Highr Order Component that will protect the routes that are only accessible to logged in users.

const UserProtectWrapper = ({
    children
}) => {

    const {user} = useContext(UserDataContext)
    const navigate = useNavigate()
  return (
    <div>UserProtectWrapper</div>
  )
}

export default UserProtectWrapper