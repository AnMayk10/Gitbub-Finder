import {MdLocationPin} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {UserProps} from '../types/user'
import styles from './styles/User.module.css'

function User  ({avatar_url,
    login,
    location,
    followers,
    following}:UserProps){
      return(
        <div className={styles.user}>
            <img src={avatar_url}/>
            <h2>{login}</h2>
            <p>
               <MdLocationPin/>
               <span>{location}</span> 
            </p>
            <div>
                <p>Seguidores</p>
                 <p>
                   {followers}
                 </p>
                <div>
                    <p>Seguindo</p>
                    <p>
                        {following}
                    </p>
                </div>
                <Link to="/" >Ver melhores Projetos</Link>
            </div>
        </div>
      )
}

export default User;