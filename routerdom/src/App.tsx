import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <nav style={
        {
          borderBottom: '1px solid',
          paddingBottom: '1rem',
          display: 'flex',
          gap: '20px'
        }
      }>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet/>
    </>
  )
}

export default App
