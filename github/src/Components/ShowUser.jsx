import React from 'react'

const ShowUser = ({user,error,userloading}) => {
  if(userloading) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>
  if(!user) return <div>No user data available</div>

  return (
    <div>
        <h2>{user.login}</h2>
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
        <p>Name: {user.name}</p>
        <p>Bio: {user.bio}</p>
        <p>Location: {user.location}</p>
        <p>Public Repos: {user.public_repos}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
    </div>
  )
}

export default ShowUser