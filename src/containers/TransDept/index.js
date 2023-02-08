import { Link } from 'react-router-dom'
import { Button, DatePicker } from 'antd'
import styles from './style.scss'

export default function PatientList(props) {
  return (
    <div>
      <h3 className={styles.title}>PatientList</h3>
      <Link to='/workspace/clinical'>to workspace</Link>
      <Button type='primary'>按钮</Button>
    </div>
  )
}
