import React from 'react'

const RepositroryCard = ({repo,repoloading,error}) => {
    if(repoloading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    if (!repo) {
  return <div>Select a language to find a repository</div>;
}

return (
  <div>
    <h2>{repo.name}</h2>
    <p>{repo.description}</p>
    <p>{repo.owner.login}</p>
    <p>{repo.owner.avatar_url}</p>
    <img src={repo.owner.avatar_url} alt={`${repo.owner.login}'s avatar`} width="100" />
    <p>{repo.html_url}</p>
    <p>⭐ Stars: {repo.stargazers_count}</p>
    <p>🍴 Forks: {repo.forks_count}</p>
    <p>🐞 Open Issues: {repo.open_issues_count}</p>
  </div>
);
}


export default RepositroryCard