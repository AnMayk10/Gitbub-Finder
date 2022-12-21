import {Outlet} from 'react-router-dom'

import styles from './components/styles/App.module.css'
function App() {


  return (
    <div className={styles.app}>
     <h2></h2>
     <Outlet/>
    </div>
  )
}

export default App
