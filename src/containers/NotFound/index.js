import lossImg from './page404.svg'
import * as styles from './style.scss'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <div className={styles.lossPage}>
      <div>
        <img src={lossImg} />
        <div>页面没找到，您可以试试<Link to='/'>回首页</Link></div>
      </div>
    </div>
  )
}
