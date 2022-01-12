import './App.css';
import Index from './pages/index/Index';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  let navigate = useNavigate();
  let admin = true;

  // Obtém os dados da sessionStorage
  const [token, setToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);

  const getData = () => {
    setToken(sessionStorage.getItem('token'));
    setIsAdmin(sessionStorage.getItem('isAdmin'));
  }

  const DeleteToken = () => {
    localStorage.removeItem('token');
    setToken("");
    navigate("/", {replace: true})
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="container">
      <nav
        style={{
          paddingBottom: "1rem",
          marginLeft: "1rem"
        }}
      >
        <h1 style={{
          color: 'white'
        }}>E.Commerce</h1>

        <Link style={{
          textDecoration: "none",
          color: 'white',
          cursor: 'pointer'
        }} to="/">Produtos</Link> |{" "}

        {
          token ? 
          <>
            <p style={{
              textDecoration: "none",
              color: 'white',
              cursor: 'pointer'
            }} onClick={() => DeleteToken()}>Logout</p> |{" "}
          </>
          : 
          <>
            <Link style={{
              textDecoration: "none",
              color: 'white',
              cursor: 'pointer'
            }} to="/login">Login</Link> |{" "}
    
            <Link style={{
              textDecoration: "none",
              color: 'white',
              cursor: 'pointer'
            }} to="/cadastro">Cadastre-se</Link>
          </>
        }

        {
          admin ? 
          <>
            <Link style={{
              textDecoration: "none",
              color: 'white',
              cursor: 'pointer'
            }} to="/admin">Painel de Adm</Link>
          </> : ""
        }

      </nav>
      <Outlet />
    </div>
  );
}

export default App;
