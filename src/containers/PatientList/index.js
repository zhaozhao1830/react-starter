import { Link } from 'react-router-dom'
import styles from './style.scss'

export default function PatientList() {
  return (
    <div>
      <h3 className={styles.title}>PatientList</h3>
      <Link to='/workspace'>to workspace</Link>
    </div>
  )
}
