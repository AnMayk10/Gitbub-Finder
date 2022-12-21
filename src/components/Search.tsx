import { useState,KeyboardEvent } from 'react'
import {BsSearch} from 'react-icons/bs'
import styles from './styles/Search.module.css'

type UserProps ={
    loaderUser: (username:string)=> Promise<void>
}


function Search ({loaderUser}:UserProps) {
    
    const [userName,setUserName]= useState("");

    const handleKeyDown =(e:KeyboardEvent)=>{
        if(e.key==="Enter"){
            loaderUser(userName)
        }
    }
    
    
    return(
        <div className={styles.search}>
            <h2>Gitbub Finder</h2>
            <p>Conheça os melhores repositorios</p>
            <div className={styles.search_container}>
                <input 
                type="text"
                placeholder='Digite o nome do usuario'
                onChange={(e)=> setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                <button onClick={()=>loaderUser(userName)}>
                    <BsSearch/>
                </button>
            </div>
        </div>
    )
}

export default Search