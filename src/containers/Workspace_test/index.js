// TODO 该模块举例，后面删除
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Workspace({ abc = 123 }) {
  useEffect(() => {
    console.log(abc)
  }, [])

  return (
    <div>
      Workspace&nbsp;&nbsp;
      <Link to='/workspace/transfusion'>to patientlist</Link>
    </div>
  )
}
