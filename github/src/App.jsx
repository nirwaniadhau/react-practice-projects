import './App.css'
import { useState,useEffect } from 'react'
import LanguageSelector from './Components/LanguageSelector'
import RepositroryCard from './Components/RepositroryCard'
import ShowUser from './Components/ShowUser';
import PutUsername from './Components/PutUsername';

function App() {
  const [language, setLanguage]=useState("");
  const [repo,setRepo]=useState(null);
  const [repoloading,setRepoloading]=useState(false);
    const [userloading,setUserloading]=useState(false);

  const [error,setError]=useState(null);
  const [user,setUser]=useState(null);
  const [username,setUsername]=useState("");

 useEffect(() => {

  if (!language) return;

  async function fetchrepo() {

    setRepoloading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`
      );

      console.log(response);

      const data = await response.json();
      console.log(data);
      const repos = data.items;

      const randomRepo =
        repos[Math.floor(Math.random() * repos.length)];

      setRepo(randomRepo);

    } catch (error) {
      setError("Error fetching repositories");
    } finally {
      setRepoloading(false);
    }
  }

    fetchrepo();
}, [language]);


useEffect(() => {

  if (!username) return;

  async function fetchUser() {

    setUserloading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      const data = await response.json();

      setUser(data);

    } catch (error) {
      setError("Error fetching user data");
    } finally {
      setUserloading(false);
    }
  }

  fetchUser();

}, [username]);
  return (

    
    <>
    <div>
      <h1>This is github Finder</h1>
  
      <LanguageSelector setLanguage={setLanguage} />
      <RepositroryCard repo={repo} loading ={repoloading} error={error}/>
      <PutUsername setUsername={setUsername} />
      <ShowUser user={user} error={error} loading={userloading} /> 

    </div>
    
    </>
    
    
  )
}

export default App
