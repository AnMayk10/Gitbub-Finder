import { useState } from "react"
import Search from "../components/Search"
import { UserProps } from "../types/user"
import User from '../components/User'
import Error from '../components/Error'


function Home (){
   const [user,setUser] = useState<UserProps|null>(null)
   const [error,setError]= useState(false)

   const loaderUser= async (username:string)=>{
     const res = await fetch(`https://api.github.com/users/${username}`);
     setError(false)

     if(res.status===404){
        setError(true);
        return
     }


     const data = await res.json()     

     const {avatar_url,login,location,followers,following} = data;

     const dataUser : UserProps={
      avatar_url,
      login,
      location,
      followers,
      following
     }

     setUser(dataUser)
   }

 return(
   <div>
    <Search loaderUser={loaderUser}/>
    {user&& <User
     avatar_url={user.avatar_url}
     login={user.login} 
     location={user.location}
     followers={user.followers}
     following={user.following}
     />
     }
     {error&& <Error/>}
   </div>
 )
}

export default Home