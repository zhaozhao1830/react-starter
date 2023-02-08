import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>header</header>
      <div>
        <Outlet>123</Outlet>
      </div>
    </>
  )
}
